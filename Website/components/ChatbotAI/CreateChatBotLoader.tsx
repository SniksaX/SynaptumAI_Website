//components/ChatBotAI/CreateChatBotLoader.tsx
"use client";
import React, { useEffect, useRef, useState } from "react";

const DonutLoader = () => {
  const intervalRef = useRef<any>();
  const [frame, setFrame] = useState("");

  useEffect(() => {
    const chars = ".,-~:;=!*#$@";

    const renderFrame = (A: number, B: number) => {
      const output = Array(2500).fill(" ");
      const zBuffer = Array(2500).fill(0);
      const width = 80;
      const height = 30;

      for (let j = 0; j < 6.28; j += 0.07) {
        for (let i = 0; i < 6.28; i += 0.02) {
          const sinA = Math.sin(A);
          const cosA = Math.cos(A);
          const sinB = Math.sin(B);
          const cosB = Math.cos(B);
          const sini = Math.sin(i);
          const cosi = Math.cos(i);
          const cosj = Math.cos(j);
          const sinj = Math.sin(j);

          const cosj2 = cosj + 2;
          const mess = 1 / (sini * cosj2 * sinA + sinj * cosA + 5);
          const t = sini * cosj2 * cosA - sinj * sinA;

          const x = Math.floor(
            width / 2 + 40 * mess * (cosi * cosj2 * cosB - t * sinB)
          );
          const y = Math.floor(
            height / 2 + 20 * mess * (cosi * cosj2 * sinB + t * cosB)
          );
          const o = x + width * y;
          const N = Math.floor(
            8 *
              ((sinj * sinA - sini * cosj * cosA) * cosB -
                sini * cosj * sinA -
                sinj * cosA -
                cosi * cosj * sinB)
          );

          if (height > y && y > 0 && width > x && x > 0 && mess > zBuffer[o]) {
            zBuffer[o] = mess;
            output[o] = chars[N > 0 ? N : 0];
          }
        }
      }

      let str = "";
      for (let k = 0; k < output.length; k++) {
        str += k % width === 0 ? "\n" : "";
        str += output[k];
      }

      return str;
    };

    const animateDonut = () => {
      let A = 0;
      let B = 0;

      intervalRef.current = setInterval(() => {
        setFrame(renderFrame(A, B));
        A += 0.04;
        B += 0.02;
      }, 20);
    };

    animateDonut();

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <div
        style={{
          whiteSpace: "pre",
          fontFamily: "monospace",
          fontSize: "8px", // Adjust font size to fit within the chatbox
          maxWidth: "100%", // Ensure the loader doesn't exceed the chatbox width
          overflow: "hidden", // Hide overflow to keep it within the chatbox
        }}
      >
        {frame}
      </div>
    </div>
  );
};

export default DonutLoader;
