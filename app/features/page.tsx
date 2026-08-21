import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CheckCircle2,
  CreditCard,
  FileText,
  Package,
  Receipt,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Users,
  Wallet,
} from "lucide-react";
import BackButton from "@/components/BackButton";

const features = [
  {
    icon: ShoppingCart,
    title: "Sales Management",
    description:
      "Record your sales quickly and keep your transaction history organized.",
    points: [
      "Record daily sales",
      "View sales history",
      "Track transaction totals",
    ],
  },
  {
    icon: Package,
    title: "Products & Inventory",
    description:
      "Keep track of your products and know what is available in your business.",
    points: [
      "Add and manage products",
      "Monitor stock levels",
      "Update inventory after sales",
    ],
  },
  {
    icon: Users,
    title: "Customer Management",
    description:
      "Keep customer information organized and easier to access when you need it.",
    points: [
      "Create customer records",
      "View customer history",
      "Manage customer information",
    ],
  },
  {
    icon: CreditCard,
    title: "Credit & Debts",
    description:
      "Keep clear records of customers who have outstanding balances.",
    points: [
      "Record credit sales",
      "Track outstanding balances",
      "Monitor debt payments",
    ],
  },
  {
    icon: Wallet,
    title: "Expense Tracking",
    description:
      "Record business expenses and keep a clearer picture of where your money goes.",
    points: [
      "Record expenses",
      "Organize spending",
      "Review expense history",
    ],
  },
  {
    icon: BarChart3,
    title: "Reports & Insights",
    description:
      "Turn your business records into useful information that helps you understand performance.",
    points: [
      "View sales summaries",
      "Monitor business activity",
      "Understand performance",
    ],
  },
  {
    icon: Receipt,
    title: "Receipts",
    description:
      "Keep your sales transactions organized with clear receipt information.",
    points: [
      "View transaction details",
      "Keep sales records",
      "Access receipt information",
    ],
  },
  {
    icon: Boxes,
    title: "Business Dashboard",
    description:
      "See important business information from one simple dashboard.",
    points: [
      "View key figures",
      "Monitor business activity",
      "Access important tools quickly",
    ],
  },
];

const dashboardItems = [
  "Monitor sales activity",
  "Keep track of products and stock",
  "Review expenses and customer balances",
  "Understand your business performance",
];

