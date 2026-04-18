import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import { HumanVsAIStation } from "./stations/HumanVsAIStation.jsx";
import { CoordinationStation } from "./stations/CoordinationStation.jsx";
import { ContestStation } from "./stations/ContestStation.jsx";

const stationByShape = {
  "humans-vs-robot": HumanVsAIStation,
  "two-figures": CoordinationStation,
  podium: ContestStation,
};

export function Station({ area, onClick, isActive }) {
  const platformRef = useRef();

  useFrame(() => {
    if (platformRef.current && isActive) {
      platformRef.current.rotation.y += 0.005;
    }
  });

  const Content = stationByShape[area.shape] ?? (() => null);

  return (
    <group position={area.position}>
      <mesh
        ref={platformRef}
        position={[0, -0.1, 0.4]}
        onClick={(e) => {
          e.stopPropagation();
          onClick();
        }}
        onPointerOver={() => (document.body.style.cursor = "pointer")}
        onPointerOut={() => (document.body.style.cursor = "default")}
        receiveShadow
      >
        <cylinderGeometry args={[1.6, 1.7, 0.2, 32]} />
        <meshStandardMaterial
          color={area.color}
          emissive={area.color}
          emissiveIntensity={isActive ? 0.4 : 0.1}
        />
      </mesh>

      <Content />

      <Float speed={1.5} floatIntensity={0.3}>
        <Text
          position={[0, 2.7, 0.4]}
          fontSize={0.28}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.01}
          outlineColor="#000000"
        >
          {area.title}
        </Text>
        <Text
          position={[0, 2.4, 0.4]}
          fontSize={0.15}
          color="#e2e8f0"
          anchorX="center"
          anchorY="middle"
        >
          {area.subtitle}
        </Text>
      </Float>
    </group>
  );
}
