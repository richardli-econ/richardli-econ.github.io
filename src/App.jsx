import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import { Scene3D } from "./components/Scene3D.jsx";
import { CanvasErrorBoundary } from "./components/CanvasErrorBoundary.jsx";
import { DebugOverlay } from "./components/DebugOverlay.jsx";
import { AboutPanel } from "./components/panels/AboutPanel.jsx";
import { CVPanel } from "./components/panels/CVPanel.jsx";
import { ProjectsPanel } from "./components/panels/ProjectsPanel.jsx";
import { ResearchDetailPanel } from "./components/panels/ResearchDetailPanel.jsx";
import { styles } from "./styles.js";

export default function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [selectedArea, setSelectedArea] = useState(null);

  const handleSelectArea = (area) => {
    setSelectedArea(area);
    setActiveTab("projects");
  };

  return (
    <div style={styles.root}>
      <div style={styles.topBar}>
        <div style={styles.brand}>Richard Li</div>
      </div>

      <div style={styles.canvasContainer}>
        <CanvasErrorBoundary>
          <Canvas shadows camera={{ position: [0, 4, 10], fov: 50 }} style={{ display: "block" }}>
            <Suspense
              fallback={
                <Html center style={{ color: "#94a3b8", fontSize: 14 }}>
                  Loading 3D scene…
                </Html>
              }
            >
              <Scene3D onSelectArea={handleSelectArea} activeAreaId={selectedArea?.id} />
            </Suspense>
          </Canvas>
        </CanvasErrorBoundary>

        <DebugOverlay />

        <div style={styles.tabsBar}>
          {["about", "cv", "projects"].map((t) => (
            <button
              key={t}
              onClick={() => {
                setActiveTab(t);
                if (t !== "projects") setSelectedArea(null);
              }}
              style={{
                ...styles.tabBtn,
                ...(activeTab === t ? styles.tabBtnActive : {}),
              }}
            >
              {t.toUpperCase()}
            </button>
          ))}
        </div>

        <div style={styles.sidePanel}>
          {activeTab === "about" && <AboutPanel />}
          {activeTab === "cv" && <CVPanel />}
          {activeTab === "projects" && !selectedArea && <ProjectsPanel onPick={handleSelectArea} />}
          {activeTab === "projects" && selectedArea && (
            <ResearchDetailPanel area={selectedArea} onClose={() => setSelectedArea(null)} />
          )}
        </div>

        <div style={styles.hint}>Drag to rotate · Scroll to zoom · Click a platform</div>
      </div>
    </div>
  );
}
