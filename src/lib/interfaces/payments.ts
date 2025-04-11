import { ListDetail } from "./services";

export interface PaymentDetails {
  name: string;
  title: string;
  short: string;

  info: {
    intro: string[];
    description: string;
    short: string;
    features: string[];
    shortFeatures: ListDetail[];
  };

  explanation: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  details: ListDetail[];
}

export interface PaymentPlan {
  title: string;
  description: string;
  details: string[];
  route: string;
}

export interface FormDataType {
  name: string;
  email: string;
  subject: string;
  message: string;
  paymentPlan: string;
  selectedServices: string[];
  selectedContracts: string[];
  [key: string]: string[] | string;
}