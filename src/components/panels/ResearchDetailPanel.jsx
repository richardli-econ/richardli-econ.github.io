import { styles } from "../../styles.js";

export function ResearchDetailPanel({ area, onClose }) {
  return (
    <div style={styles.panelContent}>
      <button onClick={onClose} style={styles.closeButton}>
        ← Back
      </button>
      <h2 style={{ ...styles.panelHeading, color: area.color }}>{area.title}</h2>
      <div style={{ fontSize: 14, color: "#94a3b8", marginBottom: 16 }}>{area.subtitle}</div>
      <p style={styles.panelText}>{area.abstract}</p>
    </div>
  );
}
