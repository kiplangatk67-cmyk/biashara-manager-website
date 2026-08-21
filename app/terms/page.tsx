import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackButton from "@/components/BackButton";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Mail,
  ShieldCheck,
} from "lucide-react";
import Link from "next/link";

const terms = [
  {
    number: "01",
    title: "Acceptance of Terms",
    content: [
      "By accessing or using Biashara Manager, you agree to these Terms of Use and to use the service in accordance with them.",
      "If you do not agree with these terms, please do not use Biashara Manager.",
    ],
  },
  {
    number: "02",
    title: "Using the Service",
    content: [
      "Biashara Manager provides tools designed to help businesses organize and manage sales, products, inventory, customers, expenses, reports, and other business activities.",
      "You agree to use the service responsibly and only for lawful business purposes.",
    ],
  },
  {
    number: "03",
    title: "Account Responsibility",
    content: [
      "You are responsible for keeping your account credentials secure and confidential. You are also responsible for activities carried out through your account.",
      "If you believe your account has been accessed without authorization, contact Biashara Manager support as soon as possible.",
    ],
  },
  {
    number: "04",
    title: "Business Data",
    content: [
      "You are responsible for the accuracy and completeness of the information you enter into Biashara Manager, including products, sales, expenses, customer information, and other business records.",
      "You should maintain appropriate business records and use the information provided by the service responsibly.",
    ],
  },
  {
    number: "05",
    title: "Payments and Subscriptions",
    content: [
      "Certain features or continued access to Biashara Manager may require a paid subscription. Available subscription plans, prices, payment methods, billing periods, and included features will be communicated before payment.",
      "Subscription access may depend on successful payment and the validity of the selected subscription period.",
    ],
  },
  {
    number: "06",
    title: "Acceptable Use",
    content: [
      "You must not misuse Biashara Manager or attempt to interfere with its operation.",
      "This includes attempting to gain unauthorized access, disrupting the service, abusing security features, accessing another user's account, or using the service for unlawful activities.",
    ],
  },
  {
    number: "07",
    title: "Service Availability",
    content: [
      "We aim to keep Biashara Manager reliable and available. However, access may occasionally be affected by maintenance, technical issues, network problems, third-party services, or circumstances outside our control.",
      "We therefore cannot guarantee uninterrupted or error-free access at all times.",
    ],
  },
  {
    number: "08",
    title: "Changes to These Terms",
    content: [
      "These Terms of Use may be updated from time to time as Biashara Manager develops or as our services and requirements change.",
      "When changes are made, the updated version will be published on this page together with the latest update date.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-surface">

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative px-4 pb-12 pt-6 sm:px-6 sm:pb-20 sm:pt-8 lg:px-8 lg:pb-24">

          {/* Background decoration */}
          <div className="pointer-events-none absolute -left-32 top-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl sm:h-80 sm:w-80" />

          <div className="pointer-events-none absolute -right-32 top-16 h-64 w-64 rounded-full bg-secondary/10 blur-3xl sm:h-80 sm:w-80" />

          <div className="relative mx-auto max-w-7xl">

            {/* Back button */}
            <div className="mb-8 sm:mb-12">
              <BackButton />
            </div>

            {/* Header */}
            <div className="mx-auto max-w-4xl text-center">

              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-primary shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
                <FileText
                  size={12}
                  className="sm:h-[14px] sm:w-[14px]"
                />

                Legal
              </span>

              <h1 className="mx-auto mt-4 max-w-[350px] text-[2rem] font-bold leading-[1.08] tracking-tight text-foreground sm:mt-6 sm:max-w-4xl sm:text-5xl lg:text-6xl">
                Terms of Use
              </h1>

              <p className="mt-3 text-[11px] text-muted sm:mt-4 sm:text-sm">
                Last updated: August 2026
              </p>

              <p className="mx-auto mt-4 max-w-[350px] text-[13px] leading-5 text-muted sm:mt-5 sm:max-w-2xl sm:text-base sm:leading-7">
                Please read these terms carefully before using Biashara
                Manager and its business management services.
              </p>
            </div>
          </div>
        </section>

        {/* =====================================================
            QUICK SUMMARY
        ====================================================== */}
        <section className="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
          <div className="mx-auto max-w-5xl">

            <div className="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">

              <div className="rounded-2xl border border-border bg-surface p-5 sm:rounded-3xl sm:p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-11 sm:w-11">
                  <FileText size={19} />
                </div>

                <h2 className="mt-4 text-sm font-bold text-foreground sm:text-base">
                  Use responsibly
                </h2>

                <p className="mt-2 text-[12px] leading-5 text-muted sm:text-sm sm:leading-6">
                  Use Biashara Manager lawfully and responsibly.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-5 sm:rounded-3xl sm:p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-11 sm:w-11">
                  <ShieldCheck size={19} />
                </div>

                <h2 className="mt-4 text-sm font-bold text-foreground sm:text-base">
                  Protect your account
                </h2>

                <p className="mt-2 text-[12px] leading-5 text-muted sm:text-sm sm:leading-6">
                  Keep your account credentials secure and confidential.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-surface p-5 sm:rounded-3xl sm:p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/10 text-secondary sm:h-11 sm:w-11">
                  <CheckCircle2 size={19} />
                </div>

                <h2 className="mt-4 text-sm font-bold text-foreground sm:text-base">
                  Stay informed
                </h2>

                <p className="mt-2 text-[12px] leading-5 text-muted sm:text-sm sm:leading-6">
                  Terms may be updated as the service develops.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            TERMS
        ====================================================== */}
        <section className="bg-surface px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <article className="mx-auto max-w-4xl">

            <div className="space-y-4 sm:space-y-5">
              {terms.map((term) => (
                <section
                  key={term.number}
                  className="
                    rounded-2xl
                    border
                    border-border
                    bg-white
                    p-5
                    shadow-sm
                    transition-all
                    duration-300
                    hover:border-primary/20
                    hover:shadow-md

                    sm:rounded-3xl
                    sm:p-7
                    lg:p-8
                  "
                >
                  {/* Heading */}
                  <div className="flex items-start gap-3 sm:gap-4">

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-[9px] font-bold text-primary sm:h-9 sm:w-9 sm:rounded-xl sm:text-[10px]">
                      {term.number}
                    </span>

                    <h2 className="pt-1 text-[16px] font-bold leading-snug text-foreground sm:text-xl">
                      {term.title}
                    </h2>

                  </div>

                  {/* Content */}
                  <div className="mt-4 space-y-3 pl-0 sm:mt-5 sm:pl-[52px]">
                    {term.content.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="text-[12px] leading-5 text-muted sm:text-sm sm:leading-7"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            {/* =================================================
                CONTACT
            ================================================== */}
            <section className="mt-5 rounded-2xl border border-primary/10 bg-white p-5 shadow-sm sm:mt-6 sm:rounded-3xl sm:p-8">

              <div className="flex items-start gap-3 sm:gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white sm:h-12 sm:w-12 sm:rounded-2xl">
                  <Mail
                    size={18}
                    className="sm:h-5 sm:w-5"
                  />
                </div>

                <div>
                  <h2 className="text-base font-bold text-foreground sm:text-xl">
                    09. Contact Us
                  </h2>

                  <p className="mt-2 text-[12px] leading-5 text-muted sm:text-sm sm:leading-6">
                    If you have questions about these Terms of Use or need
                    help with Biashara Manager, please contact our support
                    team.
                  </p>

                  <a
                    href="mailto:biasharamanager@mail.com"
                    className="mt-3 inline-block text-[12px] font-bold text-primary transition hover:text-primary-dark sm:text-sm"
                  >
                    biasharamanager@mail.com
                  </a>
                </div>

              </div>
            </section>

            {/* =================================================
                RELATED LINKS
            ================================================== */}
            <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center">

              <Link
                href="/privacy"
                className="group inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg border border-border bg-white px-5 py-2.5 text-[12px] font-bold text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/20 hover:text-primary sm:min-h-11 sm:gap-2 sm:rounded-xl sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Privacy Policy

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-[12px] font-bold text-white shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:bg-primary-dark sm:min-h-11 sm:gap-2 sm:rounded-xl sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Contact Support

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>
          </article>
        </section>

      </main>

      <Footer />
    </>
  );
}