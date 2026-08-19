"use client";

import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  // Not wired to a backend/email service yet — swap handleSubmit for a real
  // integration (API route, form service, etc.) when one is ready.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 px-6 py-24 lg:px-16"
    >
      <div className="mx-auto max-w-xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl dark:text-zinc-50">
            Let&apos;s automate something
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Tell me about your workflow and where the manual work is piling
            up — I&apos;ll get back to you with how it could be automated.
          </p>
        </div>

        <div className="mt-10">
          {submitted ? (
            <div className="rounded-2xl border border-black/[.08] bg-white p-8 text-center dark:border-white/[.145] dark:bg-white/[.03]">
              <p className="text-base font-medium text-black dark:text-zinc-50">
                Thanks — message received.
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                I&apos;ll follow up as soon as I can.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-2xl border border-black/[.08] bg-white p-8 dark:border-white/[.145] dark:bg-white/[.03]"
            >
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-black dark:text-zinc-50"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="rounded-lg border border-black/[.08] bg-transparent px-3.5 py-2.5 text-sm text-black outline-none transition-colors focus:border-indigo-500 dark:border-white/[.145] dark:text-zinc-50"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-black dark:text-zinc-50"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="rounded-lg border border-black/[.08] bg-transparent px-3.5 py-2.5 text-sm text-black outline-none transition-colors focus:border-indigo-500 dark:border-white/[.145] dark:text-zinc-50"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-black dark:text-zinc-50"
                >
                  What would you like to automate?
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell me about your process..."
                  className="resize-none rounded-lg border border-black/[.08] bg-transparent px-3.5 py-2.5 text-sm text-black outline-none transition-colors focus:border-indigo-500 dark:border-white/[.145] dark:text-zinc-50"
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-full bg-black text-base font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
