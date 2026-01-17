"use client";

import React from "react";
import { MdDownload } from "react-icons/md";
import { Container } from "@/Components/ui/Container";
import Experience from "@/Components/sections/Experience";
import Projects from "@/Components/sections/Projects";

export default function Home() {
  const [activeSection, setActiveSection] = React.useState("about");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of fixed header plus some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });

      setActiveSection(sectionId);
    }
  };

  const navItems = [
    { id: "about", label: "About Me" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" }
  ];

  const dots = Array.from({ length: 30 }, () => ({
    id: 1,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 3 + 2
  }));

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Michael Olomola Frontend Developer.pdf";
    link.download = "Michael Olomola Frontend Developer.pdf";
    link.click();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-8">
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

      <div className="flex pt-16">
        {/* Left Sidebar */}
        <aside className="hidden lg:block fixed left-0 top-16 bottom-0 w-60 bg-slate-900/50 backdrop-blur-sm border-r border-slate-700 p-8 overflow-y-auto z-40">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-2">Mike Olomola</h2>
            <p className="text-gray-400 text-sm">
              Frontend Engineer & Technical Writer
            </p>
          </div>

          <nav className="space-y-2 mb-12">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-2 rounded transition-colors ${
                  activeSection === item.id
                    ? "text-cyan-400 bg-slate-800"
                    : "text-gray-400 hover:text-cyan-400 hover:bg-slate-800/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            onClick={handleDownloadCV}
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
          >
            <MdDownload className="w-4 h-4" />
            <span>Download CV</span>
          </button>
        </aside>

        {/* Main Content */}
        <main className="w-full lg:ml-52 flex-1 z-10">
          <Container>
            {/* Hero/About Section */}
            <section
              id="about"
              className="mb-24 scroll-mt-20 max-w-5xl mx-auto"
            >
              {/* <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-relaxed text-justify">
                I&apos;m Mike Olomola, a {""}
                <span className="text-cyan-400">
                  Frontend Engineer & Technical Writer
                </span>{" "}
                with a passion for building products that are both{" "}
                <span className="text-cyan-400">delightful to use</span> and{" "}
                <span className="text-cyan-400">resilient at scale</span>.
              </h2> */}

              <div className="space-y-6 text-gray-300 text-lg leading-relaxed text-justify">
                <p>
                  My background spans modern frontend engineering with React,
                  TypeScript, and design systems, as well as technical writing.
                </p>

                <p>
                  On the frontend, I focus on creating{" "}
                  <span className="text-white font-semibold">
                    pixel-perfect, accessible UIs
                  </span>{" "}
                  using reusable component systems, advanced form flows, and
                  smooth animations. As a{" "}
                  <span className="text-cyan-400 italic">technical writer</span>
                  , I transform complex development workflows into clear,
                  actionable documentation — including{" "}
                  <span className="text-cyan-400 italic">
                    API references, integration guides, and deployment
                    documentation.
                  </span>
                  {/* . I work closely with backend and DevOps teams to ensure
                  seamless communication across the stack, emphasizing{" "}
                  <span className="text-white font-semibold">
                    clarity, reliability, and scalability
                  </span>{" "}
                  so teams can build, operate, and iterate with confidence. */}
                </p>

                {/* <p>
                  Recently, I&apos;ve built a{" "}
                  <span className="text-cyan-400 italic">
                    responsive e-commerce web app
                  </span>{" "}
                  with a modern frontend architecture using{" "}
                  <span className="text-cyan-400 italic">
                    React, TypeScript, Tailwind CSS, and Zustand
                  </span>
                  , integrating real-time data and seamless checkout flows. I
                  also developed a{" "}
                  <span className="text-cyan-400 italic">
                    UI component system
                  </span>{" "}
                  for scalable design consistency and{" "}
                  <span className="text-cyan-400 italic">
                    interactive analytics dashboards
                  </span>{" "}
                  using Recharts and React Query. Currently, I&apos;m advancing
                  my cloud and deployment skills while preparing for the{" "}
                  <span className="text-white font-semibold">
                    Microsoft Azure Developer Associate (AZ-204)
                  </span>{" "}
                  certification.
                </p> */}

                <p>
                  Beyond code, I&apos;m driven by{" "}
                  <span className="text-white font-semibold">
                    clarity, reliability, and impact
                  </span>
                  . I enjoy collaborating across teams, simplifying complex
                  problems, and delivering solutions that make life easier for
                  both developers and end-users. My goal is to grow into a role
                  as{" "}
                  <span className="text-cyan-400 font-semibold">
                    a software engineer
                  </span>{" "}
                  to shape products people trust and love.
                </p>
              </div>
            </section>

            {/* Experience Section */}
            <Experience />

            {/* Projects Sections */}
            <Projects />

            {/* Footer */}
            <footer className="text-center text-gray-500 py-8 border-t border-slate-700">
              <p>© 2025 Olomola Michael Adeleke</p>
            </footer>
          </Container>
        </main>
      </div>
    </div>
  );
}

