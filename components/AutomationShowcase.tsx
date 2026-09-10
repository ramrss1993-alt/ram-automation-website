import { Fragment } from "react";
import Reveal from "@/components/Reveal";
import {
  ArrowRightIcon,
  AutomationIcon,
  BarChartIcon,
  CalendarIcon,
  ChatIcon,
  CheckBadgeIcon,
  DatabaseIcon,
  InvoiceIcon,
  LightbulbIcon,
  MailIcon,
  ScanIcon,
  SheetIcon,
  ShareIcon,
  SparkleIcon,
  TrendingUpIcon,
  UsersIcon,
  WorkflowNodesIcon,
  type IconProps,
} from "@/components/icons";

type WorkflowNode = {
  label: string;
  Icon: (props: IconProps) => React.JSX.Element;
};

type Showcase = {
  number: string;
  Icon: (props: IconProps) => React.JSX.Element;
  title: string;
  tagline: string;
  description: string;
  workflow: WorkflowNode[];
  badges: string[];
  cta: string;
  disclaimer?: string;
};

const showcases: Showcase[] = [
  {
    number: "01",
    Icon: ChatIcon,
    title: "WhatsApp AI Chatbot",
    tagline: "AI + n8n + WhatsApp",
    description:
      "Automate customer conversations, answer FAQs, capture leads and route conversations using an AI-powered WhatsApp workflow.",
    workflow: [
      { label: "Customer", Icon: UsersIcon },
      { label: "WhatsApp", Icon: ChatIcon },
      { label: "AI Agent", Icon: SparkleIcon },
      { label: "n8n", Icon: WorkflowNodesIcon },
      { label: "CRM / Sheets", Icon: SheetIcon },
      { label: "Automated Response", Icon: CheckBadgeIcon },
    ],
    badges: ["AI Agent", "n8n", "WhatsApp", "CRM", "Google Sheets"],
    cta: "Automate customer support",
  },
  {
    number: "02",
    Icon: InvoiceIcon,
    title: "Invoice Processing & OCR",
    tagline: "OCR + AI + Automation",
    description:
      "Extract invoice information automatically, validate data and send structured information into your business systems.",
    workflow: [
      { label: "Invoice", Icon: InvoiceIcon },
      { label: "OCR", Icon: ScanIcon },
      { label: "AI Extraction", Icon: SparkleIcon },
      { label: "Validation", Icon: CheckBadgeIcon },
      { label: "Database / ERP", Icon: DatabaseIcon },
      { label: "Processed Invoice", Icon: InvoiceIcon },
    ],
    badges: ["Document", "OCR", "AI", "Validation", "Database"],
    cta: "Automate invoice processing",
  },
  {
    number: "03",
    Icon: ShareIcon,
    title: "Social Media Workflow Automation",
    tagline: "AI + Scheduling + Analytics",
    description:
      "Turn content ideas into scheduled social posts with AI-assisted creation, approval, publishing and reporting.",
    workflow: [
      { label: "Content Idea", Icon: LightbulbIcon },
      { label: "AI Content", Icon: SparkleIcon },
      { label: "Approval", Icon: CheckBadgeIcon },
      { label: "Scheduler", Icon: CalendarIcon },
      { label: "Social Platforms", Icon: ShareIcon },
      { label: "Analytics", Icon: TrendingUpIcon },
    ],
    badges: ["AI", "Scheduler", "Social Platforms", "Analytics"],
    cta: "Automate social workflows",
  },
  {
    number: "04",
    Icon: TrendingUpIcon,
    title: "AI Stock Market Analysis",
    tagline: "AI + Data + Reporting",
    description:
      "Automate market research, financial data processing, technical analysis and reporting using AI-powered workflows.",
    workflow: [
      { label: "Market Data", Icon: TrendingUpIcon },
      { label: "Data Processing", Icon: AutomationIcon },
      { label: "AI Analysis", Icon: SparkleIcon },
      { label: "Technical Indicators", Icon: BarChartIcon },
      { label: "Market Report", Icon: SheetIcon },
      { label: "Dashboard / Email", Icon: MailIcon },
    ],
    badges: ["Market Data", "AI Analysis", "Technical Indicators", "Reporting"],
    cta: "Explore market analysis",
    disclaimer:
      "For research and informational purposes only — not financial advice, and not a guarantee of investment returns.",
  },
];

export default function AutomationShowcase() {
  return (
    <section
      id="automation-solutions"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/5 bg-gradient-to-b from-[#0b0e22] via-[#111233] to-[#0a0d1e] px-6 py-24 text-zinc-100 lg:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-10 -z-0 h-[24rem] w-[24rem] rounded-full bg-purple-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 -z-0 h-[24rem] w-[24rem] rounded-full bg-indigo-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            Automation Solutions
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Automation solutions, built for real businesses.
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            Four automation systems we build for clients — see the tools,
            the workflow and the outcome behind each one.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {showcases.map((item, index) => (
            <Reveal key={item.number} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="group flex h-full flex-col gap-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-[0_0_50px_-15px_rgba(129,140,248,0.5)] sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-[0_0_20px_-4px_rgba(129,140,248,0.8)]">
                    <item.Icon className="h-6 w-6" />
                  </div>
                  <span className="bg-gradient-to-br from-indigo-400 to-purple-400 bg-clip-text text-2xl font-bold text-transparent">
                    {item.number}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.1em] text-indigo-400/80">
                    {item.tagline}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {item.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-x-1.5 gap-y-3">
                  {item.workflow.map((node, nodeIndex) => (
                    <Fragment key={node.label}>
                      <div className="flex w-[5.5rem] flex-col items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] px-2 py-2.5 text-center">
                        <node.Icon className="h-4 w-4 text-indigo-300" />
                        <span className="text-[11px] font-medium leading-tight text-zinc-300">
                          {node.label}
                        </span>
                      </div>
                      {nodeIndex < item.workflow.length - 1 && (
                        <ArrowRightIcon className="h-3.5 w-3.5 shrink-0 text-indigo-400/50" />
                      )}
                    </Fragment>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-zinc-400"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {item.disclaimer && (
                  <p className="text-xs italic leading-5 text-zinc-500">
                    {item.disclaimer}
                  </p>
                )}

                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400"
                >
                  {item.cta}
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
