import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle2,
  LockKeyhole,
  Mail,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    number: "01",
    title: "Introduction",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          Biashara Manager respects your privacy. This Privacy Policy explains
          how information may be collected, used, stored, and protected when
          you use our application and website.
        </p>

        <p>
          By using Biashara Manager, you acknowledge that you have read and
          understood this Privacy Policy.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Information We Collect",
    icon: UserRound,
    content: (
      <>
        <p>
          Depending on how you use Biashara Manager, we may collect information
          that you provide when creating or using your account.
        </p>

        <p>
          This may include account information, business information, customer
          records, product information, sales information, expense records,
          and other information that you choose to enter into the application.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "How We Use Information",
    icon: CheckCircle2,
    content: (
      <>
        <p>
          Information may be used to provide and improve Biashara Manager,
          maintain your account, provide customer support, process
          subscriptions, improve security, and maintain reliable services.
        </p>

        <p>
          We may also use information to understand how our services are used
          and to improve the features and experience we provide.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Data Security",
    icon: LockKeyhole,
    content: (
      <>
        <p>
          We take reasonable steps to protect information from unauthorized
          access, alteration, disclosure, or destruction.
        </p>

        <p>
          However, no internet service or method of electronic storage can
          guarantee complete security. Users should also take reasonable steps
          to protect their account credentials and business information.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Third-Party Services",
    icon: ShieldCheck,
    content: (
      <>
        <p>
          Biashara Manager may use trusted third-party services to provide
          authentication, cloud storage, payments, hosting, analytics, and
          other services required to operate the platform.
        </p>

        <p>
          These services may process certain information as necessary to
          provide their respective services.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Your Choices",
    icon: UserRound,
    content: (
      <>
        <p>
          You may contact us regarding your account or information associated
          with your use of Biashara Manager.
        </p>

        <p>
          Additional privacy and account controls may become available as the
          platform continues to develop.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Policy Updates",
    icon: CheckCircle2,
    content: (
      <>
        <p>
          We may update this Privacy Policy when our services, technology, or
          legal requirements change.
        </p>

        <p>
          Updated versions will be published on this page together with the
          latest update date.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-x-hidden bg-surface">

        {/* =========================
            HERO
        ========================== */}
        <section className="relative overflow-hidden px-4 pb-14 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8 lg:pb-24">

          {/* Background decoration */}
          <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl sm:h-80 sm:w-80" />

          <div className="relative mx-auto max-w-5xl">

            {/* Back */}
            <Link
              href="/"
              className="
                group
                inline-flex
                min-h-10
                items-center
                gap-1.5
                rounded-lg
                border
                border-border
                bg-white
                px-3.5
                py-2
                text-xs
                font-semibold
                text-foreground
                shadow-sm
                transition-all
                duration-200
                hover:-translate-x-0.5
                hover:border-primary/20
                hover:text-primary
                sm:min-h-11
                sm:rounded-xl
                sm:px-4
                sm:text-sm
              "
            >
              <ArrowLeft
                size={15}
                className="transition-transform duration-200 group-hover:-translate-x-0.5"
              />

              Back
            </Link>

            {/* Header */}
            <div className="mt-10 max-w-3xl sm:mt-12">

              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-white px-3.5 py-2 text-[9px] font-bold uppercase tracking-wider text-primary shadow-sm sm:gap-2 sm:px-4 sm:text-xs">
                <LockKeyhole
                  size={13}
                  className="sm:h-[14px] sm:w-[14px]"
                />

                Legal & Privacy
              </span>

              <h1 className="mt-5 text-[2rem] font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Privacy Policy
              </h1>

              <p className="mt-4 max-w-2xl text-[13px] leading-6 text-muted sm:mt-5 sm:text-base sm:leading-7">
                Your privacy matters to us. Learn how Biashara Manager may
                collect, use, protect, and manage information when you use our
                services.
              </p>

              <div className="mt-5 inline-flex items-center rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-semibold text-primary sm:text-xs">
                Last updated: August 2026
              </div>

            </div>
          </div>
        </section>

        {/* =========================
            QUICK PRIVACY MESSAGE
        ========================== */}
        <section className="px-4 pb-8 sm:px-6 sm:pb-12 lg:px-8">

          <div className="mx-auto max-w-5xl rounded-2xl border border-primary/10 bg-white p-5 shadow-sm sm:rounded-3xl sm:p-7">

            <div className="flex items-start gap-3 sm:gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-12 sm:w-12 sm:rounded-2xl">
                <ShieldCheck size={20} />
              </div>

              <div>
                <h2 className="text-sm font-bold text-foreground sm:text-base">
                  Your information matters
                </h2>

                <p className="mt-1.5 text-xs leading-5 text-muted sm:text-sm sm:leading-6">
                  We aim to handle information responsibly and provide a
                  reliable experience while you manage your business with
                  Biashara Manager.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* =========================
            POLICY CONTENT
        ========================== */}
        <section className="bg-white px-4 py-14 sm:px-6 sm:py-20 lg:px-8">

          <article className="mx-auto max-w-5xl">

            <div className="space-y-5 sm:space-y-6">

              {sections.map((section) => {
                const Icon = section.icon;

                return (
                  <section
                    key={section.number}
                    className="
                      group
                      rounded-2xl
                      border
                      border-border
                      bg-surface
                      p-5
                      transition-all
                      duration-300
                      hover:border-primary/20
                      hover:shadow-lg

                      sm:rounded-3xl
                      sm:p-7
                    "
                  >

                    <div className="flex items-start gap-4 sm:gap-5">

                      {/* Number */}
                      <div className="hidden shrink-0 pt-1 text-[10px] font-bold tracking-widest text-slate-300 sm:block">
                        {section.number}
                      </div>

                      {/* Icon */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white sm:h-12 sm:w-12 sm:rounded-2xl">
                        <Icon
                          size={19}
                          strokeWidth={1.8}
                        />
                      </div>

                      <div className="min-w-0 flex-1">

                        <div className="flex items-center gap-2">

                          <span className="text-[9px] font-bold tracking-widest text-slate-300 sm:hidden">
                            {section.number}
                          </span>

                          <h2 className="text-base font-bold text-foreground sm:text-xl">
                            {section.title}
                          </h2>

                        </div>

                        <div className="mt-3 space-y-3 text-[13px] leading-6 text-muted sm:mt-4 sm:text-sm sm:leading-7">
                          {section.content}
                        </div>

                      </div>
                    </div>
                  </section>
                );
              })}

            </div>

            {/* =========================
                CONTACT
            ========================== */}
            <section className="mt-5 rounded-2xl border border-primary/10 bg-primary/5 p-5 sm:mt-6 sm:rounded-3xl sm:p-8">

              <div className="flex items-start gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white sm:h-12 sm:w-12 sm:rounded-2xl">
                  <Mail size={20} />
                </div>

                <div className="min-w-0">

                  <h2 className="text-base font-bold text-foreground sm:text-xl">
                    08. Contact Us
                  </h2>

                  <p className="mt-2.5 text-[13px] leading-6 text-muted sm:text-sm sm:leading-7">
                    If you have questions about this Privacy Policy or how
                    Biashara Manager handles information, please contact our
                    support team.
                  </p>

                  <a
                    href="mailto:biasharamanager@gmail.com"
                    className="mt-4 inline-flex max-w-full items-center gap-2 break-all text-sm font-bold text-primary transition hover:text-primary-dark sm:text-base"
                  >
                    <Mail
                      size={16}
                      className="shrink-0"
                    />

                    biasharamanager@gmail.com
                  </a>

                </div>
              </div>

            </section>

          </article>
        </section>

        {/* =========================
            BOTTOM CTA
        ========================== */}
        <section className="px-4 py-14 sm:px-6 sm:py-24 lg:px-8">

          <div className="mx-auto max-w-5xl overflow-hidden rounded-[28px] bg-slate-950 p-7 text-center text-white shadow-2xl sm:rounded-[32px] sm:p-12">

            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <LockKeyhole size={22} />
            </div>

            <h2 className="mt-5 text-2xl font-bold leading-tight sm:text-3xl">
              Have a privacy question?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-[13px] leading-6 text-slate-400 sm:text-sm">
              If you need clarification about this Privacy Policy or your
              information, we're here to help.
            </p>

            <Link
              href="/contact"
              className="
                mt-6
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
                text-sm
                font-bold
                text-white
                shadow-lg
                shadow-primary/20
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:bg-primary-dark

                sm:mt-7
                sm:w-auto
              "
            >
              Contact Support

              <ArrowLeft
                size={16}
                className="rotate-180"
              />
            </Link>

          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}