export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string;
  category: string;
  duration: string;
  role: string;
  fullDescription: string;
  features: string[];
  challenges: string[];
  results: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
}
