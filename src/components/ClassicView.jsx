import { researchAreas } from "../data/research.js";
import { styles } from "../styles.js";

export function ClassicView() {
  return (
    <div style={styles.classicWrapper}>
      <div style={styles.classicInner}>
        <h1 style={styles.classicH1}>Richard Li</h1>
        <p style={styles.classicLead}>
          Fourth-year PhD candidate in Economics at McMaster University.
        </p>

        <section style={{ marginTop: 40 }}>
          <h2 style={styles.classicH2}>About</h2>
          <p style={styles.classicText}>
            I work at the intersection of experimental and behavioral economics, with a
            focus on coordination games, public goods, and human-AI strategic
            interaction. My supervisors are Todd Kaplan and Bradley Ruffle.
          </p>
        </section>

        <section style={{ marginTop: 32 }}>
          <h2 style={styles.classicH2}>Research</h2>
          {researchAreas.map((a) => (
            <div key={a.id} style={styles.classicCard}>
              <h3 style={{ ...styles.classicH3, color: a.color }}>{a.title}</h3>
              <div style={{ fontSize: 14, color: "#64748b", marginBottom: 8 }}>
                {a.subtitle}
              </div>
              <p style={styles.classicText}>{a.abstract}</p>
            </div>
          ))}
        </section>

        <section style={{ marginTop: 32 }}>
          <h2 style={styles.classicH2}>Contact</h2>
          <p style={styles.classicText}>
            Department of Economics, McMaster University
            <br />
            Hamilton, Canada L8S 4M4
            <br />
            lip83 [at] mcmaster [dot] ca
          </p>
        </section>
      </div>
    </div>
  );
}
