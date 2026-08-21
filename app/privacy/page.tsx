import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-surface px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl">
            <span className="text-xs font-bold uppercase tracking-wider text-primary sm:text-sm">
              Legal
            </span>

            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Privacy Policy
            </h1>

            <p className="mt-4 text-xs text-muted sm:text-sm">
              Last updated: August 2026
            </p>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="bg-white px-5 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <article className="mx-auto max-w-4xl space-y-8 sm:space-y-10">
            {/* Introduction */}
            <div>
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                1. Introduction
              </h2>

              <p className="mt-3 text-sm leading-6 text-muted sm:mt-4 sm:text-base sm:leading-7">
                Biashara Manager respects your privacy. This Privacy Policy
                explains how information may be collected, used, stored, and
                protected when you use our application and website.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                2. Information We Collect
              </h2>

              <p className="mt-3 text-sm leading-6 text-muted sm:mt-4 sm:text-base sm:leading-7">
                Depending on how you use Biashara Manager, we may collect
                account information, business information, customer records,
                product information, sales information, and other information
                that you choose to enter into the application.
              </p>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                3. How We Use Information
              </h2>

              <p className="mt-3 text-sm leading-6 text-muted sm:mt-4 sm:text-base sm:leading-7">
                Information may be used to provide and improve Biashara
                Manager, maintain your account, provide support, process
                subscriptions, improve security, and maintain reliable
                services.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                4. Data Security
              </h2>

              <p className="mt-3 text-sm leading-6 text-muted sm:mt-4 sm:text-base sm:leading-7">
                We take reasonable steps to protect information from
                unauthorized access, alteration, disclosure, or destruction.
                However, no internet service can guarantee complete security.
              </p>
            </div>

            {/* Third-Party Services */}
            <div>
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                5. Third-Party Services
              </h2>

              <p className="mt-3 text-sm leading-6 text-muted sm:mt-4 sm:text-base sm:leading-7">
                Biashara Manager may use trusted third-party services to
                provide authentication, cloud storage, payments, analytics,
                hosting, and other services required to operate the platform.
              </p>
            </div>

            {/* Your Choices */}
            <div>
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                6. Your Choices
              </h2>

              <p className="mt-3 text-sm leading-6 text-muted sm:mt-4 sm:text-base sm:leading-7">
                You may contact us about your account or information associated
                with your use of Biashara Manager. Additional controls may be
                provided as the platform develops.
              </p>
            </div>

            {/* Policy Updates */}
            <div>
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                7. Policy Updates
              </h2>

              <p className="mt-3 text-sm leading-6 text-muted sm:mt-4 sm:text-base sm:leading-7">
                We may update this Privacy Policy when our services or legal
                requirements change. Updated versions will be published on
                this page.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-xl font-bold text-foreground sm:text-2xl">
                8. Contact
              </h2>

              <p className="mt-3 text-sm leading-6 text-muted sm:mt-4 sm:text-base sm:leading-7">
                If you have questions about this Privacy Policy, please
                contact the Biashara Manager support team.
              </p>

              <a
                href="mailto:biasharamanager@mail.com"
                className="mt-4 inline-block break-all text-sm font-semibold text-primary transition hover:text-primary-dark sm:text-base"
              >
                biasharamanager@mail.com
              </a>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}