import { Float } from "@react-three/drei";
import { Mannequin } from "../props/Mannequin.jsx";

export function ContestStation() {
  return (
    <group>
      <mesh position={[-0.4, 0.3, 0.4]} castShadow>
        <boxGeometry args={[0.6, 0.6, 0.5]} />
        <meshStandardMaterial color="#f59e0b" />
      </mesh>
      <Mannequin position={[-0.4, 0.6, 0.4]} color="#fbbf24" />
      <Mannequin position={[0.7, 0, 0.4]} rotation={[0, -0.6, 0]} color="#92400e" />
      <Float speed={1.5} floatIntensity={0.4}>
        <mesh position={[-0.4, 2.1, 0.4]}>
          <coneGeometry args={[0.15, 0.25, 16]} />
          <meshStandardMaterial color="#fcd34d" metalness={0.9} roughness={0.1} />
        </mesh>
      </Float>
    </group>
  );
}
