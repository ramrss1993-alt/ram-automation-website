import Reveal from "@/components/Reveal";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0b0e22] via-[#111233] to-[#0a0d1e] px-6 py-24 text-zinc-100 lg:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[26rem] w-[46rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/15 blur-3xl"
      />

      <Reveal className="relative mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Ready to automate your business?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-zinc-400">
          Tell us what takes up your team&apos;s time. We&apos;ll help you
          identify where AI and automation can make the biggest impact.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#contact"
            className="inline-flex h-12 w-full items-center justify-center rounded-full bg-white px-6 text-base font-medium text-[#0a0d1e] transition-colors hover:bg-zinc-200 sm:w-auto"
          >
            Automate Your Business
          </a>
          <a
            href="#services"
            className="inline-flex h-12 w-full items-center justify-center rounded-full border border-white/20 px-6 text-base font-medium text-white transition-colors hover:bg-white/10 sm:w-auto"
          >
            Explore Services
          </a>
        </div>
      </Reveal>
    </section>
  );
}
