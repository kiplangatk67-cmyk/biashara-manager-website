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
      "Learn the basics of setting up your business and getting familiar with Biashara Manager.",
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
      "Get help managing products, prices, stock levels, and inventory activity.",
  },
  {
    icon: CreditCard,
    title: "Subscriptions & Payments",
    description:
      "Find information about subscription plans, payments, and your account period.",
  },
  {
    icon: LockKeyhole,
    title: "Account & Security",
    description:
      "Learn about account access, security features, roles, permissions, and protecting your information.",
  },
  {
    icon: BarChart3,
    title: "Reports",
    description:
      "Understand your business reports and use them to make better decisions.",
  },
];

export default function SupportPage() {
  return (
    <main className="bg-surface">
      {/* Back Button */}
      <div className="mx-auto max-w-7xl px-5 pt-6 sm:px-6 lg:px-8">
        <BackButton />
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
            <HelpCircle size={14} />
            Help Center
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            How can we
            <span className="block text-primary">
              help you?
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Find useful information about Biashara Manager or contact us
            directly if you need assistance.
          </p>

          {/* Search visual */}
          <div className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-2xl border border-border bg-white px-5 py-4 text-left shadow-lg shadow-slate-200/50">
            <Search
              size={19}
              className="shrink-0 text-slate-400"
            />

            <span className="text-sm text-slate-400">
              Search for help...
            </span>
          </div>
        </div>
      </section>

      {/* Help topics */}
      <section className="px-5 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <span className="text-sm font-bold uppercase tracking-wider text-primary">
              Browse help topics
            </span>

            <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
              Find what you need
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {helpTopics.map((topic) => {
              const Icon = topic.icon;

              return (
                <div
                  key={topic.title}
                  className="group rounded-3xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                    <Icon size={22} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 text-lg font-bold text-foreground">
                    {topic.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {topic.description}
                  </p>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-primary"
                  >
                    Get help
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick answers */}
      <section className="border-y border-border bg-white px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <span className="text-sm font-bold uppercase tracking-wider text-primary">
                Quick answers
              </span>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Common things you may want to know.
              </h2>

              <p className="mt-5 text-sm leading-7 text-muted sm:text-base">
                We've kept the most important information easy to find. If
                you cannot find what you're looking for, our support team is
                just a message away.
              </p>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
              >
                Contact Support
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-surface p-5">
                <div className="flex items-start gap-4">
                  <UserRound
                    size={20}
                    className="mt-0.5 shrink-0 text-primary"
                  />

                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      Need help setting up?
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted">
                      Contact us and we'll help you understand the setup
                      process.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-5">
                <div className="flex items-start gap-4">
                  <CreditCard
                    size={20}
                    className="mt-0.5 shrink-0 text-primary"
                  />

                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      Have a payment question?
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted">
                      Contact us if you need assistance with a subscription
                      or payment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-5">
                <div className="flex items-start gap-4">
                  <LockKeyhole
                    size={20}
                    className="mt-0.5 shrink-0 text-primary"
                  />

                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      Having an account issue?
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted">
                      Reach out to us if you're having trouble accessing or
                      securing your account.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact support */}
      <section className="px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-5xl overflow-hidden rounded-[32px] bg-slate-950 p-8 text-white shadow-2xl sm:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-primary">
                Still need help?
              </span>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Talk to us directly.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
                Our support channels are available for questions about
                Biashara Manager, your account, subscriptions, and more.
              </p>

              <div className="mt-7 space-y-4">
                <a
                  href="https://wa.me/254765715011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-slate-300 transition hover:text-white"
                >
                  <MessageCircle
                    size={18}
                    className="text-primary"
                  />

                  WhatsApp: +254 765 715 011
                </a>

                <a
                  href="mailto:skylineglobalfreelance@gmail.com"
                  className="flex items-center gap-3 text-sm text-slate-300 transition hover:text-white"
                >
                  <Mail
                    size={18}
                    className="text-primary"
                  />

                  skylineglobalfreelance@gmail.com
                </a>

                <a
                  href="tel:+254765715011"
                  className="flex items-center gap-3 text-sm text-slate-300 transition hover:text-white"
                >
                  <Phone
                    size={18}
                    className="text-primary"
                  />

                  +254 765 715 011
                </a>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
            >
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}