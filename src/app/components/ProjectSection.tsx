import React from "react";
import { PROJECTS } from "@/data/projects";
import AnimateIn from "./animation/AnimateIn";

export default function ProjectSection() {
  return (
    <div className="py-36 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <AnimateIn
        delay={0.1}
        className="text-[10px] tracking-[0.3em] uppercase text-[#C9A86C] mb-16"
      >
        03 — Projects
      </AnimateIn>

      <div className="flex flex-col gap-12">
        {PROJECTS.map((proj, i) => (
          <AnimateIn key={i} delay={0.2 + i * 0.15}>
            <a
              href={proj.href}
              className="proj-row grid target-blank"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-[10px] tracking-[0.15rem] text-[#C9A86C] pt-2">
                {proj.num}
              </span>
              <div>
                <h3 className="font-serif text-[clamp(1.6rem,3.5vw,3rem)] font-bold mb-3 text-text leading-[1.1]">
                  {proj.title}
                </h3>
                <p className="text-[13px] leading-[1.75] text-muted max-w-130 mb-5">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-[10px] tracking-[0.14em] uppercase text-[#C9A86C] pt-2 text-right">
                View →
              </span>
            </a>
          </AnimateIn>
        ))}
      </div>
    </div>
  );
}
