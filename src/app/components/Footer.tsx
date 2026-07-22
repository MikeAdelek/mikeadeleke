import React from "react";
import AnimateIn from "@/app/components/animation/AnimateIn";
import { SOCIALS } from "@/data/projects";

const Footer: React.FC = () => {
  return (
    <footer className="py-36 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div>
        <AnimateIn
          delay={0.1}
          className="text-[10px] tracking-[0.3em] uppercase text-[#C9A86C] mb-10"
        >
          04 — Say Hello
        </AnimateIn>

        <AnimateIn delay={0.2}>
          <h2 className="serif text-[clamp(3rem,7vw,7.5rem)] font-bold leading-[1.04] max-w-237.5 mb-14 tracking-[-0.01em] text-text">
            Let&apos;s build something{" "}
            <span className="italic text-[#C9A86C]">great</span> together.
          </h2>
        </AnimateIn>

        <AnimateIn delay={0.3}>
          <a
            href="mailto:oikeoluwa@gmail.com"
            className="text-[11px] tracking-[0.2em] uppercase text-[#C9A86C] inline-flex items-center gap-3 border-b border-[#C9A86C] pb-1.5 transition-opacity duration-250 hover:opacity-60"
          >
            oikeoluwa@gmail.com →
          </a>
        </AnimateIn>
      </div>

      {/* Footer bar */}
      <div className="mt-24 pt-8 border-t border-[#262422] flex flex-wrap justify-between items-center gap-4">
        <span className="text-[10px] tracking-[0.15em] uppercase text-muted">
          © 2025 Olomola Michael Adeleke
        </span>

        <div className="flex gap-10">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-[10px] tracking-[0.15em] uppercase text-muted transition-colors duration-250 hover:text-text"
              target="_blank"
              rel="noopener noreferrer"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
