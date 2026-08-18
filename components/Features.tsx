import {
  BarChart3,
  Boxes,
  CreditCard,
  FileText,
  LockKeyhole,
  Receipt,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Receipt,
    title: "Sales Management",
    description:
      "Record sales quickly, including multiple products in a single transaction.",
  },
  {
    icon: Boxes,
    title: "Inventory Management",
    description:
      "Keep track of products, stock levels, prices, and inventory movement.",
  },
  {
    icon: Users,
    title: "Customer Management",
    description:
      "Keep customer information organized and easily accessible.",
  },
  {
    icon: CreditCard,
    title: "Expenses & Debts",
    description:
      "Track business expenses and keep an accurate record of customer debts.",
  },
  {
    icon: BarChart3,
    title: "Reports & Insights",
    description:
      "Understand your business through clear sales, expense, and performance reports.",
  },
  {
    icon: LockKeyhole,
    title: "Security",
    description:
      "Protect your business information with secure accounts and access controls.",
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-surface px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-primary">
            Powerful Features
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything your business needs in one place
          </h2>

          <p className="mt-4 text-base leading-7 text-muted">
            From recording your first sale to understanding your business
            performance, Biashara Manager keeps everything organized.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-3xl border border-border bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-2xl hover:shadow-slate-200/60"
              >
                {/* Decorative background */}
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                      <Icon size={26} strokeWidth={1.8} />
                    </div>

                    <span className="text-xs font-semibold text-slate-300">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-foreground">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {feature.description}
                  </p>

                  <div className="mt-7 flex items-center gap-2 text-xs font-semibold text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    Learn more
                    <span>→</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom highlight */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-primary/10 bg-primary p-7 text-white shadow-xl shadow-primary/10 sm:p-9">
          <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-sm font-semibold text-white/80">
                <FileText size={17} />
                Built for everyday business
              </div>

              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                Spend less time managing records and more time growing.
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/70">
                Biashara Manager brings the important parts of your business
                together so you can work smarter.
              </p>
            </div>

            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white/10">
              <BarChart3 size={38} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}