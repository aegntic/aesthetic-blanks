"""
Soft Industrial Clay — render validation.

Headless Blender (bpy) Cycles render that validates the visual profile from
materials/soft-clay/visual/pbr.json end-to-end: Principled BSDF + the authored
detail maps (roughness, displacement, fingerprint) + subsurface soft sheen +
the cyan->navy gradient. Renders two variants to PNG.

Run (agent pipeline):
    blender --background --python render_soft_clay.py -- <soft_clay_root>

Validates: matte soft clay reads (no wax, no hard specular hotspot) under the
cool lighting of the theme. Output inspected separately to confirm.
"""
import sys
import os
import math
import bpy


def parse_args():
    argv = sys.argv
    argv = argv[argv.index("--") + 1:] if "--" in argv else []
    root = argv[0] if argv else os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    rest = argv[1:]
    return root, rest


def set_in(node, name, val):
    if name in node.inputs:
        node.inputs[name].default_value = val


def setup_gpu():
    # GPU is opt-in. On Blackwell GPUs (RTX 50-series) Blender 4.3's bundled
    # CUDA toolchain can fail kernel compilation; CPU is the reliable default.
    # Set SOFT_CLAY_GPU=1 to attempt OPTIX/CUDA.
    scene = bpy.context.scene
    if os.environ.get("SOFT_CLAY_GPU") != "1":
        scene.cycles.device = "CPU"
        print("RENDER_GPU", "CPU (set SOFT_CLAY_GPU=1 to try GPU)")
        return
    try:
        prefs = bpy.context.preferences.addons["cycles"].preferences
        chosen = None
        for dev_type in ("OPTIX", "CUDA"):
            try:
                prefs.compute_device_type = dev_type
                prefs.refresh_devices()
                usable = [d for d in prefs.devices if d.type != "CPU"]
                if usable:
                    for d in prefs.devices:
                        d.use = True
                    chosen = dev_type
                    break
            except Exception:
                continue
        scene.cycles.device = "GPU" if chosen else "CPU"
        print("RENDER_GPU", chosen or "CPU-fallback")
    except Exception as e:
        scene.cycles.device = "CPU"
        print("RENDER_GPU", "CPU-fallback", str(e)[:80])


def clear_scene():
    for coll in (bpy.data.objects, bpy.data.meshes, bpy.data.materials,
                 bpy.data.lights, bpy.data.cameras, bpy.data.worlds):
        for item in list(coll):
            coll.remove(item)


def add_area(name, loc, energy, color, size):
    light_data = bpy.data.lights.new(name, type="AREA")
    light_data.energy = energy
    light_data.color = color
    light_data.size = size
    obj = bpy.data.objects.new(name, light_data)
    obj.location = loc
    bpy.context.collection.objects.link(obj)
    return obj


