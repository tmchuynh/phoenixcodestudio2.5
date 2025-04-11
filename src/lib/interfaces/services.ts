import { PricingTier, ServiceTypeKeys } from "../types";

export interface Category {
  name: string;
  type: ServiceTypeKeys;
  title: string;
  short: string;
  info: Information;
}

export interface Information {
  description: string[];
  detail: string;
  short: string;
  intro: string;
  sub: string[];
}


export interface SubItem {
  category: string;
  name: string;
  info: SubInformation;
  details: (ListDetail & { intro?: string[];})[];
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