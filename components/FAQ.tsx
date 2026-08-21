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
    <section className="bg-white px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl">

        {/* =========================
            HEADING
        ========================== */}
        <div className="text-center">

          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-surface px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-primary sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
            <CircleHelp
              size={12}
              className="sm:h-[14px] sm:w-[14px]"
            />

            Frequently asked questions
          </span>

          <h2 className="mx-auto mt-4 max-w-[340px] text-[1.8rem] font-bold leading-[1.08] tracking-tight text-foreground sm:mt-5 sm:max-w-3xl sm:text-4xl lg:text-5xl">
            Questions?
            <span className="block text-primary">
              We've got answers.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[350px] text-[13px] leading-5 text-muted sm:mt-5 sm:max-w-2xl sm:text-base sm:leading-7">
            Here are some common questions about Biashara Manager,
            subscriptions, and the tools available to your business.
          </p>
        </div>

        {/* =========================
            FAQ LIST
        ========================== */}
        <div className="mt-8 space-y-2.5 sm:mt-12 sm:space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-xl border bg-white transition-all duration-300 sm:rounded-2xl ${
                  isOpen
                    ? "border-primary/25 shadow-md shadow-primary/5"
                    : "border-border hover:border-primary/15"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  className="flex min-h-[56px] w-full items-center justify-between gap-3 px-4 py-3.5 text-left sm:min-h-[64px] sm:gap-5 sm:px-6 sm:py-5"
                >
                  <span className="pr-2 text-[13px] font-bold leading-5 text-foreground sm:text-base sm:leading-normal">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-all duration-300 sm:h-8 sm:w-8 sm:rounded-xl ${
                      isOpen
                        ? "bg-primary text-white"
                        : "bg-surface text-muted"
                    }`}
                  >
                    <ChevronDown
                      size={15}
                      className={`transition-transform duration-300 sm:h-[17px] sm:w-[17px] ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="border-t border-border px-4 pb-4 pt-3.5 text-[12px] leading-5 text-muted sm:px-6 sm:pb-5 sm:pt-4 sm:text-sm sm:leading-7">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================
            SUPPORT CTA
        ========================== */}
        <div className="mt-8 rounded-2xl border border-border bg-surface p-5 text-center sm:mt-12 sm:rounded-3xl sm:p-9">

          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-12 sm:w-12 sm:rounded-2xl">
            <MessageCircle
              size={19}
              className="sm:h-[22px] sm:w-[22px]"
            />
          </div>

          <h3 className="mt-4 text-lg font-bold text-foreground sm:mt-5 sm:text-xl">
            Still have questions?
          </h3>

          <p className="mx-auto mt-1.5 max-w-[330px] text-[12px] leading-5 text-muted sm:mt-2 sm:max-w-lg sm:text-sm sm:leading-6">
            Our team is happy to help you understand Biashara Manager and
            choose the right option for your business.
          </p>

          <div className="mt-5 flex w-full flex-col justify-center gap-2.5 sm:mt-6 sm:flex-row sm:gap-3">

            <Link
              href="/support"
              className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg border border-border bg-white px-4 py-2.5 text-[12px] font-bold text-foreground transition hover:bg-surface sm:min-h-11 sm:w-auto sm:rounded-xl sm:px-5 sm:py-3 sm:text-sm"
            >
              Visit Support
            </Link>

            <Link
              href="/contact"
              className="group inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-[12px] font-bold text-white shadow-lg shadow-primary/15 transition hover:bg-primary-dark sm:min-h-11 sm:w-auto sm:rounded-xl sm:px-5 sm:py-3 sm:text-sm"
            >
              Contact Us

              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1 sm:h-[15px] sm:w-[15px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}