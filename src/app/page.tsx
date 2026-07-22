import React from "react";
// import { SOCIALS } from "@/data/projects";
import { Cursor } from "@/app/components/animation/CustomCursor";
import Header from "@/app/components/Header";
import { RevealSection } from "@/app/components/animation/RevealSection";
import AboutSection from "./components/AboutSection";
import Hero from "@/app/components/Hero";
import ExperienceSection from "@/app/components/ExperienceSection";
import ProjectSection from "@/app/components/ProjectSection";
import Footer from "@/app/components/Footer";
import HeroActions from "./components/HeroActions";
import HeroSocials from "./components/HeroSocials";

export default function Home() {
  return (
    <>
      <Cursor />
      <Header />

      <main className="w-full">
        <div className="flex w-full min-h-screen items-stretch max-w-7xl mx-auto">
          <section
            id="home"
            className="flex-1 min-h-screen flex flex-col justify-center px-6 md:px-12 relative w-full"
          >
            <Hero />
            <HeroActions />
          </section>

          {/* Socials — only visible in hero */}
          <HeroSocials />
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
        <section id="contact" className="border-t border-[#262422]">
          <Footer />
        </section>
      </main>
    </>
  );
}
