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
    <section className="border-y border-border bg-surface px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">

        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-2 text-[10px] font-bold uppercase tracking-wider text-primary sm:px-4 sm:text-xs">
            <TrendingUp size={13} />
            Everything in one place
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:mt-5 sm:text-4xl lg:text-5xl">
            Run your business with
            <span className="text-primary"> less stress.</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-muted sm:mt-5 sm:text-base sm:leading-7">
            Biashara Manager brings your essential business tools together,
            helping you keep your daily operations organized and your
            business performance easier to understand.
          </p>
        </div>

        <div className="mt-9 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-border bg-white/70 p-5 transition-all duration-300 hover:border-primary/20 hover:bg-white hover:shadow-xl sm:rounded-3xl sm:p-6"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-12 sm:w-12 sm:rounded-2xl">
                    <Icon size={21} strokeWidth={1.8} />
                  </div>

                  <ArrowRight
                    size={16}
                    className="text-border group-hover:text-primary"
                  />
                </div>

                <h3 className="mt-5 text-base font-bold text-foreground sm:mt-6 sm:text-lg">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs leading-5 text-muted sm:text-sm sm:leading-6">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Overview */}
        <div className="mt-10 grid items-center gap-8 rounded-3xl bg-slate-950 p-5 text-white shadow-2xl sm:mt-16 sm:gap-10 sm:p-8 lg:grid-cols-2 lg:p-12">
          <div>
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/20 text-primary sm:h-12 sm:w-12 sm:rounded-2xl">
              <BarChart3 size={22} />
            </div>

            <h3 className="mt-5 text-2xl font-bold sm:mt-6 sm:text-3xl">
              See the bigger picture.
            </h3>

            <p className="mt-3 max-w-xl text-xs leading-6 text-slate-400 sm:text-sm sm:leading-7">
              Your business generates information every day. Biashara Manager
              helps turn that information into a clearer view of your sales,
              products, expenses, and overall performance.
            </p>

            <Link
              href="/features"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:text-white sm:mt-7"
            >
              Explore all features
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-3 sm:rounded-3xl sm:p-5">
            <div className="rounded-xl bg-white/5 p-4 sm:rounded-2xl sm:p-5">

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] text-slate-500 sm:text-xs">
                    Business overview
                  </p>
                  <p className="mt-1 text-base font-bold sm:text-lg">
                    This week
                  </p>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-xs font-bold sm:h-10 sm:w-10 sm:rounded-xl sm:text-sm">
                  B
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3">
                <div className="rounded-xl bg-white/5 p-3 sm:rounded-2xl sm:p-4">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <ShoppingCart size={13} />
                    <span className="text-[10px] sm:text-xs">Sales</span>
                  </div>
                  <p className="mt-2 text-base font-bold sm:mt-3 sm:text-lg">
                    KSh 42,850
                  </p>
                  <p className="mt-1 text-[10px] text-emerald-400 sm:text-xs">
                    +12.8%
                  </p>
                </div>

                <div className="rounded-xl bg-white/5 p-3 sm:rounded-2xl sm:p-4">
                  <div className="flex items-center gap-1.5 text-slate-500">
                    <Boxes size={13} />
                    <span className="text-[10px] sm:text-xs">Stock</span>
                  </div>
                  <p className="mt-2 text-base font-bold sm:mt-3 sm:text-lg">
                    128
                  </p>
                  <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                    Products
                  </p>
                </div>
              </div>

              <div className="mt-2.5 rounded-xl bg-white/5 p-3 sm:mt-3 sm:rounded-2xl sm:p-4">
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
                        className="flex-1 rounded-t-sm bg-primary/70"
                        style={{ height: `${height}%` }}
                      />
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