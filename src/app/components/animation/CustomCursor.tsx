"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf: number;
    let mx = 0,
      my = 0;
    let rx = 0,
      ry = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };
    window.addEventListener("mousemove", move);

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (dot.current) {
        dot.current.style.left = `${mx}px`;
        dot.current.style.top = `${my}px`;
      }
      if (ring.current) {
        ring.current.style.left = `${rx}px`;
        ring.current.style.top = `${ry}px`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Inner Dot */}
      <div
        ref={dot}
        className="fixed w-1.5 h-1.5 rounded-full bg-[#C9A86C] pointer-events-none z-9999 -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />

      {/* Outer Ring */}
      <div
        ref={ring}
        className="fixed w-9 h-9 rounded-full border border-[#C9A86C] pointer-events-none z-9998 -translate-x-1/2 -translate-y-1/2 opacity-35 mix-blend-difference"
      />
    </>
  );
}
