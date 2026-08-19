import Reveal from "@/components/Reveal";
import {
  ClockIcon,
  PlugIcon,
  RefreshIcon,
  TrendingUpIcon,
  type IconProps,
} from "@/components/icons";

type Benefit = {
  title: string;
  description: string;
  Icon: (props: IconProps) => React.JSX.Element;
};

const benefits: Benefit[] = [
  {
    title: "Save Time",
    description:
      "Automate repetitive tasks and give your team more time to focus on important work.",
    Icon: ClockIcon,
  },
  {
    title: "Reduce Manual Work",
    description:
      "Replace repetitive data entry, follow-ups and routine operations with reliable workflows.",
    Icon: RefreshIcon,
  },
  {
    title: "Connect Your Tools",
    description:
      "Connect WhatsApp, Google Sheets, email, CRM systems, APIs and other business tools.",
    Icon: PlugIcon,
  },
  {
    title: "Scale Faster",
    description: "Build automation systems that can grow with your business.",
    Icon: TrendingUpIcon,
  },
];

export default function WhyRamAutomation() {
  return (
    <section
      id="why-ram-automation"
      className="relative scroll-mt-20 overflow-hidden border-t border-white/5 bg-gradient-to-b from-[#0a0d1e] via-[#0d1128] to-[#0b0e22] px-6 py-24 text-zinc-100 lg:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[24rem] w-[40rem] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Why businesses choose RAM Automation
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-400">
            Practical automation designed to save time, reduce manual work
            and help your team scale.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Reveal key={benefit.title} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/40 hover:shadow-[0_0_40px_-15px_rgba(129,140,248,0.5)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-[0_0_20px_-4px_rgba(129,140,248,0.8)]">
                  <benefit.Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">
                  {benefit.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
