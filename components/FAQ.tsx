"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  CircleHelp,
  MessageCircle,
} from "lucide-react";

const faqs = [
  {
    question: "What is Biashara Manager?",
    answer:
      "Biashara Manager is a simple business management app designed to help small and growing businesses manage sales, products, inventory, customers, expenses, credit, receipts, reports, and other daily business activities in one place.",
  },
  {
    question: "Who is Biashara Manager designed for?",
    answer:
      "Biashara Manager is designed for small and growing businesses that want a simple and organized way to manage their daily operations, keep important records together, and understand their business performance.",
  },
  {
    question: "How much does Biashara Manager cost?",
    answer:
      "Biashara Manager offers flexible subscription periods: KSh 65 for 1 week, KSh 130 for 2 weeks, or KSh 250 for 1 month. This gives businesses the flexibility to choose a plan that works for them.",
  },
  {
    question: "Can I manage my products and inventory?",
    answer:
      "Yes. You can add and manage products, keep track of stock levels, record sales, manage prices, and organize important inventory information from one place.",
  },
  {
    question: "Can I track customers who owe me money?",
    answer:
      "Yes. Biashara Manager includes customer credit and debt tracking, making it easier to record outstanding balances and keep track of customer payments.",
  },
  {
    question: "Can employees use Biashara Manager?",
    answer:
      "Yes. Biashara Manager supports employee accounts and controlled access, allowing business owners to manage employees and control access to different parts of the system.",
  },
  {
    question: "Can I see reports about my business?",
    answer:
      "Yes. Biashara Manager provides business reports and summaries that help you understand sales, expenses, business performance, and other important information.",
  },
  {
    question: "How do I get help if I have a problem?",
    answer:
      "You can contact the Biashara Manager support team through the Support or Contact page. Our team can help you understand the app, answer questions, and assist with issues you may experience.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* =========================
            SECTION INTRO
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-surface px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary shadow-sm sm:text-xs">
            <CircleHelp
              size={14}
              strokeWidth={2}
            />

            Frequently Asked Questions
          </span>

          <h2
            id="faq-heading"
            className="mt-5 text-[2rem] font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Questions?
            <span className="block text-primary">
              We&apos;ve got answers.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted sm:mt-5 sm:text-base sm:leading-7">
            Find answers to common questions about{" "}
            <span className="font-semibold text-foreground">
              Biashara Manager
            </span>
            , subscriptions, features, and the tools available to help you
            manage your business.
          </p>

          {/* FAQ count */}
          <div className="mt-5 inline-flex items-center gap-2 text-[11px] font-medium text-muted sm:text-xs">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-[9px] font-bold text-primary">
              {faqs.length}
            </span>

            Common questions answered
          </div>
        </div>

        {/* =========================
            FAQ CONTENT
        ========================== */}
        <div className="mx-auto mt-9 max-w-4xl sm:mt-14">
          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const answerId = `faq-answer-${index}`;
              const buttonId = `faq-question-${index}`;

              return (
                <div
                  key={faq.question}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                    isOpen
                      ? "border-primary/25 shadow-md shadow-primary/5"
                      : "border-border hover:border-primary/20 hover:shadow-sm"
                  }`}
                >
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    className="flex min-h-[68px] w-full items-center justify-between gap-4 px-4 py-4 text-left sm:min-h-[76px] sm:px-6 sm:py-5"
                  >
                    <span className="flex items-start gap-3 text-sm font-bold leading-6 text-foreground sm:text-base">
                      <span
                        className={`mt-0.5 hidden h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[9px] font-bold sm:flex ${
                          isOpen
                            ? "bg-primary text-white"
                            : "bg-surface text-muted"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                        isOpen
                          ? "bg-primary text-white shadow-md shadow-primary/20"
                          : "bg-surface text-muted"
                      }`}
                    >
                      <ChevronDown
                        size={17}
                        strokeWidth={2}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-border px-4 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-5">
                        <p className="max-w-3xl text-sm leading-6 text-muted sm:text-[15px] sm:leading-7">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================
            SUPPORT CTA
        ========================== */}
        <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-3xl border border-primary/10 bg-surface shadow-sm sm:mt-14">
          <div className="relative px-5 py-8 text-center sm:px-8 sm:py-10">
            {/* Decorative glow */}
            <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-32 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm sm:h-14 sm:w-14">
                <MessageCircle
                  size={22}
                  strokeWidth={1.8}
                  className="sm:h-6 sm:w-6"
                />
              </div>

              <p className="mt-4 text-[10px] font-bold uppercase tracking-wider text-primary sm:text-xs">
                Need more help?
              </p>

              <h3 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">
                Still have questions?
              </h3>

              <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted sm:mt-3 sm:leading-7">
                Our team is happy to help you understand Biashara Manager,
                explore its features, and choose the right option for your
                business.
              </p>

              <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/support"
                  className="inline-flex min-h-11 items-center justify-center rounded-xl border border-border bg-white px-6 py-3 text-sm font-bold text-foreground shadow-sm transition-all hover:border-primary/20 hover:bg-white hover:shadow-md active:scale-[0.98]"
                >
                  Visit Support
                </Link>

                <Link
                  href="/contact"
                  className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/15 transition-all hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-xl active:scale-[0.98]"
                >
                  Contact Biashara Manager

                  <ArrowRight
                    size={15}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom reassurance */}
        <div className="mt-7 flex items-center justify-center gap-2 text-center text-[10px] text-muted sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
          Simple tools. Clear information. Better business management.
        </div>
      </div>
    </section>
  );
}