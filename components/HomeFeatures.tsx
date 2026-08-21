import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CreditCard,
  Package,
  Receipt,
  ShoppingCart,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: ShoppingCart,
    title: "Sales",
    description:
      "Record and organize your daily sales with ease.",
  },
  {
    icon: Package,
    title: "Inventory",
    description:
      "Know what you have in stock and what needs attention.",
  },
  {
    icon: Users,
    title: "Customers",
    description:
      "Keep customer information organized and accessible.",
  },
  {
    icon: Wallet,
    title: "Expenses",
    description:
      "Track business spending and understand your costs.",
  },
  {
    icon: Receipt,
    title: "Receipts",
    description:
      "Keep your transaction records clear and organized.",
  },
  {
    icon: CreditCard,
    title: "Credit & Debts",
    description:
      "Keep track of outstanding customer balances.",
  },
];

export default function HomeFeatures() {
  return (
    <section
      id="home-features"
      className="relative overflow-hidden bg-surface py-16 sm:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =========================
            SECTION INTRO
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary sm:text-xs">
            <TrendingUp size={14} />

            Everything in one place
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Run your business with
            <span className="block text-primary">
              less stress.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted sm:mt-5 sm:text-base sm:leading-7">
            Biashara Manager brings your essential business tools together,
            helping you keep daily operations organized and your business
            performance easier to understand.
          </p>
        </div>

        {/* =========================
            CORE FEATURES
        ========================== */}
        <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl sm:p-7 lg:rounded-3xl"
              >
                {/* Decorative circle */}
                <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">

                  {/* Icon */}
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-14 sm:w-14 sm:rounded-2xl">
                    <Icon
                      size={23}
                      strokeWidth={1.8}
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-6 text-lg font-bold text-foreground sm:text-xl">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {feature.description}
                  </p>

                  {/* Arrow */}
                  <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary">
                    <span>Learn more</span>

                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================
            BUSINESS OVERVIEW
        ========================== */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-slate-950 text-white shadow-2xl sm:mt-20 lg:mt-24">

          <div className="grid items-center gap-10 px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-2 lg:gap-14 lg:px-12 lg:py-14">

            {/* =========================
                TEXT
            ========================== */}
            <div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary sm:h-14 sm:w-14 sm:rounded-2xl">
                <BarChart3 size={24} />
              </div>

              <h3 className="mt-6 text-2xl font-bold leading-tight sm:text-3xl">
                See the bigger picture.
              </h3>

              <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                Your business generates information every day. Biashara
                Manager helps turn that information into a clearer view of
                your sales, products, expenses, and overall performance.
              </p>

              <Link
                href="/features"
                className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-white"
              >
                Explore all features

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>

            {/* =========================
                DASHBOARD PREVIEW
            ========================== */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:rounded-3xl sm:p-5">

              <div className="rounded-xl bg-white/5 p-4 sm:rounded-2xl sm:p-5">

                {/* Dashboard header */}
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-[10px] text-slate-500 sm:text-xs">
                      Business overview
                    </p>

                    <p className="mt-1 text-base font-bold sm:text-lg">
                      This week
                    </p>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-xs font-bold sm:h-10 sm:w-10 sm:text-sm">
                    B
                  </div>
                </div>

                {/* KPIs */}
                <div className="mt-5 grid grid-cols-2 gap-3 sm:mt-6">

                  {/* Sales */}
                  <div className="rounded-xl bg-white/5 p-3 sm:rounded-2xl sm:p-4">
                    <div className="flex items-center gap-2 text-slate-500">
                      <ShoppingCart size={13} />

                      <span className="text-[10px] sm:text-xs">
                        Sales
                      </span>
                    </div>

                    <p className="mt-2 text-base font-bold sm:mt-3 sm:text-lg">
                      KSh 42,850
                    </p>

                    <p className="mt-1 text-[9px] text-emerald-400 sm:text-xs">
                      +12.8%
                    </p>
                  </div>

                  {/* Stock */}
                  <div className="rounded-xl bg-white/5 p-3 sm:rounded-2xl sm:p-4">
                    <div className="flex items-center gap-2 text-slate-500">
                      <Boxes size={13} />

                      <span className="text-[10px] sm:text-xs">
                        Stock
                      </span>
                    </div>

                    <p className="mt-2 text-base font-bold sm:mt-3 sm:text-lg">
                      128
                    </p>

                    <p className="mt-1 text-[9px] text-slate-500 sm:text-xs">
                      Products
                    </p>
                  </div>
                </div>

                {/* Sales activity */}
                <div className="mt-3 rounded-xl bg-white/5 p-3 sm:rounded-2xl sm:p-4">

                  <div className="flex items-center justify-between">
                    <span className="text-[10px] text-slate-500 sm:text-xs">
                      Sales activity
                    </span>

                    <span className="text-[10px] text-primary sm:text-xs">
                      This week
                    </span>
                  </div>

                  <div className="mt-4 flex h-20 items-end gap-1.5 sm:mt-5 sm:h-24 sm:gap-2">
                    {[30, 42, 36, 58, 50, 72, 63, 86].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex h-full flex-1 items-end"
                        >
                          <div
                            className="w-full rounded-t-sm bg-primary/70"
                            style={{ height: `${height}%` }}
                          />
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}