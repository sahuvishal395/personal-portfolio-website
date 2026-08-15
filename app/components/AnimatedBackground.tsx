"use client";

export default function AnimatedBackground() {
  return (
    <>
      {/* Soft colour wash */}
      <div className="gradient-mesh" aria-hidden="true">
        <div className="gradient-mesh-extra" />
      </div>

      {/* Ambient webbing across the top of the viewport */}
      <div className="web-overlay" aria-hidden="true" />

      {/* Corner web, top-right */}
      <div className="web-corner" aria-hidden="true" />
    </>
  );
}
