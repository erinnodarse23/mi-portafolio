"use client";

import { useEffect, useRef } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let mouseX = -9999;
    let mouseY = -9999;
    let smoothX = -9999;
    let smoothY = -9999;

    const gridSize = 40; // Espaciado entre puntos
    const influenceRadius = 160; // Radio de influencia del cursor

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
    };

    const getColors = () => {
      const isDark =
      document.documentElement.getAttribute("data-theme") === "dark";
        return {
        isDark,
        // Puntos base más visibles
      dotBase: isDark
      ? "rgba(200, 195, 190, 0.35)"   // más claro y opaco
      : "rgba(90, 85, 80, 0.40)",      // más oscuro y opaco
    // Halo más brillante
    dotActive: isDark ? "180, 210, 130" : "130, 165, 80",
    glow: isDark ? "180, 210, 130" : "130, 165, 80",
  };
};

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      
      ctx.clearRect(0, 0, w, h);

      // Suavizado del cursor (para que no sea brusco)
      if (mouseX > -5000) {
        if (smoothX < -5000) {
          smoothX = mouseX;
          smoothY = mouseY;
        } else {
          smoothX += (mouseX - smoothX) * 0.12;
          smoothY += (mouseY - smoothY) * 0.12;
        }
      }

      const colors = getColors();

      // Halo suave detrás del cursor
      if (smoothX > -5000) {
        const glowRadius = 200;
        const gradient = ctx.createRadialGradient(
          smoothX,
          smoothY,
          0,
          smoothX,
          smoothY,
          glowRadius
        );
        const glowOpacity = colors.isDark ? 0.15 : 0.1;
        gradient.addColorStop(0, `rgba(${colors.glow}, ${glowOpacity})`);
        gradient.addColorStop(1, `rgba(${colors.glow}, 0)`);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
      }

      // Dibujar grid de puntos
      for (let x = 0; x < w + gridSize; x += gridSize) {
        for (let y = 0; y < h + gridSize; y += gridSize) {
          if (smoothX > -5000) {
            const dx = x - smoothX;
            const dy = y - smoothY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < influenceRadius) {
              const influence = 1 - dist / influenceRadius;
              const eased = influence * influence;
              const size = 1 + eased * 2.2;
              const opacity = 0.2 + eased * 0.8;

              ctx.beginPath();
              ctx.fillStyle = `rgba(${colors.dotActive}, ${opacity})`;
              ctx.arc(x, y, size, 0, Math.PI * 2);
              ctx.fill();
              continue;
            }
          }

          // Punto base (fuera del radio del cursor)
          ctx.beginPath();
          ctx.fillStyle = colors.dotBase;
          ctx.arc(x, y, 1, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  );
}