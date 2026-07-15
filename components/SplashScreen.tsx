"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1300);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="splash" aria-hidden="true">
      <div className="splash__glow" />
      <div className="splash__content">
        <div className="brand brand--splash">
          AI4<span>IDN</span>
        </div>
        <p>AI untuk Semua.</p>
        <p>Dampak untuk Indonesia.</p>
      </div>
    </div>
  );
}
