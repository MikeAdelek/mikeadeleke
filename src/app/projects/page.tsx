"use client";

import React from "react";
import { Card } from "@/Components/ui/Card";
import { projects } from "@/data/projects";
import { Container } from "@/Components/ui/Container";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowRight } from "react-icons/md";

const PortfolioPage: React.FC = () => {
  // const [currentIndex, setCurrentIndex] = React.useState(0);

  const dots = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2
  }));

  // const handlePrevious = () => {
  //   setCurrentIndex((prev) => (prev > 0 ? prev - 1 : projects.length - 1));
  // };

  // const handleNext = () => {
  //   setCurrentIndex((prev) => (prev < projects.length - 1 ? prev + 1 : 0));
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-gray-200">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot) => (
          <div
            key={dot.id}
            className="absolute rounded-full bg-cyan-400 opacity-20 animate-pulse"
            style={{
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              animationDuration: `${dot.duration}s`
            }}
          />
        ))}
      </div>

      <div className="pt-32 pb-20">
        <Container>
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">
              My <span className="text-cyan-400">Projects</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Collections of my projects that showcase my skills and expertise.
            </p>
          </div>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-cyan-400 rounded-full"></div>
              <h2 className="text-4xl font-bold text-white">More Projects</h2>
            </div>
          </div>

          {/* Projects Container */}
          <div
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
            // style={{
            //   transform: `translateX(-${currentIndex * 100}%)`
            // }}
          >
            {projects.map((project) => (
              <Card key={project.id}>
                {/* Project Image */}
                <div className="relative w-full aspect-square overflow-hidden rounded-2xl mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                {/* Navigation Hint on Image */}
                {/* <div className="absolute top-1/2 -translate-y-1/2 left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={handlePrevious}
                        aria-label="Arrow-left"
                        className="bg-slate-900/80 p-2 rounded-full"
                      >
                        <FaArrowLeft className="w-5 h-5 text-white" />
                      </button>
                    </div> */}
                {/* <div className="absolute top-1/2 -translate-y-1/2 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={handleNext}
                        aria-label="Arrow-Right"
                        className="bg-slate-900/80 p-2 rounded-full"
                      >
                        <FaArrowRight className="w-5 h-5 text-white" />
                      </button>
                    </div> */}

                {/* Project Info */}
                <div className="flex flex-col">
                  <span>
                    <p className="text-white font-bold mb-4 leading-relaxed">
                      {project.title}
                    </p>
                    <p className="text-slate-400 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                  </span>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-slate-700/50 text-slate-300 px-4 py-2 rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* View Button */}
                  <Link
                    href={project.link}
                    target="_blank"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                  >
                    <span className="font-medium">View</span>
                    <MdOutlineArrowRight className="w-6 h-6 items-center group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-32 text-center">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Interested in{" "}
              <span className="text-cyan-400">working together?</span>
            </h3>
            <p className="text-slate-400 text-lg mb-8">
              Let&apos;s build something amazing
            </p>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PortfolioPage;
