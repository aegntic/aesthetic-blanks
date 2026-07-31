"use client";

import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls } from "@react-three/drei";

/**
 * Deformable 3D clay hero.
 *
 * The "deform" from the material spec made literal: a clay blob that morphs
 * (drei MeshDistortMaterial). Surface params mirror the validated Blender
 * render (materials/soft-clay): matte clay (#C9C7C4), high roughness, soft
 * sheen, low clearcoat — reads as soft clay, not glossy plastic.
 *
 * Drag to orbit; auto-rotates otherwise.
 */
function ClayBlob() {
  return (
    <mesh>
      <sphereGeometry args={[1.3, 96, 96]} />
      <MeshDistortMaterial
        color="#C9C7C4"
        roughness={0.78}
        metalness={0}
        clearcoat={0.12}
        clearcoatRoughness={0.6}
        sheen={0.6}
        sheenRoughness={0.85}
        sheenColor="#E8E6E2"
        distort={0.35}
        speed={1.6}
      />
    </mesh>
  );
}

export function ClayHero({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4.2], fov: 45 }} gl={{ antialias: true }}>
        {/* cool clay lighting (matches the theme) */}
        <ambientLight intensity={0.6} color="#dfe7ee" />
        <directionalLight position={[3.5, 4, 5]} intensity={2.2} color="#cfe0ee" />
        <pointLight position={[-4, -2, 2]} intensity={28} color="#9fc4d6" />
        <ClayBlob />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
