export default function Footer() {
  return (
    <footer className="border-t border-black/[.08] px-6 py-10 dark:border-white/[.10]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row sm:items-start">
        <div className="text-center sm:text-left">
          <p className="text-base font-semibold tracking-tight text-black dark:text-zinc-50">
            RAM Automation
          </p>
          <p className="mt-1.5 max-w-xs text-sm text-zinc-600 dark:text-zinc-400">
            AI automation systems that help businesses work smarter.
          </p>
        </div>

        <nav className="flex gap-6 text-sm text-zinc-600 dark:text-zinc-400">
          <a href="#services" className="hover:text-black dark:hover:text-white">
            Services
          </a>
          <a href="#how-it-works" className="hover:text-black dark:hover:text-white">
            How It Works
          </a>
          <a href="#contact" className="hover:text-black dark:hover:text-white">
            Contact
          </a>
        </nav>
      </div>

      <p className="mx-auto mt-8 max-w-6xl border-t border-black/[.08] pt-6 text-center text-xs text-zinc-500 dark:border-white/[.10] dark:text-zinc-500">
        © {new Date().getFullYear()} RAM Automation. All rights reserved.
      </p>
    </footer>
  );
}
