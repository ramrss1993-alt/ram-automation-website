import { Fragment } from "react";
import Reveal from "@/components/Reveal";
import {
  ArrowRightIcon,
  ChatIcon,
  CheckBadgeIcon,
  DatabaseIcon,
  LayersIcon,
  MailIcon,
  PlugIcon,
  SheetIcon,
  ShareIcon,
  SparkleIcon,
  UsersIcon,
  WorkflowNodesIcon,
} from "@/components/icons";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand your current process, identify repetitive tasks and find the biggest automation opportunities.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "Design the right AI agent, workflow and integrations around your business requirements.",
  },
  {
    number: "03",
    title: "Automate",
    description:
      "Build and connect the workflow using AI, n8n, APIs and your existing business tools.",
  },
  {
    number: "04",
    title: "Optimize",
    description:
      "Monitor performance, improve the workflow and scale automation as your business grows.",
  },
];

const workflowNodes = [
  { label: "Business Process", Icon: LayersIcon },
  { label: "AI Agent", Icon: SparkleIcon },
  { label: "n8n Workflow", Icon: WorkflowNodesIcon },
  { label: "Apps & APIs", Icon: PlugIcon },
  { label: "Automated Result", Icon: CheckBadgeIcon },
];

const integrations = [
  { label: "WhatsApp", Icon: ChatIcon },
  { label: "Gmail", Icon: MailIcon },
  { label: "Google Sheets", Icon: SheetIcon },
  { label: "CRM", Icon: UsersIcon },
  { label: "APIs", Icon: PlugIcon },
  { label: "AI Models", Icon: SparkleIcon },
  { label: "Social Media", Icon: ShareIcon },
  { label: "Databases", Icon: DatabaseIcon },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-[#0a0d1e] via-[#0c1030] to-[#0a0d1e] px-6 py-24 text-zinc-100 lg:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 -z-0 h-[22rem] w-[22rem] rounded-full bg-purple-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
            How it works
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            From repetitive work to intelligent automation.
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            We connect your business processes, AI agents, workflows and the
            tools you already use to create reliable automation systems.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-[0_0_40px_-15px_rgba(129,140,248,0.5)]">
                <span className="bg-gradient-to-br from-indigo-400 to-purple-400 bg-clip-text text-3xl font-bold text-transparent">
                  {step.number}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20">
          <div className="flex flex-col items-stretch lg:flex-row lg:items-center">
            {workflowNodes.map((node, index) => (
              <Fragment key={node.label}>
                <div className="w-full lg:flex-1">
                  <div className="flex w-full flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-6 text-center transition-all duration-300 hover:border-indigo-400/40 hover:shadow-[0_0_40px_-15px_rgba(129,140,248,0.5)]">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-[0_0_20px_-4px_rgba(129,140,248,0.8)]">
                      <node.Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-medium text-zinc-100">
                      {node.label}
                    </span>
                  </div>
                </div>
                {index < workflowNodes.length - 1 && (
                  <div className="flex items-center justify-center py-2 lg:flex-none lg:px-2 lg:py-0">
                    <ArrowRightIcon className="h-5 w-5 rotate-90 animate-pulse text-indigo-400/70 lg:rotate-0" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-20 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-zinc-500">
            Connect your existing tools
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {integrations.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300 transition-colors duration-300 hover:border-indigo-400/40 hover:text-white"
              >
                <item.Icon className="h-4 w-4 text-indigo-400" />
                {item.label}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
