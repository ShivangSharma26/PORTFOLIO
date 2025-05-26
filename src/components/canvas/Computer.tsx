import React, { Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import { Mesh } from 'three';
import { avatar } from '../../assets';

const Computer = () => {
  // Since we don't have an actual 3D model, we'll create a simple representation
  // For a real implementation, you'd use useGLTF to load a model
  
  const computerRef = React.useRef<Mesh>(null);
  
  useFrame(({ clock }) => {
    if (computerRef.current) {
      computerRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.1;
    }
  });

  return (
    <mesh ref={computerRef} position={[0, -1, 0]} scale={1.5}>
      {/* Computer base */}
      <mesh position={[0, -0.8, 0]}>
        <boxGeometry args={[1.4, 0.1, 1]} />
        <meshStandardMaterial color="#151530" />
      </mesh>
      
      {/* Computer screen */}
      <mesh position={[0, 0, -0.2]} rotation={[0.1, 0, 0]}>
        <boxGeometry args={[1.4, 0.8, 0.1]} />
        <meshStandardMaterial color="#151530" />
      </mesh>
      
      {/* Screen content - would be a texture in a real implementation */}
      <mesh position={[0, 0, -0.15]} rotation={[0.1, 0, 0]}>
        <planeGeometry args={[1.3, 0.7]} />
        <meshBasicMaterial color="#2146C7" />
      </mesh>
      
      {/* Keyboard */}
      <mesh position={[0, -0.7, 0.3]}>
        <boxGeometry args={[1.2, 0.05, 0.5]} />
        <meshStandardMaterial color="#0F0F23" />
      </mesh>
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <group position={[0, 0, -1]}>
      <ambientLight intensity={1} />
      <pointLight position={[10, 10, 10]} />
      <Computer />
    </group>
  );
};

export default ComputerCanvas;