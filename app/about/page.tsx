import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  ShieldCheck,
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
      "Business information matters. We aim to provide a secure and reliable experience for managing it.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description:
      "Better organization and clearer information can help business owners make more confident decisions.",
  },
];

const missionPoints = [
  "Simple tools for everyday business activities",
  "Clear information for better decision-making",
  "Designed with small and growing businesses in mind",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-surface">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative px-4 pb-14 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8 lg:pb-24 lg:pt-10">

        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl sm:h-80 sm:w-80" />

        <div className="pointer-events-none absolute -right-32 top-16 h-64 w-64 rounded-full bg-secondary/10 blur-3xl sm:h-80 sm:w-80" />

        {/* Back */}
        <div className="relative mx-auto mb-8 max-w-7xl sm:mb-12">
          <BackButton />
        </div>

        {/* Hero content */}
        <div className="relative mx-auto max-w-4xl text-center">

          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-primary shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
            <Target
              size={12}
              className="sm:h-[14px] sm:w-[14px]"
            />

            About Biashara Manager
          </span>

          <h1 className="mx-auto mt-4 max-w-[350px] text-[2rem] font-bold leading-[1.08] tracking-tight text-foreground sm:mt-6 sm:max-w-4xl sm:text-5xl lg:text-6xl">
            Making business management
            <span className="block text-primary">
              simpler for everyone.
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-[350px] text-[13px] leading-5 text-muted sm:mt-6 sm:max-w-3xl sm:text-lg sm:leading-7">
            Biashara Manager was created with one simple idea: business
            owners should have practical tools that make it easier to manage
            daily operations and understand how their business is performing.
          </p>
        </div>
      </section>

      {/* =====================================================
          MISSION
      ====================================================== */}
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-10 sm:gap-14 lg:grid-cols-2 lg:gap-20">

          {/* Mission content */}
          <div>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-primary sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
              <Target
                size={12}
                className="sm:h-[14px] sm:w-[14px]"
              />

              Our mission
            </span>

            <h2 className="mt-4 max-w-xl text-[1.75rem] font-bold leading-[1.1] tracking-tight text-foreground sm:mt-5 sm:text-4xl">
              Give businesses better tools to work smarter.
            </h2>

            <p className="mt-4 max-w-xl text-[13px] leading-5 text-muted sm:mt-5 sm:text-base sm:leading-7">
              Many businesses manage important information using notebooks,
              spreadsheets, messages, or several different tools. This can
              make it difficult to see the complete picture.
            </p>

            <p className="mt-3 max-w-xl text-[13px] leading-5 text-muted sm:mt-4 sm:text-base sm:leading-7">
              Biashara Manager brings essential business activities together
              into one simple platform, helping business owners keep records
              organized and make decisions using clearer information.
            </p>

            {/* Mission points */}
            <div className="mt-6 space-y-3 sm:mt-8 sm:space-y-4">
              {missionPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-2.5 sm:gap-3"
                >
                  <CheckCircle2
                    size={17}
                    className="mt-0.5 shrink-0 text-secondary sm:h-[19px] sm:w-[19px]"
                  />

                  <span className="text-[12px] leading-5 text-foreground sm:text-sm">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Dashboard visual */}
          <div className="relative mx-auto w-full max-w-lg">

            {/* Glow */}
            <div className="pointer-events-none absolute -inset-8 rounded-[40px] bg-primary/10 blur-3xl" />

            {/* Dashboard card */}
            <div className="relative rounded-2xl border border-border bg-white p-3 shadow-2xl sm:rounded-[28px] sm:p-5">

              <div className="overflow-hidden rounded-xl bg-slate-950 p-4 sm:rounded-2xl sm:p-6">

                {/* Header */}
                <div className="flex items-center justify-between gap-4">

                  <div className="min-w-0">
                    <p className="text-[9px] text-slate-500 sm:text-xs">
                      Business overview
                    </p>

                    <h3 className="mt-1 truncate text-sm font-bold text-white sm:text-lg">
                      Your business at a glance
                    </h3>
                  </div>

                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary text-xs font-bold text-white sm:h-10 sm:w-10 sm:rounded-xl sm:text-sm">
                    B
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-4 grid grid-cols-2 gap-2.5 sm:mt-6 sm:gap-3">

                  <div className="rounded-lg bg-white/10 p-3 sm:rounded-xl sm:p-4">
                    <p className="text-[9px] text-slate-400 sm:text-xs">
                      Sales
                    </p>

                    <p className="mt-1.5 text-base font-bold text-white sm:mt-2 sm:text-xl">
                      KSh 8,450
                    </p>

                    <p className="mt-1 text-[9px] text-emerald-400 sm:text-xs">
                      +18.4%
                    </p>
                  </div>

                  <div className="rounded-lg bg-white/10 p-3 sm:rounded-xl sm:p-4">
                    <p className="text-[9px] text-slate-400 sm:text-xs">
                      Products
                    </p>

                    <p className="mt-1.5 text-base font-bold text-white sm:mt-2 sm:text-xl">
                      128
                    </p>

                    <p className="mt-1 text-[9px] text-slate-400 sm:text-xs">
                      In inventory
                    </p>
                  </div>

                  {/* Performance */}
                  <div className="col-span-2 rounded-lg bg-white/10 p-3 sm:rounded-xl sm:p-4">

                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <BarChart3
                        size={14}
                        className="text-primary sm:h-4 sm:w-4"
                      />

                      <span className="text-[9px] text-slate-400 sm:text-xs">
                        Performance
                      </span>
                    </div>

                    <div className="mt-4 flex h-20 items-end gap-1.5 sm:mt-5 sm:h-24 sm:gap-2">
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

      {/* =====================================================
          VALUES
      ====================================================== */}
      <section className="px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-primary shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
              <HeartHandshake
                size={12}
                className="sm:h-[14px] sm:w-[14px]"
              />

              What we believe
            </span>

            <h2 className="mx-auto mt-4 max-w-[350px] text-[1.75rem] font-bold leading-[1.08] tracking-tight text-foreground sm:mt-5 sm:max-w-3xl sm:text-4xl">
              The principles behind
              <span className="block text-primary">
                Biashara Manager.
              </span>
            </h2>
          </div>

          {/* Cards */}
          <div className="mt-8 grid gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="
                    group
                    rounded-2xl
                    border
                    border-border
                    bg-white
                    p-5
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-primary/20
                    hover:shadow-xl

                    sm:rounded-3xl
                    sm:p-7
                  "
                >

                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white sm:h-12 sm:w-12 sm:rounded-2xl">
                    <Icon
                      size={19}
                      className="sm:h-[22px] sm:w-[22px]"
                    />
                  </div>

                  <h3 className="mt-4 text-[15px] font-bold text-foreground sm:mt-6 sm:text-lg">
                    {value.title}
                  </h3>

                  <p className="mt-2 text-[12px] leading-5 text-muted sm:mt-3 sm:text-sm sm:leading-6">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          BUILT WITH PURPOSE
      ====================================================== */}
      <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">

          <div className="rounded-2xl border border-border bg-surface p-6 sm:rounded-[32px] sm:p-10 lg:p-12">

            <div className="mx-auto max-w-3xl text-center">

              <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-primary sm:text-xs">
                Built with purpose
              </span>

              <h2 className="mt-3 text-xl font-bold leading-tight text-foreground sm:mt-4 sm:text-3xl">
                Technology should help business owners,
                not overwhelm them.
              </h2>

              <p className="mt-3 text-[12px] leading-5 text-muted sm:mt-5 sm:text-sm sm:leading-7">
                Biashara Manager is being developed to provide practical,
                accessible business management tools for businesses that want
                to become more organized and data-driven.
              </p>

              <div className="mt-6 flex flex-col gap-2.5 sm:mt-8 sm:flex-row sm:justify-center sm:gap-3">

                <Link
                  href="/features"
                  className="group inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-[12px] font-bold text-white shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark sm:min-h-11 sm:gap-2 sm:rounded-xl sm:px-6 sm:py-3.5 sm:text-sm"
                >
                  Explore Features

                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-10 items-center justify-center rounded-lg border border-border bg-white px-5 py-2.5 text-[12px] font-bold text-foreground transition-all duration-200 hover:border-primary/20 hover:bg-surface sm:min-h-11 sm:rounded-xl sm:px-6 sm:py-3.5 sm:text-sm"
                >
                  Contact Us
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section className="bg-surface px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-5xl">

          <div className="relative overflow-hidden rounded-2xl bg-primary p-6 text-center text-white shadow-2xl shadow-primary/20 sm:rounded-[32px] sm:p-12">

            {/* Decoration */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/10 blur-3xl sm:-right-24 sm:-top-24 sm:h-64 sm:w-64" />

            <div className="relative">

              <h2 className="text-xl font-bold leading-tight sm:text-3xl">
                Let's make business management simpler.
              </h2>

              <p className="mx-auto mt-3 max-w-xl text-[12px] leading-5 text-white/75 sm:mt-4 sm:text-sm sm:leading-6">
                Discover the tools Biashara Manager provides and choose the
                plan that works for your business.
              </p>

              <Link
                href="/pricing"
                className="group mt-6 inline-flex min-h-10 items-center gap-1.5 rounded-lg bg-white px-5 py-2.5 text-[12px] font-bold text-primary transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 sm:mt-7 sm:min-h-11 sm:gap-2 sm:rounded-xl sm:px-6 sm:py-3.5 sm:text-sm"
              >
                View Pricing

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
                />
              </Link>

            </div>
          </div>
        </div>
      </section>

    </main>
  );
}