import { ListDetail } from "./services";

export interface BlogPost {
  title: string;
  author: string;
  cardImage: string;
  imageUrl: string;
  image2Url: string;
  excerpt: string;
  featured?: boolean;
  topics: string[];
  intro: string[];
  list?: ListDetail[];
  conclusions: string[];
  date: { day: number; month: number; year: number };
}
