import { ArrowRightIcon, type IconProps } from "@/components/icons";

type ServiceCardProps = {
  title: string;
  description: string;
  cta: string;
  Icon: (props: IconProps) => React.JSX.Element;
  style?: React.CSSProperties;
};

export default function ServiceCard({
  title,
  description,
  cta,
  Icon,
  style,
}: ServiceCardProps) {
  return (
    <div
      className="group flex animate-fade-in-up flex-col gap-4 rounded-2xl border border-black/[.08] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-lg dark:border-white/[.145] dark:bg-white/[.03] dark:hover:border-indigo-500/40"
      style={style}
    >
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-500/10 dark:text-indigo-400">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-semibold text-black dark:text-zinc-50">
        {title}
      </h3>
      <p className="flex-1 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
      <a
        href="#contact"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 dark:text-indigo-400"
      >
        {cta}
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
      </a>
    </div>
  );
}
