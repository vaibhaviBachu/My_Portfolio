"use client";

import { useEffect, useState } from "react";

export default function CursorCircle() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);
    const down = () => setClicking(true);
    const up = () => setClicking(false);

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    document.addEventListener("mousedown", down);
    document.addEventListener("mouseup", up);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      document.removeEventListener("mousedown", down);
      document.removeEventListener("mouseup", up);
    };
  }, [visible]);

  return (
    <>
      {/* Outer ring — follows with slight delay */}
      <div
        className="fixed pointer-events-none rounded-full border-2 border-primary"
        style={{
          width: clicking ? 28 : 36,
          height: clicking ? 28 : 36,
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          transition:
            "left 0.15s ease-out, top 0.15s ease-out, width 0.2s, height 0.2s, opacity 0.3s",
          opacity: visible ? 0.8 : 0,
          zIndex: 9999,
        }}
      />
      {/* Inner dot — sticks exactly to cursor */}
      <div
        className="fixed pointer-events-none rounded-full bg-primary"
        style={{
          width: 6,
          height: 6,
          left: pos.x,
          top: pos.y,
          transform: "translate(-50%, -50%)",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s",
          zIndex: 9999,
        }}
      />
    </>
  );
}
