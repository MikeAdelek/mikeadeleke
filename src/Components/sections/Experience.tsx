import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "Cyntonisca Ltd",
      position: "Frontend Developer",
      period: "July 2025 - January 2026 | Remote",
      responsibilities: [
        "Implemented reusable component libraries and design systems",
        "Built SEO-optimized landing page websites for the firm, improving visibility and client engagement.",
        "Architected and led the frontend for Smart Law Office using Next.js App Router and TypeScript, delivering a modular, multi-role UI (admin/client/staff) with nested layouts and route groups to streamline feature development.",
        "Designed and implemented a reusable component library and typed UI contracts to reduce UI regressions and accelerate development.",
        "Built client-side domain stores and composable hooks that centralized business logic for case creation, document uploads, scheduling, and billing, improving testability and predictability.",
        "Implemented secure server-side API routes with shared TypeScript schemas to enforce end-to-end type safety and simplify backend integration.",
        "Added Edge middleware and cookie/session utilities to harden authentication flows and provide consistent role-based routing."
      ]
    },
    {
      company: "Visionary Services",
      position: "Frontend Developer",
      period: "May 2024 - Jun 2024 | Remote",
      responsibilities: [
        "Developed responsive user interfaces using React.js and Next.js, serving 100+ daily active users.",
        "Integrated RESTful APIs to implement real-time updates, increasing user engagement by 30%.",
        "Enhanced scalability and performance through code optimization and lazy loading.",
        "Implemented unit and integration testing, reducing production bugs by 15%.",
        "Configured OAuth-based authentication achieving 99.9% security compliance."
      ]
    },
    {
      company: "Zentrix Innovative Labs",
      position: "Frontend Developer",
      period: "Nov 2023 - Mar 2024 | Remote",
      responsibilities: [
        "Built high-performance frontend components for an edutech platform using React.js.",
        "Collaborated with UI/UX designers to achieve 95% wireframe-to-code accuracy.",
        "Improved cross-browser compatibility by 20% through advanced debugging and responsive design.",
        "Reduced page load time by 25% via code splitting, image optimization, and performance monitoring.",
        "Implemented secure payment integration features following modern API standards."
      ]
    }
  ];

  return (
    <section id="experience" className="mb-24 scroll-mt-20 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-white mb-12">Experience</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-justify">
        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-8 border-l-2 border-cyan-400">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-400"></div>
            <div className="mb-2">
              <h3 className="text-2xl font-bold text-white">
                Frontend Engineer ·{" "}
                <span className="text-cyan-400">{exp.company}</span>
              </h3>
              <p className="text-gray-400 text-sm">{exp.period}</p>
            </div>
            <ul className="space-y-3 mt-4">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-gray-300 flex items-start">
                  <span className="text-cyan-400 mr-2">▸</span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
