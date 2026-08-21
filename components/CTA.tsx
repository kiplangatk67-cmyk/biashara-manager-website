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
      className="relative overflow-hidden bg-surface px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-24 top-10 h-60 w-60 rounded-full bg-primary/10 blur-3xl sm:-left-32 sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute -bottom-10 -right-24 h-60 w-60 rounded-full bg-secondary/10 blur-3xl sm:-right-32 sm:h-80 sm:w-80" />

      <div className="relative mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-2xl bg-slate-950 px-4 py-8 text-white shadow-2xl sm:rounded-[30px] sm:px-10 sm:py-14 lg:rounded-[36px] lg:px-16 lg:py-20">

          {/* Decorative glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl sm:h-72 sm:w-72" />

          <div className="relative z-10">

            {/* Badge */}
            <div className="flex justify-center">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-primary sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
                <Sparkles
                  size={12}
                  className="sm:h-[14px] sm:w-[14px]"
                />

                Built for your business
              </span>
            </div>

            {/* Heading */}
            <div className="mx-auto mt-5 max-w-[350px] text-center sm:mt-7 sm:max-w-3xl">
              <h2 className="text-[1.8rem] font-bold leading-[1.08] tracking-tight sm:text-4xl lg:text-5xl">
                Ready to make managing your business
                <span className="block text-primary">
                  simpler?
                </span>
              </h2>

              <p className="mx-auto mt-3 max-w-[330px] text-[12px] leading-5 text-slate-400 sm:mt-5 sm:max-w-2xl sm:text-base sm:leading-7">
                Get the tools you need to organize your sales, products,
                customers, expenses, and business performance in one place.
              </p>
            </div>

            {/* Highlights */}
            <div className="mx-auto mt-6 flex max-w-3xl flex-col items-start gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-6 sm:gap-y-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-center gap-1.5 text-[11px] text-slate-300 sm:gap-2 sm:text-sm"
                >
                  <CheckCircle2
                    size={14}
                    className="shrink-0 text-primary sm:h-4 sm:w-4"
                  />

                  <span>{highlight}</span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-7 flex w-full flex-col justify-center gap-2.5 sm:mt-9 sm:flex-row sm:gap-3">

              <Link
                href="/pricing"
                className="group inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-[12px] font-bold text-white shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark sm:min-h-11 sm:w-auto sm:gap-2 sm:rounded-xl sm:px-7 sm:py-3.5 sm:text-sm"
              >
                View Pricing

                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex min-h-10 w-full items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-5 py-2.5 text-[12px] font-bold text-white transition-all duration-200 hover:bg-white/10 sm:min-h-11 sm:w-auto sm:gap-2 sm:rounded-xl sm:px-7 sm:py-3.5 sm:text-sm"
              >
                <MessageCircle
                  size={14}
                  className="sm:h-4 sm:w-4"
                />

                Talk to Us
              </Link>
            </div>

            {/* Trust note */}
            <div className="mt-6 text-center sm:mt-8">
              <p className="text-[10px] text-slate-500 sm:text-xs">
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