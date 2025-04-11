import { ListDetail } from "./services";

export interface BlogPost {
  title: string;
  author: string;
  excerpt: string;
  featured?: boolean;
  topics: string[];
  intro: string[];
  list?: ListDetail[];
  conclusions: string[];
}

export interface Blog {
  title: string;
  excerpt: string;
  icons: string[];
}
