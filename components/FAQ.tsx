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
      "Biashara Manager is a business management app designed to help small and growing businesses manage sales, products, inventory, customers, expenses, reports, and other daily business activities in one place.",
  },
  {
    question: "Who is Biashara Manager designed for?",
    answer:
      "It is designed for small and growing businesses that want a simpler way to organize their daily operations and keep important business information together.",
  },
  {
    question: "How much does Biashara Manager cost?",
    answer:
      "Biashara Manager offers flexible subscription periods: KSh 65 for 1 week, KSh 130 for 2 weeks, or KSh 250 for 1 month.",
  },
  {
    question: "Can I manage my products and inventory?",
    answer:
      "Yes. You can manage products, keep track of stock, record sales, and organize important inventory information.",
  },
  {
    question: "Can I track customers who owe me money?",
    answer:
      "Yes. Biashara Manager includes customer credit and debt tracking to help you keep records of outstanding balances.",
  },
  {
    question: "Can employees use the system?",
    answer:
      "Yes. Biashara Manager supports employee accounts and controlled access so business owners can manage who has access to different parts of the system.",
  },
  {
    question: "Can I see reports about my business?",
    answer:
      "Yes. The app provides business reports and summaries that can help you understand sales, expenses, and overall business performance.",
  },
  {
    question: "How do I get help if I have a problem?",
    answer:
      "You can contact the Biashara Manager support team through the support or contact page. We are available to help you understand the app and resolve issues.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="bg-white px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-surface px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary">
            <CircleHelp size={14} />
            Frequently asked questions
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Questions?
            <span className="block text-primary">
              We've got answers.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Here are some common questions about Biashara Manager,
            subscriptions, and the tools available to your business.
          </p>
        </div>

        {/* FAQ list */}
        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-primary/25 shadow-lg shadow-primary/5"
                    : "border-border hover:border-primary/15"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left sm:px-6"
                >
                  <span className="text-sm font-bold text-foreground sm:text-base">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      isOpen
                        ? "bg-primary text-white"
                        : "bg-surface text-muted"
                    }`}
                  >
                    <ChevronDown
                      size={17}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-border px-5 pb-5 pt-4 text-sm leading-7 text-muted sm:px-6">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support CTA */}
        <div className="mt-12 rounded-3xl border border-border bg-surface p-7 text-center sm:p-9">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
            <MessageCircle size={22} />
          </div>

          <h3 className="mt-5 text-xl font-bold text-foreground">
            Still have questions?
          </h3>

          <p className="mx-auto mt-2 max-w-lg text-sm leading-6 text-muted">
            Our team is happy to help you understand Biashara Manager and
            choose the right option for your business.
          </p>

          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/support"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-5 py-3 text-sm font-bold text-foreground transition hover:bg-surface"
            >
              Visit Support
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-lg shadow-primary/15 transition hover:bg-primary-dark"
            >
              Contact Us
              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}