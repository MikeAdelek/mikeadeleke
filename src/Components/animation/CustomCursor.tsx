"use client"

import { useEffect, useRef } from "react";
import { C } from "@/tokens/token";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    let raf:number;
    let mx = 0, my = 0;
    let rx = 0, ry = 0;
 
    const move = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
    window.addEventListener("mousemove", move);
 
    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      if (dot.current) {
        dot.current.style.left = `${mx}px`;
        dot.current.style.top  = `${my}px`;
      }
      if (ring.current) {
        ring.current.style.left = `${rx}px`;
        ring.current.style.top  = `${ry}px`;
      }
      raf = requestAnimationFrame(loop);
    };
    loop();
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(raf); };
  }, []);
 
  return (
    <>
      <div ref={dot} style={{
        position: "fixed", width: 6, height: 6, borderRadius: "50%",
        background: C.accent, pointerEvents: "none", zIndex: 9999,
        transform: "translate(-50%,-50%)", mixBlendMode: "difference",
      }} />
      <div ref={ring} style={{
        position: "fixed", width: 36, height: 36, borderRadius: "50%",
        border: `1px solid ${C.accent}`, pointerEvents: "none", zIndex: 9998,
        transform: "translate(-50%,-50%)", opacity: 0.35,
        mixBlendMode: "difference",
      }} />
    </>
  );
}