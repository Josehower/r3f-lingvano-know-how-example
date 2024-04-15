'use client';
import { Environment, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useControls } from 'leva';

function Sphere() {
  const { roughness } = useControls({
    roughness: { value: 1, min: 0, max: 1 },
  });

  return (
    <mesh>
      <sphereGeometry args={[0.35, 10, 20]} />
      <meshStandardMaterial
        metalness={1}
        roughness={roughness}
        color={'green'}
      />
    </mesh>
  );
}

export default function Home() {
  return (
    <main className="text-center p-24 text-2xl h-screen">
      <Canvas shadows camera={{ position: [0, 0, 4.5], fov: 50 }}>
        <Environment preset={'sunset'} background />
        <Sphere />
        <OrbitControls />
      </Canvas>
    </main>
  );
}
