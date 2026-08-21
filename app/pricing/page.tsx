import Link from "next/link";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  Crown,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import BackButton from "@/components/BackButton";

const plans = [
  {
    name: "1 Week",
    price: "65",
    period: "7 days",
    description:
      "A flexible option for businesses that want short-term access.",
    icon: Clock3,
    popular: false,
    features: [
      "Full access to business tools",
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
      "More time to manage your business without committing to a full month.",
    icon: Sparkles,
    popular: false,
    features: [
      "Full access to business tools",
      "Sales management",
      "Product & inventory management",
      "Customer management",
      "Expense tracking",
      "Business reports",
    ],
  },
  {
    name: "1 Month",
    price: "250",
    period: "30 days",
    description:
      "The best choice for businesses that want uninterrupted access.",
    icon: Crown,
    popular: true,
    features: [
      "Full access to business tools",
      "Sales management",
      "Product & inventory management",
      "Customer management",
      "Expense tracking",
      "Business reports",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-surface">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-14 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8 lg:pt-10">
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 top-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <BackButton />
        </div>

        <div className="relative mx-auto mt-10 max-w-4xl text-center sm:mt-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-3.5 py-2 text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm sm:px-4 sm:text-xs">
            <Sparkles size={14} />
            Simple & flexible pricing
          </span>

          <h1 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:mt-6 sm:text-5xl lg:text-6xl">
            Choose a plan that
            <span className="block text-primary">
              works for your business.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-muted sm:mt-6 sm:text-base sm:leading-7">
            Start with the period that suits you. Whether you need Biashara
            Manager for a week, two weeks, or a full month, you get access to
            the tools you need to manage your business.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="px-5 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-5 sm:gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
                  plan.popular
                    ? "border-primary shadow-xl shadow-primary/10"
                    : "border-border"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3.5 py-2 text-[10px] font-bold text-white shadow-lg sm:px-4 sm:text-xs">
                      <Crown size={13} />
                      Best Value
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary sm:h-12 sm:w-12">
                    <Icon size={21} />
                  </div>

                  {plan.popular && (
                    <span className="text-[10px] font-bold text-primary sm:text-xs">
                      Recommended
                    </span>
                  )}
                </div>

                {/* Plan Name */}
                <h2 className="mt-5 text-xl font-bold text-foreground sm:mt-6">
                  {plan.name}
                </h2>

                <p className="mt-2 min-h-0 text-sm leading-6 text-muted sm:min-h-[48px]">
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mt-6">
                  <div className="flex items-end gap-1">
                    <span className="text-sm font-semibold text-muted">
                      KSh
                    </span>

                    <span className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                      {plan.price}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-muted">
                    per {plan.period === "30 days" ? "month" : plan.period}
                  </p>
                </div>

                {/* CTA */}
                <Link
                  href="#get-started"
                  className={`mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition-all duration-200 active:scale-[0.98] ${
                    plan.popular
                      ? "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-dark"
                      : "border border-border bg-white text-foreground hover:bg-surface"
                  }`}
                >
                  Get Started
                  <ArrowRight size={15} />
                </Link>

                <div className="my-7 h-px bg-border" />

                <p className="text-xs font-bold uppercase tracking-wider text-foreground">
                  What's included
                </p>

                {/* Features */}
                <ul className="mt-5 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check size={12} strokeWidth={3} />
                      </span>

                      <span className="text-sm leading-5 text-muted">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust Section */}
      <section className="border-y border-border bg-white px-5 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            <div>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <CheckCircle2 size={22} />
              </div>

              <h3 className="mt-4 text-sm font-bold text-foreground">
                Simple plans
              </h3>

              <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-muted">
                Choose the subscription period that fits your business.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ShieldCheck size={22} />
              </div>

              <h3 className="mt-4 text-sm font-bold text-foreground">
                Secure access
              </h3>

              <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-muted">
                Your business account is designed with security in mind.
              </p>
            </div>

            <div>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Sparkles size={22} />
              </div>

              <h3 className="mt-4 text-sm font-bold text-foreground">
                Built for business
              </h3>

              <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-muted">
                Practical tools for managing everyday business activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        id="get-started"
        className="px-5 py-16 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[28px] bg-slate-950 p-7 text-center text-white shadow-2xl sm:rounded-[32px] sm:p-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary">
            <Crown size={22} />
          </div>

          <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
            Ready to take control of your business?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400">
            Choose a plan and start managing your business with Biashara
            Manager.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition active:scale-[0.98] hover:bg-primary-dark"
          >
            Get Started
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}