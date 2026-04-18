import { styles } from "../../styles.js";

export function CVPanel() {
  return (
    <div style={styles.panelContent}>
      <h2 style={styles.panelHeading}>CV</h2>
      <h3 style={styles.panelSubheading}>Education</h3>
      <p style={styles.panelText}>
        PhD Candidate, Economics — McMaster University (in progress)
      </p>
      <h3 style={styles.panelSubheading}>Recent Research Visits</h3>
      <ul style={styles.panelList}>
        <li>University of Exeter</li>
        <li>Heinrich-Heine-Universität Düsseldorf (DICE)</li>
      </ul>
      <h3 style={styles.panelSubheading}>Teaching</h3>
      <p style={styles.panelText}>ECON 2A03 — Labour Economics, McMaster University</p>
      <p style={{ ...styles.panelText, fontStyle: "italic", marginTop: 20 }}>
        Full CV available as PDF download.
      </p>
    </div>
  );
}
