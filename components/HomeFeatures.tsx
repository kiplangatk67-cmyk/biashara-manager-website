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
    <section className="border-y border-border bg-white px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary">
            <TrendingUp size={14} />
            Everything in one place
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Run your business with
            <span className="text-primary"> less stress.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
            Biashara Manager brings your essential business tools together,
            helping you keep your daily operations organized and your
            business performance easier to understand.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-border bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <ArrowRight
                    size={17}
                    className="text-border transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary"
                  />
                </div>

                <h3 className="mt-6 text-lg font-bold text-foreground">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Business overview */}
        <div className="mt-16 grid items-center gap-10 rounded-[32px] bg-slate-950 p-7 text-white shadow-2xl sm:p-10 lg:grid-cols-2 lg:p-12">
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary">
              <BarChart3 size={23} />
            </div>

            <h3 className="mt-6 text-2xl font-bold sm:text-3xl">
              See the bigger picture.
            </h3>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400">
              Your business generates information every day. Biashara Manager
              helps turn that information into a clearer view of your sales,
              products, expenses, and overall performance.
            </p>

            <Link
              href="/features"
              className="group mt-7 inline-flex items-center gap-2 text-sm font-bold text-primary transition hover:text-white"
            >
              Explore all features
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Mini dashboard */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-5">
            <div className="rounded-2xl bg-white/5 p-5">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500">
                    Business overview
                  </p>

                  <p className="mt-1 text-lg font-bold">
                    This week
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-bold">
                  B
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-slate-500">
                    <ShoppingCart size={14} />
                    <span className="text-xs">
                      Sales
                    </span>
                  </div>

                  <p className="mt-3 text-lg font-bold">
                    KSh 42,850
                  </p>

                  <p className="mt-1 text-xs text-emerald-400">
                    +12.8%
                  </p>
                </div>

                <div className="rounded-2xl bg-white/5 p-4">
                  <div className="flex items-center gap-2 text-slate-500">
                    <Boxes size={14} />
                    <span className="text-xs">
                      Stock
                    </span>
                  </div>

                  <p className="mt-3 text-lg font-bold">
                    128
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Products
                  </p>
                </div>
              </div>

              <div className="mt-3 rounded-2xl bg-white/5 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500">
                    Sales activity
                  </span>

                  <span className="text-xs text-primary">
                    This week
                  </span>
                </div>

                <div className="mt-5 flex h-24 items-end gap-2">
                  {[30, 42, 36, 58, 50, 72, 63, 86].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-md bg-primary/70 transition hover:bg-primary"
                        style={{
                          height: `${height}%`,
                        }}
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