def make_material(name, variant, maps_dir):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    nt = mat.node_tree
    nt.nodes.clear()

    out = nt.nodes.new("ShaderNodeOutputMaterial"); out.location = (900, 0)
    bsdf = nt.nodes.new("ShaderNodeBsdfPrincipled"); bsdf.location = (520, 0)

    # texture coordinates + mapping (seamless maps tile)
    uv = nt.nodes.new("ShaderNodeTexCoord"); uv.location = (-700, 0)
    mp = nt.nodes.new("ShaderNodeMapping"); mp.location = (-500, 0)
    mp.inputs["Scale"].default_value = (2.0, 2.0, 2.0)
    nt.links.new(uv.outputs["Generated"], mp.inputs["Vector"])

    def tex(path, colorspace):
        n = nt.nodes.new("ShaderNodeTexImage")
        img = bpy.data.images.load(path, check_existing=True)
        n.image = img
        if colorspace == "Non-Color":
            img.colorspace_settings.name = "Non-Color"
        return n

    tex_rough = tex(os.path.join(maps_dir, "detail-micro-rough.png"), "Non-Color"); tex_rough.location = (-200, -200)
    tex_comp = tex(os.path.join(maps_dir, "detail-compression.png"), "Non-Color"); tex_comp.location = (-200, -500)
    tex_fp = tex(os.path.join(maps_dir, "detail-fingerprint.png"), "sRGB"); tex_fp.location = (-200, 200)
    for t in (tex_rough, tex_comp, tex_fp):
        nt.links.new(mp.outputs["Vector"], t.inputs["Vector"])

    # roughness from micro-rough map (values 0.72-0.88, used directly)
    nt.links.new(tex_rough.outputs["Color"], bsdf.inputs["Roughness"])

    # base color
    if variant == "clay":
        # fingerprint map is already clay-grey with low-contrast smudge streaks;
        # add contrast so the streaks read, and push SSS for a soft-translucent clay.
        bc = nt.nodes.new("ShaderNodeBrightContrast"); bc.location = (0, 200)
        set_in(bc, "Contrast", 1.6)
        nt.links.new(tex_fp.outputs["Color"], bc.inputs["Color"])
        nt.links.new(bc.outputs["Color"], bsdf.inputs["Base Color"])
    else:
        # cyan -> navy vertical gradient, multiplied by fingerprint detail
        gen = nt.nodes.new("ShaderNodeTexCoord"); gen.location = (-700, 400)
        sep = nt.nodes.new("ShaderNodeSeparateXYZ"); sep.location = (-500, 400)
        nt.links.new(gen.outputs["Generated"], sep.inputs["Vector"])
        ramp = nt.nodes.new("ShaderNodeValToRGB"); ramp.location = (-300, 400)
        cr = ramp.color_ramp
        cr.elements[0].color = (0.310, 0.702, 0.769, 1.0)   # #4FB3C4 cyan
        cr.elements[1].color = (0.086, 0.149, 0.227, 1.0)   # #16263A navy
        nt.links.new(sep.outputs["Z"], ramp.inputs["Fac"])
        mult = nt.nodes.new("ShaderNodeMixRGB"); mult.location = (0, 300)
        mult.blend_type = "MULTIPLY"; mult.inputs["Fac"].default_value = 0.5
        nt.links.new(ramp.outputs["Color"], mult.inputs["Color1"])
        nt.links.new(tex_fp.outputs["Color"], mult.inputs["Color2"])
        nt.links.new(mult.outputs["Color"], bsdf.inputs["Base Color"])

    # soft-surface defaults (matte clay / soft sheen, not wax)
    set_in(bsdf, "Metallic", 0.0)
    set_in(bsdf, "IOR", 1.46)
    set_in(bsdf, "Specular IOR Level", 0.3)
    set_in(bsdf, "Subsurface Weight", 0.08)
    set_in(bsdf, "Subsurface Radius", (0.4, 0.3, 0.3))
    set_in(bsdf, "Subsurface Scale", 0.01)
    set_in(bsdf, "Coat Weight", 0.05)
    set_in(bsdf, "Coat Roughness", 0.5)

    # clay variant: stronger subsurface so it reads soft/translucent, not flat opaque.
    # Subsurface Radius is mm-scale; Subsurface Scale multiplies it. A 1m sphere needs
    # scale ~3 (=> ~1mm scattering) for the glow to be visible at the terminator.
    if variant == "clay":
        set_in(bsdf, "Subsurface Weight", 0.5)
        set_in(bsdf, "Subsurface Scale", 3.0)
        set_in(bsdf, "Subsurface Radius", (0.6, 0.4, 0.35))

    # displacement from compression map (subtle dimples)
    disp = nt.nodes.new("ShaderNodeDisplacement"); disp.location = (300, -400)
    disp.space = "OBJECT"; set_in(disp, "Midlevel", 0.5); set_in(disp, "Scale", 0.002)
    nt.links.new(tex_comp.outputs["Color"], disp.inputs["Height"])
    nt.links.new(disp.outputs["Displacement"], out.inputs["Displacement"])
    nt.links.new(bsdf.outputs["BSDF"], out.inputs["Surface"])

    mat.displacement_method = "BOTH"  # 4.x enum: BUMP | DISPLACEMENT | BOTH
    return mat


def setup_scene(variant, maps_dir, out_path):
    clear_scene()

    bpy.ops.mesh.primitive_uv_sphere_add(radius=1.0, segments=96, ring_count=48, location=(0, 0, 0))
    obj = bpy.context.active_object
    obj.name = "Clay"
    bpy.ops.object.shade_smooth()
    sub = obj.modifiers.new("Subsurf", "SUBSURF")
    sub.levels = 2
    sub.render_levels = 3
    obj.data.materials.append(make_material("SoftClay", variant, maps_dir))

    cam_data = bpy.data.cameras.new("Cam"); cam_data.lens = 60
    cam = bpy.data.objects.new("Cam", cam_data); bpy.context.collection.objects.link(cam)
    cam.location = (0, -3.4, 1.1)
    cam.rotation_euler = (math.radians(70), 0, 0)
    bpy.context.scene.camera = cam

    # cool key + fill + rim
    add_area("Key", (0.8, -2.5, 3.5), 900, (0.85, 0.90, 1.0), 3.5)
    add_area("Fill", (-3.5, -1.0, 2.0), 220, (0.7, 0.78, 0.95), 4.0)
    add_area("Rim", (-1.0, 2.5, 2.5), 300, (0.8, 0.85, 1.0), 2.5)

    world = bpy.data.worlds.new("W"); world.use_nodes = True
    bg = world.node_tree.nodes["Background"]
    bg.inputs["Color"].default_value = (0.12, 0.14, 0.18, 1.0)
    bg.inputs["Strength"].default_value = 1.0
    bpy.context.scene.world = world

    sc = bpy.context.scene
    sc.render.engine = "CYCLES"
    sc.cycles.samples = 96
    sc.cycles.use_denoising = False  # this Blender build lacks OpenImageDenoise
    sc.cycles.use_adaptive_sampling = True
    sc.cycles.adaptive_threshold = 0.02
    sc.render.resolution_x = 1024
    sc.render.resolution_y = 1024
    sc.render.image_settings.file_format = "PNG"
    sc.render.filepath = out_path
    setup_gpu()
    bpy.ops.render.render(write_still=True)
    print("RENDER_DONE", out_path)


def main():
    root, only = parse_args()
    maps_dir = os.path.join(root, "maps")
    renders_dir = os.path.join(root, "renders")
    os.makedirs(renders_dir, exist_ok=True)
    for variant, fname in (("clay", "soft-clay-clay-neutral.png"),
                           ("gradient", "soft-clay-cyan-navy.png")):
        if only and variant not in only:
            continue
        setup_scene(variant, maps_dir, os.path.join(renders_dir, fname))


if __name__ == "__main__":
    main()
