import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  LayoutDashboard,
  UserPlus,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Create your business",
    description:
      "Create your account, add your business details, and set up everything you need to start managing your business.",
  },
  {
    number: "02",
    icon: ClipboardList,
    title: "Manage your daily activities",
    description:
      "Record sales, manage products and inventory, track expenses, manage customers, and keep your business records organized.",
  },
  {
    number: "03",
    icon: BarChart3,
    title: "Understand your performance",
    description:
      "Use clear business information and reports to understand your sales, expenses, inventory, and overall performance.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden bg-surface px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-1/2 top-16 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl sm:top-20 sm:h-72 sm:w-72" />

      <div className="relative mx-auto max-w-7xl">
        {/* =========================
            HEADING
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/10 bg-white px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-primary shadow-sm sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
            <LayoutDashboard
              size={12}
              className="sm:h-[14px] sm:w-[14px]"
            />

            How it works
          </span>

          <h2 className="mx-auto mt-4 max-w-[340px] text-[1.85rem] font-bold leading-[1.08] tracking-tight text-foreground sm:mt-5 sm:max-w-3xl sm:text-4xl lg:text-5xl">
            Simple tools.
            <span className="block text-primary">
              Simple process.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[350px] text-[13px] leading-5 text-muted sm:mt-5 sm:max-w-2xl sm:text-base sm:leading-7">
            Biashara Manager makes it easier to organize your business,
            manage daily activities, and understand your performance without
            unnecessary complexity.
          </p>
        </div>

        {/* =========================
            STEPS
        ========================== */}
        <div className="relative mt-8 grid gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-3 lg:gap-6">
          {/* Connecting line - desktop only */}
          <div className="absolute left-[16.66%] right-[16.66%] top-12 hidden h-px bg-border lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="
                  group
                  relative
                  rounded-2xl
                  border border-border
                  bg-white
                  p-5
                  text-center
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/20
                  hover:shadow-xl

                  sm:rounded-3xl
                  sm:p-7
                  lg:p-8
                "
              >
                {/* Step icon */}
                <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full border-[6px] border-surface bg-white shadow-sm sm:h-24 sm:w-24 sm:border-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white sm:h-14 sm:w-14 sm:rounded-2xl">
                    <Icon
                      size={22}
                      strokeWidth={1.8}
                      className="sm:h-[25px] sm:w-[25px]"
                    />
                  </div>

                  {/* Step number */}
                  <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[9px] font-bold text-white shadow-md sm:-right-2 sm:-top-2 sm:h-7 sm:w-7 sm:text-[10px]">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-5 text-[17px] font-bold leading-snug text-foreground sm:mt-7 sm:text-xl">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-[12px] leading-5 text-muted sm:mt-3 sm:text-sm sm:leading-6">
                  {step.description}
                </p>

                {/* Confirmation */}
                <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] font-bold text-secondary sm:mt-6 sm:gap-2 sm:text-xs">
                  <CheckCircle2
                    size={13}
                    className="sm:h-[14px] sm:w-[14px]"
                  />

                  Easy to get started
                </div>
              </div>
            );
          })}
        </div>

        {/* =========================
            CTA
        ========================== */}
        <div className="mt-8 text-center sm:mt-14">
          <Link
            href="/pricing"
            className="group inline-flex min-h-11 w-full items-center justify-center gap-1.5 rounded-xl bg-primary px-5 py-3 text-[13px] font-bold text-white shadow-lg shadow-primary/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-dark hover:shadow-xl sm:min-h-12 sm:w-auto sm:gap-2 sm:px-6 sm:py-3.5 sm:text-sm"
          >
            Get started with Biashara Manager

            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1 sm:h-4 sm:w-4"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}