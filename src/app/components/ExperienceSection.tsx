import React from "react";
import { EXPERIENCE } from "@/data/experience";
import AnimateIn from "./animation/AnimateIn";

export default function ExperienceSection() {
  return (
    <div className="py-36 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <AnimateIn
        delay={0.1}
        className="text-[10px] tracking-[0.3em] uppercase text-[#C9A86C] mb-16"
      >
        02 — Experience
      </AnimateIn>

      <div className="flex flex-col gap-12">
        {EXPERIENCE.map((exp, i) => (
          <AnimateIn key={i} delay={0.2 + i * 0.15} className="exp-grid">
            <div>
              <p className="text-[10px] tracking-[0.18em] uppercase text-muted mb-2.5">
                {exp.period}
              </p>
              <p className="text-[12px] tracking-[0.06em] text-[#C9A86C]">
                {exp.company}
              </p>
            </div>
            <div>
              <h3 className="font-serif text-[clamp(1.4rem,2.5vw,2rem)] font-semibold mb-4 text-text">
                {exp.role}
              </h3>
              <p className="text-[13px] leading-[1.85] text-muted mb-6">
                {exp.desc}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </AnimateIn>
        ))}
      </div>
    </div>
  );
}
