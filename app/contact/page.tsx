import Link from "next/link";
import {
  ArrowRight,
  Mail,
  MessageCircle,
  Phone,
  Send,
  ShieldCheck,
} from "lucide-react";

const contactOptions = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Chat with us directly on WhatsApp.",
    value: "+254 765 715 011",
    href: "https://wa.me/254765715011",
    action: "Open WhatsApp",
  },
  {
    icon: Phone,
    title: "Phone & SMS",
    description: "Call or send us an SMS.",
    value: "+254 765 715 011",
    href: "tel:+254765715011",
    action: "Call us",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us your questions or feedback.",
    value: "biasharamanager@gmail.com",
    href: "mailto:biasharamanager@gmail.com",
    action: "Send Email",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-surface">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-14 pt-16 sm:px-6 sm:pb-20 sm:pt-24 lg:px-8 lg:pt-28">
        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl sm:h-96 sm:w-96" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex max-w-full items-center justify-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-primary shadow-sm sm:text-xs">
            <Send size={14} className="shrink-0" />
            We're here to help
          </span>

          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-foreground sm:mt-6 sm:text-5xl lg:text-6xl">
            Let's talk about your
            <span className="block text-primary">
              business.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-muted sm:mt-6 sm:text-lg sm:leading-7">
            Have a question about Biashara Manager? Need help getting started?
            Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="px-5 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 sm:gap-6 md:grid-cols-3">
          {contactOptions.map((option) => {
            const Icon = option.icon;
            const isExternal = option.href.startsWith("https://");

            return (
              <a
                key={option.title}
                href={option.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="group flex min-w-0 flex-col rounded-3xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl active:scale-[0.99] sm:p-7"
              >
                <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <h2 className="mt-6 text-lg font-bold text-foreground">
                  {option.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {option.description}
                </p>

                <p className="mt-5 break-words text-sm font-semibold leading-6 text-primary">
                  {option.value}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-foreground sm:mt-6">
                  {option.action}

                  <ArrowRight
                    size={14}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Help section */}
      <section className="border-y border-border bg-surface px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Text */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary sm:text-sm">
              Need help?
            </span>

            <h2 className="mt-3 text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              We're ready to help you get started.
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-muted sm:mt-5 sm:text-base sm:leading-7">
              Whether you're setting up your business, learning how to use a
              feature, or simply have a question, we're happy to help.
            </p>

            <div className="mt-6 space-y-4 sm:mt-7">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <ShieldCheck size={18} />
                </div>

                <span className="text-sm font-medium text-foreground">
                  Friendly business support
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <MessageCircle size={18} />
                </div>

                <span className="text-sm font-medium text-foreground">
                  Direct WhatsApp assistance
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Mail size={18} />
                </div>

                <span className="text-sm font-medium text-foreground">
                  Email support
                </span>
              </div>
            </div>
          </div>

          {/* Contact details */}
          <div className="rounded-[28px] bg-slate-950 p-6 text-white shadow-2xl sm:rounded-[32px] sm:p-10">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary sm:text-xs">
              Contact details
            </p>

            <h3 className="mt-3 text-xl font-bold sm:mt-4 sm:text-2xl">
              Biashara Manager
            </h3>

            <div className="mt-7 space-y-5 sm:mt-8">
              <a
                href="mailto:biasharamanager@gmail.com"
                className="flex min-w-0 items-start gap-3 text-sm text-slate-300 transition hover:text-white sm:gap-4"
              >
                <Mail
                  className="mt-0.5 shrink-0 text-primary"
                  size={19}
                />

                <span className="min-w-0 break-all leading-6">
                  biasharamanager@gmail.com
                </span>
              </a>

              <a
                href="https://wa.me/254765715011"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-300 transition hover:text-white sm:gap-4"
              >
                <MessageCircle
                  className="shrink-0 text-primary"
                  size={19}
                />

                <span>+254 765 715 011</span>
              </a>

              <a
                href="tel:+254765715011"
                className="flex items-center gap-3 text-sm text-slate-300 transition hover:text-white sm:gap-4"
              >
                <Phone
                  className="shrink-0 text-primary"
                  size={19}
                />

                <span>Call or SMS</span>
              </a>
            </div>

            <a
              href="https://wa.me/254765715011"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-white transition hover:bg-primary-dark active:scale-[0.98] sm:mt-9"
            >
              Chat on WhatsApp
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            Ready to manage your business smarter?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted sm:text-base">
            Explore Biashara Manager and find the tools your business needs.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center">
            <Link
              href="/features"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-bold text-foreground transition hover:bg-surface active:scale-[0.98] sm:w-auto"
            >
              Explore Features
            </Link>

            <Link
              href="/pricing"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark active:scale-[0.98] sm:w-auto"
            >
              View Pricing
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}