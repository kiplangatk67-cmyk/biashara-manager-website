import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Smartphone,
  TrendingUp,
} from "lucide-react";

const benefits = [
  "Quick access to important business information",
  "Simple dashboards designed for everyday use",
  "Organized sales and inventory records",
  "Useful business performance insights",
];

export default function AppShowcase() {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-24 top-20 h-56 w-56 rounded-full bg-primary/5 blur-3xl sm:-right-32 sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -left-24 bottom-10 h-48 w-48 rounded-full bg-secondary/5 blur-3xl sm:-left-32 sm:h-64 sm:w-64" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* =========================
            CONTENT
        ========================== */}
        <div className="max-w-2xl">

          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-primary sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
            <TrendingUp
              size={12}
              className="sm:h-[14px] sm:w-[14px]"
            />

            Your business at a glance
          </span>

          {/* Heading */}
          <h2 className="mt-4 max-w-[350px] text-[1.8rem] font-bold leading-[1.08] tracking-tight text-foreground sm:mt-5 sm:max-w-2xl sm:text-4xl lg:text-5xl">
            Everything important,
            <span className="block text-primary">
              right at your fingertips.
            </span>
          </h2>

          {/* Description */}
          <p className="mt-3 max-w-[350px] text-[13px] leading-5 text-muted sm:mt-5 sm:max-w-xl sm:text-base sm:leading-7">
            Get a clear view of your business from one simple dashboard.
            Quickly see your sales, products, customers, expenses, and other
            important business information without unnecessary complexity.
          </p>

          {/* Benefits */}
          <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-2.5 sm:gap-3"
              >
                <CheckCircle2
                  size={16}
                  className="mt-0.5 shrink-0 text-secondary sm:h-[19px] sm:w-[19px]"
                />

                <span className="text-[12px] font-medium leading-5 text-foreground sm:text-sm sm:leading-6">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/features"
            className="group mt-7 inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-[12px] font-bold text-white shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark sm:mt-9 sm:min-h-11 sm:w-auto sm:gap-2 sm:rounded-xl sm:px-6 sm:py-3.5 sm:text-sm"
          >
            Explore Features

            <ArrowRight
              size={14}
              className="transition-transform duration-200 group-hover:translate-x-1 sm:h-4 sm:w-4"
            />
          </Link>
        </div>

        {/* =========================
            APP SHOWCASE
        ========================== */}
        <div className="relative mx-auto w-full max-w-md">

          {/* Glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl sm:h-80 sm:w-80" />

          {/* Phone */}
          <div className="relative mx-auto w-[235px] overflow-hidden rounded-[34px] border-[6px] border-slate-900 bg-slate-900 p-1 shadow-2xl sm:w-[290px] sm:rounded-[42px] sm:border-[7px] sm:p-1.5">

            {/* Speaker / Dynamic island style */}
            <div className="absolute left-1/2 top-1 z-20 h-4 w-20 -translate-x-1/2 rounded-full bg-slate-900 sm:h-5 sm:w-28" />

            {/* Screen */}
            <div className="relative overflow-hidden rounded-[27px] bg-white sm:rounded-[34px]">
              <Image
                src="/screenshots/home.jpeg"
                alt="Biashara Manager business dashboard"
                width={800}
                height={1600}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          {/* =========================
              FLOATING INFO CARD
          ========================== */}
          <div className="absolute -bottom-4 left-0 flex max-w-[210px] items-center gap-2.5 rounded-xl border border-border bg-white px-3 py-2.5 shadow-xl sm:-bottom-5 sm:-left-6 sm:max-w-none sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-9 sm:w-9 sm:rounded-xl">
              <Smartphone
                size={16}
                className="sm:h-[18px] sm:w-[18px]"
              />
            </div>

            <div className="min-w-0">
              <p className="truncate text-[10px] font-bold text-foreground sm:text-xs">
                Biashara Manager
              </p>

              <p className="mt-0.5 text-[8px] leading-4 text-muted sm:text-[10px]">
                Simple business management
              </p>
            </div>
          </div>

          {/* Decorative card */}
          <div className="absolute -right-1 top-8 hidden items-center gap-2 rounded-xl border border-border bg-white px-3 py-2 shadow-lg sm:-right-4 sm:flex">
            <CheckCircle2
              size={14}
              className="text-secondary"
            />

            <span className="text-[10px] font-semibold text-foreground">
              Stay organized
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}