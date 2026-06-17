"use client";

import { useRef, useState } from "react";

export default function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});
  const [shine, setShine] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setStyle({
      transform: `perspective(800px) rotateX(${(0.5 - y) * 12}deg) rotateY(${(x - 0.5) * 12}deg) scale3d(1.03, 1.03, 1.03)`,
      transition: "transform 0.15s ease-out",
    });
    setShine({ x: x * 100, y: y * 100 });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: "perspective(800px) rotateX(0) rotateY(0) scale3d(1,1,1)",
      transition: "transform 0.5s ease-out",
    });
    setShine({ x: 50, y: 50 });
  };

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      {children}
      {/* Shine highlight */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${shine.x}% ${shine.y}%, rgba(255,255,255,0.07) 0%, transparent 60%)`,
        }}
      />
    </div>
  );
}
