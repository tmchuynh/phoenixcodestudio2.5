import { IconType } from "react-icons/lib";

export type AlertContentType = {
  title: string;
  description: string;
  icon: React.ComponentType;
  type: "filter" | "results";
} | null;

export type NotFoundContextType = {
  isNotFound: boolean;
  setNotFound: (value: boolean) => void;
};

export type LengthType = number | string;

export type DynamicButtonProps = {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "secondaryOutline"
    | "secondaryGhost"
    | "secondaryLink"
    | "accent"
    | "accentOutline"
    | "accentGhost"
    | "accentLink"
    | "tertiary"
    | "tertiaryOutline"
    | "tertiaryGhost"
    | "tertiaryLink"
    | "fancy"
    | "fancyOutline"
    | "fancyGhost"
    | "fancyLink"
    | "destructive"
    | "destructiveOutline"
    | "destructiveGhost"
    | "destructiveLink"
    | "ghost"
    | "link"
    | "disabled";
  text: string;
  icon?: IconType;
  onClick?: () => void;
  className?: string;
  iconClassName?: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Menu = {
  title: string;
  href: string;
  description: string;
  imageUrl?: string;
};

export type PricingTier = {
  name: string;
  startingPrice: number;
  info: string;
};

export type StarRatingProps = {
  rating: number;
  maxStars?: number;
};
