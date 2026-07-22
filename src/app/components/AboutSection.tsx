import React from "react";
import { SKILLS } from "@/data/projects";
import AnimateIn from "./animation/AnimateIn";

const AboutSection = () => {
  const about = [
    "My background spans modern frontend engineering with React, TypeScript, and design systems, paired with technical writing.",
    "delivering multiple production-ready features across legal technology and fin-tech platforms.",
    "Specializes in performance optimization (Core Web Vitals), accessible component architecture (WCAG 2.1 AA), and design-to-code workflows",
    "Comfortable owning a frontend codebase end to end from architecture decisions through code review — and collaborating directly with design, product, and backend engineering.",
  ];
  return (
    <div className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto">
      <AnimateIn delay={0.1}>
        <p className="text-[10px] leading-tight uppercase mb-4 text-[#C9A86C]">
          01 — About
        </p>
      </AnimateIn>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-28 items-start">
        {/* left column */}
        <AnimateIn delay={0.2}>
          <h2 className="serif text-[clamp(2rem,3.5vw,3.2rem)] font-bold leading-[1.2] text-text">
            Building products{" "}
            <span className="italic text-accent">
              people really love to use.
            </span>
          </h2>
        </AnimateIn>

        {/* Right column */}
        <div className="flex flex-col gap-6">
          {about.map((p, i) => (
            <AnimateIn key={i} delay={0.3 + i * 0.1}>
              <p className="text-[14px] leading-[1.85] text-muted">{p}</p>
            </AnimateIn>
          ))}

          <AnimateIn delay={0.7} className="flex flex-wrap gap-2 mt-4">
            {SKILLS.map((s) => (
              <span className="tag" key={s}>
                {s}
              </span>
            ))}
          </AnimateIn>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
