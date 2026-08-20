"use client";

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
    <section className="relative overflow-hidden bg-surface">
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl sm:h-96 sm:w-96" />
      <div className="pointer-events-none absolute -right-32 top-32 h-72 w-72 rounded-full bg-secondary/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Text */}
          <div className="text-center lg:text-left">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/15 bg-white px-3.5 py-2 text-[11px] font-semibold text-primary shadow-sm sm:px-4 sm:text-xs">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 size={13} />
              </span>
              Simple business management
            </div>

            <h1 className="mx-auto mt-6 max-w-xl text-[2.35rem] font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:mx-0 lg:text-6xl">
              Run your business
              <span className="block text-primary">with confidence.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-muted sm:mt-6 sm:text-base sm:leading-7 lg:mx-0 lg:text-lg">
              Manage sales, products, customers, expenses and business
              performance from one simple and powerful platform.
            </p>

            <div className="mt-7 flex w-full flex-col gap-3 sm:mt-8 sm:flex-row lg:w-auto">
              <Link
                href="#download"
                className="group inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark sm:w-auto"
              >
                Get Started
                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/features"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground shadow-sm transition hover:border-primary/20 hover:bg-surface sm:w-auto"
              >
                Explore Features
              </Link>
            </div>

            <div className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-3 text-[11px] text-muted sm:text-xs lg:justify-start">
              {["Easy to use", "Built for businesses", "Secure"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-secondary" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          {/* Dashboard */}
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="pointer-events-none absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />

            <div className="relative rounded-[22px] border border-border bg-white p-1.5 shadow-2xl shadow-slate-300/40 sm:rounded-[28px] sm:p-2.5">
              <div className="overflow-hidden rounded-[17px] bg-slate-950 sm:rounded-[22px]">

                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-white/10 px-4 py-3.5 sm:px-6 sm:py-4">
                  <div className="flex min-w-0 items-center gap-2.5 sm:gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white sm:h-9 sm:w-9 sm:rounded-xl sm:text-sm">
                      B
                    </div>

                    <div className="min-w-0">
                      <p className="text-[8px] text-slate-500 sm:text-[10px]">
                        Business Overview
                      </p>
                      <h2 className="truncate text-xs font-semibold text-white sm:text-sm">
                        Dashboard
                      </h2>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="hidden text-[10px] text-slate-500 sm:block">
                      Today's performance
                    </p>
                    <p className="text-[10px] font-semibold text-emerald-400 sm:text-xs">
                      Growing
                    </p>
                  </div>
                </div>

                <div className="p-3 sm:p-5">

                  {/* KPI */}
                  <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3">
                    <div className="rounded-xl bg-white/[0.07] p-3 sm:rounded-2xl sm:p-3.5">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <ShoppingCart size={13} />
                        <span className="text-[9px]">Sales</span>
                      </div>
                      <p className="mt-2 text-base font-bold text-white sm:text-lg">
                        KSh 8,450
                      </p>
                      <p className="mt-1 text-[8px] text-emerald-400">
                        +12.5% today
                      </p>
                    </div>

                    <div className="rounded-xl bg-white/[0.07] p-3 sm:rounded-2xl sm:p-3.5">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Package size={13} />
                        <span className="text-[9px]">Products</span>
                      </div>
                      <p className="mt-2 text-base font-bold text-white sm:text-lg">
                        128
                      </p>
                      <p className="mt-1 text-[8px] text-slate-500">
                        In inventory
                      </p>
                    </div>

                    <div className="col-span-2 rounded-xl bg-white/[0.07] p-3 sm:col-span-1 sm:rounded-2xl sm:p-3.5">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Users size={13} />
                        <span className="text-[9px]">Customers</span>
                      </div>
                      <p className="mt-2 text-base font-bold text-white sm:text-lg">
                        246
                      </p>
                      <p className="mt-1 text-[8px] text-slate-500">
                        Active customers
                      </p>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="mt-2.5 rounded-xl bg-white/[0.07] p-3 sm:mt-3 sm:rounded-2xl sm:p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <BarChart3 size={13} className="text-slate-400" />
                        <span className="text-[9px] font-medium text-slate-300 sm:text-[10px]">
                          Sales Overview
                        </span>
                      </div>

                      <span className="text-[8px] text-slate-500 sm:text-[10px]">
                        This week
                      </span>
                    </div>

                    <div className="mt-4 flex h-24 items-end gap-1 sm:mt-5 sm:h-32 sm:gap-2">
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

                  {/* Recent sales */}
                  <div className="mt-2.5 rounded-xl bg-white/[0.07] p-3 sm:mt-3 sm:rounded-2xl sm:p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-medium text-slate-300 sm:text-[10px]">
                        Recent Sales
                      </span>
                      <span className="text-[8px] text-primary sm:text-[9px]">
                        View all
                      </span>
                    </div>

                    <div className="mt-2.5 space-y-2 sm:mt-3 sm:space-y-2.5">
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
                            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary/20 text-[8px] font-bold text-primary sm:h-7 sm:w-7 sm:rounded-lg sm:text-[9px]">
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

            {/* Floating cards — hidden on small phones */}
            <div className="absolute -right-3 top-8 z-20 hidden rounded-2xl border border-border bg-white p-3 shadow-xl sm:block lg:-right-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <TrendingUp size={18} />
                </div>
                <div>
                  <p className="text-[10px] text-muted">Sales growth</p>
                  <p className="text-sm font-bold text-foreground">+18.4%</p>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 z-20 hidden rounded-2xl border border-border bg-white px-4 py-3 shadow-xl sm:block lg:-left-7">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <BarChart3 size={18} />
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