// {/* Hero Section */}
// <section className="min-h-screen flex items-center">
//   <Container className="container">
//     <div className="grid lg:grid-cols-2 gap-12 items-center">
//       {/* Left Side */}
//       <div>
//         <h1 className="text-6xl lg:text-8xl font-light text-gray-700 mb-4">
//           Frontend
//         </h1>
//         <h2 className="text-6xl lg:text-8xl font-light text-gray-700">
//           Developer
//         </h2>
//         <p className="text-lg text-gray-500 mt-6 max-w-md">
//           2+ years building web applications with React.js, Next.js, and
//           modern technologies.
//         </p>
//         <Button className="flex items-center mt-8">
//           View my Work <FaArrowRight size={20} className="ml-2" />
//         </Button>
//       </div>

//       {/* Right Side */}
//       <div className="text-center">
//         <div className="relative">
//           {/* Profile Image Placeholder */}
//           <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-100 to bg-indigo-200 rounded-full flex items-center justify-center">
//             <FaUser size={120} />
//           </div>

//           {/* Code Snippet */}
//           <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white/90 p-4 rounded-lg shadow-lg text-sm font-mono">
//             <div className="text-blue-600">&lt;Developer&gt;</div>
//             <div className="ml-4 text-green-600">
//               experience: "2+ years"
//             </div>
//             <div className="ml-4 text-blue-600">
//               skills: "React, TypeScript"
//             </div>
//             <div className="text-blue-600">&lt;/Developer&gt;</div>
//           </div>
//         </div>

//         <div className="mt-12 text-right">
//           <h3 className="text-4xl lg:text-6xl font-light text-gray-700 mb-4">
//             &lt;writer&gt;
//           </h3>
//           <p className="text-lg text-gray-500 max-w-md ml-auto">
//             Technical Writer creating clean, helpful documentation.
//           </p>
//         </div>
//       </div>
//     </div>
//   </Container>
// </section>

// {/* Featured Work */}
// <section className="py-20 bg-slate-900">
//   <Container className="container">
//     <div className="text-center mb-16">
//       <h2 className="text-4xl font-light text-gray-600 mb-8">
//         Some of My Latest Work
//       </h2>
//     </div>

//     <div className="grid md:grid-cols-3 gap-8">
//       {featuredProjects.map((project, index) => (
//         <div key={index}>
//           <Card>
//             <div className="bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
//               <div className="h-48 bg-gradient-to-br from-blue-100 to-indigo-200 relative overflow-hidden">
//                 <div className="absolte inset-0 bg-black/20"></div>
//                 {/*  */}
//                 <div className="p-6">
//                   <div className="flex items-center justify-between mb-2">
//                     {/* <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded">
//                         {project.category}
//                       </span> */}
//                     <h3 className="text-xl font-semibold text-gray-800 mt-3 mb-2">
//                       {project.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm leading-relaxed">
//                       {project.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Card>
//         </div>
//       ))}
//     </div>
//   </Container>
// </section>
