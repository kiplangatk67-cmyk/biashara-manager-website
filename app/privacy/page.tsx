import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <>
      <Navbar />

      <main>
        <section className="bg-surface px-5 py-20 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-4xl">
            <span className="text-sm font-bold uppercase tracking-wider text-primary">
              Legal
            </span>

            <h1 className="mt-3 text-4xl font-bold text-foreground">
              Privacy Policy
            </h1>

            <p className="mt-4 text-sm text-muted">
              Last updated: August 2026
            </p>
          </div>
        </section>

        <section className="bg-white py-16">
          <article className="mx-auto max-w-4xl space-y-10 px-5 sm:px-6 lg:px-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                1. Introduction
              </h2>

              <p className="mt-4 leading-7 text-muted">
                Biashara Manager respects your privacy. This Privacy Policy
                explains how information may be collected, used, stored, and
                protected when you use our application and website.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">
                2. Information We Collect
              </h2>

              <p className="mt-4 leading-7 text-muted">
                Depending on how you use Biashara Manager, we may collect
                account information, business information, customer records,
                product information, sales information, and other information
                that you choose to enter into the application.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">
                3. How We Use Information
              </h2>

              <p className="mt-4 leading-7 text-muted">
                Information may be used to provide and improve Biashara
                Manager, maintain your account, provide support, process
                subscriptions, improve security, and maintain reliable
                services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">
                4. Data Security
              </h2>

              <p className="mt-4 leading-7 text-muted">
                We take reasonable steps to protect information from
                unauthorized access, alteration, disclosure, or destruction.
                However, no internet service can guarantee complete security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">
                5. Third-Party Services
              </h2>

              <p className="mt-4 leading-7 text-muted">
                Biashara Manager may use trusted third-party services to
                provide authentication, cloud storage, payments, analytics,
                hosting, and other services required to operate the platform.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">
                6. Your Choices
              </h2>

              <p className="mt-4 leading-7 text-muted">
                You may contact us about your account or information associated
                with your use of Biashara Manager. Additional controls may be
                provided as the platform develops.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">
                7. Policy Updates
              </h2>

              <p className="mt-4 leading-7 text-muted">
                We may update this Privacy Policy when our services or legal
                requirements change. Updated versions will be published on
                this page.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">
                8. Contact
              </h2>

              <p className="mt-4 leading-7 text-muted">
                If you have questions about this Privacy Policy, please
                contact the Biashara Manager support team.
              </p>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}