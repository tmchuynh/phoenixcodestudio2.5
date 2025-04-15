import { JSX } from "react";

export interface Testimonial {
  name: string;
  featured: boolean;
  position?: string;
  rating: number;
  quote: JSX.Element;
}
