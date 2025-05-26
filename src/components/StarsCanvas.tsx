import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';
import { Mesh } from 'three';

const Stars = (props: any) => {
  const ref = useRef<Mesh>(null);
  const [sphere] = useState(() => {
    const initialSphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });
    // Filter out NaN values
    const validSphere = Array.from(initialSphere).filter(value => !isNaN(value) && isFinite(value));

    // Pad the array to maintain the expected size
    while (validSphere.length < 5000) {
      validSphere.push(0);
    }

    return new Float32Array(validSphere);
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;