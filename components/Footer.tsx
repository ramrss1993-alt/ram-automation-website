export default function Footer() {
  return (
    <footer className="border-t border-white/[.10] bg-[#080713] px-6 py-16 text-zinc-300 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a
              href="#"
              className="text-xl font-semibold tracking-tight text-white"
            >
              RAM <span className="text-green-400">Automation</span>
            </a>

            <p className="mt-5 max-w-xs text-sm leading-6 text-zinc-400">
              AI-powered automation systems that help businesses save time,
              reduce manual work, and scale efficiently.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex gap-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7503656094905569280/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-green-500/30 text-sm font-semibold text-zinc-300 transition-colors hover:border-green-400 hover:text-green-400"
              >
                in
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ramautomation.ai/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-green-500/30 text-sm font-semibold text-zinc-300 transition-colors hover:border-green-400 hover:text-green-400"
              >
                ◎
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919666957333"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-green-500/30 text-sm font-semibold text-zinc-300 transition-colors hover:border-green-400 hover:text-green-400"
              >
                W
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-green-400">
              Services
            </h3>

            <nav className="mt-5 flex flex-col gap-3 text-sm">
              <a href="#services" className="transition-colors hover:text-white">
                AI Automation
              </a>
              <a href="#services" className="transition-colors hover:text-white">
                WhatsApp AI Chatbots
              </a>
              <a href="#services" className="transition-colors hover:text-white">
                AI Voice Agents
              </a>
              <a href="#services" className="transition-colors hover:text-white">
                CRM Automation
              </a>
              <a href="#services" className="transition-colors hover:text-white">
                Invoice Processing & OCR
              </a>
              <a href="#services" className="transition-colors hover:text-white">
                Social Media Automation
              </a>
              <a href="#services" className="transition-colors hover:text-white">
                Lead Generation
              </a>
              <a href="#services" className="transition-colors hover:text-white">
                n8n Workflow Automation
              </a>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-green-400">
              Company
            </h3>

            <nav className="mt-5 flex flex-col gap-3 text-sm">
              <a href="#" className="transition-colors hover:text-white">
                About
              </a>
              <a
                href="#how-it-works"
                className="transition-colors hover:text-white"
              >
                How It Works
              </a>
              <a href="#services" className="transition-colors hover:text-white">
                Services
              </a>
              <a href="#faq" className="transition-colors hover:text-white">
                FAQ
              </a>
              <a href="#contact" className="transition-colors hover:text-white">
                Contact
              </a>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-green-400">
              Connect
            </h3>

            <div className="mt-5 flex flex-col gap-3 text-sm">
              <a
                href="https://www.linkedin.com/feed/update/urn:li:activity:7503656094905569280/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/ramautomation.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Instagram
              </a>

              <a
                href="https://wa.me/919666957333"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                WhatsApp
              </a>

              <a
                href="#contact"
                className="transition-colors hover:text-white"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-4 border-t border-white/[.10] pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} RAM Automation. All rights reserved.
          </p>

          <p>AI-powered automation for modern businesses ✦</p>
        </div>
      </div>
    </footer>
  );
}