"use client";
import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const points = useRef<THREE.Points>(null!);
  useFrame(() => (points.current.rotation.y += 0.001));
  return (
    <points ref={points}>
      <sphereGeometry args={[3, 64, 64]} />
      <pointsMaterial size={0.01} color="#22d3ee" transparent opacity={0.5} />
    </points>
  );
}

export const QuantumParticleField = () => (
  <Canvas className="h-full w-full"><Particles /></Canvas>
);