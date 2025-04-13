import { PricingTier } from "../types";

export interface Category {
  name: string;
  title: string;
  short: string;
  description: string[];
  sub: SubItem["name"][];
}

export interface SubItem {
  category: Category["name"];
  name: string;
  info: SubInformation;
  details: SubDetail[];
  cta: CTA;
}

export interface SubDetail {
  title: string;
  description?: string;
  intro?: string[];
  lists?: {
    title?: string;
    description: string;
    info?: ListDetail[];
  }[];
}

export interface SubInformation {
  name: string;
  title: string;
  hook?: string;
  description: string;
  startingPrice?: number;
  intro: string[];
  details: string;
  short: string;
  featured?: boolean;
  pricing: {
    pricingTierIntro?: ListDetail;
    pricingTiers: PricingTier[];
  };
}

export interface ListDetail {
  title?: string;
  description?: string;
  list?: ListDetail[];
}

export interface CTA extends ListDetail {
  intro: string;
  button: string;
  afterButtonText?: string;
}
