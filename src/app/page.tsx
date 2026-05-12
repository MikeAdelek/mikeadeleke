"use client";

import React from "react";
import { useFonts } from "@/font/useFonts";
import { NAV, SOCIALS } from "@/data/projects";
import { motion } from "framer-motion";
import { Cursor } from "@/Components/animation/CustomCursor";
import Header from "@/Components/layout/Header";
import { C } from "@/tokens/token";
import { RevealSection } from "@/Components/animation/RevealSection";
import AboutSection from "@/Components/layout/AboutSection";
import Hero from "@/Components/layout/Hero";
import ExperienceSection from "@/Components/layout/ExperienceSection";
import ProjectSection from "@/Components/layout/ProjectSection";
import Footer from "@/Components/layout/Footer";

export default function Home() {
  useFonts();
  const [activeSection, setActiveSection] = React.useState("intro");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Intersection-based active nav
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        }),
      { threshold: 0.35 },
    );

    [...NAV, "contact"].forEach((id: string) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const downloadCV = () => {
    const a = document.createElement("a");
    a.href = "/Mike_Olomola_Frontend Developer.pdf";
    a.download = "Mike_Olomola_Frontend Developer.pdf";
    a.click();
  };

  return (
    <>
      <Cursor />
      {/* Navbar */}
      <Header activeSection={activeSection} onNav={scrollToSection} />

      <main style={{ paddingTop: "96px" }}>
        {/* ── Hero — has socials alongside it ── */}
        <div style={{ display: "flex", alignItems: "stretch" }}>
          {/* Hero content */}
          <section
            id="intro"
            style={{
              flex: 1,
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 3rem",
              maxWidth: 1280,
              margin: "0 auto",
              position: "relative",
            }}
          >
            <Hero />

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.7 }}
              style={{
                display: "flex",
                gap: "2.5rem",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <button
                className="ghost-btn"
                onClick={() => scrollToSection("projects")}
              >
                View Work →
              </button>
              <button className="accent-btn" onClick={downloadCV}>
                Download CV ↓
              </button>
            </motion.div>
          </section>

          {/* Socials — only visible in hero */}
          <motion.div
            className="vert-socials-wrap"
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1.75rem",
              padding: "1.5rem 1.25rem",
              flexShrink: 0,
              borderLeft: `1px solid ${C.border}`,
            }}
          >
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="vert-social"
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.label}
              </a>
            ))}
            <div
              style={{
                width: 1,
                height: 50,
                background: C.border,
                marginTop: 4,
              }}
            />
          </motion.div>
        </div>

        {/* About */}
        <RevealSection id="about">
          <AboutSection />
        </RevealSection>

        {/* Experience */}
        <RevealSection id="experience">
          <ExperienceSection />
        </RevealSection>

        {/* Projects */}
        <RevealSection id="projects">
          <ProjectSection />
        </RevealSection>

        {/* Contact */}
        <section id="contact" style={{ borderTop: `1px solid ${C.border}` }}>
          <Footer />
        </section>
      </main>
    </>
  );
}
