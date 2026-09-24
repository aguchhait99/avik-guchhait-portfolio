export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  tags: string[];
  points: string[];
  category: 'web-apps' | 'admin-panels' | 'e-commerce';
  featuredImageColor: string; // Dynamic background for the project card
  demoUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  duration: string;
  bullets: string[];
  color: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[]; // Level 1-5 for visual visualizer
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
}
