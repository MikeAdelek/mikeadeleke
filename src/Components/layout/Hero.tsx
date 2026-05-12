"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, stagger } from "../animation";
import { C } from "@/tokens/token";

const Hero = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          marginBottom: "2.5rem",
        }}
      >
        <div style={{ width: 36, height: 1, background: C.accent }} />
        <span
          style={{
            fontSize: 10,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: C.accent,
          }}
        >
          Hello World
        </span>
      </motion.div>

      {/* Big Heading */}
      <motion.h1
        className="serif hero-h1"
        variants={stagger}
        initial="hidden"
        animate="show"
        style={{
          fontSize: "clamp(3.5rem, 8.5vw, 9.5rem)",
          fontWeight: 700,
          lineHeight: 1.04,
          letterSpacing: "-0.01em",
          marginBottom: "3.5rem",
          maxWidth: "85vw",
        }}
      >
        {[
          "I'm Mike,",
          "a Frontend",
          { text: "Engineer", italic: true },
          "& Technical",
          { text: "Writer", italic: true },
          "based in Lagos.",
        ].map((line, i) =>
          typeof line === "string" ? (
            <motion.span key={i} variants={fadeUp} style={{ display: "block" }}>
              {line}
            </motion.span>
          ) : (
            <motion.span
              key={i}
              variants={fadeUp}
              style={{
                display: "block",
                fontStyle: "italic",
                color: C.accent,
              }}
            >
              {line.text}
            </motion.span>
          ),
        )}
      </motion.h1>

      {/* Scroll Hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        style={{
          position: "absolute",
          bottom: "3rem",
          left: "3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <motion.div
          animate={{ scaleY: [1, 1.4, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{
            width: 1,
            height: 44,
            background: C.muted,
            transformOrigin: "top",
          }}
        />
        <span
          style={{
            fontSize: 9,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: C.muted,
          }}
        >
          Scroll
        </span>
      </motion.div>

      {/* Year / Role badge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute",
          bottom: "3rem",
          right: "5rem",
          display: "flex",
          flexDirection: "column",
          gap: 6,
          alignItems: "flex-end",
        }}
      >
        <span
          style={{
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: C.muted,
          }}
        >
          Est. 2026
        </span>
        <span
          style={{
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: C.muted,
          }}
        >
          Lagos, NG
        </span>
      </motion.div>
    </>
  );
};

export default Hero;
