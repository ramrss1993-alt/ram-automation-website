import {
  AutomationIcon,
  ChatIcon,
  InvoiceIcon,
  ShareIcon,
  TrendingUpIcon,
  PhoneIcon,
  type IconProps,
} from "@/components/icons";

export type Service = {
  title: string;
  description: string;
  cta: string;
  Icon: (props: IconProps) => React.JSX.Element;
};

export const services: Service[] = [
  {
    title: "AI Automation",
    description:
      "End-to-end business process automation using AI agents, n8n and APIs.",
    cta: "Automate a process",
    Icon: AutomationIcon,
  },
  {
    title: "WhatsApp Chatbot Automation",
    description:
      "AI-powered WhatsApp chatbots for FAQs, customer support, lead capture and business automation.",
    cta: "Build a chatbot",
    Icon: ChatIcon,
  },
  {
    title: "Invoice Processing & OCR",
    description:
      "Automate invoice data extraction, validation, processing and storage using OCR and AI.",
    cta: "Streamline invoicing",
    Icon: InvoiceIcon,
  },
  {
    title: "Social Media Workflow Automation",
    description:
      "Automate social media content workflows, scheduling, publishing, lead engagement and reporting.",
    cta: "Automate social workflows",
    Icon: ShareIcon,
  },
  {
    title: "AI Stock Market Analysis",
    description:
      "AI-powered stock market research, financial data analysis, market insights, technical analysis and automated reporting.",
    cta: "Explore market analysis",
    Icon: TrendingUpIcon,
},
{
  title: "AI Voice Agent",
  description:
    "AI-powered voice agents that handle customer calls, answer questions, qualify leads and automate conversations.",
  cta: "Build a voice agent",
  Icon: PhoneIcon,
},
];

