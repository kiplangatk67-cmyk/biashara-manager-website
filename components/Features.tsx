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
    <section className="relative overflow-hidden bg-surface px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl sm:h-72 sm:w-72" />

      <div className="relative mx-auto max-w-7xl">

        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-primary sm:text-sm">
            Powerful Features
          </span>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything your business needs in one place
          </h2>

          <p className="mt-3 text-sm leading-6 text-muted sm:mt-4 sm:text-base sm:leading-7">
            From recording your first sale to understanding your business
            performance, Biashara Manager keeps everything organized.
          </p>
        </div>

        <div className="mt-9 grid gap-3 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white/75 p-5 shadow-sm transition-all duration-300 hover:border-primary/20 hover:bg-white hover:shadow-xl sm:rounded-3xl sm:p-7"
              >
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary sm:h-14 sm:w-14 sm:rounded-2xl">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <span className="text-[10px] font-semibold text-slate-300 sm:text-xs">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-foreground sm:mt-7 sm:text-xl">
                    {feature.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-muted sm:mt-3 sm:text-sm sm:leading-6">
                    {feature.description}
                  </p>

                  <div className="mt-5 text-xs font-semibold text-primary sm:mt-7">
                    Built into Biashara Manager →
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom highlight */}
        <div className="mt-5 overflow-hidden rounded-2xl border border-primary/10 bg-primary p-5 text-white shadow-xl shadow-primary/10 sm:mt-8 sm:rounded-3xl sm:p-9">
          <div className="flex flex-col gap-6 sm:gap-7 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-white/80 sm:text-sm">
                <FileText size={16} />
                Built for everyday business
              </div>

              <h3 className="mt-3 text-xl font-bold sm:text-3xl">
                Spend less time managing records and more time growing.
              </h3>

              <p className="mt-3 text-xs leading-6 text-white/70 sm:text-sm">
                Biashara Manager brings the important parts of your business
                together so you can work smarter.
              </p>
            </div>

            <div className="flex h-16 w-16 shrink-0 items-center justify-center self-start rounded-2xl bg-white/10 sm:h-20 sm:w-20 sm:self-auto sm:rounded-3xl">
              <BarChart3 size={32} />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}