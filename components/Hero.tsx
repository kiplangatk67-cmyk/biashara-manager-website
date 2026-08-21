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
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl sm:-left-32 sm:top-10 sm:h-80 sm:w-80 lg:h-96 lg:w-96" />

      <div className="pointer-events-none absolute -right-40 top-24 h-64 w-64 rounded-full bg-secondary/10 blur-3xl sm:-right-32 sm:top-32 sm:h-80 sm:w-80 lg:h-96 lg:w-96" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 md:py-20 lg:px-8 lg:py-28">
        <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">

          {/* =========================
              TEXT CONTENT
          ========================== */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <div className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-primary/15 bg-white px-3 py-1.5 text-[10px] font-semibold text-primary shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
              <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 sm:h-5 sm:w-5">
                <CheckCircle2 size={11} className="sm:h-[13px] sm:w-[13px]" />
              </span>

              <span>Simple business management</span>
            </div>

            {/* Heading */}
            <h1 className="mx-auto mt-5 max-w-[340px] text-[2rem] font-bold leading-[1.08] tracking-tight text-foreground sm:mt-6 sm:max-w-xl sm:text-5xl lg:mx-0 lg:text-6xl">
              Run your business
              <span className="block text-primary">
                with confidence.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-[340px] text-[13px] leading-5 text-muted sm:mt-6 sm:max-w-lg sm:text-base sm:leading-7 lg:mx-0 lg:text-lg">
              Manage sales, products, customers, expenses and business
              performance from one simple and powerful platform.
            </p>

            {/* Buttons */}
            <div className="mt-6 flex w-full flex-col gap-2.5 sm:mt-8 sm:flex-row sm:gap-3 lg:w-auto">
              <Link
                href="#download"
                className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-[13px] font-semibold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark sm:min-h-12 sm:w-auto sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Get Started

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1 sm:h-[17px] sm:w-[17px]"
                />
              </Link>

              <Link
                href="/features"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-border bg-white px-5 py-3 text-[13px] font-semibold text-foreground shadow-sm transition hover:border-primary/20 hover:bg-surface sm:min-h-12 sm:w-auto sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Explore Features
              </Link>
            </div>

            {/* Trust points */}
            <div className="mx-auto mt-6 flex max-w-[340px] flex-wrap justify-center gap-x-4 gap-y-2.5 text-[10px] text-muted sm:mt-7 sm:max-w-none sm:gap-x-5 sm:text-xs lg:mx-0 lg:justify-start">
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
                    size={13}
                    className="text-secondary sm:h-[14px] sm:w-[14px]"
                  />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* =========================
              DASHBOARD PREVIEW
          ========================== */}
          <div className="relative mx-auto w-full max-w-[520px] sm:max-w-[560px]">

            {/* Glow */}
            <div className="pointer-events-none absolute -inset-5 rounded-full bg-primary/10 blur-3xl sm:-inset-8" />

            {/* Main dashboard container */}
            <div className="relative rounded-[18px] border border-border bg-white p-1 shadow-2xl shadow-slate-300/40 sm:rounded-[28px] sm:p-2.5">
              <div className="overflow-hidden rounded-[14px] bg-slate-950 sm:rounded-[22px]">

                {/* Top bar */}
                <div className="flex items-center justify-between border-b border-white/10 px-3 py-3 sm:px-6 sm:py-4">
                  <div className="flex min-w-0 items-center gap-2 sm:gap-3">

                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary text-[10px] font-bold text-white sm:h-9 sm:w-9 sm:rounded-xl sm:text-sm">
                      B
                    </div>

                    <div className="min-w-0">
                      <p className="text-[7px] text-slate-500 sm:text-[10px]">
                        Business Overview
                      </p>

                      <h2 className="truncate text-[11px] font-semibold text-white sm:text-sm">
                        Dashboard
                      </h2>
                    </div>
                  </div>

                  <div className="text-right">
                    <p className="hidden text-[10px] text-slate-500 sm:block">
                      Today's performance
                    </p>

                    <p className="text-[9px] font-semibold text-emerald-400 sm:text-xs">
                      Growing
                    </p>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-2.5 sm:p-5">

                  {/* KPI CARDS */}
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">

                    {/* Sales */}
                    <div className="rounded-lg bg-white/[0.07] p-2.5 sm:rounded-2xl sm:p-3.5">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <ShoppingCart size={11} className="sm:h-[13px] sm:w-[13px]" />

                        <span className="text-[8px] sm:text-[9px]">
                          Sales
                        </span>
                      </div>

                      <p className="mt-1.5 text-sm font-bold text-white sm:mt-2 sm:text-lg">
                        KSh 8,450
                      </p>

                      <p className="mt-0.5 text-[7px] text-emerald-400 sm:mt-1 sm:text-[8px]">
                        +12.5% today
                      </p>
                    </div>

                    {/* Products */}
                    <div className="rounded-lg bg-white/[0.07] p-2.5 sm:rounded-2xl sm:p-3.5">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Package size={11} className="sm:h-[13px] sm:w-[13px]" />

                        <span className="text-[8px] sm:text-[9px]">
                          Products
                        </span>
                      </div>

                      <p className="mt-1.5 text-sm font-bold text-white sm:mt-2 sm:text-lg">
                        128
                      </p>

                      <p className="mt-0.5 text-[7px] text-slate-500 sm:mt-1 sm:text-[8px]">
                        In inventory
                      </p>
                    </div>

                    {/* Customers */}
                    <div className="col-span-2 rounded-lg bg-white/[0.07] p-2.5 sm:col-span-1 sm:rounded-2xl sm:p-3.5">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <Users size={11} className="sm:h-[13px] sm:w-[13px]" />

                        <span className="text-[8px] sm:text-[9px]">
                          Customers
                        </span>
                      </div>

                      <p className="mt-1.5 text-sm font-bold text-white sm:mt-2 sm:text-lg">
                        246
                      </p>

                      <p className="mt-0.5 text-[7px] text-slate-500 sm:mt-1 sm:text-[8px]">
                        Active customers
                      </p>
                    </div>
                  </div>

                  {/* SALES CHART */}
                  <div className="mt-2 rounded-lg bg-white/[0.07] p-2.5 sm:mt-3 sm:rounded-2xl sm:p-4">

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5">
                        <BarChart3
                          size={11}
                          className="text-slate-400 sm:h-[13px] sm:w-[13px]"
                        />

                        <span className="text-[8px] font-medium text-slate-300 sm:text-[10px]">
                          Sales Overview
                        </span>
                      </div>

                      <span className="text-[7px] text-slate-500 sm:text-[10px]">
                        This week
                      </span>
                    </div>

                    <div className="mt-3 flex h-20 items-end gap-1 sm:mt-5 sm:h-32 sm:gap-2">
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

                    <div className="mt-1.5 flex justify-between text-[6px] text-slate-600 sm:mt-2 sm:text-[8px]">
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
                  <div className="mt-2 rounded-lg bg-white/[0.07] p-2.5 sm:mt-3 sm:rounded-2xl sm:p-4">

                    <div className="flex items-center justify-between">
                      <span className="text-[8px] font-medium text-slate-300 sm:text-[10px]">
                        Recent Sales
                      </span>

                      <span className="text-[7px] text-primary sm:text-[9px]">
                        View all
                      </span>
                    </div>

                    <div className="mt-2 space-y-1.5 sm:mt-3 sm:space-y-2.5">
                      {[
                        ["John Kamau", "KSh 1,250"],
                        ["Mary Wanjiku", "KSh 850"],
                        ["Peter Otieno", "KSh 2,400"],
                      ].map(([name, amount]) => (
                        <div
                          key={name}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center gap-1.5 sm:gap-2">

                            <div className="flex h-5 w-5 items-center justify-center rounded-md bg-primary/20 text-[7px] font-bold text-primary sm:h-7 sm:w-7 sm:rounded-lg sm:text-[9px]">
                              {name.charAt(0)}
                            </div>

                            <span className="text-[7px] text-slate-400 sm:text-[9px]">
                              {name}
                            </span>
                          </div>

                          <span className="text-[7px] font-semibold text-white sm:text-[9px]">
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
            <div className="absolute -right-3 top-8 z-20 hidden rounded-2xl border border-border bg-white p-3 shadow-xl sm:block lg:-right-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <TrendingUp size={18} />
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