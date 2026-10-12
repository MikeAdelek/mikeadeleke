import React from "react";
import { SKILLS } from "@/data/projects";
import AnimateIn from "./animation/AnimateIn";

const AboutSection = () => {
  const about = [
    "I'm a technical project manager with a frontend engineering background. I plan, run sprints and keep stakeholders aligned on web products, from requirements through delivery and handover.",
    "I built Smart Law Office, a multi-role legal SaaS platform for law firms, and owned both its delivery and its frontend architecture: scoping three user roles, planning the build, managing risks like multi-firm data isolation and real-time messaging, and shipping it.",
    "Because I've written the code, I translate between stakeholders and engineers without friction, scope work realistically, and spot technical risk early.",
    "Certified in Project Management and Project Management with Asana (Great Learning). I work remotely and communicate in writing, with clear status updates and documentation.",
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
            Delivering products{" "}
            <span className="italic text-accent">
              on scope, on time, and understood.
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
