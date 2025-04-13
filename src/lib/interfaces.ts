import { JSX } from "react";

export interface Testimonial {
  name: string;
  featured: boolean;
  position?: string;
  rating: number;
  quote: JSX.Element;
}

export interface Project {
  title: string;
  featured: boolean;
  description: string;
  imageUrl: string;
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
