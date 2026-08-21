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
      className="relative overflow-hidden bg-surface px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl sm:h-72 sm:w-72" />

      <div className="relative mx-auto max-w-7xl">

        {/* =========================
            HEADING
        ========================== */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-[10px] font-bold uppercase tracking-wider text-primary sm:text-sm">
            Powerful Features
          </span>

          <h2 className="mx-auto mt-2.5 max-w-[340px] text-[1.75rem] font-bold leading-[1.12] tracking-tight text-foreground sm:mt-3 sm:max-w-2xl sm:text-4xl">
            Everything your business needs in one place
          </h2>

          <p className="mx-auto mt-3 max-w-[350px] text-[13px] leading-5 text-muted sm:mt-4 sm:max-w-2xl sm:text-base sm:leading-7">
            From recording your first sale to understanding your business
            performance, Biashara Manager keeps everything organized.
          </p>
        </div>

        {/* =========================
            FEATURE CARDS
        ========================== */}
        <div className="mt-8 grid gap-3 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  border border-border
                  bg-white/75
                  p-4
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/20
                  hover:bg-white
                  hover:shadow-xl

                  sm:rounded-2xl
                  sm:p-6

                  lg:rounded-3xl
                  lg:p-7
                "
              >
                {/* Decorative circle */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150 sm:-right-10 sm:-top-10 sm:h-28 sm:w-28" />

                <div className="relative">

                  {/* Icon + number */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-12 sm:w-12 sm:rounded-xl lg:h-14 lg:w-14 lg:rounded-2xl">
                      <Icon
                        size={19}
                        strokeWidth={1.8}
                        className="sm:h-[23px] sm:w-[23px]"
                      />
                    </div>

                    <span className="text-[9px] font-semibold text-slate-300 sm:text-xs">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-[15px] font-bold leading-snug text-foreground sm:mt-6 sm:text-lg lg:mt-7 lg:text-xl">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-1.5 text-[12px] leading-5 text-muted sm:mt-3 sm:text-sm sm:leading-6">
                    {feature.description}
                  </p>

                  {/* Label */}
                  <div className="mt-4 text-[10px] font-semibold text-primary sm:mt-6 sm:text-xs lg:mt-7">
                    Built into Biashara Manager →
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================
            REAL APP SCREENSHOTS
        ========================== */}
        <div className="mt-16 sm:mt-24 lg:mt-28">

          {/* Screenshot heading */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-primary sm:text-xs">
              <BarChart3 size={14} />
              See Biashara Manager in action
            </span>

            <h3 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Powerful tools.
              <span className="block text-primary">
                Simple experience.
              </span>
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-[13px] leading-6 text-muted sm:text-base sm:leading-7">
              Explore real screens from Biashara Manager and see how the app
              helps you manage different parts of your business.
            </p>
          </div>

          {/* Screenshot cards */}
          <div className="mt-10 grid gap-5 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {screenshots.map((screenshot) => (
              <div
                key={screenshot.title}
                className="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-2xl"
              >
                {/* Screenshot */}
                <div className="relative flex justify-center overflow-hidden bg-slate-100 px-6 pt-6">
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

                {/* Description */}
                <div className="p-5 sm:p-6">
                  <h4 className="text-base font-bold text-foreground sm:text-lg">
                    {screenshot.title}
                  </h4>

                  <p className="mt-2 text-[12px] leading-5 text-muted sm:text-sm sm:leading-6">
                    {screenshot.description}
                  </p>

                  <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold text-primary sm:text-xs">
                    Explore the feature
                    <ArrowRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================
            BOTTOM HIGHLIGHT
        ========================== */}
        <div className="mt-12 overflow-hidden rounded-xl border border-primary/10 bg-primary p-4 text-white shadow-xl shadow-primary/10 sm:mt-16 sm:rounded-3xl sm:p-9">
          <div className="flex flex-col gap-5 sm:gap-7 md:flex-row md:items-center md:justify-between">

            {/* Text */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-1.5 text-[10px] font-semibold text-white/80 sm:gap-2 sm:text-sm">
                <FileText
                  size={14}
                  className="sm:h-4 sm:w-4"
                />

                Built for everyday business
              </div>

              <h3 className="mt-2.5 text-lg font-bold leading-tight sm:mt-3 sm:text-3xl">
                Spend less time managing records and more time growing.
              </h3>

              <p className="mt-2.5 text-[11px] leading-5 text-white/70 sm:mt-3 sm:text-sm sm:leading-6">
                Biashara Manager brings the important parts of your business
                together so you can work smarter.
              </p>
            </div>

            {/* Icon */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center self-start rounded-xl bg-white/10 sm:h-20 sm:w-20 sm:self-auto sm:rounded-3xl">
              <BarChart3
                size={24}
                className="sm:h-8 sm:w-8"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}