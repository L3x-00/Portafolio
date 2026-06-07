import { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Particles from './Particles';
import Effects from './Effects';
import Fallback from './Fallback';

export default function Scene() {
  const [gpuTier, setGpuTier] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const { getGPUTier } = await import('detect-gpu');
        const result = await getGPUTier();
        setGpuTier(result.tier);
      } catch {
        setGpuTier(2);
      }
    })();
  }, []);

  if (gpuTier === null) {
    return (
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, #0a1628 0%, #050505 100%)',
        }}
      />
    );
  }

  if (gpuTier <= 1) return <Fallback />;

  return (
    <Canvas
      style={{ position: 'absolute', inset: 0 }}
      gl={{ antialias: false, alpha: false }}
      camera={{ position: [0, 0, 6], fov: 55 }}
      dpr={[1, 1.5]}
    >
      <color attach="background" args={['#050505']} />
      <fog attach="fog" args={['#050505', 10, 28]} />
      <ambientLight intensity={0.3} />
      <pointLight position={[6, 6, 4]}  color="#00f0ff" intensity={3} />
      <pointLight position={[-6, -4, 4]} color="#bf00ff" intensity={2} />
      <Suspense fallback={null}>
        <Particles />
        <Effects />
      </Suspense>
    </Canvas>
  );
}