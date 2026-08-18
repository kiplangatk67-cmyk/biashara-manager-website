import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bell,
  Boxes,
  CheckCircle2,
  Package,
  ShoppingCart,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";

const stats = [
  {
    icon: ShoppingCart,
    label: "Sales",
    value: "KSh 8,450",
  },
  {
    icon: Package,
    label: "Products",
    value: "128",
  },
  {
    icon: Users,
    label: "Customers",
    value: "84",
  },
  {
    icon: Wallet,
    label: "Expenses",
    value: "KSh 2,140",
  },
];

export default function AppShowcase() {
  return (
    <section className="overflow-hidden bg-white px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Text */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary">
            <TrendingUp size={14} />
            Your business at a glance
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything important,
            <span className="block text-primary">
              right at your fingertips.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
            Get a clear view of your business from one simple dashboard.
            Quickly see sales, products, customers, expenses, and other
            important business information.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Quick access to important business information",
              "Simple dashboards designed for everyday use",
              "Organized sales and inventory records",
              "Useful business performance information",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-secondary"
                />

                <span className="text-sm font-medium text-foreground">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/features"
            className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark"
          >
            Explore Features

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Phone showcase */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative mx-auto w-[290px] rounded-[42px] border-[7px] border-slate-900 bg-slate-900 p-2 shadow-2xl sm:w-[320px]">
            {/* Phone top */}
            <div className="absolute left-1/2 top-1 z-20 h-5 w-28 -translate-x-1/2 rounded-full bg-slate-900" />

            {/* Screen */}
            <div className="overflow-hidden rounded-[32px] bg-surface">
              {/* Header */}
              <div className="bg-primary px-5 pb-5 pt-8 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-white/70">
                      Good morning
                    </p>

                    <h3 className="mt-1 text-lg font-bold">
                      Dashboard
                    </h3>
                  </div>

                  <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-white/15">
                    <Bell size={16} />

                    <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-white" />
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-white/10 p-4">
                  <p className="text-[10px] text-white/70">
                    Today's sales
                  </p>

                  <p className="mt-1 text-2xl font-bold">
                    KSh 8,450
                  </p>

                  <div className="mt-2 flex items-center gap-1 text-[10px] text-white/80">
                    <TrendingUp size={12} />
                    18.4% compared to yesterday
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4 px-4 py-5">
                <div className="grid grid-cols-2 gap-3">
                  {stats.map((stat) => {
                    const Icon = stat.icon;

                    return (
                      <div
                        key={stat.label}
                        className="rounded-2xl border border-border bg-white p-3 shadow-sm"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Icon size={15} />
                        </div>

                        <p className="mt-3 text-[10px] text-muted">
                          {stat.label}
                        </p>

                        <p className="mt-1 text-sm font-bold text-foreground">
                          {stat.value}
                        </p>
                      </div>
                    );
                  })}
                </div>

                {/* Chart */}
                <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <BarChart3
                        size={15}
                        className="text-primary"
                      />

                      <span className="text-xs font-bold text-foreground">
                        Sales overview
                      </span>
                    </div>

                    <span className="text-[10px] font-semibold text-secondary">
                      +18.4%
                    </span>
                  </div>

                  <div className="mt-5 flex h-24 items-end gap-2">
                    {[30, 44, 36, 55, 48, 67, 60, 84].map(
                      (height, index) => (
                        <div
                          key={index}
                          className="flex-1 rounded-t-md bg-primary/60 transition hover:bg-primary"
                          style={{
                            height: `${height}%`,
                          }}
                        />
                      ),
                    )}
                  </div>
                </div>

                {/* Recent activity */}
                <div className="rounded-2xl border border-border bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-foreground">
                      Recent activity
                    </span>

                    <span className="text-[10px] text-primary">
                      View all
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <ShoppingCart size={15} />
                    </div>

                    <div className="flex-1">
                      <p className="text-[10px] font-semibold text-foreground">
                        New sale recorded
                      </p>

                      <p className="mt-1 text-[9px] text-muted">
                        Today, 10:42 AM
                      </p>
                    </div>

                    <span className="text-[10px] font-bold text-secondary">
                      +KSh 1,250
                    </span>
                  </div>

                  <div className="mt-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                      <Boxes size={15} />
                    </div>

                    <div className="flex-1">
                      <p className="text-[10px] font-semibold text-foreground">
                        Inventory updated
                      </p>

                      <p className="mt-1 text-[9px] text-muted">
                        Today, 9:18 AM
                      </p>
                    </div>

                    <span className="text-[10px] text-muted">
                      5 items
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom navigation */}
              <div className="border-t border-border bg-white px-4 py-3">
                <div className="flex items-center justify-around">
                  <div className="flex flex-col items-center gap-1 text-primary">
                    <BarChart3 size={15} />
                    <span className="text-[8px] font-semibold">
                      Home
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-1 text-muted">
                    <ShoppingCart size={15} />
                    <span className="text-[8px]">
                      Sales
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-1 text-muted">
                    <Package size={15} />
                    <span className="text-[8px]">
                      Products
                    </span>
                  </div>

                  <div className="flex flex-col items-center gap-1 text-muted">
                    <Users size={15} />
                    <span className="text-[8px]">
                      Customers
                    </span>
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