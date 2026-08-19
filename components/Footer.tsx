export default function Footer() {
  return (
    <footer className="border-t border-black/[.08] px-6 py-10 dark:border-white/[.10]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-zinc-600 sm:flex-row dark:text-zinc-400">
        <p>© {new Date().getFullYear()} RAM Automation. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#services" className="hover:text-black dark:hover:text-white">
            Services
          </a>
          <a href="#contact" className="hover:text-black dark:hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
