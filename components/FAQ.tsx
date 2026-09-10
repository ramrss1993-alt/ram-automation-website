"use client";

import { useState } from "react";

const faqs = [
  {
    question: "What is AI automation, and how can it help my business?",
    answer:
      "AI automation combines artificial intelligence with workflow automation to handle repetitive tasks, save time, reduce manual work, and improve response times. Examples include lead management, customer support, email automation, data processing, and reporting.",
  },
  {
    question: "What can a WhatsApp AI chatbot automate?",
    answer:
      "A WhatsApp AI chatbot can answer common questions, provide information, collect customer and lead details, qualify leads, and route important conversations to your team. It can also operate 24/7.",
  },
  {
    question: "How does invoice processing and OCR automation work?",
    answer:
      "OCR automation reads information from invoices and documents and converts it into structured data. Details such as invoice number, date, vendor, and amount can then be automatically sent to your systems or workflows.",
  },
  {
    question: "What is an AI Voice Agent?",
    answer:
      "An AI Voice Agent can handle phone conversations, answer frequently asked questions, collect information, qualify leads, schedule appointments, and transfer complex conversations to your team.",
  },
  {
    question: "Can you automate my social media workflows?",
    answer:
      "Yes. Social media automation can streamline content preparation, scheduling, publishing, notifications, lead engagement, and reporting so your team can spend more time on strategy and creativity.",
  },
  {
    question: "Can you build custom automation for my business?",
    answer:
      "Yes. We first understand your existing process and identify repetitive or time-consuming tasks. Then we design an automation workflow around your business instead of forcing your business to change its process.",
  },
  {
    question:
      "Can you integrate automation with my CRM, Google Sheets, email, APIs, or other tools?",
    answer:
      "Yes. RAM Automation can connect workflows with CRM systems, Google Sheets, email platforms, WhatsApp, APIs, databases, and many other business applications.",
  },
  {
    question: "How long does it take to build an automation?",
    answer:
      "The timeline depends on the complexity of the workflow. Simple automations may take a few days, while larger systems involving multiple applications, AI, and custom integrations can take longer. We define the approach and scope before implementation.",
  },
  {
    question: "How does your AI Stock Market Analysis service work?",
    answer:
      "AI Stock Market Analysis can help organize market information, perform structured research and analysis, and generate useful insights or reports. It is designed as an analysis and productivity tool, not as financial advice or a guarantee of investment returns.",
  },
  {
    question: "How do I get started with RAM Automation?",
    answer:
      "Simply use the contact form and tell us about your business and the process you want to automate. We review your requirements, discuss the best approach, and then plan, build, test, and launch the automation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggleFAQ(index: number) {
    setOpenIndex(openIndex === index ? null : index);
  }

  return (
    <section id="faq" className="scroll-mt-20 px-6 py-24 lg:px-16">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-400">
            FAQ
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-black sm:text-4xl dark:text-zinc-50">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
            Everything you need to know about our AI and business automation
            services.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-2xl border border-black/[.08] bg-white dark:border-white/[.145] dark:bg-white/[.03]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="border-b border-black/[.08] last:border-b-0 dark:border-white/[.145]"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-black/[.02] dark:hover:bg-white/[.04]"
                >
                  <span className="text-base font-medium text-black dark:text-zinc-50">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-black/[.08] text-xl text-zinc-600 transition-transform dark:border-white/[.145] dark:text-zinc-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}