import React from "react";
import AnimateIn from "./animation/AnimateIn";

export default function Hero() {
  return (
    <>
      <AnimateIn delay={0.2} className="flex items-center gap-4 mb-2">
        <div className="w-9 h-px bg-[#C9A86C]" />
        <span className="text-[10px] tracking-[0.28em] uppercase text-[#C9A86C]">
          Hello World !!!
        </span>
      </AnimateIn>

      {/* Big Heading */}
      <h1 className="font-serif text-[clamp(3.5rem,8.5vw,7rem)] font-bold leading-[1.04] tracking-[-0.01em] mb-2 max-w-[85vw]">
        <AnimateIn delay={0.3}>
          <span className="block">I&apos;m Mike,</span>
        </AnimateIn>
        <AnimateIn delay={0.4}>
          <span className="block">a Frontend</span>
        </AnimateIn>
        <AnimateIn delay={0.5}>
          <span className="block italic text-[#C9A86C]">Engineer</span>
        </AnimateIn>
        <AnimateIn delay={0.6}>
          <span className="block">& Technical </span>
        </AnimateIn>
        <AnimateIn delay={0.7}>
          <span className="block italic text-[#C9A86C]">Writer</span>
        </AnimateIn>
        {/* <AnimateIn delay={0.8}>
          <span className="block"></span>
        </AnimateIn> */}
      </h1>

      {/* Year / Role badge */}
      <AnimateIn
        delay={0.8}
        className="absolute bottom-12 right-20 flex flex-col items-end gap-1.5"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-neutral-500">
          Lagos, NG
        </span>
      </AnimateIn>
    </>
  );
}
