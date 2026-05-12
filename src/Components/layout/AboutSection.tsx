"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animation";
import { C } from "@/tokens/token";
import { SKILLS } from "@/data/projects";

const AboutSection = () => {
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
        01 — About
      </motion.p>

      <div
        className="about-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "7rem",
          alignItems: "start",
        }}
      >
        <motion.div variants={fadeUp}>
          <h2
            className="serif"
            style={{
              fontSize: "clamp(2rem, 3.5vw, 3.25rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              color: C.text,
            }}
          >
            Obsessed with building products{" "}
            <span style={{ fontStyle: "italic", color: C.accent }}>
              people actually love to use.
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          className="text-justify"
          style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}
        >
          {[
            "My background spans modern frontend engineering with React, TypeScript, and design systems, paired with technical writing.",
            "Led end-to- end frontend architecture for Smart Law Office — a multi-role legal SaaS platform serving 50+ law firms — owning component design, shared TypeScript schemas, authentication flows, and real-time communication features.",
            "I focus on pixel-perfect, accessible UIs built from reusable component systems, advanced form flows, and smooth animations. As a technical writer, I turn complex dev workflows into clear, actionable documentation — API references, integration guides, deployment docs.",
            "Beyond code, I'm driven by clarity, reliability, and impact. I collaborate across teams, simplify hard problems, and deliver solutions that make life easier for both developers and end-users.",
          ].map((p, i) => (
            <motion.p
              key={i}
              variants={fadeUp}
              style={{ fontSize: 14, lineHeight: 1.85, color: C.muted }}
            >
              {p}
            </motion.p>
          ))}

          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 8,
              marginTop: "1rem",
            }}
          >
            {SKILLS.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
