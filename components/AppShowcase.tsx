import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Smartphone,
  TrendingUp,
} from "lucide-react";

const benefits = [
  "Quick access to important business information",
  "Simple dashboards designed for everyday use",
  "Organized sales and inventory records",
  "Useful business performance information",
];

export default function AppShowcase() {
  return (
    <section className="overflow-hidden bg-white px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Content */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary">
            <TrendingUp size={14} />
            Your business at a glance
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything important,
            <span className="block text-primary">
              right at your fingertips.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-muted sm:text-base">
            Get a clear view of your business from one simple dashboard.
            Quickly see your sales, products, customers, expenses, and other
            important business information without unnecessary complexity.
          </p>

          {/* Benefits */}
          <div className="mt-8 space-y-4">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3"
              >
                <CheckCircle2
                  size={19}
                  className="mt-0.5 shrink-0 text-secondary"
                />

                <span className="text-sm font-medium text-foreground">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/features"
            className="group mt-9 inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark"
          >
            Explore Features

            <ArrowRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Real App Screenshot */}
        <div className="relative mx-auto w-full max-w-md">
          {/* Background glow */}
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />

          {/* Phone frame */}
          <div className="relative mx-auto w-[280px] overflow-hidden rounded-[42px] border-[7px] border-slate-900 bg-slate-900 p-1.5 shadow-2xl sm:w-[320px]">
            {/* Speaker */}
            <div className="absolute left-1/2 top-1 z-20 h-5 w-28 -translate-x-1/2 rounded-full bg-slate-900" />

            {/* Real screenshot */}
            <div className="relative overflow-hidden rounded-[34px] bg-white">
              <Image
                src="/screenshots/home.jpeg"
                alt="Biashara Manager business dashboard"
                width={800}
                height={1600}
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </div>

          {/* Small floating badge */}
          <div className="absolute -bottom-4 -left-2 flex items-center gap-3 rounded-2xl border border-border bg-white px-4 py-3 shadow-xl sm:-left-8">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Smartphone size={18} />
            </div>

            <div>
              <p className="text-xs font-bold text-foreground">
                Biashara Manager
              </p>

              <p className="mt-0.5 text-[10px] text-muted">
                Simple business management
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}