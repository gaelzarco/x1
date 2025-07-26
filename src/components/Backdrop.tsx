"use client"

import { useRef, useEffect } from 'react';
import { GUI } from 'lil-gui';

import vertexShader from '@/shaders/vertex.glsl';
import fragmentShader from '@/shaders/fragment.glsl';
import { Canvas } from '@react-three/fiber';
import { Mesh } from 'three';

const Cube = () => {
  const mesh = useRef<Mesh>(null!);

  useEffect(() => {
    const gui = new GUI();

    gui.add(mesh.current.rotation, 'x', 0, Math.PI * 2)
    gui.add(mesh.current.rotation, 'y', 0, Math.PI * 2)
    gui.add(mesh.current.rotation, 'z', 0, Math.PI * 2)

    return () => {
      gui.destroy();
    }
  } ,[])

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
      />
    </mesh>
  );
};

export default function Backdrop() {
  return (
    <Canvas style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1
    }} >
      <Cube />
      <ambientLight intensity={0.01} />
      <directionalLight position={[0, 0, 1]} color="red" />
    </Canvas>
  );
}
