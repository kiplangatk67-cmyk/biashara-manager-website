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
      className="relative overflow-hidden bg-surface px-5 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      {/* Background decoration */}
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        <div className="overflow-hidden rounded-[36px] bg-slate-950 px-7 py-12 text-white shadow-2xl sm:px-10 sm:py-16 lg:px-16 lg:py-20">
          <div className="relative">
            {/* Small badge */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary">
                <Sparkles size={14} />
                Built for your business
              </span>
            </div>

            {/* Heading */}
            <div className="mx-auto mt-7 max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Ready to make managing your business
                <span className="block text-primary">
                  simpler?
                </span>
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                Get the tools you need to organize your sales, products,
                customers, expenses, and business performance in one place.
              </p>
            </div>

            {/* Highlights */}
            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-x-6 gap-y-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-2 text-xs text-slate-300 sm:text-sm"
                >
                  <CheckCircle2
                    size={16}
                    className="text-primary"
                  />

                  {highlight}
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Link
                href="/pricing"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark"
              >
                View Pricing

                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-white/10"
              >
                <MessageCircle size={16} />
                Talk to Us
              </Link>
            </div>

            {/* Trust note */}
            <div className="mt-8 text-center">
              <p className="text-xs text-slate-500">
                Flexible plans starting from{" "}
                <span className="font-semibold text-slate-300">
                  KSh 65
                </span>
                .
              </p>
            </div>

            {/* Decorative glow */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}