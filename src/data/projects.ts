export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Process to Promise Conference",
    description: "Process to Promise Virtual Conference",
    tech: ["Next.js, Tailwind, Framer motion"],
    image: "/process2promise.png",
    link: "https://process2promise-virtual-conference.vercel.app/"
  },
  {
    id: "2",
    title: "E-commerce Platform",
    description:
      "E-commerce application built with Next.js, showcasing best practices in React development, state management, and user experience design",
    tech: ["Next.js, Zustand, React Query, Tailwind"],
    image: "/mini-store-main.png",
    link: "https://mini-store-two-rouge.vercel.app/"
  },
  {
    id: "3",
    title: "Propellent Startup Website",
    description:
      "Built for software startups and small businesses, to showcase your services and mark your online presence.",
    tech: ["React.js, Framer Motion, Tailwind CSS"],
    image: "/propellent-main.png",
    link: "https://propellent-nine.vercel.app/"
  },
  {
    id: "4",
    title: "Data Visualization Dashboard",
    description:
      "A responsive event management dashboard built with React.js and TailwindCSS, now featuring live news integration.",
    tech: ["React.js, Recharts, TypeScript"],
    image: "/dashboard-main.png",
    link: "https://dashboard-react-js-tailwind-css.vercel.app/"
  },
  {
    id: "5",
    title: "Google Flight Clone",
    description:
      "Flight search application built with React and TypeScript that helps you find the best flight deals worldwide.",
    tech: ["Next, TypeScript, Axios, Skyscraper API"],
    image: "/google-flight.png",
    link: "https://google-flight-clone-mu.vercel.app/"
  },
  {
    id: "6",
    title: "Movie App",
    description:
      "Movie App built with React and TypeScript that helps you find the best movies.",
    tech: ["React.js, Axios"],
    image: "/movie-app.png",
    link: "https://movie-app-beta-gray.vercel.app/"
  }
];

// Helper function to get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id);
};
