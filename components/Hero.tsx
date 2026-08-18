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
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-40 top-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 py-20 sm:px-6 sm:py-28 lg:grid-cols-2 lg:px-8 lg:py-32">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-2 text-xs font-semibold text-primary shadow-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
              <CheckCircle2 size={13} />
            </span>
            Simple business management
          </div>

          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Run your business
            <span className="block text-primary">with confidence.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
            Manage sales, products, customers, expenses and business
            performance from one simple and powerful platform.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#download"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition duration-300 hover:-translate-y-0.5 hover:bg-primary-dark"
            >
              Get Started
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/features"
              className="inline-flex items-center justify-center rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-semibold text-foreground shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-surface"
            >
              Explore Features
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-xs text-muted">
            {[
              "Easy to use",
              "Built for businesses",
              "Secure",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle2 size={15} className="text-secondary" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* DASHBOARD */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          {/* Glow */}
          <div className="absolute -inset-10 rounded-full bg-primary/10 blur-3xl" />

          {/* Floating notification */}
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

          {/* Dashboard shell */}
          <div className="relative rounded-[28px] border border-border bg-white p-2 shadow-2xl shadow-slate-300/40 sm:p-3">
            <div className="overflow-hidden rounded-[22px] bg-slate-950">
              {/* Dashboard top bar */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white">
                    B
                  </div>

                  <div>
                    <p className="text-[10px] text-slate-500">
                      Business Overview
                    </p>

                    <h2 className="text-sm font-semibold text-white">
                      Dashboard
                    </h2>
                  </div>
                </div>

                <div className="hidden text-right sm:block">
                  <p className="text-[10px] text-slate-500">
                    Today's performance
                  </p>

                  <p className="text-xs font-semibold text-emerald-400">
                    Growing
                  </p>
                </div>
              </div>

              <div className="p-4 sm:p-5">
                {/* KPI cards */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl bg-white/[0.07] p-3.5">
                    <div className="flex items-center gap-2 text-slate-400">
                      <ShoppingCart size={15} />
                      <span className="text-[10px]">Sales</span>
                    </div>

                    <p className="mt-2 text-lg font-bold text-white">
                      KSh 8,450
                    </p>

                    <p className="mt-1 text-[9px] text-emerald-400">
                      +12.5% today
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/[0.07] p-3.5">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Package size={15} />
                      <span className="text-[10px]">Products</span>
                    </div>

                    <p className="mt-2 text-lg font-bold text-white">128</p>

                    <p className="mt-1 text-[9px] text-slate-500">
                      In inventory
                    </p>
                  </div>

                  <div className="col-span-2 rounded-2xl bg-white/[0.07] p-3.5 sm:col-span-1">
                    <div className="flex items-center gap-2 text-slate-400">
                      <Users size={15} />
                      <span className="text-[10px]">Customers</span>
                    </div>

                    <p className="mt-2 text-lg font-bold text-white">246</p>

                    <p className="mt-1 text-[9px] text-slate-500">
                      Active customers
                    </p>
                  </div>
                </div>

                {/* Chart */}
                <div className="mt-3 rounded-2xl bg-white/[0.07] p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BarChart3 size={15} className="text-slate-400" />

                      <span className="text-[10px] font-medium text-slate-300">
                        Sales Overview
                      </span>
                    </div>

                    <span className="text-[10px] text-slate-500">
                      This week
                    </span>
                  </div>

                  <div className="mt-5 flex h-32 items-end gap-1.5 sm:gap-2">
                    {chart.map((height, index) => (
                      <div
                        key={index}
                        className="group relative flex h-full flex-1 items-end"
                      >
                        <div
                          className="w-full rounded-t-md bg-primary/70 transition-all duration-300 group-hover:bg-primary"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="mt-2 flex justify-between text-[8px] text-slate-600">
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
                <div className="mt-3 rounded-2xl bg-white/[0.07] p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-medium text-slate-300">
                      Recent Sales
                    </span>

                    <span className="text-[9px] text-primary">
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

                          <span className="text-[9px] text-slate-400">
                            {name}
                          </span>
                        </div>

                        <span className="text-[9px] font-semibold text-white">
                          {amount}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom floating card */}
          <div className="absolute -bottom-5 -left-3 z-20 hidden rounded-2xl border border-border bg-white px-4 py-3 shadow-xl sm:block lg:-left-7">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <BarChart3 size={18} />
              </div>

              <div>
                <p className="text-[10px] text-muted">Business performance</p>
                <p className="text-sm font-bold text-foreground">
                  Looking good
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}