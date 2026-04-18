import { OrbitControls } from "@react-three/drei";
import { researchAreas } from "../data/research.js";
import { Station } from "./Station.jsx";

export function Scene3D({ onSelectArea, activeAreaId }) {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 8, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <pointLight position={[-5, 5, -5]} intensity={0.5} color="#6366f1" />

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.2, 0]} receiveShadow>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#0f172a" />
      </mesh>

      <gridHelper args={[30, 30, "#1e293b", "#1e293b"]} position={[0, -0.19, 0]} />

      {researchAreas.map((area) => (
        <Station
          key={area.id}
          area={area}
          onClick={() => onSelectArea(area)}
          isActive={activeAreaId === area.id}
        />
      ))}

      <OrbitControls
        enablePan={false}
        minDistance={5}
        maxDistance={20}
        minPolarAngle={Math.PI / 6}
        maxPolarAngle={Math.PI / 2.2}
      />
    </>
  );
}
