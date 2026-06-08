import { EffectComposer, Bloom, ChromaticAberration, Noise } from '@react-three/postprocessing';
import { BlendFunction } from 'postprocessing';
import * as THREE from 'three';

export default function Effects() {
  return (
    <EffectComposer multisampling={0}>
      <Bloom
        intensity={1.2}
        luminanceThreshold={0.2}
        luminanceSmoothing={0.8}
        blendFunction={BlendFunction.SCREEN}
      />
      <ChromaticAberration
        offset={new THREE.Vector2(0.0004, 0.0004)}
        blendFunction={BlendFunction.NORMAL}
        radialModulation={false}
        modulationOffset={0}
      />
    </EffectComposer>
  );
}