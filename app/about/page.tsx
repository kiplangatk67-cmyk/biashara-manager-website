import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import BackButton from "@/components/BackButton";

const values = [
  {
    icon: Lightbulb,
    title: "Simplicity",
    description:
      "Business management should not feel complicated. We focus on practical tools that are easy to understand and use.",
  },
  {
    icon: HeartHandshake,
    title: "Built for businesses",
    description:
      "Biashara Manager is designed around the everyday needs of small and growing businesses.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & security",
    description:
      "Business information is important. We aim to provide a secure and reliable experience for managing it.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "Better organization and clearer information can help business owners make more confident decisions.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-surface">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-16 pt-8 sm:px-6 sm:pb-20 sm:pt-10 lg:px-8">
        <div className="absolute -left-32 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -right-32 top-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative mx-auto mb-10 max-w-6xl">
          <BackButton />
        </div>

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
            <Target size={14} />
            About Biashara Manager
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Making business management
            <span className="block text-primary">
              simpler for everyone.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-muted sm:text-lg">
            Biashara Manager was created with one simple idea: business owners
            should have practical tools that make it easier to manage their
            daily operations and understand how their business is performing.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary">
              <Target size={14} />
              Our mission
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Give businesses better tools to work smarter.
            </h2>

            <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
              Many businesses manage important information using notebooks,
              spreadsheets, messages, or several different tools. This can
              make it difficult to see the complete picture.
            </p>

            <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
              Biashara Manager brings essential business activities together
              into one simple platform, helping business owners keep their
              records organized and make decisions using clearer information.
            </p>

            <div className="mt-7 space-y-4">
              {[
                "Simple tools for everyday business activities",
                "Clear information for better decision-making",
                "Designed with small and growing businesses in mind",
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-secondary"
                  />

                  <span className="text-sm text-foreground">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard visual */}
          <div className="relative">
            <div className="absolute -inset-6 rounded-[40px] bg-primary/10 blur-3xl" />

            <div className="relative rounded-[32px] border border-border bg-white p-4 shadow-2xl sm:p-6">
              <div className="rounded-2xl bg-slate-950 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-slate-500">
                      Business overview
                    </p>

                    <h3 className="mt-1 text-lg font-bold text-white">
                      Your business at a glance
                    </h3>
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-sm font-bold text-white">
                    B
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/10 p-4">
                    <p className="text-xs text-slate-400">
                      Sales
                    </p>

                    <p className="mt-2 text-xl font-bold text-white">
                      KSh 8,450
                    </p>

                    <p className="mt-1 text-xs text-emerald-400">
                      +18.4%
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-4">
                    <p className="text-xs text-slate-400">
                      Products
                    </p>

                    <p className="mt-2 text-xl font-bold text-white">
                      128
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      In inventory
                    </p>
                  </div>

                  <div className="col-span-2 rounded-xl bg-white/10 p-4">
                    <div className="flex items-center gap-2">
                      <BarChart3
                        size={16}
                        className="text-primary"
                      />

                      <span className="text-xs text-slate-400">
                        Performance
                      </span>
                    </div>

                    <div className="mt-5 flex h-24 items-end gap-2">
                      {[35, 48, 42, 60, 54, 72, 67, 88].map(
                        (height, index) => (
                          <div
                            key={index}
                            className="flex-1 rounded-t-md bg-primary/70"
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
        </div>
      </section>

      {/* Values */}
      <section className="px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
              <HeartHandshake size={14} />
              What we believe
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              The principles behind
              <span className="block text-primary">
                Biashara Manager.
              </span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-3xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-foreground">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company */}
      <section className="bg-white px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[32px] border border-border bg-surface p-8 sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Built with purpose
            </span>

            <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
              Technology should help business owners,
              not overwhelm them.
            </h2>

            <p className="mt-5 text-sm leading-7 text-muted">
              Biashara Manager is being developed to provide practical,
              accessible business management tools for businesses that want
              to become more organized and data-driven.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/features"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
              >
                Explore Features
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-bold text-foreground transition hover:bg-surface"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-surface px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-[32px] bg-primary p-8 text-center text-white shadow-2xl shadow-primary/20 sm:p-12">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Let's make business management simpler.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-white/75">
            Discover the tools Biashara Manager provides and choose the plan
            that works for your business.
          </p>

          <Link
            href="/pricing"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-primary transition hover:bg-slate-50"
          >
            View Pricing
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}