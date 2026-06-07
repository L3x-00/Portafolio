import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const COUNT = 1800;

export default function Particles() {
  const mesh = useRef<THREE.Points>(null);
  const { mouse } = useThree();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(COUNT * 3);
    const col = new Float32Array(COUNT * 3);

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      pos[i3]     = (Math.random() - 0.5) * 18;
      pos[i3 + 1] = (Math.random() - 0.5) * 18;
      pos[i3 + 2] = (Math.random() - 0.5) * 12;

      const t = Math.random();
      if (t < 0.5) {
        col[i3] = 0; col[i3 + 1] = 0.94; col[i3 + 2] = 1;
      } else {
        col[i3] = 0.75; col[i3 + 1] = 0; col[i3 + 2] = 1;
      }
    }
    return [pos, col];
  }, []);

  useFrame((_state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.025;
    mesh.current.rotation.x += (mouse.y * 0.08 - mesh.current.rotation.x) * 0.03;
    mesh.current.rotation.z += (mouse.x * 0.04 - mesh.current.rotation.z) * 0.03;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={COUNT}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={COUNT}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        vertexColors
        sizeAttenuation
        transparent
        opacity={0.8}
        depthWrite={false}
      />
    </points>
  );
}