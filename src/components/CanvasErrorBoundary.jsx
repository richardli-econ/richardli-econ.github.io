import React from "react";

export class CanvasErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("[Canvas] crashed:", error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24,
            color: "#fecaca",
            background: "rgba(153,27,27,0.2)",
            fontSize: 14,
            fontFamily: "ui-monospace, monospace",
            whiteSpace: "pre-wrap",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontWeight: 600, marginBottom: 8 }}>3D scene failed to render</div>
            <div style={{ opacity: 0.9 }}>{String(this.state.error?.message || this.state.error)}</div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
