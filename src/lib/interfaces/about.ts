import { ListDetail } from "./services";

export interface TimelineEntry {
  title: string;
  subtitle?: string;
  caption?: string;
  description?: string;
  list?: ListDetail[];
  content?: React.ReactNode;
}
