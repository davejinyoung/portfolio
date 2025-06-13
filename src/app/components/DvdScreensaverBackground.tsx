"use client";

import { useEffect, useRef } from "react";

const logoSources = [
  "/logos/dvd-red.svg",
  "/logos/dvd-teal.svg",
  "/logos/dvd-blue.svg",
  "/logos/dvd-orange.svg",
  "/logos/dvd-purple.svg",
  "/logos/dvd-yellow.svg",
];

const glowColors = [
  "255,0,0", // red
  "0,254,255", // teal
  "0,38,255", // blue
  "255,131,0", // orange
  "190,0,225", // purple
  "255,255,0", // yellow
];

export default function DvdScreensaverBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gridSize = 15;
    const cols = Math.floor(canvas.width / gridSize);
    const rows = Math.floor(canvas.height / gridSize);

    let x = Math.floor(Math.random() * (canvas.width - 140));
    let y = Math.floor(Math.random() * (canvas.height - 70));
    let dx = 0.8,
      dy = 0.8;
    let currentIndex = Math.floor(Math.random() * logoSources.length);
    const logoSize = 80;

    const logoImages = logoSources.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    function changeLogo() {
      currentIndex = (currentIndex + 1) % logoImages.length;
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const glowColor = glowColors[currentIndex];

      const logo = logoImages[currentIndex];
      if (logo.complete) {
        ctx.drawImage(logo, x, y, logoSize, logoSize * 0.5);
      }

      x += dx;
      y += dy;

      if (x + logoSize >= canvas.width || x <= 0) {
        dx *= -1;
        changeLogo();
      }
      if (y + logoSize * 0.5 >= canvas.height || y <= 0) {
        dy *= -1;
        changeLogo();
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen z-[-1] pointer-events-none"
    />
  );
}
