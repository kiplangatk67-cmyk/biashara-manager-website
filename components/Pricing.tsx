import {
  Check,
  Crown,
  ShieldCheck,
  Zap,
} from "lucide-react";

const plans = [
  {
    name: "1 Week",
    price: "65",
    period: "7 days",
    description: "Perfect for trying Biashara Manager.",
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
    description: "More time to manage and grow your business.",
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
    description: "The best value for growing businesses.",
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
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">
            Simple Pricing
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Choose the plan that works for you
          </h2>

          <p className="mt-4 text-base leading-7 text-muted">
            Flexible plans designed for small and growing businesses.
            No complicated commitments.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="mx-auto mt-14 grid max-w-6xl gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  plan.popular
                    ? "border-primary shadow-xl shadow-primary/10"
                    : "border-border"
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg shadow-primary/20">
                    Best Value
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    plan.popular
                      ? "bg-primary text-white"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <Icon size={22} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-foreground">
                  {plan.name}
                </h3>

                <p className="mt-2 min-h-12 text-sm leading-6 text-muted">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-7 flex items-end gap-1">
                  <span className="text-sm font-semibold text-muted">
                    KSh
                  </span>

                  <span className="text-5xl font-bold tracking-tight text-foreground">
                    {plan.price}
                  </span>
                </div>

                <p className="mt-1 text-xs text-muted">
                  {plan.period}
                </p>

                {/* Button */}
                <a
                  href="#download"
                  className={`mt-7 flex w-full items-center justify-center rounded-xl px-5 py-3.5 text-sm font-semibold transition ${
                    plan.popular
                      ? "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-dark"
                      : "border border-border bg-white text-foreground hover:border-primary/20 hover:bg-surface"
                  }`}
                >
                  Get Started
                </a>

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
        <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-2 text-center text-xs text-muted">
          <ShieldCheck size={16} className="shrink-0 text-secondary" />

          <span>
            Start with the plan that suits your business and upgrade whenever
            you need.
          </span>
        </div>
      </div>
    </section>
  );
}