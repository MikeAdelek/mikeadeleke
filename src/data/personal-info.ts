// Your personal information (for About page and metadata)

export interface PersonalInfo {
  name: string;
  title: string;
  subtitle: string;
  email: string;
  phone: string;
  location: string;
  portfolio: string;
  linkedin: string;
  github: string;
  bio: string;
  shortBio: string;
  skills: {
    frontend: string[];
    backend: string[];
    tools: string[];
    writing: string[];
  };
  stats: {
    bugReduction: number;
    performanceImprovement: number;
    userEngagement: number;
  };
}

export const personalInfo: PersonalInfo = {
  name: "Michael Adeleke Olomola",
  title: "Frontend Developer",
  subtitle: "Frontend Developer & Technical Writer",
  email: "oikeoluwa@gmail.com",
  phone: "+2348054038934",
  location: "Lagos State, Nigeria",
  portfolio: "https://folll.io/mikeadeleke",
  linkedin: "https://linkedin.com/in/micheal-olomola-frontend-dev",
  github: "https://github.com/MikeAdelek",
  bio: `Proficient frontend developer with 2+ years of experience building scalable web applications, high-converting landing pages, and business websites for fintech and startup companies. 

I have a proven track record of reducing production bugs by 15%, improving application performance by 25%, and increasing user engagement by 30% through optimized designs and technical writing expertise.`,
  shortBio:
    "2+ years building scalable web applications with React.js, Next.js, and modern technologies.",
  skills: {
    frontend: [
      "React.js",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Responsive Design"
    ],
    backend: ["RESTful APIs", "GraphQL", "Authentication (JWT, OAuth 2.0)"],
    tools: [
      "Git",
      "GitHub",
      "Jest",
      "ESLint",
      "Framer Motion",
      "GSAP",
      "Figma"
    ],
    writing: [
      "Technical Documentation",
      "API Documentation",
      "User Guides",
      "Blog Writing"
    ]
  },
  stats: {
    bugReduction: 15,
    performanceImprovement: 25,
    userEngagement: 30
  }
};
