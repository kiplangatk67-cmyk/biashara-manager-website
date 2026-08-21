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
    description:
      "Chat directly with the Biashara Manager support team.",
    value: "+254 765 715 011",
    href: "https://wa.me/254765715011",
    action: "Open WhatsApp",
    external: true,
  },
  {
    icon: Phone,
    title: "Phone & SMS",
    description:
      "Call us or send an SMS whenever you need assistance.",
    value: "+254 765 715 011",
    href: "tel:+254765715011",
    action: "Call us",
    external: false,
  },
  {
    icon: Mail,
    title: "Email",
    description:
      "Send us your questions, feedback, or support request.",
    value: "biasharamanager@gmail.com",
    href: "mailto:biasharamanager@gmail.com",
    action: "Send Email",
    external: false,
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-surface">

      {/* =========================
          HERO
      ========================== */}
      <section className="relative overflow-hidden px-4 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24 lg:pt-28">

        {/* Background decoration */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl sm:h-96 sm:w-96" />

        <div className="relative mx-auto max-w-4xl text-center">

          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-primary shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
            <Send
              size={12}
              className="sm:h-[14px] sm:w-[14px]"
            />

            We're here to help
          </span>

          {/* Heading */}
          <h1 className="mx-auto mt-4 max-w-[350px] text-[1.9rem] font-bold leading-[1.08] tracking-tight text-foreground sm:mt-6 sm:max-w-4xl sm:text-5xl lg:text-6xl">
            Let's talk about your
            <span className="block text-primary">
              business.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-4 max-w-[350px] text-[13px] leading-5 text-muted sm:mt-6 sm:max-w-2xl sm:text-base sm:leading-7 lg:text-lg">
            Have a question about Biashara Manager? Need help getting
            started? Our support team is ready to help you.
          </p>
        </div>
      </section>

      {/* =========================
          CONTACT OPTIONS
      ========================== */}
      <section className="px-4 pb-14 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3">

          {contactOptions.map((option) => {
            const Icon = option.icon;

            return (
              <a
                key={option.title}
                href={option.href}
                target={option.external ? "_blank" : undefined}
                rel={
                  option.external
                    ? "noopener noreferrer"
                    : undefined
                }
                className="
                  group
                  flex
                  min-w-0
                  flex-col
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
                  active:scale-[0.99]

                  sm:rounded-3xl
                  sm:p-7
                "
              >

                {/* Icon */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white sm:h-13 sm:w-13 sm:rounded-2xl">
                  <Icon
                    size={21}
                    strokeWidth={1.8}
                    className="sm:h-6 sm:w-6"
                  />
                </div>

                {/* Title */}
                <h2 className="mt-5 text-base font-bold text-foreground sm:mt-6 sm:text-lg">
                  {option.title}
                </h2>

                {/* Description */}
                <p className="mt-1.5 text-[12px] leading-5 text-muted sm:mt-2 sm:text-sm sm:leading-6">
                  {option.description}
                </p>

                {/* Contact value */}
                <p className="mt-4 break-words text-[13px] font-bold leading-5 text-primary sm:mt-5 sm:text-sm">
                  {option.value}
                </p>

                {/* Action */}
                <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-bold text-foreground sm:mt-6 sm:gap-2 sm:text-xs">
                  {option.action}

                  <ArrowRight
                    size={13}
                    className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 sm:h-[14px] sm:w-[14px]"
                  />
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* =========================
          HELP SECTION
      ========================== */}
      <section className="border-y border-border bg-white px-4 py-14 sm:px-6 sm:py-24 lg:px-8">

        <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-2 lg:gap-14">

          {/* Text */}
          <div>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-primary sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
              <ShieldCheck
                size={12}
                className="sm:h-[14px] sm:w-[14px]"
              />

              Need help?
            </span>

            <h2 className="mt-4 max-w-xl text-2xl font-bold leading-tight tracking-tight text-foreground sm:mt-5 sm:text-4xl">
              We're ready to help you get started.
            </h2>

            <p className="mt-3 max-w-xl text-[13px] leading-5 text-muted sm:mt-5 sm:text-base sm:leading-7">
              Whether you're setting up your business, learning how to
              use a feature, or simply have a question, we're happy to
              help.
            </p>

            {/* Support benefits */}
            <div className="mt-6 space-y-3.5 sm:mt-8 sm:space-y-4">

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <ShieldCheck size={17} />
                </div>

                <span className="text-[13px] font-medium text-foreground sm:text-sm">
                  Friendly business support
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <MessageCircle size={17} />
                </div>

                <span className="text-[13px] font-medium text-foreground sm:text-sm">
                  Direct WhatsApp assistance
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                  <Mail size={17} />
                </div>

                <span className="text-[13px] font-medium text-foreground sm:text-sm">
                  Email support
                </span>
              </div>

            </div>
          </div>

          {/* Contact details card */}
          <div className="relative overflow-hidden rounded-2xl bg-slate-950 p-5 text-white shadow-2xl sm:rounded-[32px] sm:p-9">

            {/* Decoration */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/20 blur-3xl" />

            <div className="relative">

              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-primary sm:text-xs">
                Contact details
              </p>

              <h3 className="mt-2.5 text-xl font-bold sm:mt-4 sm:text-2xl">
                Biashara Manager
              </h3>

              <p className="mt-2 text-[11px] leading-5 text-slate-400 sm:text-sm">
                We're here to help you manage your business with
                confidence.
              </p>

              <div className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">

                {/* Email */}
                <a
                  href="mailto:biasharamanager@gmail.com"
                  className="flex min-w-0 items-start gap-3 text-[13px] text-slate-300 transition hover:text-white sm:gap-4 sm:text-sm"
                >
                  <Mail
                    className="mt-0.5 shrink-0 text-primary"
                    size={18}
                  />

                  <span className="min-w-0 break-all leading-5 sm:leading-6">
                    biasharamanager@gmail.com
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/254765715011"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-[13px] text-slate-300 transition hover:text-white sm:gap-4 sm:text-sm"
                >
                  <MessageCircle
                    className="shrink-0 text-primary"
                    size={18}
                  />

                  <span>
                    +254 765 715 011
                  </span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+254765715011"
                  className="flex items-center gap-3 text-[13px] text-slate-300 transition hover:text-white sm:gap-4 sm:text-sm"
                >
                  <Phone
                    className="shrink-0 text-primary"
                    size={18}
                  />

                  <span>
                    Call or SMS
                  </span>
                </a>

              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/254765715011"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-7
                  flex
                  min-h-11
                  w-full
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-primary
                  px-5
                  py-3
                  text-[13px]
                  font-bold
                  text-white
                  shadow-lg
                  shadow-primary/20
                  transition
                  hover:bg-primary-dark
                  active:scale-[0.98]

                  sm:mt-9
                  sm:min-h-12
                  sm:py-3.5
                  sm:text-sm
                "
              >
                Chat on WhatsApp

                <ArrowRight
                  size={15}
                  className="sm:h-4 sm:w-4"
                />
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* =========================
          BOTTOM CTA
      ========================== */}
      <section className="px-4 py-14 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">

          <h2 className="mx-auto max-w-2xl text-2xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            Ready to manage your business smarter?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-[13px] leading-5 text-muted sm:mt-4 sm:text-base sm:leading-7">
            Explore Biashara Manager and find the tools your business
            needs to stay organized and grow.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center">

            <Link
              href="/features"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-border
                bg-white
                px-6
                py-3
                text-[13px]
                font-bold
                text-foreground
                transition
                hover:border-primary/20
                hover:bg-white
                active:scale-[0.98]

                sm:w-auto
                sm:min-h-12
                sm:py-3.5
                sm:text-sm
              "
            >
              Explore Features
            </Link>

            <Link
              href="/pricing"
              className="
                inline-flex
                min-h-11
                w-full
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-primary
                px-6
                py-3
                text-[13px]
                font-bold
                text-white
                shadow-lg
                shadow-primary/20
                transition
                hover:bg-primary-dark
                active:scale-[0.98]

                sm:w-auto
                sm:min-h-12
                sm:py-3.5
                sm:text-sm
              "
            >
              View Pricing

              <ArrowRight
                size={15}
                className="sm:h-4 sm:w-4"
              />
            </Link>

          </div>
        </div>
      </section>

    </main>
  );
}