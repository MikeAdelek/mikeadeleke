export const NAV: string[] = ["home", "about", "experience", "projects"];

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/MikeAdelek" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/micheal-olomola-frontend-dev/",
  },
  { label: "Twitter", href: "https://twitter.com/yourusername" },
];

export const SKILLS = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Zustand & Redux",
  "React Query",
  "Framer Motion",
  // "REST APIs",
  "Git",
];

export const PROJECTS = [
  {
    num: "01",
    title: "Smart Law Office",
    desc: "Multi-role legal SaaS platform. Full frontend architecture, auth flows, real-time messaging, and multi-firm data isolation.",
    tech: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS"],
    href: "https://legalflow.cyntonisca.com",
  },
  {
    num: "02",
    title: "Bankify",
    desc: "Banking application prototype with analytics dashboards, auth stores, and form validation with Zod.",
    tech: ["Next.js", "Zustand", "React Query", "Framer Motion"],
    href: "https://bankify-sigma.vercel.app/",
  },
  {
    num: "03",
    title: "E-commerce Platform",
    desc: "E-commerce application built with Next.js, showcasing best practices in React development, state management, and user experience design",
    tech: ["Next.js, Zustand, React Query, Tailwind"],
    href: "https://mini-store-two-rouge.vercel.app",
  },
  {
    num: "04",
    title: "Propellent Startup Website",
    desc: "Built for software startups and small businesses, to showcase your services and mark your online presence.",
    tech: ["React.js, Framer Motion, Tailwind CSS"],
    href: "https://propellent-nine.vercel.app/",
  },
  {
    num: "05",
    title: "Data Visualization Dashboard",
    desc: "A responsive event management dashboard built with React.js and TailwindCSS, now featuring live news integration.",
    tech: ["React.js, Recharts, TypeScript"],
    href: "https://dashboard-react-js-tailwind-css.vercel.app/",
  },
];

// Helper function to get project by ID
// export const getProjectById = (id: string): Project | undefined => {
//   return projects.find((project) => project.id === id);
// };
