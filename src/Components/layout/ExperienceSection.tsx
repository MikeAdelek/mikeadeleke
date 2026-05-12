"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animation";
import { C } from "@/tokens/token";
import { EXPERIENCE } from "@/data/experience";

const ExperienceSection = () => {
  return (
    <div style={{ padding: "9rem 3rem", maxWidth: 1280, margin: "0 auto" }}>
      <motion.p
        variants={fadeUp}
        style={{
          fontSize: 10,
          letterSpacing: "0.3em",
          textTransform: "uppercase",
          color: C.accent,
          marginBottom: "4rem",
        }}
      >
        02 — Experience
      </motion.p>

      {EXPERIENCE.map((exp, i) => (
        <motion.div key={i} variants={fadeUp} className="exp-grid">
          <div>
            <p
              style={{
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: C.muted,
                marginBottom: 10,
              }}
            >
              {exp.period}
            </p>
            <p
              style={{ fontSize: 12, letterSpacing: "0.06em", color: C.accent }}
            >
              {exp.company}
            </p>
          </div>
          <div>
            <h3
              className="serif"
              style={{
                fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                fontWeight: 600,
                marginBottom: "1rem",
                color: C.text,
              }}
            >
              {exp.role}
            </h3>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.85,
                color: C.muted,
                marginBottom: "1.5rem",
              }}
            >
              {exp.desc}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {exp.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceSection;
