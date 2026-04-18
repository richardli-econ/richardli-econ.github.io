import { useEffect, useState } from "react";

function probeWebGL() {
  try {
    const c = document.createElement("canvas");
    const gl = c.getContext("webgl2") || c.getContext("webgl");
    if (!gl) return { ok: false, reason: "no webgl context" };
    const renderer = gl.getExtension("WEBGL_debug_renderer_info");
    const gpu = renderer ? gl.getParameter(renderer.UNMASKED_RENDERER_WEBGL) : "unknown";
    return { ok: true, gpu: String(gpu).slice(0, 60) };
  } catch (e) {
    return { ok: false, reason: e.message };
  }
}

export function DebugOverlay() {
  const [probe, setProbe] = useState(null);
  useEffect(() => setProbe(probeWebGL()), []);
  if (!probe) return null;
  return (
    <div
      style={{
        position: "absolute",
        top: 70,
        right: 24,
        zIndex: 10,
        fontFamily: "ui-monospace, monospace",
        fontSize: 11,
        background: "rgba(15,23,42,0.85)",
        border: "1px solid rgba(148,163,184,0.2)",
        borderRadius: 8,
        padding: "8px 12px",
        color: probe.ok ? "#86efac" : "#fecaca",
        maxWidth: 320,
      }}
    >
      WebGL: {probe.ok ? `ok — ${probe.gpu}` : `FAIL — ${probe.reason}`}
    </div>
  );
}
