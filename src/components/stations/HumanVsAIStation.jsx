import { Mannequin } from "../props/Mannequin.jsx";
import { Robot } from "../props/Robot.jsx";
import { Table } from "../props/Table.jsx";

export function HumanVsAIStation() {
  return (
    <group>
      <Mannequin position={[-0.7, 0, 0.4]} rotation={[0, 0.4, 0]} color="#fbbf24" />
      <Robot position={[0.7, 0, 0.4]} />
      <Table position={[0, 0, 0.4]} color="#6366f1" />
      <mesh position={[-0.2, 0.58, 0.4]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.03, 16]} />
        <meshStandardMaterial color="#fcd34d" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0.2, 0.58, 0.4]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.03, 16]} />
        <meshStandardMaterial color="#fcd34d" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}
