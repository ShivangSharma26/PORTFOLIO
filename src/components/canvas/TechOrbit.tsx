import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Group } from 'three';

const TechIcon = ({ position, color }: { position: [number, number, number], color: string }) => {
  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
      </mesh>
    </Float>
  );
};

const TechOrbit = () => {
  const groupRef = useRef<Group>(null);
  
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      <TechIcon position={[3, 0, 0]} color="#2146C7" />
      <TechIcon position={[-3, 0, 0]} color="#804dee" />
      <TechIcon position={[0, 3, 0]} color="#2146C7" />
      <TechIcon position={[0, -3, 0]} color="#804dee" />
      <TechIcon position={[2, 2, 0]} color="#2146C7" />
      <TechIcon position={[-2, -2, 0]} color="#804dee" />
      <TechIcon position={[-2, 2, 0]} color="#2146C7" />
      <TechIcon position={[2, -2, 0]} color="#804dee" />
    </group>
  );
};

export default TechOrbit;