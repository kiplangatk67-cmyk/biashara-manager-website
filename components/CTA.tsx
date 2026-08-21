import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const highlights = [
  "Manage sales and products",
  "Track customers and expenses",
  "Understand your business performance",
];

export default function CTA() {
  return (
    <section
      id="download"
      className="relative overflow-hidden bg-surface py-16 sm:py-20 lg:py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl sm:h-96 sm:w-96" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary/10 blur-3xl sm:h-96 sm:w-96" />

      {/* Main container */}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[28px] bg-slate-950 shadow-2xl sm:rounded-[34px]">
          
          <div className="relative px-5 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

            {/* Decorative glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl sm:h-96 sm:w-96" />

            <div className="relative z-10 mx-auto max-w-4xl text-center">

              {/* Badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-primary sm:text-xs">
                <Sparkles size={14} />

                Built for your business
              </span>

              {/* Heading */}
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Ready to make managing your business
                <span className="block text-primary">
                  simpler?
                </span>
              </h2>

              {/* Description */}
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                Get the tools you need to organize your sales, products,
                customers, expenses, and business performance in one place.
              </p>

              {/* Highlights */}
              <div className="mx-auto mt-8 flex max-w-3xl flex-wrap items-center justify-center gap-x-7 gap-y-3">
                {highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-2 text-xs text-slate-300 sm:text-sm"
                  >
                    <CheckCircle2
                      size={15}
                      className="shrink-0 text-primary"
                    />

                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">

                <Link
                  href="/pricing"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark"
                >
                  View Pricing

                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:border-white/20 hover:bg-white/10"
                >
                  <MessageCircle size={16} />

                  Talk to Us
                </Link>
              </div>

              {/* Trust note */}
              <p className="mt-7 text-xs text-slate-500 sm:mt-8">
                Flexible plans starting from{" "}
                <span className="font-semibold text-slate-300">
                  KSh 65
                </span>
                .
              </p>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}