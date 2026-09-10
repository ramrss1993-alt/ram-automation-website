import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-zinc-50 px-6 py-24 dark:bg-zinc-950 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black dark:text-zinc-50 sm:text-4xl">
            What we automate
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Practical AI automation services built to remove repetitive work
            from your business, end to end.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              style={{ animationDelay: `${index * 90}ms` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
