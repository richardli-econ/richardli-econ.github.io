import { Float } from "@react-three/drei";
import { Mannequin } from "../props/Mannequin.jsx";

export function CoordinationStation() {
  return (
    <group>
      <Mannequin position={[-0.6, 0, 0.4]} rotation={[0, 0.3, 0]} color="#34d399" />
      <Mannequin position={[0.6, 0, 0.4]} rotation={[0, -0.3, 0]} color="#059669" />
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.3}>
        <mesh position={[0, 1.8, 0.4]}>
          <torusGeometry args={[0.35, 0.04, 16, 32, Math.PI * 1.5]} />
          <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={0.3} />
        </mesh>
      </Float>
    </group>
  );
}
