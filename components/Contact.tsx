"use client";

import { useState } from "react";
import { CheckBadgeIcon, ChevronDownIcon } from "@/components/icons";

const automationOptions = [
  "AI Automation",
  "WhatsApp Chatbot",
  "Invoice Processing & OCR",
  "Social Media Workflow Automation",
  "AI Stock Market Analysis",
  "AI Voice Agent",
  "Custom Automation",
];

const inputClassName =
  "rounded-lg border border-black/[.08] bg-transparent px-3.5 py-2.5 text-sm text-black outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-white/[.145] dark:text-zinc-50";
const labelClassName = "text-sm font-medium text-black dark:text-zinc-50";

const N8N_TEST_WEBHOOK_URL =
  "https://n8n-gqi9.srv1788460.hstgr.cloud/webhook-test/ram-automation-lead";
const N8N_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || N8N_TEST_WEBHOOK_URL;

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<SubmitStatus>("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Guard against duplicate submissions (double-click, double Enter, etc.)
    if (status === "submitting") return;

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: formData.get("name"),
      businessEmail: formData.get("email"),
      company: formData.get("company"),
      phone: formData.get("phone"),
      automationType: formData.get("automationType"),
      message: formData.get("message"),
    };

    setStatus("submitting");

    try {
      const response = await fetch(
  'https://n8n-gqi9.srv1788460.hstgr.cloud/webhook/ram-automation-lead',
  {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Webhook responded with status ${response.status}`);
      }

      setStatus("success");
    } catch (error) {
      console.error("Failed to submit automation request:", error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-2xl">
        <div className="text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-black sm:text-4xl dark:text-zinc-50">
            Let&apos;s build your automation system.
          </h2>
          <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Tell us about your business and the process you&apos;d like to
            automate.
          </p>
        </div>

        <div className="mt-10">
          {status === "success" ? (
            <div className="rounded-2xl border border-black/[.08] bg-white p-8 text-center dark:border-white/[.145] dark:bg-white/[.03]">
              <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400">
                <CheckBadgeIcon className="h-5 w-5" />
              </div>
              <p className="mt-4 text-base font-medium text-black dark:text-zinc-50">
                Thanks — your automation request has been received.
              </p>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                We&apos;ll follow up as soon as we can.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-2xl border border-black/[.08] bg-white p-8 dark:border-white/[.145] dark:bg-white/[.03]"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className={labelClassName}>
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputClassName}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className={labelClassName}>
                    Business Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className={inputClassName}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className={labelClassName}>
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Your company"
                    className={inputClassName}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className={labelClassName}>
                    Phone / WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 234 567 8900"
                    className={inputClassName}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="automationType" className={labelClassName}>
                  What would you like to automate?
                </label>
                <div className="relative">
                  <select
                    id="automationType"
                    name="automationType"
                    required
                    defaultValue=""
                    className={`${inputClassName} w-full appearance-none pr-10`}
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    {automationOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  <ChevronDownIcon className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className={labelClassName}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Tell us about your process..."
                  className={`${inputClassName} resize-none`}
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  Something went wrong sending your request. Please try
                  again in a moment.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-full bg-black text-base font-medium text-white transition-colors hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                {status === "submitting"
                  ? "Sending..."
                  : "Send Automation Request"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
