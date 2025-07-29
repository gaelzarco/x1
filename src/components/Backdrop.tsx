"use client"

import { useRef, useEffect } from 'react';
import { GUI } from 'lil-gui';

import vertexShader from '@/shaders/vertex.glsl';
import fragmentShader from '@/shaders/fragment.glsl';
import { Canvas, useFrame } from '@react-three/fiber';
import { Mesh, Vector2, ShaderMaterial } from 'three';

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
  }, [])

  useFrame(({ clock }) => {
    if (mesh.current) {
      const material = mesh.current.material as ShaderMaterial;
      material.uniforms.iTime.value = clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[20, 20, 0]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={{
          iTime: { value: 0 },
          iResolution: { value: new Vector2(window.innerWidth, window.innerHeight) }
        }}
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
    }}>
      <Cube />
      <ambientLight intensity={0.01} />
      <directionalLight position={[0, 0, 1]} color="red" />
    </Canvas>
  );
}
