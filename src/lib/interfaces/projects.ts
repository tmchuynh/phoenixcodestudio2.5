export interface Project {
  title: string;
  slogan: string;
  featured: boolean;
  description: string;
  tags: string[];
  tech: {
    languages: string[];
    frameworks?: string[];
    libraries?: string[];
    technologies?: string[];
  };
  githubLink?: string;
  liveLink?: string;
  short?: string;
  quote?: string;
}
