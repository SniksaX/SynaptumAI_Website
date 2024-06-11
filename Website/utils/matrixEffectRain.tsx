// utils/matrixEffect.tsx

"use client";

import { useEffect } from "react";

const MatrixEffectRaining = () => {
  useEffect(() => {
    const canvas = document.getElementById("matrix") as HTMLCanvasElement;
    const ctx = canvas.getContext("2d")!;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight; // Ensure canvas height covers all sections
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    const font_size = 10; // Adjusted font size for better appearance
    const columns = Math.floor(canvas.width / font_size); // Number of columns for the rain
    const drops: number[] = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = (Math.random() * canvas.height) / font_size; // Randomize initial drop positions
    }

    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0F0"; // Green text
      ctx.font = `${font_size}px monospace`; // Use monospace for consistent character width

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)];
        ctx.fillText(text, i * font_size, drops[i] * font_size);

        drops[i]++;
        if (drops[i] * font_size > canvas.height) {
          drops[i] = 0; // Reset drop to top of canvas
        }
      }
    }

    const interval = setInterval(draw, 30); // Adjusted interval for smoother effect
    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      id="matrix"
      className="absolute top-0 left-0 w-full h-full z-[-1]"
    ></canvas>
  );
};

export default MatrixEffectRaining;
