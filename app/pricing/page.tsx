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
    <main className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <BackButton />
        </div>

        <div className="relative mx-auto mt-12 max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
            <Sparkles size={14} />
            Simple & flexible pricing
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Choose a plan that
            <span className="block text-primary">
              works for your business.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Start with the period that suits you. Whether you need Biashara
            Manager for a week, two weeks, or a full month, you get access to
            the tools you need to manage your business.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="px-5 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8 ${
                  plan.popular
                    ? "border-primary shadow-xl shadow-primary/10"
                    : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-bold text-white shadow-lg">
                      <Crown size={13} />
                      Best Value
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>

                  {plan.popular && (
                    <span className="text-xs font-bold text-primary">
                      Recommended
                    </span>
                  )}
                </div>

                <h2 className="mt-6 text-xl font-bold text-foreground">
                  {plan.name}
                </h2>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-muted">
                  {plan.description}
                </p>

                <div className="mt-6">
                  <div className="flex items-end gap-1">
                    <span className="text-sm font-semibold text-muted">
                      KSh
                    </span>

                    <span className="text-5xl font-bold tracking-tight text-foreground">
                      {plan.price}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-muted">
                    per {plan.period === "30 days" ? "month" : plan.period}
                  </p>
                </div>

                <Link
                  href="#get-started"
                  className={`mt-7 inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition-all duration-200 ${
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

                <ul className="mt-5 space-y-3">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check size={12} strokeWidth={3} />
                      </span>

                      <span className="text-sm text-muted">
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

      {/* Trust section */}
      <section className="border-y border-border bg-white px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 text-center sm:grid-cols-3">
            <div>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <CheckCircle2 size={22} />
              </div>

              <h3 className="mt-4 text-sm font-bold text-foreground">
                Simple plans
              </h3>

              <p className="mt-2 text-xs leading-5 text-muted">
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

              <p className="mt-2 text-xs leading-5 text-muted">
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

              <p className="mt-2 text-xs leading-5 text-muted">
                Practical tools for managing everyday business activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section
        id="get-started"
        className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[32px] bg-slate-950 p-8 text-center text-white shadow-2xl sm:p-12">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 text-primary">
            <Crown size={22} />
          </div>

          <h2 className="mt-5 text-2xl font-bold sm:text-3xl">
            Ready to take control of your business?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400">
            Choose a plan and start managing your business with Biashara
            Manager.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
          >
            Get Started
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}