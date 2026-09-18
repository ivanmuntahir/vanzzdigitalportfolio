"use client";
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { 
  MeshDistortMaterial, 
  Sphere, 
  Float, 
  ContactShadows, 
  PerspectiveCamera 
} from "@react-three/drei";
import * as THREE from "three";

function Scene() {
  const meshRef = useRef<any>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const { mouse } = state;
    if (meshRef.current) {
      const targetX = mouse.x * 0.6;
      const targetY = mouse.y * 0.4;

      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY, 0.05);

      meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, targetY, 0.1);
      meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, targetX, 0.1);

      meshRef.current.material.distort = THREE.MathUtils.lerp(
        meshRef.current.material.distort,
        hovered ? 0.55 : 0.3,
        0.1
      );
    }
  });

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
      <pointLight position={[-10, -10, -10]} color="#2563eb" intensity={1} />

      {/* NOTE: pointerEvents di wrapper Canvas dimatikan */}
      <Float speed={2.5} rotationIntensity={0.4} floatIntensity={0.8}>
        <Sphere
          ref={meshRef}
          args={[1, 100, 100]}
          scale={2.2}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          <MeshDistortMaterial
            color="#18181b"
            speed={3}
            distort={0.3}
            radius={1}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      <ContactShadows
        position={[0, -2.5, 0]}
        opacity={0.3}
        scale={10}
        blur={2.5}
        far={4.5}
      />
    </>
  );
}

export default function HeroVisual() {
  return (
    <div className="w-full h-full pointer-events-none select-none">
      <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <Scene />
      </Canvas>
    </div>
  );
}
