import Reveal from "@/components/Reveal";
import {
  AutomationIcon,
  BarChartIcon,
  ChatIcon,
  InvoiceIcon,
  ShareIcon,
  TargetIcon,
  type IconProps,
} from "@/components/icons";

type Industry = {
  title: string;
  description: string;
  Icon: (props: IconProps) => React.JSX.Element;
};

const industries: Industry[] = [
  {
    title: "Customer Support",
    description: "FAQs, lead capture, WhatsApp support and automated responses.",
    Icon: ChatIcon,
  },
  {
    title: "Sales & Lead Management",
    description:
      "Capture leads, qualify prospects, notify sales teams and automate follow-ups.",
    Icon: TargetIcon,
  },
  {
    title: "Finance & Invoicing",
    description:
      "Invoice OCR, data extraction, validation and automated processing.",
    Icon: InvoiceIcon,
  },
  {
    title: "Marketing & Social Media",
    description:
      "Content workflows, scheduling, publishing, lead engagement and reporting.",
    Icon: ShareIcon,
  },
  {
    title: "Reporting & Analytics",
    description:
      "Automated reports, data collection, dashboards and business insights.",
    Icon: BarChartIcon,
  },
  {
    title: "AI & Business Automation",
    description:
      "AI agents, workflow automation, API integrations and intelligent business processes.",
    Icon: AutomationIcon,
  },
];

export default function Industries() {
  return (
    <section
      id="industries"
      className="scroll-mt-20 bg-zinc-50 px-6 py-24 dark:bg-zinc-950 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-4xl">
            Automation for real business operations
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            From customer communication to back-office operations, RAM
            Automation helps businesses automate workflows across multiple
            functions.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <Reveal key={industry.title} style={{ transitionDelay: `${index * 80}ms` }}>
              <div className="h-full rounded-2xl border border-black/[.08] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg dark:border-white/[.145] dark:bg-white/[.03] dark:hover:border-indigo-500/40">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                  <industry.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-black dark:text-zinc-50">
                  {industry.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {industry.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
