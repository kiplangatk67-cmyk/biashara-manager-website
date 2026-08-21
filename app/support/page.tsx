import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CreditCard,
  HelpCircle,
  LockKeyhole,
  Mail,
  MessageCircle,
  Package,
  Phone,
  Search,
  ShoppingCart,
  UserRound,
} from "lucide-react";
import BackButton from "@/components/BackButton";

const helpTopics = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description:
      "Learn how to set up your business and get familiar with Biashara Manager.",
  },
  {
    icon: ShoppingCart,
    title: "Sales",
    description:
      "Learn how to record sales, manage transactions, and keep your sales records organized.",
  },
  {
    icon: Package,
    title: "Products & Inventory",
    description:
      "Manage products, prices, stock levels, and inventory activity with ease.",
  },
  {
    icon: CreditCard,
    title: "Subscriptions & Payments",
    description:
      "Get help with subscription plans, payments, and your active subscription period.",
  },
  {
    icon: LockKeyhole,
    title: "Account & Security",
    description:
      "Learn about account access, security, roles, permissions, and protecting your information.",
  },
  {
    icon: BarChart3,
    title: "Reports",
    description:
      "Understand your business reports and use your business information to make better decisions.",
  },
];

export default function SupportPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-surface">

      {/* =========================
          BACK BUTTON
      ========================== */}
      <div className="mx-auto max-w-7xl px-4 pt-5 sm:px-6 sm:pt-7 lg:px-8">
        <BackButton />
      </div>

      {/* =========================
          HERO
      ========================== */}
      <section className="relative overflow-hidden px-4 pb-12 pt-10 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24">

        {/* Background decoration */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl sm:h-80 sm:w-80" />

        <div className="relative mx-auto max-w-4xl text-center">

          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-primary shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
            <HelpCircle
              size={12}
              className="sm:h-[14px] sm:w-[14px]"
            />

            Help Center
          </span>

          <h1 className="mx-auto mt-4 max-w-[350px] text-[1.9rem] font-bold leading-[1.08] tracking-tight text-foreground sm:mt-6 sm:max-w-3xl sm:text-5xl lg:text-6xl">
            How can we
            <span className="block text-primary">
              help you?
            </span>
          </h1>

          <p className="mx-auto mt-4 max-w-[350px] text-[13px] leading-5 text-muted sm:mt-6 sm:max-w-2xl sm:text-lg sm:leading-7">
            Find useful information about Biashara Manager or contact us
            directly if you need assistance.
          </p>

          {/* Search visual */}
          <div className="mx-auto mt-6 flex max-w-xl items-center gap-2.5 rounded-xl border border-border bg-white px-4 py-3.5 text-left shadow-lg shadow-slate-200/50 sm:mt-8 sm:gap-3 sm:rounded-2xl sm:px-5 sm:py-4">
            <Search
              size={17}
              className="shrink-0 text-slate-400 sm:h-[19px] sm:w-[19px]"
            />

            <span className="text-[12px] text-slate-400 sm:text-sm">
              Search for help...
            </span>
          </div>
        </div>
      </section>

      {/* =========================
          HELP TOPICS
      ========================== */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          <div className="mb-7 sm:mb-10">
            <span className="text-[10px] font-bold uppercase tracking-wider text-primary sm:text-sm">
              Browse help topics
            </span>

            <h2 className="mt-1.5 text-xl font-bold text-foreground sm:mt-2 sm:text-3xl">
              Find what you need
            </h2>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">

            {helpTopics.map((topic) => {
              const Icon = topic.icon;

              return (
                <div
                  key={topic.title}
                  className="
                    group
                    rounded-2xl
                    border
                    border-border
                    bg-white
                    p-4
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

                  {/* Icon */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white sm:h-12 sm:w-12 sm:rounded-2xl">
                    <Icon
                      size={19}
                      strokeWidth={1.8}
                      className="sm:h-[22px] sm:w-[22px]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-[15px] font-bold text-foreground sm:mt-6 sm:text-lg">
                    {topic.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-[12px] leading-5 text-muted sm:mt-3 sm:text-sm sm:leading-6">
                    {topic.description}
                  </p>

                  {/* Link */}
                  <Link
                    href="/contact"
                    className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold text-primary sm:mt-6 sm:gap-2 sm:text-xs"
                  >
                    Get help

                    <ArrowRight
                      size={13}
                      className="transition-transform duration-200 group-hover:translate-x-1 sm:h-[14px] sm:w-[14px]"
                    />
                  </Link>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =========================
          QUICK ANSWERS
      ========================== */}
      <section className="border-y border-border bg-white px-4 py-14 sm:px-6 sm:py-24 lg:px-8">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-8 sm:gap-12 lg:grid-cols-2">

            {/* Text */}
            <div>

              <span className="text-[10px] font-bold uppercase tracking-wider text-primary sm:text-sm">
                Quick answers
              </span>

              <h2 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-foreground sm:mt-3 sm:text-4xl">
                Common things you may want to know.
              </h2>

              <p className="mt-3 text-[13px] leading-5 text-muted sm:mt-5 sm:text-base sm:leading-7">
                We've kept the most important information easy to find. If
                you cannot find what you're looking for, our support team is
                just a message away.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-[12px] font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-dark sm:mt-7 sm:w-auto sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Contact Support
                <ArrowRight
                  size={15}
                  className="sm:h-4 sm:w-4"
                />
              </Link>

            </div>

            {/* Answers */}
            <div className="space-y-3 sm:space-y-4">

              <div className="rounded-xl border border-border bg-surface p-4 sm:rounded-2xl sm:p-5">
                <div className="flex items-start gap-3 sm:gap-4">
                  <UserRound
                    size={18}
                    className="mt-0.5 shrink-0 text-primary sm:h-5 sm:w-5"
                  />

                  <div>
                    <h3 className="text-[13px] font-bold text-foreground sm:text-sm">
                      Need help setting up?
                    </h3>

                    <p className="mt-1.5 text-[12px] leading-5 text-muted sm:mt-2 sm:text-sm sm:leading-6">
                      Contact us and we'll help you understand the setup
                      process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface p-4 sm:rounded-2xl sm:p-5">
                <div className="flex items-start gap-3 sm:gap-4">
                  <CreditCard
                    size={18}
                    className="mt-0.5 shrink-0 text-primary sm:h-5 sm:w-5"
                  />

                  <div>
                    <h3 className="text-[13px] font-bold text-foreground sm:text-sm">
                      Have a payment question?
                    </h3>

                    <p className="mt-1.5 text-[12px] leading-5 text-muted sm:mt-2 sm:text-sm sm:leading-6">
                      Contact us if you need assistance with a subscription
                      or payment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-surface p-4 sm:rounded-2xl sm:p-5">
                <div className="flex items-start gap-3 sm:gap-4">
                  <LockKeyhole
                    size={18}
                    className="mt-0.5 shrink-0 text-primary sm:h-5 sm:w-5"
                  />

                  <div>
                    <h3 className="text-[13px] font-bold text-foreground sm:text-sm">
                      Having an account issue?
                    </h3>

                    <p className="mt-1.5 text-[12px] leading-5 text-muted sm:mt-2 sm:text-sm sm:leading-6">
                      Reach out if you're having trouble accessing or
                      securing your account.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =========================
          CONTACT SUPPORT
      ========================== */}
      <section className="px-4 py-14 sm:px-6 sm:py-24 lg:px-8">

        <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl bg-slate-950 p-5 text-white shadow-2xl sm:rounded-[32px] sm:p-12">

          <div className="grid items-center gap-7 sm:gap-10 lg:grid-cols-[1fr_auto]">

            <div>

              <span className="text-[9px] font-bold uppercase tracking-widest text-primary sm:text-xs">
                Still need help?
              </span>

              <h2 className="mt-2.5 text-2xl font-bold tracking-tight sm:mt-4 sm:text-4xl">
                Talk to us directly.
              </h2>

              <p className="mt-3 max-w-xl text-[12px] leading-5 text-slate-400 sm:mt-4 sm:text-base sm:leading-7">
                Our support channels are available for questions about
                Biashara Manager, your account, subscriptions, and more.
              </p>

              <div className="mt-5 space-y-3.5 sm:mt-7 sm:space-y-4">

                {/* WhatsApp */}
                <a
                  href="https://wa.me/254765715011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-[12px] text-slate-300 transition hover:text-white sm:gap-3 sm:text-sm"
                >
                  <MessageCircle
                    size={17}
                    className="shrink-0 text-primary sm:h-[18px] sm:w-[18px]"
                  />

                  WhatsApp: +254 765 715 011
                </a>

                {/* Email */}
                <a
                  href="mailto:biasharamanager@gmail.com"
                  className="flex min-w-0 items-center gap-2.5 text-[12px] text-slate-300 transition hover:text-white sm:gap-3 sm:text-sm"
                >
                  <Mail
                    size={17}
                    className="shrink-0 text-primary sm:h-[18px] sm:w-[18px]"
                  />

                  <span className="break-all">
                    biasharamanager@gmail.com
                  </span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+254765715011"
                  className="flex items-center gap-2.5 text-[12px] text-slate-300 transition hover:text-white sm:gap-3 sm:text-sm"
                >
                  <Phone
                    size={17}
                    className="shrink-0 text-primary sm:h-[18px] sm:w-[18px]"
                  />

                  +254 765 715 011
                </a>

              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-[12px] font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-dark sm:min-h-12 sm:w-auto sm:rounded-xl sm:px-6 sm:py-3.5 sm:text-sm"
            >
              Contact Us

              <ArrowRight
                size={14}
                className="sm:h-4 sm:w-4"
              />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}