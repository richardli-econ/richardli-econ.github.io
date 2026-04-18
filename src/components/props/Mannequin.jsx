export function Mannequin({ color = "#cbd5e1", position = [0, 0, 0], rotation = [0, 0, 0] }) {
  return (
    <group position={position} rotation={rotation}>
      <mesh position={[0, 1.6, 0]} castShadow>
        <sphereGeometry args={[0.22, 16, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0, 1.05, 0]} castShadow>
        <capsuleGeometry args={[0.25, 0.5, 8, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[-0.35, 1.0, 0]} rotation={[0, 0, 0.3]} castShadow>
        <capsuleGeometry args={[0.08, 0.55, 8, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0.35, 1.0, 0]} rotation={[0, 0, -0.3]} castShadow>
        <capsuleGeometry args={[0.08, 0.55, 8, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[-0.13, 0.3, 0]} castShadow>
        <capsuleGeometry args={[0.1, 0.55, 8, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh position={[0.13, 0.3, 0]} castShadow>
        <capsuleGeometry args={[0.1, 0.55, 8, 16]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
}
