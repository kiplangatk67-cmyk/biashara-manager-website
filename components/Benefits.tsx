import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  Layers3,
  ShieldCheck,
  Smartphone,
  TrendingUp,
} from "lucide-react";

const benefits = [
  {
    icon: Clock3,
    title: "Save time",
    description:
      "Keep important business information organized so you spend less time searching through records.",
  },
  {
    icon: Layers3,
    title: "Stay organized",
    description:
      "Bring sales, products, customers, expenses, and other business activities together.",
  },
  {
    icon: BarChart3,
    title: "Understand your numbers",
    description:
      "Use clear business information and reports to understand how your business is performing.",
  },
  {
    icon: Smartphone,
    title: "Manage on the go",
    description:
      "Access your business tools from your phone and keep your operations moving wherever you are.",
  },
  {
    icon: ShieldCheck,
    title: "Protect business information",
    description:
      "Use account security and controlled access to help protect important business information.",
  },
  {
    icon: TrendingUp,
    title: "Make better decisions",
    description:
      "Turn your everyday business records into information that can help guide your next decision.",
  },
];

export default function Benefits() {
  return (
    <section className="overflow-hidden bg-surface px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
            <TrendingUp size={14} />
            Why Biashara Manager
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Built to make business
            <span className="block text-primary">
              management easier.
            </span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
            Whether you run a small shop or a growing business, Biashara
            Manager gives you practical tools to keep your operations
            organized and easier to understand.
          </p>
        </div>

        {/* Benefits */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="group rounded-3xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl"
              >
                <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <h3 className="mt-6 text-lg font-bold text-foreground">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-muted">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom highlight */}
        <div className="relative mt-16 overflow-hidden rounded-[32px] bg-primary p-8 text-white shadow-2xl shadow-primary/20 sm:p-10 lg:p-12">
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-2 text-sm font-bold text-white/80">
                <CheckCircle2 size={17} />
                One place for your business
              </div>

              <h3 className="mt-4 max-w-2xl text-2xl font-bold tracking-tight sm:text-3xl">
                Spend less time managing records and more time growing your
                business.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75">
                Biashara Manager brings the important parts of your business
                together in one simple experience designed for everyday use.
              </p>
            </div>

            <Link
              href="/pricing"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-primary shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50"
            >
              See Pricing

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}