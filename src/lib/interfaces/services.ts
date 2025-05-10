import { JSX } from "react";
import { IconType } from "react-icons/lib";
import { PricingTier } from "../types";

export interface Category {
  name: string;
  subtitle: string;
  title: string;
  short: string;
  description: string[];
  sub: SubItem["name"][];
}

export interface SubItem {
  category: Category["name"];
  name: string;
  subtitle: string;
  info: SubInformation;
  details: SubDetail[];
  cta: CTA;
}

export interface SubDetail {
  title: string;
  description?: string;
  intro?: string[];
  lists?: List[];
}

export interface List {
  title?: string;
  description: string;
  info?: ListDetail[];
  icon?: IconType;
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
  description?: string | JSX.Element;
  list?: ListDetail[];
}

export interface CTA extends ListDetail {
  intro: string;
  button: string;
  afterButtonText?: string;
}
