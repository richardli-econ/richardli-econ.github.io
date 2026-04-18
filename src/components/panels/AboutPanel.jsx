import { styles } from "../../styles.js";

export function AboutPanel() {
  return (
    <div style={styles.panelContent}>
      <h2 style={styles.panelHeading}>About</h2>
      <p style={styles.panelText}>
        I am a fourth-year PhD candidate in Economics at McMaster University, working with
        Todd Kaplan and Bradley Ruffle. My research sits at the intersection of
        experimental and behavioral economics, with a focus on coordination games, public
        goods, and human-AI strategic interaction.
      </p>
      <h3 style={styles.panelSubheading}>Research Interests</h3>
      <ul style={styles.panelList}>
        <li>Behavioural Economics</li>
        <li>Experimental Economics</li>
        <li>Population Economics</li>
        <li>Game Theory</li>
      </ul>
      <h3 style={styles.panelSubheading}>Contact</h3>
      <p style={styles.panelText}>
        Department of Economics
        <br />
        McMaster University
        <br />
        Hamilton, Canada L8S 4M4
        <br />
        lip83 [at] mcmaster [dot] ca
      </p>
    </div>
  );
}
