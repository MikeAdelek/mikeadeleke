"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animation";
import { C } from "@/tokens/token";
import { SOCIALS } from "@/data/projects";

const Footer: React.FC = () => {
  return (
    <div
      style={{ padding: "9rem 3rem 5rem", maxWidth: 1280, margin: "0 auto" }}
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
      >
        <motion.p
          variants={fadeUp}
          style={{
            fontSize: 10,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: C.accent,
            marginBottom: "2.5rem",
          }}
        >
          04 — Say Hello
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="serif"
          style={{
            fontSize: "clamp(3rem, 7vw, 7.5rem)",
            fontWeight: 700,
            lineHeight: 1.04,
            maxWidth: 950,
            marginBottom: "3.5rem",
            letterSpacing: "-0.01em",
          }}
        >
          Let&apos;s build something{" "}
          <span style={{ fontStyle: "italic", color: C.accent }}>great</span>{" "}
          together.
        </motion.h2>

        <motion.a
          variants={fadeUp}
          href="mailto:oikeoluwa@gmail.com"
          style={{
            fontSize: 11,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: C.accent,
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            borderBottom: `1px solid ${C.accent}`,
            paddingBottom: 6,
            transition: "opacity 0.25s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.6")}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
        >
          oikeoluwa@gmail.com →
        </motion.a>
      </motion.div>

      {/* Footer bar */}
      <div
        style={{
          marginTop: "6rem",
          paddingTop: "2rem",
          borderTop: `1px solid ${C.border}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "1rem",
        }}
      >
        <span
          style={{
            fontSize: 10,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: C.muted,
          }}
        >
          © 2025 Olomola Michael Adeleke
        </span>
        <div style={{ display: "flex", gap: "2.5rem" }}>
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              style={{
                fontSize: 10,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: C.muted,
                transition: "color 0.25s",
              }}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={(e) => (e.currentTarget.style.color = C.text)}
              onMouseLeave={(e) => (e.currentTarget.style.color = C.muted)}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
