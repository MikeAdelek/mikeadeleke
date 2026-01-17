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
