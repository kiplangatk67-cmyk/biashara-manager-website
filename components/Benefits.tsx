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
    <section className="overflow-hidden bg-surface px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* =========================
            HEADING
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-primary shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
            <TrendingUp
              size={12}
              className="sm:h-[14px] sm:w-[14px]"
            />

            Why Biashara Manager
          </span>

          <h2 className="mx-auto mt-4 max-w-[350px] text-[1.8rem] font-bold leading-[1.08] tracking-tight text-foreground sm:mt-5 sm:max-w-3xl sm:text-4xl lg:text-5xl">
            Built to make business
            <span className="block text-primary">
              management easier.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[350px] text-[13px] leading-5 text-muted sm:mt-5 sm:max-w-2xl sm:text-base sm:leading-7">
            Whether you run a small shop or a growing business, Biashara
            Manager gives you practical tools to keep your operations
            organized and easier to understand.
          </p>
        </div>

        {/* =========================
            BENEFITS
        ========================== */}
        <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 lg:gap-5">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="
                  group
                  rounded-xl
                  border border-border
                  bg-white
                  p-4
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/20
                  hover:shadow-xl

                  sm:rounded-2xl
                  sm:p-6

                  lg:rounded-3xl
                  lg:p-7
                "
              >
                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white sm:h-12 sm:w-12 sm:rounded-xl lg:h-13 lg:w-13 lg:rounded-2xl">
                  <Icon
                    size={19}
                    strokeWidth={1.8}
                    className="sm:h-[23px] sm:w-[23px]"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-[15px] font-bold leading-snug text-foreground sm:mt-6 sm:text-lg">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="mt-1.5 text-[12px] leading-5 text-muted sm:mt-3 sm:text-sm sm:leading-6">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* =========================
            BOTTOM HIGHLIGHT
        ========================== */}
        <div className="relative mt-8 overflow-hidden rounded-2xl bg-primary p-4 text-white shadow-xl shadow-primary/20 sm:mt-16 sm:rounded-[32px] sm:p-10 lg:p-12">

          {/* Decoration */}
          <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full bg-white/10 blur-3xl sm:-right-24 sm:-top-24 sm:h-64 sm:w-64" />

          <div className="relative grid items-center gap-6 sm:gap-8 lg:grid-cols-[1fr_auto] lg:gap-10">

            {/* Text */}
            <div>

              <div className="flex items-center gap-1.5 text-[10px] font-bold text-white/80 sm:gap-2 sm:text-sm">
                <CheckCircle2
                  size={14}
                  className="sm:h-[17px] sm:w-[17px]"
                />

                One place for your business
              </div>

              <h3 className="mt-2.5 max-w-2xl text-lg font-bold leading-tight tracking-tight sm:mt-4 sm:text-3xl">
                Spend less time managing records and more time growing your
                business.
              </h3>

              <p className="mt-2.5 max-w-2xl text-[11px] leading-5 text-white/75 sm:mt-4 sm:text-sm sm:leading-7">
                Biashara Manager brings the important parts of your business
                together in one simple experience designed for everyday use.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/pricing"
              className="group inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-lg bg-white px-4 py-2.5 text-[12px] font-bold text-primary shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 sm:min-h-12 sm:w-auto sm:gap-2 sm:rounded-xl sm:px-6 sm:py-3.5 sm:text-sm"
            >
              See Pricing

              <ArrowRight
                size={14}
                className="transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}