import Link from "next/link";
import {
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
    description: "A simple way to try Biashara Manager and get organized.",
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
    description: "More time to manage your business and explore more tools.",
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
    description: "The best value for businesses ready to use Biashara Manager.",
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
      className="relative overflow-hidden bg-surface px-5 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      {/* Background decoration */}
      <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -right-40 bottom-20 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
            <Sparkles size={14} />
            Simple & flexible pricing
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Choose what works
            <span className="block text-primary">for your business.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Start with a plan that fits your business today. Upgrade whenever
            you need more time.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3 lg:items-stretch">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-[28px] border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:p-7 ${
                  plan.popular
                    ? "border-primary shadow-xl shadow-primary/10 lg:scale-[1.03]"
                    : "border-border"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 whitespace-nowrap rounded-full bg-primary px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-primary/20">
                    <Crown size={12} />
                    Best Value
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    plan.popular
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <Icon size={22} strokeWidth={2} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-foreground">
                  {plan.name}
                </h3>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-muted">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-7 flex items-end gap-1">
                  <span className="mb-2 text-sm font-semibold text-muted">
                    KSh
                  </span>

                  <span className="text-5xl font-bold tracking-tight text-foreground">
                    {plan.price}
                  </span>
                </div>

                <p className="mt-1 text-xs text-muted">
                  Valid for {plan.period}
                </p>

                {/* CTA */}
                <Link
                  href="/pricing"
                  className={`mt-7 flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-bold transition-all duration-200 hover:-translate-y-0.5 ${
                    plan.popular
                      ? "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-dark"
                      : "border border-border bg-white text-foreground hover:border-primary/20 hover:bg-surface"
                  }`}
                >
                  Get Started
                </Link>

                {/* Features */}
                <div className="mt-8 border-t border-border pt-7">
                  <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                    What's included
                  </p>

                  <ul className="mt-5 space-y-3.5">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-muted"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                          <Check size={12} strokeWidth={3} />
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

        {/* Trust note */}
        <div className="mx-auto mt-10 flex max-w-2xl items-start justify-center gap-2 text-center text-xs leading-5 text-muted">
          <ShieldCheck size={16} className="mt-0.5 shrink-0 text-secondary" />

          <span>
            Choose the plan that suits your business. You can upgrade when you
            need more time.
          </span>
        </div>
      </div>
    </section>
  );
}