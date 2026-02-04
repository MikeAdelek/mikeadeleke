import React from "react";
import Link from "next/link";
import { Card } from "../ui/Card";
import { FaArrowRight } from "react-icons/fa6";

const Projects = () => {
  const projects = [
    {
      title: "Smart Law Office",
      subtitle: "The Operating System for Modern Law Firms",
      description:
        "Streamline your practice with LegalFlow. From seamless client onboarding to automated document management, we provide the tools you need to run a 21st-century law office from anywhere.",
      tags: ["Next JS (App Router)", "PostCSS", "TypeScript", "React"]
      // link: ""
    },
    {
      title: "Data Visualization Dashboard",
      subtitle: "Data visualization · Recharts · Real-time updates",
      description:
        "A responsive event management dashboard built with React.js and TailwindCSS, now featuring live news integration.",
      tags: ["React", "Recharts", "TypeScript", "Tailwind CSS"]
      // link: ""
    },
    {
      title: "E-commerce Platform (Mini-Store)",
      subtitle: "E-commerce · Checkout",
      description:
        "E-commerce application built with Next.js, showcasing best practices in React development, state management, and user experience design",
      tags: ["Next.js", "Tailwind CSS", "Zustand", "React Query"]
      // link: ''
    }
  ];

  return (
    <section id="projects" className="mb-24 scroll-mt-20 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-bold text-white">Selected Projects</h2>
        <Link
          href="/projects"
          className="text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-2"
        >
          View more <FaArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="space-y-6">
        {projects.map((project) => (
          <Card
            key={project.title}
            className="p-8 hover:border-cyan-400 transition-all duration-300 cursor-pointer"
          >
            <h3 className="text-2xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-gray-400 text-sm mb-4">{project.subtitle}</p>
            <p className="text-gray-300 leading-relaxed mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;