export default function FeaturesPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-surface">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-14 pt-6 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8">
        <div className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl sm:h-72 sm:w-72" />

        <div className="pointer-events-none absolute -right-32 top-20 h-64 w-64 rounded-full bg-secondary/10 blur-3xl sm:h-72 sm:w-72" />

        <div className="relative mx-auto mb-8 max-w-6xl sm:mb-10">
          <BackButton />
        </div>

        <div className="relative mx-auto max-w-4xl px-1 text-center">
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-primary/10 bg-white px-3.5 py-2 text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm sm:px-4 sm:text-xs">
            <Sparkles size={13} className="shrink-0" />
            Powerful & simple tools
          </span>

          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground sm:mt-6 sm:text-5xl lg:text-6xl">
            Everything you need to
            <span className="block text-primary">
              manage your business.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-muted sm:mt-6 sm:text-base sm:leading-7">
            From recording sales to tracking inventory and understanding your
            business performance, Biashara Manager brings your essential tools
            together in one place.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 pb-16 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl sm:rounded-[28px] sm:p-7"
              >
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150 sm:h-32 sm:w-32" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white sm:h-14 sm:w-14 sm:rounded-2xl">
                      <Icon
                        size={22}
                        strokeWidth={1.8}
                        className="sm:hidden"
                      />

                      <Icon
                        size={24}
                        strokeWidth={1.8}
                        className="hidden sm:block"
                      />
                    </div>

                    <span className="text-[10px] font-bold text-slate-300 sm:text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className="mt-5 text-lg font-bold leading-snug text-foreground sm:mt-6">
                    {feature.title}
                  </h2>

                  <p className="mt-2.5 text-xs leading-5 text-muted sm:mt-3 sm:text-sm sm:leading-6">
                    {feature.description}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {feature.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-xs leading-5 text-muted"
                      >
                        <CheckCircle2
                          size={14}
                          className="mt-0.5 shrink-0 text-secondary"
                        />

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Dashboard highlight */}
      <section className="border-y border-border bg-white px-4 py-16 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 sm:gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-2 text-[10px] font-bold uppercase tracking-wider text-primary sm:px-4 sm:text-xs">
              <TrendingUp size={13} />
              Business visibility
            </span>

            <h2 className="mt-5 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Know what is happening in your business.
            </h2>

            <p className="mt-4 text-sm leading-6 text-muted sm:mt-5 sm:text-base sm:leading-7">
              Instead of keeping important information in different places,
              Biashara Manager brings your everyday business activities
              together so you can get a clearer picture of your operations.
            </p>

            <div className="mt-6 space-y-3.5 sm:mt-7 sm:space-y-4">
              {dashboardItems.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <CheckCircle2 size={15} />
                  </div>

                  <span className="text-sm font-semibold text-foreground">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/pricing"
              className="group mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark sm:mt-8"
            >
              View Pricing

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Dashboard visual */}
          <div className="w-full overflow-hidden rounded-[28px] bg-slate-950 p-3 shadow-2xl sm:rounded-[32px] sm:p-7">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:rounded-3xl sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[10px] text-slate-500 sm:text-xs">
                    Business dashboard
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                    Overview
                  </h3>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white sm:h-10 sm:w-10">
                  B
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3">
                <div className="rounded-xl bg-white/5 p-3 sm:rounded-2xl sm:p-4">
                  <ShoppingCart size={16} className="text-primary" />

                  <p className="mt-2.5 text-[9px] text-slate-500 sm:mt-3 sm:text-[10px]">
                    Today's Sales
                  </p>

                  <p className="mt-1 text-base font-bold text-white sm:text-lg">
                    KSh 8,450
                  </p>
                </div>

                <div className="rounded-xl bg-white/5 p-3 sm:rounded-2xl sm:p-4">
                  <Package size={16} className="text-primary" />

                  <p className="mt-2.5 text-[9px] text-slate-500 sm:mt-3 sm:text-[10px]">
                    Products
                  </p>

                  <p className="mt-1 text-base font-bold text-white sm:text-lg">
                    128
                  </p>
                </div>
              </div>

              <div className="mt-2.5 rounded-xl bg-white/5 p-3 sm:mt-3 sm:rounded-2xl sm:p-4">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex min-w-0 items-center gap-2">
                    <BarChart3
                      size={15}
                      className="shrink-0 text-primary"
                    />

                    <span className="truncate text-[10px] font-semibold text-white sm:text-xs">
                      Sales overview
                    </span>
                  </div>

                  <span className="shrink-0 text-[10px] text-emerald-400 sm:text-xs">
                    +18.4%
                  </span>
                </div>

                <div className="mt-5 flex h-24 items-end gap-1.5 sm:mt-6 sm:h-28 sm:gap-2">
                  {[32, 45, 38, 61, 50, 73, 65, 88].map(
                    (height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-md bg-primary/70 transition hover:bg-primary"
                        style={{ height: `${height}%` }}
                      />
                    ),
                  )}
                </div>
              </div>

              <div className="mt-2.5 flex items-center gap-3 rounded-xl bg-primary/10 p-3 sm:mt-3 sm:rounded-2xl sm:p-4">
                <FileText
                  size={17}
                  className="shrink-0 text-primary"
                />

                <div className="min-w-0">
                  <p className="text-[10px] font-semibold text-white sm:text-xs">
                    Business reports
                  </p>

                  <p className="mt-1 truncate text-[9px] text-slate-500 sm:text-[10px]">
                    Your business information in one place
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[28px] bg-primary p-7 text-center text-white shadow-2xl shadow-primary/20 sm:rounded-[32px] sm:p-12">
          <h2 className="text-2xl font-bold leading-tight sm:text-3xl">
            Ready to simplify your business management?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-white/75 sm:mt-4">
            Choose a flexible plan and start managing your business with
            Biashara Manager.
          </p>

          <Link
            href="/pricing"
            className="group mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-primary shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 sm:mt-7"
          >
            Get Started

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}