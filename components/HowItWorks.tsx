import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  LayoutDashboard,
  UserPlus,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Set up your business",
    description:
      "Create your account, add your business details, and get everything ready in a few simple steps.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Manage your business",
    description:
      "Record sales, manage products, track inventory, customers, expenses, and daily business activities.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Track and grow",
    description:
      "Use clear reports and business insights to understand your performance and make better decisions.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-surface px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-primary sm:text-xs">
            <LayoutDashboard size={14} />
            How it works
          </span>

          <h2 className="mt-4 text-[1.9rem] font-bold leading-tight tracking-tight text-foreground sm:mt-5 sm:text-4xl lg:text-5xl">
            Getting started is
            <span className="block text-primary">simple and straightforward.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-6 text-muted sm:mt-5 sm:text-base sm:leading-7">
            Biashara Manager gives you a simple way to organize your business,
            stay on top of daily activities, and understand how your business
            is performing.
          </p>
        </div>

        {/* =========================
            STEPS
        ========================== */}
        <div className="relative mt-10 sm:mt-14">
          {/* Desktop connecting line */}
          <div className="absolute left-[16.66%] right-[16.66%] top-[52px] hidden h-px bg-border lg:block" />

          <div className="grid gap-5 lg:grid-cols-3 lg:gap-7">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative">
                  {/* Card */}
                  <div
                    className="
                      group
                      relative
                      h-full
                      rounded-2xl
                      border
                      border-border
                      bg-white
                      p-5
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-primary/20
                      hover:shadow-xl
                      sm:rounded-3xl
                      sm:p-7
                      lg:p-8
                    "
                  >
                    {/* Icon area */}
                    <div className="relative flex items-center justify-between">
                      <div className="flex h-[64px] w-[64px] items-center justify-center rounded-2xl bg-surface text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white sm:h-[72px] sm:w-[72px] sm:rounded-2xl">
                        <Icon
                          size={27}
                          strokeWidth={1.8}
                          className="sm:h-8 sm:w-8"
                        />
                      </div>

                      {/* Number */}
                      <span className="text-sm font-bold tracking-widest text-slate-200 sm:text-base">
                        {step.number}
                      </span>
                    </div>

                    {/* Step label */}
                    <div className="mt-6 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-primary sm:mt-7 sm:text-xs">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Step {step.number}
                    </div>

                    {/* Title */}
                    <h3 className="mt-2.5 text-[18px] font-bold leading-snug text-foreground sm:text-xl">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-2.5 text-[12px] leading-5 text-muted sm:mt-3 sm:text-sm sm:leading-6">
                      {step.description}
                    </p>

                    {/* Confirmation */}
                    <div className="mt-5 flex items-center gap-1.5 border-t border-border pt-4 text-[10px] font-semibold text-secondary sm:mt-6 sm:pt-5 sm:text-xs">
                      <CheckCircle2
                        size={14}
                        className="shrink-0"
                      />

                      Easy to get started
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================
            BOTTOM MESSAGE
        ========================== */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-2xl border border-border bg-surface px-5 py-6 text-center sm:mt-14 sm:flex-row sm:px-8 sm:py-7 sm:text-left lg:px-10">
          <div>
            <p className="text-base font-bold text-foreground sm:text-lg">
              Ready to take control of your business?
            </p>

            <p className="mt-1 text-[12px] text-muted sm:text-sm">
              Start managing your business with Biashara Manager today.
            </p>
          </div>

          <Link
            href="/pricing"
            className="group inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-[12px] font-bold text-white shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark sm:min-h-12 sm:w-auto sm:px-6 sm:py-3.5 sm:text-sm"
          >
            Get Started

            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}