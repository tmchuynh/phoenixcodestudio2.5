import { PricingTier } from "../types";

export interface Category {
  name: string;
  title: string;
  short: string;
  description: string[];
  sub: string[];
}

export interface SubItem {
  category: string;
  name: string;
  title: string;
  short: string;
  startingPrice: number;
  Icon: string;
  pricingTiers: PricingTier[];
  cta: CTA;
}

export interface ListDetail {
  title?: string;
  description?: string;
  list?: ListDetail[];
}

export interface SubInformation {
  name: string;
  title: string;
  menuCaption?: string;
  description: string;
  startingPrice?: number;
  info: string;
  details: string;
  short: string;
  featured?: boolean;
  Icon?: string;
  pricingTierIntro?: {
    title: string;
    text: string;
  };
  pricingTiers?: PricingTier[];
}

export interface CTA {
  title: string;
  intro?: string;
  text?: string;
  button: string;
  afterButtonText?: string;
}
