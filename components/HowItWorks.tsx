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
    title: "Create your business",
    description:
      "Set up your business account and add the basic information you need to get started.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Manage your daily activities",
    description:
      "Record sales, manage products, track expenses, manage customers, and keep your business records organized.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Understand your performance",
    description:
      "Use your business information and reports to understand what's happening and make better decisions.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-surface px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
            <LayoutDashboard size={14} />
            How it works
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Simple tools.
            <span className="block text-primary">
              Simple process.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
            Biashara Manager is designed to help you get organized without
            making business management complicated.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-14 grid gap-6 lg:grid-cols-3">
          {/* Connecting line */}
          <div className="absolute left-[16.66%] right-[16.66%] top-12 hidden h-px bg-border lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group relative rounded-3xl border border-border bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl sm:p-8"
              >
                {/* Step number */}
                <div className="relative mx-auto flex h-24 w-24 items-center justify-center rounded-full border-8 border-surface bg-white shadow-sm">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white shadow-md">
                    {step.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-foreground">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {step.description}
                </p>

                <div className="mt-6 flex items-center justify-center gap-2 text-xs font-bold text-secondary">
                  <CheckCircle2 size={14} />
                  Easy to get started
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            href="/pricing"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-xl"
          >
            Get started with Biashara Manager

            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}