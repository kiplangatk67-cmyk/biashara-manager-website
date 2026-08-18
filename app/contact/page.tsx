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
    value: "skylineglobalfreelance@gmail.com",
    href: "mailto:skylineglobalfreelance@gmail.com",
    action: "Send Email",
  },
];

export default function ContactPage() {
  return (
    <main className="bg-surface">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
            <Send size={14} />
            We're here to help
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Let's talk about your
            <span className="block text-primary">
              business.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Have a question about Biashara Manager? Need help getting started?
            Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact options */}
      <section className="px-5 pb-20 sm:px-6 sm:pb-28 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {contactOptions.map((option) => {
            const Icon = option.icon;

            return (
              <a
                key={option.title}
                href={option.href}
                target={
                  option.href.startsWith("https://")
                    ? "_blank"
                    : undefined
                }
                rel={
                  option.href.startsWith("https://")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group rounded-3xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <Icon size={25} strokeWidth={1.8} />
                </div>

                <h2 className="mt-7 text-lg font-bold text-foreground">
                  {option.title}
                </h2>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {option.description}
                </p>

                <p className="mt-5 break-words text-sm font-semibold text-primary">
                  {option.value}
                </p>

                <div className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-foreground">
                  {option.action}
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* Help section */}
      <section className="border-y border-border bg-surface px-5 py-20 sm:px-6 sm:py-24 lg:px-8">b
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-wider text-primary">
              Need help?
            </span>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              We're ready to help you get started.
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Whether you're setting up your business, learning how to use a
              feature, or simply have a question, we're happy to help.
            </p>

            <div className="mt-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <ShieldCheck size={18} />
                </div>

                <span className="text-sm font-medium text-foreground">
                  Friendly business support
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <MessageCircle size={18} />
                </div>

                <span className="text-sm font-medium text-foreground">
                  Direct WhatsApp assistance
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Mail size={18} />
                </div>

                <span className="text-sm font-medium text-foreground">
                  Email support
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-2xl sm:p-10">
            <p className="text-xs font-bold uppercase tracking-widest text-primary">
              Contact details
            </p>

            <h3 className="mt-4 text-2xl font-bold">
              Biashara Manager
            </h3>

            <div className="mt-8 space-y-5">
              <a
                href="mailto:skylineglobalfreelance@gmail.com"
                className="flex items-start gap-4 text-sm text-slate-300 transition hover:text-white"
              >
                <Mail className="mt-0.5 shrink-0 text-primary" size={19} />

                <span className="break-all">
                  skylineglobalfreelance@gmail.com
                </span>
              </a>

              <a
                href="https://wa.me/254765715011"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-sm text-slate-300 transition hover:text-white"
              >
                <MessageCircle
                  className="shrink-0 text-primary"
                  size={19}
                />

                +254 765 715 011
              </a>

              <a
                href="tel:+254765715011"
                className="flex items-center gap-4 text-sm text-slate-300 transition hover:text-white"
              >
                <Phone
                  className="shrink-0 text-primary"
                  size={19}
                />

                Call or SMS
              </a>
            </div>

            <a
              href="https://wa.me/254765715011"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-bold text-white transition hover:bg-primary-dark"
            >
              Chat on WhatsApp
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Ready to manage your business smarter?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-muted sm:text-base">
            Explore Biashara Manager and find the tools your business needs.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/features"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3.5 text-sm font-bold text-foreground transition hover:bg-surface"
            >
              Explore Features
            </Link>

            <Link
              href="/pricing"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition hover:bg-primary-dark"
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