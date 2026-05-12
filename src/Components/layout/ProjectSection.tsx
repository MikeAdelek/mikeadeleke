"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animation";
import { PROJECTS } from "@/data/projects";
import { C } from "@/tokens/token";

const ProjectSection = () => {
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
        03 — Projects
      </motion.p>

      {PROJECTS.map((proj, i) => (
        <motion.a
          key={i}
          href={proj.href}
          variants={fadeUp}
          className="proj-row"
          style={{ display: "grid" }}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span
            style={{
              fontSize: 10,
              letterSpacing: "0.15em",
              color: C.accent,
              paddingTop: 8,
            }}
          >
            {proj.num}
          </span>
          <div>
            <h3
              className="serif"
              style={{
                fontSize: "clamp(1.6rem, 3.5vw, 3rem)",
                fontWeight: 700,
                marginBottom: "0.75rem",
                color: C.text,
                lineHeight: 1.1,
              }}
            >
              {proj.title}
            </h3>
            <p
              style={{
                fontSize: 13,
                lineHeight: 1.75,
                color: C.muted,
                maxWidth: 520,
                marginBottom: "1.2rem",
              }}
            >
              {proj.desc}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {proj.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <span
            style={{
              fontSize: 10,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: C.accent,
              paddingTop: 8,
              textAlign: "right",
            }}
          >
            View →
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default ProjectSection;
