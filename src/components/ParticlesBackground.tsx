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
    let time = 0;

    // Estrellas (modo oscuro)
    let stars: Array<{
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
      twinkleOffset: number;
    }> = [];

    // Manchas de humo (modo claro)
    let smokeBlobs: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
    }> = [];

    const isDark = () =>
      document.documentElement.getAttribute("data-theme") === "dark";

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      initStars();
      initSmoke();
    };

    const initStars = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const count = Math.min(200, Math.floor((w * h) / 8000));
      stars = [];
      for (let i = 0; i < count; i++) {
        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          size: Math.random() * 1.6 + 0.3,
          opacity: Math.random() * 0.7 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinkleOffset: Math.random() * Math.PI * 2,
        });
      }
    };

    const initSmoke = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
  // Manchas de humo con colores intensos que SÍ se ven sobre blanco
    smokeBlobs = [
      { x: w * 0.2, y: h * 0.3, radius: 550, vx: 0.15, vy: 0.1, color: "60, 80, 130" },
      { x: w * 0.7, y: h * 0.2, radius: 600, vx: -0.12, vy: 0.15, color: "90, 70, 140" },
      { x: w * 0.5, y: h * 0.7, radius: 580, vx: 0.1, vy: -0.1, color: "50, 100, 130" },
      { x: w * 0.85, y: h * 0.75, radius: 500, vx: -0.08, vy: -0.12, color: "100, 80, 130" },
      { x: w * 0.15, y: h * 0.8, radius: 520, vx: 0.12, vy: 0.08, color: "70, 90, 140" },
    ];
  };

    const drawStars = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      stars.forEach((star) => {
        const twinkle =
          Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.3 + 0.7;
        const opacity = star.opacity * twinkle;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Halo suave en las estrellas más grandes
        if (star.size > 1.2) {
          ctx.beginPath();
          ctx.fillStyle = `rgba(200, 220, 255, ${opacity * 0.15})`;
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    };

    const drawSmoke = () => {
  const w = window.innerWidth;
  const h = window.innerHeight;
  ctx.clearRect(0, 0, w, h);

  smokeBlobs.forEach((blob) => {
    // Mover la mancha
    blob.x += blob.vx;
    blob.y += blob.vy;

    // Rebotar en los bordes
    if (blob.x < -blob.radius || blob.x > w + blob.radius) blob.vx *= -1;
    if (blob.y < -blob.radius || blob.y > h + blob.radius) blob.vy *= -1;

    // Gradiente radial para efecto humo
    const gradient = ctx.createRadialGradient(
      blob.x,
      blob.y,
      0,
      blob.x,
      blob.y,
      blob.radius
    );
    gradient.addColorStop(0, `rgba(${blob.color}, 0.45)`);
    gradient.addColorStop(0.5, `rgba(${blob.color}, 0.20)`);
    gradient.addColorStop(1, `rgba(${blob.color}, 0)`);

    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(blob.x, blob.y, blob.radius, 0, Math.PI * 2);
    ctx.fill();
  });
};

    const draw = () => {
      time += 1;
      if (isDark()) {
        drawStars();
      } else {
        drawSmoke();
      }
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    // Observar cambios de tema
    const observer = new MutationObserver(() => {
      // Redibujamos automáticamente en el siguiente frame
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      window.removeEventListener("resize", resize);
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