import Image from "next/image";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  CreditCard,
  FileText,
  LockKeyhole,
  Receipt,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Receipt,
    title: "Sales Management",
    description:
      "Record sales quickly, including multiple products in a single transaction.",
  },
  {
    icon: Boxes,
    title: "Inventory Management",
    description:
      "Keep track of products, stock levels, prices, and inventory movement.",
  },
  {
    icon: Users,
    title: "Customer Management",
    description:
      "Keep customer information organized and easily accessible.",
  },
  {
    icon: CreditCard,
    title: "Expenses & Debts",
    description:
      "Track business expenses and keep an accurate record of customer debts.",
  },
  {
    icon: BarChart3,
    title: "Reports & Insights",
    description:
      "Understand your business through clear sales, expense, and performance reports.",
  },
  {
    icon: LockKeyhole,
    title: "Security",
    description:
      "Protect your business information with secure accounts and access controls.",
  },
];

const screenshots = [
  {
    image: "/screenshots/home.jpeg",
    title: "Business Dashboard",
    description:
      "See important business information and performance at a glance.",
  },
  {
    image: "/screenshots/products.jpeg",
    title: "Products & Inventory",
    description:
      "Manage your products, prices, quantities, and stock levels.",
  },
  {
    image: "/screenshots/sales-1.png",
    title: "Sales Management",
    description:
      "Record sales and keep your transactions organized.",
  },
  {
    image: "/screenshots/customers.jpeg",
    title: "Customers",
    description:
      "Keep customer information organized and easy to access.",
  },
  {
    image: "/screenshots/outstanding-credit.jpeg",
    title: "Outstanding Credit",
    description:
      "Track customer balances and outstanding payments clearly.",
  },
  {
    image: "/screenshots/business-statistics.jpeg",
    title: "Business Statistics",
    description:
      "Understand your business through useful performance information.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl sm:h-96 sm:w-96" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* =========================
            SECTION INTRO
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary sm:text-xs">
            Powerful Features
          </span>

          <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything your business needs
            <span className="block text-primary">
              in one place.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted sm:mt-5 sm:text-base sm:leading-7">
            From recording sales to managing inventory and understanding your
            numbers, Biashara Manager gives you simple tools to keep your
            business organized.
          </p>
        </div>

        {/* =========================
            FEATURES
        ========================== */}
        <div className="mt-12 grid gap-5 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:bg-white hover:shadow-xl sm:p-7 lg:rounded-3xl"
              >
                {/* Decorative glow */}
                <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">

                  {/* Icon + number */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-14 sm:w-14 sm:rounded-2xl">
                      <Icon
                        size={23}
                        strokeWidth={1.8}
                      />
                    </div>

                    <span className="text-xs font-semibold text-slate-300">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-bold leading-snug text-foreground sm:text-xl">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {feature.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-xs font-bold text-primary">
                    <span>Biashara Manager</span>

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
            APP SHOWCASE
        ========================== */}
        <div className="mt-20 sm:mt-24 lg:mt-28">

          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary sm:text-xs">
              <BarChart3 size={14} />
              See the app in action
            </span>

            <h3 className="mt-5 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Powerful tools.
              <span className="block text-primary">
                Simple experience.
              </span>
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
              Explore real screens from Biashara Manager and see how each
              part of the app helps you manage your business.
            </p>
          </div>

          {/* =========================
              SCREENSHOTS
          ========================== */}
          <div className="mt-12 grid gap-6 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {screenshots.map((screenshot) => (
              <div
                key={screenshot.title}
                className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-2xl"
              >

                {/* Image */}
                <div className="relative flex justify-center overflow-hidden bg-slate-100 px-6 pt-7">
                  <div className="relative w-full max-w-[240px] overflow-hidden rounded-t-[28px] border-[5px] border-slate-900 bg-slate-900 shadow-xl transition-transform duration-500 group-hover:-translate-y-2">
                    <Image
                      src={screenshot.image}
                      alt={`${screenshot.title} screen in Biashara Manager`}
                      width={500}
                      height={1000}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h4 className="text-lg font-bold text-foreground">
                    {screenshot.title}
                  </h4>

                  <p className="mt-2 text-sm leading-6 text-muted">
                    {screenshot.description}
                  </p>

                  <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-bold text-primary">
                    Explore the feature

                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================
            FINAL HIGHLIGHT
        ========================== */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-primary shadow-xl shadow-primary/10 sm:mt-20">

          <div className="flex flex-col gap-8 px-6 py-8 sm:px-10 sm:py-10 md:flex-row md:items-center md:justify-between lg:px-12">

            <div className="max-w-3xl text-white">

              <div className="flex items-center gap-2 text-xs font-semibold text-white/80 sm:text-sm">
                <FileText size={16} />
                Built for everyday business
              </div>

              <h3 className="mt-3 text-2xl font-bold leading-tight sm:text-3xl">
                Spend less time managing records and more time growing.
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">
                Biashara Manager brings the important parts of your business
                together so you can work smarter, stay organized, and make
                better decisions.
              </p>
            </div>

            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-white sm:h-20 sm:w-20 sm:rounded-3xl">
              <BarChart3 size={30} />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}