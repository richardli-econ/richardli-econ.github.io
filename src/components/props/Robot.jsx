export function Robot({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <mesh position={[0, 1.6, 0]} castShadow>
        <boxGeometry args={[0.4, 0.4, 0.4]} />
        <meshStandardMaterial color="#334155" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 1.6, 0.21]}>
        <boxGeometry args={[0.25, 0.08, 0.02]} />
        <meshStandardMaterial color="#60a5fa" emissive="#60a5fa" emissiveIntensity={1} />
      </mesh>
      <mesh position={[0, 1.05, 0]} castShadow>
        <boxGeometry args={[0.55, 0.65, 0.35]} />
        <meshStandardMaterial color="#475569" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[-0.4, 1.0, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.6, 12]} />
        <meshStandardMaterial color="#334155" metalness={0.8} />
      </mesh>
      <mesh position={[0.4, 1.0, 0]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.6, 12]} />
        <meshStandardMaterial color="#334155" metalness={0.8} />
      </mesh>
      <mesh position={[-0.15, 0.3, 0]} castShadow>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshStandardMaterial color="#334155" metalness={0.8} />
      </mesh>
      <mesh position={[0.15, 0.3, 0]} castShadow>
        <boxGeometry args={[0.15, 0.6, 0.15]} />
        <meshStandardMaterial color="#334155" metalness={0.8} />
      </mesh>
    </group>
  );
}
