export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 pb-24 sm:pt-28 sm:pb-32 lg:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-10rem] -z-10 h-[28rem] w-[42rem] -translate-x-1/2 rounded-full bg-indigo-400/20 blur-3xl dark:bg-indigo-500/10"
      />

      <div className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center rounded-full border border-black/[.08] px-3 py-1 text-xs font-medium text-zinc-600 dark:border-white/[.145] dark:text-zinc-400">
          AI Automation Agency
        </span>

        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-black sm:text-6xl dark:text-zinc-50">
          Automate the busywork.
          <br />
          Focus on growth.
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
          RAM Automation designs and builds AI agents, chatbots and workflow
          pipelines that take repetitive work off your team&apos;s plate —
          from customer support to invoicing to reporting.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-black px-6 text-base font-medium text-white transition-colors hover:bg-zinc-800 sm:w-auto dark:bg-white dark:text-black dark:hover:bg-zinc-200"
          >
            Automate Your Business
          </a>
          <a
            href="#services"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-black/[.08] px-6 text-base font-medium text-black transition-colors hover:bg-black/[.04] sm:w-auto dark:border-white/[.145] dark:text-zinc-50 dark:hover:bg-white/[.06]"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
}
