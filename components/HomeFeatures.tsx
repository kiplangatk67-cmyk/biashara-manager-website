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
    description: "Record and organize your daily sales with ease.",
  },
  {
    icon: Package,
    title: "Inventory",
    description: "Know what you have in stock and what needs attention.",
  },
  {
    icon: Users,
    title: "Customers",
    description: "Keep customer information organized and accessible.",
  },
  {
    icon: Wallet,
    title: "Expenses",
    description: "Track business spending and understand your costs.",
  },
  {
    icon: Receipt,
    title: "Receipts",
    description: "Keep your transaction records clear and organized.",
  },
  {
    icon: CreditCard,
    title: "Credit & Debts",
    description: "Keep track of outstanding customer balances.",
  },
];

export default function HomeFeatures() {
  return (
    <section className="border-y border-border bg-surface px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADING
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">

          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-primary sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
            <TrendingUp
              size={12}
              className="sm:h-[13px] sm:w-[13px]"
            />

            Everything in one place
          </span>

          {/* Heading */}
          <h2 className="mx-auto mt-4 max-w-[350px] text-[1.8rem] font-bold leading-[1.1] tracking-tight text-foreground sm:mt-5 sm:max-w-3xl sm:text-4xl lg:text-5xl">
            Run your business with
            <span className="text-primary"> less stress.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-3 max-w-[350px] text-[13px] leading-5 text-muted sm:mt-5 sm:max-w-3xl sm:text-base sm:leading-7">
            Biashara Manager brings your essential business tools together,
            helping you keep your daily operations organized and your
            business performance easier to understand.
          </p>
        </div>

        {/* =========================
            FEATURE CARDS
        ========================== */}
        <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  rounded-xl
                  border border-border
                  bg-white/70
                  p-4
                  transition-all
                  duration-300
                  hover:border-primary/20
                  hover:bg-white
                  hover:shadow-xl

                  sm:rounded-2xl
                  sm:p-5

                  lg:rounded-3xl
                  lg:p-6
                "
              >
                {/* Card top */}
                <div className="flex items-center justify-between">

                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-11 sm:w-11 sm:rounded-xl lg:h-12 lg:w-12 lg:rounded-2xl">
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                      className="sm:h-[21px] sm:w-[21px]"
                    />
                  </div>

                  <ArrowRight
                    size={14}
                    className="text-border transition-colors group-hover:text-primary sm:h-4 sm:w-4"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-4 text-[15px] font-bold leading-snug text-foreground sm:mt-5 sm:text-base lg:mt-6 lg:text-lg">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-1.5 text-[12px] leading-5 text-muted sm:mt-2 sm:text-xs sm:leading-5 lg:text-sm lg:leading-6">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* =========================
            OVERVIEW
        ========================== */}
        <div className="mt-9 grid items-center gap-7 rounded-2xl bg-slate-950 p-4 text-white shadow-2xl sm:mt-16 sm:gap-10 sm:rounded-3xl sm:p-8 lg:grid-cols-2 lg:p-12">

          {/* Overview text */}
          <div>

            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 text-primary sm:h-12 sm:w-12 sm:rounded-2xl">
              <BarChart3
                size={19}
                className="sm:h-[22px] sm:w-[22px]"
              />
            </div>

            <h3 className="mt-4 text-xl font-bold leading-tight sm:mt-6 sm:text-3xl">
              See the bigger picture.
            </h3>

            <p className="mt-2.5 max-w-xl text-[12px] leading-5 text-slate-400 sm:mt-3 sm:text-sm sm:leading-7">
              Your business generates information every day. Biashara Manager
              helps turn that information into a clearer view of your sales,
              products, expenses, and overall performance.
            </p>

            <Link
              href="/features"
              className="group mt-5 inline-flex items-center gap-1.5 text-[13px] font-bold text-primary transition-colors hover:text-white sm:mt-7 sm:gap-2 sm:text-sm"
            >
              Explore all features

              <ArrowRight
                size={15}
                className="transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
              />
            </Link>
          </div>

          {/* =========================
              DASHBOARD PREVIEW
          ========================== */}
          <div className="rounded-xl border border-white/10 bg-white/5 p-2.5 sm:rounded-3xl sm:p-5">
            <div className="rounded-lg bg-white/5 p-3 sm:rounded-2xl sm:p-5">

              {/* Dashboard header */}
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-[8px] text-slate-500 sm:text-xs">
                    Business overview
                  </p>

                  <p className="mt-0.5 text-sm font-bold sm:mt-1 sm:text-lg">
                    This week
                  </p>
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-[10px] font-bold sm:h-10 sm:w-10 sm:rounded-xl sm:text-sm">
                  B
                </div>
              </div>

              {/* KPIs */}
              <div className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:gap-3">

                {/* Sales */}
                <div className="rounded-lg bg-white/5 p-2.5 sm:rounded-2xl sm:p-4">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <ShoppingCart
                      size={11}
                      className="sm:h-[13px] sm:w-[13px]"
                    />

                    <span className="text-[8px] sm:text-xs">
                      Sales
                    </span>
                  </div>

                  <p className="mt-1.5 text-sm font-bold sm:mt-3 sm:text-lg">
                    KSh 42,850
                  </p>

                  <p className="mt-0.5 text-[8px] text-emerald-400 sm:mt-1 sm:text-xs">
                    +12.8%
                  </p>
                </div>

                {/* Stock */}
                <div className="rounded-lg bg-white/5 p-2.5 sm:rounded-2xl sm:p-4">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Boxes
                      size={11}
                      className="sm:h-[13px] sm:w-[13px]"
                    />

                    <span className="text-[8px] sm:text-xs">
                      Stock
                    </span>
                  </div>

                  <p className="mt-1.5 text-sm font-bold sm:mt-3 sm:text-lg">
                    128
                  </p>

                  <p className="mt-0.5 text-[8px] text-slate-500 sm:mt-1 sm:text-xs">
                    Products
                  </p>
                </div>
              </div>

              {/* Sales activity */}
              <div className="mt-2 rounded-lg bg-white/5 p-2.5 sm:mt-3 sm:rounded-2xl sm:p-4">

                <div className="flex items-center justify-between">
                  <span className="text-[8px] text-slate-500 sm:text-xs">
                    Sales activity
                  </span>

                  <span className="text-[8px] text-primary sm:text-xs">
                    This week
                  </span>
                </div>

                <div className="mt-3 flex h-16 items-end gap-1 sm:mt-5 sm:h-24 sm:gap-2">
                  {[30, 42, 36, 58, 50, 72, 63, 86].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex flex-1 items-end"
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
    </section>
  );
}