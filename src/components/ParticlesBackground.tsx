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
  smokeBlobs = [];

  // Paleta de humo: azules, grises y violetas suaves
  const colors = [
    "110, 130, 170",
    "130, 120, 180",
    "100, 140, 180",
    "140, 125, 175",
    "115, 135, 175",
    "95, 125, 165",
  ];

  // 60 blobs de tamaños MUY variados = humo real
  for (let i = 0; i < 60; i++) {
    const sizeRoll = Math.random();
    let radius: number;
    
    // Distribución de tamaños: mayoría pequeños, algunos grandes
    if (sizeRoll < 0.6) {
      radius = Math.random() * 80 + 60;       // pequeños: 60-140
    } else if (sizeRoll < 0.9) {
      radius = Math.random() * 150 + 140;     // medianos: 140-290
    } else {
      radius = Math.random() * 250 + 250;     // grandes: 250-500
    }

    smokeBlobs.push({
      x: Math.random() * w,
      y: Math.random() * h,
      radius,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      color: colors[Math.floor(Math.random() * colors.length)],
      // Fase para el movimiento orgánico (cada blob oscila distinto)
      phaseX: Math.random() * Math.PI * 2,
      phaseY: Math.random() * Math.PI * 2,
      speedX: Math.random() * 0.002 + 0.001,
      speedY: Math.random() * 0.002 + 0.001,
      // Rotación individual
      rotation: Math.random() * Math.PI * 2,
      rotSpeed: (Math.random() - 0.5) * 0.002,
      // Deformación (para que no sean círculos perfectos)
      stretch: Math.random() * 0.5 + 0.8,
    });
  }
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

  // Modo "screen": los blobs se suman como luz, creando profundidad
  ctx.globalCompositeOperation = "screen";

  smokeBlobs.forEach((blob) => {
    // Movimiento orgánico: oscilación suave con seno
    blob.x += blob.vx + Math.sin(time * blob.speedX + blob.phaseX) * 0.3;
    blob.y += blob.vy + Math.cos(time * blob.speedY + blob.phaseY) * 0.3;
    blob.rotation += blob.rotSpeed;

    // Rebotar suavemente en los bordes
    if (blob.x < -blob.radius) blob.x = w + blob.radius;
    if (blob.x > w + blob.radius) blob.x = -blob.radius;
    if (blob.y < -blob.radius) blob.y = h + blob.radius;
    if (blob.y > h + blob.radius) blob.y = -blob.radius;

    // Guardar el contexto para rotar y deformar
    ctx.save();
    ctx.translate(blob.x, blob.y);
    ctx.rotate(blob.rotation);
    ctx.scale(blob.stretch, 1 / blob.stretch);

    // Gradiente con múltiples paradas para bordes MUY suaves (efecto humo)
    const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, blob.radius);
    gradient.addColorStop(0, `rgba(${blob.color}, 0.18)`);
    gradient.addColorStop(0.25, `rgba(${blob.color}, 0.12)`);
    gradient.addColorStop(0.5, `rgba(${blob.color}, 0.07)`);
    gradient.addColorStop(0.75, `rgba(${blob.color}, 0.03)`);
    gradient.addColorStop(1, `rgba(${blob.color}, 0)`);

    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(0, 0, blob.radius, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  });

  // Resetear el modo de composición
  ctx.globalCompositeOperation = "source-over";
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