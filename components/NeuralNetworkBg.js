"use client";

import { useRef, useEffect } from "react";

export default function NeuralNetworkBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let W, H;

    const layerSizes = [5, 7, 7, 4];
    const labels = ["Input", "Hidden", "Hidden", "Output"];
    let nodes = [];
    let connections = [];

    const setup = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;

      const padX = W * 0.08;
      const padY = H * 0.1;
      const layerGap = (W - padX * 2) / (layerSizes.length - 1);

      nodes = layerSizes.map((count, li) => {
        const x = padX + li * layerGap;
        const gap = (H - padY * 2) / (count + 1);
        return Array.from({ length: count }, (_, ni) => ({
          x,
          y: padY + (ni + 1) * gap,
        }));
      });

      connections = [];
      for (let l = 0; l < nodes.length - 1; l++) {
        for (let i = 0; i < nodes[l].length; i++) {
          for (let j = 0; j < nodes[l + 1].length; j++) {
            connections.push({
              fromL: l,
              fromI: i,
              toL: l + 1,
              toI: j,
              t: Math.random(),
              speed: 0.0015 + Math.random() * 0.003,
              active: Math.random() > 0.3,
              cooldown: 0,
            });
          }
        }
      }
    };

    setup();
    window.addEventListener("resize", setup);

    let frame = 0;

    const animate = () => {
      frame++;
      ctx.clearRect(0, 0, W, H);

      // --- connections + traveling pulses ---
      connections.forEach((c) => {
        const from = nodes[c.fromL][c.fromI];
        const to = nodes[c.toL][c.toI];

        // base wire
        ctx.beginPath();
        ctx.moveTo(from.x, from.y);
        ctx.lineTo(to.x, to.y);
        ctx.strokeStyle = "rgba(226, 52, 14, 0.055)";
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // pulse dot
        if (c.active) {
          c.t += c.speed;
          if (c.t > 1) {
            c.t = 0;
            c.active = false;
            c.cooldown = 80 + Math.random() * 180;
          }

          const px = from.x + (to.x - from.x) * c.t;
          const py = from.y + (to.y - from.y) * c.t;
          const alpha = Math.sin(c.t * Math.PI) * 0.7;

          // glow around pulse
          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(226, 52, 14, ${alpha * 0.2})`;
          ctx.fill();

          // pulse core
          ctx.beginPath();
          ctx.arc(px, py, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(226, 52, 14, ${alpha})`;
          ctx.fill();

          // brighten the wire while pulse travels
          ctx.beginPath();
          ctx.moveTo(from.x, from.y);
          ctx.lineTo(to.x, to.y);
          ctx.strokeStyle = `rgba(226, 52, 14, ${alpha * 0.12})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        } else {
          c.cooldown--;
          if (c.cooldown <= 0) {
            c.active = true;
            c.t = 0;
          }
        }
      });

      // --- nodes (neurons) ---
      nodes.forEach((layer, li) => {
        layer.forEach((node, ni) => {
          const pulse =
            Math.sin(frame * 0.025 + li * 1.5 + ni * 0.7) * 0.3 + 0.7;

          // outer glow
          ctx.beginPath();
          ctx.arc(node.x, node.y, 14, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(226, 52, 14, ${0.05 * pulse})`;
          ctx.fill();

          // neuron ring
          ctx.beginPath();
          ctx.arc(node.x, node.y, 6, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(226, 52, 14, ${0.5 * pulse})`;
          ctx.lineWidth = 1.5;
          ctx.stroke();

          // neuron fill
          ctx.beginPath();
          ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(226, 52, 14, ${0.35 * pulse})`;
          ctx.fill();

          // bright core
          ctx.beginPath();
          ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${0.6 * pulse})`;
          ctx.fill();
        });
      });

      // --- layer labels ---
      ctx.textAlign = "center";
      ctx.font = "bold 11px sans-serif";
      ctx.letterSpacing = "2px";
      nodes.forEach((layer, li) => {
        if (layer.length === 0) return;
        ctx.fillStyle = "rgba(226, 52, 14, 0.25)";
        ctx.fillText(
          labels[li].toUpperCase(),
          layer[0].x,
          H * 0.1 - 16
        );
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", setup);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
