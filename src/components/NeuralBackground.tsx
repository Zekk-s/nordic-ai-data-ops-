import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 2000 }) {
  const points = useRef<THREE.Points>(null!);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    points.current.rotation.y = time * 0.05;
    points.current.rotation.x = time * 0.02;
    
    // Subtle mouse interaction
    const mouseX = state.mouse.x * 0.2;
    const mouseY = state.mouse.y * 0.2;
    points.current.position.x = THREE.MathUtils.lerp(points.current.position.x, mouseX, 0.1);
    points.current.position.y = THREE.MathUtils.lerp(points.current.position.y, mouseY, 0.1);
  });

  return (
    <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00E5FF"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

function Connections({ count = 40 }) {
  const lines = useRef<THREE.Group>(null!);
  
  const lineData = useMemo(() => {
    return Array.from({ length: count }, () => ({
      start: new THREE.Vector3((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8),
      end: new THREE.Vector3((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8, (Math.random() - 0.5) * 8),
      speed: Math.random() * 0.2 + 0.1
    }));
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    lines.current.rotation.y = time * 0.03;
    
    // Subtle mouse interaction
    const mouseX = state.mouse.x * 0.1;
    const mouseY = state.mouse.y * 0.1;
    lines.current.position.x = THREE.MathUtils.lerp(lines.current.position.x, mouseX, 0.05);
    lines.current.position.y = THREE.MathUtils.lerp(lines.current.position.y, mouseY, 0.05);
  });

  return (
    <group ref={lines}>
      {lineData.map((data, i) => (
        <line key={i}>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attach="attributes-position"
              count={2}
              array={new Float32Array([...data.start.toArray(), ...data.end.toArray()])}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial attach="material" color="#00E5FF" transparent opacity={0.1} />
        </line>
      ))}
    </group>
  );
}

export default function NeuralBackground() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Particles />
        <Connections />
      </Canvas>
    </div>
  );
}
