import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* Page Header */}
        <section className="bg-surface px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <span className="inline-flex rounded-full border border-primary/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary shadow-sm">
              Legal
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Terms of Use
            </h1>

            <p className="mt-4 text-sm text-muted">
              Last updated: August 2026
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="bg-white py-16 sm:py-20">
          <article className="mx-auto max-w-4xl space-y-12 px-5 sm:px-6 lg:px-8">
            {/* 1 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                1. Acceptance of Terms
              </h2>

              <p className="mt-4 leading-7 text-muted">
                By accessing or using Biashara Manager, you agree to these
                Terms of Use and to use the service in accordance with them.
                If you do not agree with these terms, please do not use
                Biashara Manager.
              </p>
            </div>

            {/* 2 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                2. Using the Service
              </h2>

              <p className="mt-4 leading-7 text-muted">
                Biashara Manager provides tools designed to help businesses
                organize and manage sales, products, inventory, customers,
                expenses, reports, and other business activities.
              </p>

              <p className="mt-4 leading-7 text-muted">
                You agree to use the service responsibly and only for lawful
                business purposes.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                3. Account Responsibility
              </h2>

              <p className="mt-4 leading-7 text-muted">
                You are responsible for keeping your account credentials
                secure and confidential. You are also responsible for
                activities carried out through your account.
              </p>

              <p className="mt-4 leading-7 text-muted">
                If you believe that your account has been accessed without
                authorization, you should contact Biashara Manager support as
                soon as possible.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                4. Business Data
              </h2>

              <p className="mt-4 leading-7 text-muted">
                You are responsible for the accuracy and completeness of the
                information you enter into Biashara Manager, including
                products, sales, expenses, customer information, and other
                business records.
              </p>

              <p className="mt-4 leading-7 text-muted">
                You should maintain appropriate business records and use the
                information provided by the service responsibly.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                5. Payments and Subscriptions
              </h2>

              <p className="mt-4 leading-7 text-muted">
                Certain features or continued access to Biashara Manager may
                require a paid subscription. Available subscription plans,
                prices, payment methods, billing periods, and included
                features will be communicated before payment.
              </p>

              <p className="mt-4 leading-7 text-muted">
                Subscription access may depend on successful payment and the
                validity of the selected subscription period.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                6. Acceptable Use
              </h2>

              <p className="mt-4 leading-7 text-muted">
                You must not misuse Biashara Manager or attempt to interfere
                with its operation.
              </p>

              <p className="mt-4 leading-7 text-muted">
                This includes attempting to gain unauthorized access,
                disrupting the service, abusing security features, accessing
                another user's account, or using the service for unlawful
                activities.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                7. Service Availability
              </h2>

              <p className="mt-4 leading-7 text-muted">
                We aim to keep Biashara Manager reliable and available.
                However, access may occasionally be affected by maintenance,
                technical issues, network problems, third-party services, or
                circumstances outside our control.
              </p>

              <p className="mt-4 leading-7 text-muted">
                We therefore cannot guarantee uninterrupted or error-free
                access at all times.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                8. Changes to These Terms
              </h2>

              <p className="mt-4 leading-7 text-muted">
                These Terms of Use may be updated from time to time as
                Biashara Manager develops or as our services and requirements
                change.
              </p>

              <p className="mt-4 leading-7 text-muted">
                When changes are made, the updated version will be published
                on this page together with the latest update date.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="text-2xl font-bold text-foreground">
                9. Contact Us
              </h2>

              <p className="mt-4 leading-7 text-muted">
                If you have questions about these Terms of Use or need help
                with Biashara Manager, please contact our support team.
              </p>

              <a
                href="mailto:biasharamanager@mail.com"
                className="mt-4 inline-block font-semibold text-primary transition hover:text-primary-dark"
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