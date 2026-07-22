import React from "react";
import AnimateIn from "./animation/AnimateIn";
import { SOCIALS } from "@/data/projects";

export default function HeroSocials() {
  return (
    <AnimateIn
      delay={1.1}
      className="hidden md:flex flex-col items-center justify-center gap-7 px-5 py-6 shrink-0 border-l border-[#232422]"
    >
      {SOCIALS.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] tracking-[0.15em] uppercase text-muted transition-colors duration-250 hover:text-text [writing-mode:vertical-lr]"
        >
          {s.label}
        </a>
      ))}
      <div className="w-px h-12.5 bg-[#262422] mt-1" />
    </AnimateIn>
  );
}
