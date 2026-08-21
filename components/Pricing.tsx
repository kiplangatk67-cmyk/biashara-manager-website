import Link from "next/link";
import {
  ArrowRight,
  Check,
  Crown,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const plans = [
  {
    name: "1 Week",
    price: "65",
    period: "7 days",
    description:
      "A simple way to get started with Biashara Manager and organize your business.",
    icon: Zap,
    popular: false,
    features: [
      "Sales management",
      "Product & inventory management",
      "Customer management",
      "Expense tracking",
      "Business reports",
    ],
  },
  {
    name: "2 Weeks",
    price: "130",
    period: "14 days",
    description:
      "More time to manage your business and explore the tools you need every day.",
    icon: ShieldCheck,
    popular: false,
    features: [
      "Everything in 1 Week",
      "Sales & expense reports",
      "Customer debt tracking",
      "Business performance insights",
      "Secure account access",
    ],
  },
  {
    name: "1 Month",
    price: "250",
    period: "30 days",
    description:
      "The best value for businesses ready to make Biashara Manager part of their daily workflow.",
    icon: Crown,
    popular: true,
    features: [
      "Everything in 2 Weeks",
      "Full business management",
      "Advanced business reports",
      "Inventory & sales insights",
      "Priority business support",
    ],
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-surface px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute -bottom-20 -right-24 h-64 w-64 rounded-full bg-secondary/5 blur-3xl sm:-bottom-10 sm:-right-40 sm:h-80 sm:w-80" />

      <div className="relative mx-auto max-w-7xl">

        {/* =========================
            HEADING
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
            <Sparkles
              size={12}
              className="sm:h-[14px] sm:w-[14px]"
            />

            Simple & flexible pricing
          </span>

          <h2 className="mx-auto mt-4 max-w-[350px] text-[1.85rem] font-bold leading-[1.08] tracking-tight text-foreground sm:mt-5 sm:max-w-3xl sm:text-4xl lg:text-5xl">
            Choose a plan that
            <span className="block text-primary">
              works for you.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[350px] text-[13px] leading-5 text-muted sm:mt-5 sm:max-w-2xl sm:text-base sm:leading-7">
            Start with a flexible plan and use Biashara Manager to organize
            your sales, products, customers, expenses, and business records.
          </p>
        </div>

        {/* =========================
            PRICING CARDS
        ========================== */}
        <div className="mx-auto mt-9 grid max-w-6xl gap-5 sm:mt-12 sm:gap-6 lg:grid-cols-3 lg:items-stretch lg:gap-6">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:rounded-[28px] sm:p-7 lg:p-8 ${
                  plan.popular
                    ? "border-primary shadow-lg shadow-primary/10 lg:scale-[1.035] lg:shadow-xl"
                    : "border-border"
                }`}
              >

                {/* =========================
                    POPULAR BADGE
                ========================== */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-3.5 py-1.5 text-[9px] font-bold uppercase tracking-wider text-white shadow-md shadow-primary/20 sm:px-4 sm:text-[10px]">
                    <Crown
                      size={11}
                      className="sm:h-3 sm:w-3"
                    />

                    Best Value
                  </div>
                )}

                {/* =========================
                    PLAN ICON
                ========================== */}
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl sm:h-13 sm:w-13 sm:rounded-2xl ${
                    plan.popular
                      ? "bg-primary text-white shadow-md shadow-primary/20"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <Icon
                    size={20}
                    strokeWidth={2}
                    className="sm:h-[23px] sm:w-[23px]"
                  />
                </div>

                {/* Plan name */}
                <h3 className="mt-5 text-lg font-bold text-foreground sm:mt-6 sm:text-xl">
                  {plan.name}
                </h3>

                {/* Description */}
                <p className="mt-1.5 text-[13px] leading-5 text-muted sm:mt-2 sm:min-h-[52px] sm:text-sm sm:leading-6">
                  {plan.description}
                </p>

                {/* =========================
                    PRICE
                ========================== */}
                <div className="mt-6 flex items-end gap-1 sm:mt-7">
                  <span className="mb-1.5 text-xs font-semibold text-muted sm:mb-2 sm:text-sm">
                    KSh
                  </span>

                  <span className="text-[2.7rem] font-extrabold leading-none tracking-tight text-foreground sm:text-5xl">
                    {plan.price}
                  </span>
                </div>

                <p className="mt-1.5 text-[10px] font-medium text-muted sm:text-xs">
                  Valid for {plan.period}
                </p>

                {/* =========================
                    CTA
                ========================== */}
                <Link
                  href="/pricing"
                  className={`group mt-6 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-[13px] font-bold transition-all duration-200 hover:-translate-y-0.5 sm:mt-7 sm:min-h-12 sm:px-5 sm:py-3.5 sm:text-sm ${
                    plan.popular
                      ? "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-dark"
                      : "border border-border bg-white text-foreground hover:border-primary/20 hover:bg-surface"
                  }`}
                >
                  Get Started

                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1 sm:h-4 sm:w-4"
                  />
                </Link>

                {/* =========================
                    FEATURES
                ========================== */}
                <div className="mt-7 border-t border-border pt-5 sm:mt-8 sm:pt-7">

                  <p className="text-[10px] font-bold uppercase tracking-wider text-foreground sm:text-xs">
                    What's included
                  </p>

                  <ul className="mt-4 space-y-3 sm:mt-5 sm:space-y-3.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2.5 text-[12px] leading-5 text-muted sm:gap-3 sm:text-sm sm:leading-6"
                      >
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary sm:h-5 sm:w-5">
                          <Check
                            size={10}
                            strokeWidth={3}
                            className="sm:h-3 sm:w-3"
                          />
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================
            TRUST / PAYMENT NOTE
        ========================== */}
        <div className="mx-auto mt-8 flex max-w-2xl items-start justify-center gap-2 text-center text-[10px] leading-4 text-muted sm:mt-10 sm:gap-2.5 sm:text-xs sm:leading-5">
          <ShieldCheck
            size={14}
            className="mt-0.5 shrink-0 text-secondary sm:h-4 sm:w-4"
          />

          <span>
            Flexible plans with no long-term commitment. Choose the period
            that fits your business and upgrade whenever you need more time.
          </span>
        </div>

        {/* =========================
            FINAL NOTE
        ========================== */}
        <div className="mx-auto mt-6 flex max-w-xl items-center justify-center gap-2 text-center text-[10px] text-muted sm:mt-8 sm:text-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Start managing your business smarter today.
        </div>
      </div>
    </section>
  );
}