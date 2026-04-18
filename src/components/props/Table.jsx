export function Table({ position = [0, 0, 0], color = "#8b5cf6" }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[1.2, 0.08, 0.7]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[-0.5, 0.25, -0.25]}>
        <boxGeometry args={[0.08, 0.5, 0.08]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      <mesh position={[0.5, 0.25, -0.25]}>
        <boxGeometry args={[0.08, 0.5, 0.08]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      <mesh position={[-0.5, 0.25, 0.25]}>
        <boxGeometry args={[0.08, 0.5, 0.08]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
      <mesh position={[0.5, 0.25, 0.25]}>
        <boxGeometry args={[0.08, 0.5, 0.08]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>
    </group>
  );
}
