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
      "Bring sales, products, customers, expenses, and daily business activities together in one place.",
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
    title: "Protect your information",
    description:
      "Use account security and controlled access to help protect important business information.",
  },
  {
    icon: TrendingUp,
    title: "Make better decisions",
    description:
      "Turn everyday business records into useful information that can guide your next decision.",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden bg-surface px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* =========================
            SECTION HEADER
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm sm:text-xs">
            <TrendingUp size={14} />
            Why Biashara Manager
          </span>

          <h2 className="mt-4 text-[1.9rem] font-bold leading-tight tracking-tight text-foreground sm:mt-5 sm:text-4xl lg:text-5xl">
            More than just a business app.
            <span className="block text-primary">
              A smarter way to work.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-6 text-muted sm:mt-5 sm:text-base sm:leading-7">
            Biashara Manager gives small and growing businesses practical
            tools to stay organized, save time, and make better decisions.
          </p>
        </div>

        {/* =========================
            BENEFITS GRID
        ========================== */}
        <div className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;

            return (
              <div
                key={benefit.title}
                className="
                  group
                  relative
                  flex
                  h-full
                  flex-col
                  overflow-hidden
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
                  hover:shadow-slate-200/50

                  sm:rounded-3xl
                  sm:p-6

                  lg:p-7
                "
              >
                {/* Decorative circle */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white sm:h-12 sm:w-12 sm:rounded-2xl">
                      <Icon
                        size={21}
                        strokeWidth={1.9}
                        className="sm:h-[23px] sm:w-[23px]"
                      />
                    </div>

                    <span className="text-xs font-bold tracking-widest text-slate-200 sm:text-sm">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-[16px] font-bold leading-snug text-foreground sm:mt-6 sm:text-lg lg:text-xl">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-[12px] leading-5 text-muted sm:mt-3 sm:text-sm sm:leading-6">
                    {benefit.description}
                  </p>

                  {/* Bottom indicator */}
                  <div className="mt-5 flex items-center gap-1.5 border-t border-border pt-4 text-[10px] font-semibold text-secondary sm:mt-6 sm:pt-5 sm:text-xs">
                    <CheckCircle2 size={14} />
                    Built for everyday business
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================
            BOTTOM CTA
        ========================== */}
        <div className="relative mt-10 overflow-hidden rounded-2xl bg-primary px-5 py-7 text-white shadow-xl shadow-primary/15 sm:mt-14 sm:rounded-[30px] sm:px-9 sm:py-9 lg:px-12 lg:py-10">
          {/* Decoration */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

          <div className="relative flex flex-col gap-6 sm:gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-[10px] font-bold text-white/80 sm:text-xs">
                <CheckCircle2 size={15} />
                One place for your business
              </div>

              <h3 className="mt-3 text-xl font-bold leading-tight tracking-tight sm:text-3xl">
                Spend less time managing records and more time growing.
              </h3>

              <p className="mt-3 text-[12px] leading-5 text-white/75 sm:text-sm sm:leading-6">
                Bring the important parts of your business together with a
                simple experience designed for everyday business use.
              </p>
            </div>

            <Link
              href="/pricing"
              className="group inline-flex min-h-11 w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-5 py-3 text-[12px] font-bold text-primary shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 sm:min-h-12 sm:w-auto sm:px-6 sm:py-3.5 sm:text-sm"
            >
              See Pricing

              <ArrowRight
                size={15}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}