import { researchAreas } from "../../data/research.js";
import { styles } from "../../styles.js";

export function ProjectsPanel({ onPick }) {
  return (
    <div style={styles.panelContent}>
      <h2 style={styles.panelHeading}>Projects</h2>
      <p style={styles.panelText}>
        Click a station in the 3D scene, or pick one below:
      </p>
      {researchAreas.map((a) => (
        <div
          key={a.id}
          onClick={() => onPick(a)}
          style={{
            ...styles.projectCard,
            borderLeft: `4px solid ${a.color}`,
          }}
        >
          <div style={{ fontWeight: 600, color: "#f1f5f9" }}>{a.title}</div>
          <div style={{ fontSize: 13, color: "#94a3b8", marginTop: 4 }}>{a.subtitle}</div>
        </div>
      ))}
    </div>
  );
}
