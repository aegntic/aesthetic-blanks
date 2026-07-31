"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, OrbitControls } from "@react-three/drei";
import type { Mesh, Group } from "three";

/**
 * Liquid-glass hero.
 *
 * The fusion material made literal in 3D: a solid icosahedral blob of
 * transmission glass that refracts a vivid colored backdrop (the same
 * cyan / warm / navy triad the page paints behind it). drei
 * MeshTransmissionMaterial does a real backbuffer pass — the backdrop and
 * lights bend through the volume, with chromatic aberration at the rim.
 *
 * No env-map preset: presets load an HDR from a CDN and can fail offline.
 * Instead a colored backplate + bright lights give the glass something to
 * refract and reflect, deterministically. Drag to orbit; auto-rotates.
 */
function Backplate() {
  // Vivid vertical gradient so the glass has chromatic content to bend.
  return (
    <mesh position={[0, 0, -6]} scale={[26, 16, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial>
        <color attach="color" args={["#9fd6e2"]} />
      </meshBasicMaterial>
    </mesh>
  );
}

function GlassBlob() {
  const group = useRef<Group>(null);
  const mesh = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.25;
      // gentle breath — keeps it alive without distorting the silhouette
      const t = group.current.rotation.y;
      const s = 1 + Math.sin(t * 2.0) * 0.03;
      group.current.scale.setScalar(s);
    }
  });

  return (
    <group ref={group}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.35, 6]} />
        <MeshTransmissionMaterial
          background={undefined}
          transmissionSampler={false}
          backside
          backsideThickness={0.6}
          thickness={1.1}
          transmission={1}
          roughness={0.06}
          ior={1.32}
          chromaticAberration={0.18}
          anisotropicBlur={0.12}
          distortion={0.32}
          distortionScale={0.4}
          temporalDistortion={0.12}
          clearcoat={1}
          clearcoatRoughness={0.06}
          attenuationDistance={2.4}
          attenuationColor="#bfe7ef"
          color="#eaf6fa"
        />
      </mesh>
    </group>
  );
}

export function GlassHero({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 4.6], fov: 42 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.55} color="#e7eef3" />
        <directionalLight position={[3.5, 4, 5]} intensity={2.4} color="#dfeef8" />
        <pointLight position={[-4, -1, 3]} intensity={42} color="#4fb3c4" />
        <pointLight position={[4, 2, -2]} intensity={30} color="#c75d4b" />
        <Backplate />
        <GlassBlob />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.7} />
      </Canvas>
    </div>
  );
}
