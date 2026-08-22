import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Package,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";

export default function Hero() {
  const chart = [32, 48, 39, 61, 53, 72, 64, 84, 76, 94];

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-surface"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -right-20 top-32 h-72 w-72 rounded-full bg-secondary/10 blur-3xl sm:h-96 sm:w-96" />

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24 xl:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">

          {/* =========================
              HERO TEXT
          ========================== */}
          <div className="max-w-2xl text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-xs font-semibold text-primary shadow-sm">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 size={13} />
              </span>

              Built for growing businesses
            </div>

            {/* Heading */}
            <h1
              id="hero-heading"
              className="mt-6 text-[2.35rem] font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[3.7rem] xl:text-6xl"
            >
              Manage your business
              <span className="block text-primary">
                smarter every day.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-xl text-sm leading-6 text-muted sm:text-base sm:leading-7 lg:mx-0 lg:text-lg">
              Biashara Manager helps you manage sales, products, inventory,
              customers, expenses, credit, receipts, and business performance
              all in one simple platform.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="#download"
                className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Get Started

                <ArrowRight
                  size={17}
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/features"
                className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-white px-7 py-3.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-surface focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Explore Features
              </Link>
            </div>

            {/* Trust points */}
            <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-muted lg:justify-start">
              {[
                "Easy to use",
                "Built for businesses",
                "Secure",
              ].map((item) => (
                <span
                  key={item}
                  className="flex items-center gap-1.5 whitespace-nowrap"
                >
                  <CheckCircle2
                    size={14}
                    aria-hidden="true"
                    className="text-secondary"
                  />

                  {item}
                </span>
              ))}
            </div>

            {/* Small brand statement */}
            <p className="mt-5 text-[11px] leading-5 text-muted sm:text-xs">
              One place for your daily business operations.
            </p>
          </div>

          {/* =========================
              DASHBOARD PREVIEW
          ========================== */}
          <div
            className="relative mx-auto w-full max-w-[600px]"
            aria-label="Biashara Manager dashboard preview"
          >
            {/* Dashboard glow */}
            <div className="pointer-events-none absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />

            {/* Main dashboard */}
            <div className="relative rounded-[24px] border border-border bg-white p-2 shadow-2xl shadow-slate-300/40 sm:rounded-[30px] sm:p-2.5">
              <div className="overflow-hidden rounded-[19px] bg-slate-950 sm:rounded-[23px]">

                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-4 sm:px-6 sm:py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white sm:h-10 sm:w-10">
                      B
                    </div>

                    <div>
                      <p className="text-[9px] text-slate-500 sm:text-[10px]">
                        Biashara Manager
                      </p>

                      <h2 className="text-xs font-semibold text-white sm:text-sm">
                        Business Dashboard
                      </h2>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="hidden text-[10px] text-slate-500 sm:block">
                      Today&apos;s performance
                    </p>

                    <p className="text-[9px] font-semibold text-emerald-400 sm:text-xs">
                      Growing
                    </p>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-3 sm:p-5">

                  {/* KPI CARDS */}
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">

                    {/* Sales */}
                    <div className="rounded-xl bg-white/[0.07] p-3 sm:rounded-2xl sm:p-4">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <ShoppingCart size={13} aria-hidden="true" />

                        <span className="text-[9px] sm:text-[10px]">
                          Sales
                        </span>
                      </div>

                      <p className="mt-2 text-base font-bold text-white sm:text-lg">
                        KSh 8,450
                      </p>

                      <p className="mt-1 text-[8px] text-emerald-400 sm:text-[9px]">
                        +12.5% today
                      </p>
                    </div>

                    {/* Products */}
                    <div className="rounded-xl bg-white/[0.07] p-3 sm:rounded-2xl sm:p-4">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Package size={13} aria-hidden="true" />

                        <span className="text-[9px] sm:text-[10px]">
                          Products
                        </span>
                      </div>

                      <p className="mt-2 text-base font-bold text-white sm:text-lg">
                        128
                      </p>

                      <p className="mt-1 text-[8px] text-slate-500 sm:text-[9px]">
                        In inventory
                      </p>
                    </div>

                    {/* Customers */}
                    <div className="col-span-2 rounded-xl bg-white/[0.07] p-3 sm:col-span-1 sm:rounded-2xl sm:p-4">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Users size={13} aria-hidden="true" />

                        <span className="text-[9px] sm:text-[10px]">
                          Customers
                        </span>
                      </div>

                      <p className="mt-2 text-base font-bold text-white sm:text-lg">
                        246
                      </p>

                      <p className="mt-1 text-[8px] text-slate-500 sm:text-[9px]">
                        Active customers
                      </p>
                    </div>
                  </div>

                  {/* SALES CHART */}
                  <div className="mt-3 rounded-xl bg-white/[0.07] p-3 sm:rounded-2xl sm:p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <BarChart3
                          size={13}
                          aria-hidden="true"
                          className="text-slate-400"
                        />

                        <span className="text-[9px] font-medium text-slate-300 sm:text-[10px]">
                          Sales Overview
                        </span>
                      </div>

                      <span className="text-[8px] text-slate-500 sm:text-[10px]">
                        This week
                      </span>
                    </div>

                    <div
                      className="mt-4 flex h-24 items-end gap-1.5 sm:mt-5 sm:h-32 sm:gap-2"
                      aria-hidden="true"
                    >
                      {chart.map((height, index) => (
                        <div
                          key={index}
                          className="flex h-full flex-1 items-end"
                        >
                          <div
                            className="w-full rounded-t-sm bg-primary/70"
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="mt-2 flex justify-between text-[7px] text-slate-600 sm:text-[8px]">
                      <span>Mon</span>
                      <span>Tue</span>
                      <span>Wed</span>
                      <span>Thu</span>
                      <span>Fri</span>
                      <span>Sat</span>
                      <span>Sun</span>
                    </div>
                  </div>

                  {/* RECENT SALES */}
                  <div className="mt-3 rounded-xl bg-white/[0.07] p-3 sm:rounded-2xl sm:p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-medium text-slate-300 sm:text-[10px]">
                        Recent Sales
                      </span>

                      <span className="text-[8px] text-primary sm:text-[9px]">
                        View all
                      </span>
                    </div>

                    <div className="mt-3 space-y-2.5">
                      {[
                        ["John Kamau", "KSh 1,250"],
                        ["Mary Wanjiku", "KSh 850"],
                        ["Peter Otieno", "KSh 2,400"],
                      ].map(([name, amount]) => (
                        <div
                          key={name}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-2">
                            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/20 text-[9px] font-bold text-primary">
                              {name.charAt(0)}
                            </div>

                            <span className="text-[8px] text-slate-400 sm:text-[9px]">
                              {name}
                            </span>
                          </div>

                          <span className="text-[8px] font-semibold text-white sm:text-[9px]">
                            {amount}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating sales card */}
            <div className="absolute -right-3 top-10 z-20 hidden rounded-2xl border border-border bg-white p-3 shadow-xl sm:block lg:-right-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <TrendingUp size={18} aria-hidden="true" />
                </div>

                <div>
                  <p className="text-[10px] text-muted">
                    Sales growth
                  </p>

                  <p className="text-sm font-bold text-foreground">
                    +18.4%
                  </p>
                </div>
              </div>
            </div>

            {/* Floating performance card */}
            <div className="absolute -bottom-5 -left-3 z-20 hidden rounded-2xl border border-border bg-white px-4 py-3 shadow-xl sm:block lg:-left-7">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <BarChart3 size={18} aria-hidden="true" />
                </div>

                <div>
                  <p className="text-[10px] text-muted">
                    Business performance
                  </p>

                  <p className="text-sm font-bold text-foreground">
                    Looking good
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}