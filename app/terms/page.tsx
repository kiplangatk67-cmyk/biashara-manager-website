import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TermsPage() {
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
              Terms of Use
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
                1. Acceptance of Terms
              </h2>

              <p className="mt-4 leading-7 text-muted">
                By accessing or using Biashara Manager, you agree to these
                Terms of Use. If you do not agree with these terms, please do
                not use the service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">
                2. Using the Service
              </h2>

              <p className="mt-4 leading-7 text-muted">
                Biashara Manager is provided to help businesses organize and
                manage their business activities. You are responsible for
                using the service appropriately and keeping your account
                information secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">
                3. Account Responsibility
              </h2>

              <p className="mt-4 leading-7 text-muted">
                You are responsible for maintaining the confidentiality of your
                account credentials and for activities performed through your
                account.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">
                4. Business Data
              </h2>

              <p className="mt-4 leading-7 text-muted">
                You are responsible for the accuracy of the information you
                enter into Biashara Manager and for maintaining appropriate
                records of your business.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">
                5. Payments and Subscriptions
              </h2>

              <p className="mt-4 leading-7 text-muted">
                Certain features may require a paid subscription. Subscription
                prices, payment methods, billing periods, and included features
                will be clearly communicated before payment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">
                6. Acceptable Use
              </h2>

              <p className="mt-4 leading-7 text-muted">
                You must not misuse the service, attempt to gain unauthorized
                access, interfere with the service, or use Biashara Manager for
                unlawful activities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">
                7. Service Availability
              </h2>

              <p className="mt-4 leading-7 text-muted">
                We aim to keep Biashara Manager reliable and available, but we
                cannot guarantee uninterrupted access at all times.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">
                8. Changes to These Terms
              </h2>

              <p className="mt-4 leading-7 text-muted">
                These Terms of Use may be updated as the service develops.
                Updated terms will be published on this page.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground">
                9. Contact
              </h2>

              <p className="mt-4 leading-7 text-muted">
                If you have questions about these terms, please contact the
                Biashara Manager support team.
              </p>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </>
  );
}