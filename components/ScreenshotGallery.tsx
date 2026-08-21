import Image from "next/image";
import {
  BarChart3,
  CreditCard,
  DollarSign,
  Package,
  Settings,
  ShoppingCart,
  Users,
  UserCog,
} from "lucide-react";

const screenshots = [
  {
    image: "/screenshots/home.jpeg",
    title: "Business Dashboard",
    description:
      "See your most important business information from one simple dashboard.",
    icon: BarChart3,
  },
  {
    image: "/screenshots/products.jpeg",
    title: "Products & Inventory",
    description:
      "Manage products, prices, stock levels, and inventory information with ease.",
    icon: Package,
  },
  {
    image: "/screenshots/sales-1.png",
    title: "Sales Management",
    description:
      "Record sales and keep your daily transactions organized.",
    icon: ShoppingCart,
  },
  {
    image: "/screenshots/sales-2.jpeg",
    title: "Sales Records",
    description:
      "Review transaction details and keep a clear history of your sales.",
    icon: DollarSign,
  },
  {
    image: "/screenshots/customers.jpeg",
    title: "Customer Management",
    description:
      "Keep customer information and transaction history organized.",
    icon: Users,
  },
  {
    image: "/screenshots/outstanding-credit.jpeg",
    title: "Outstanding Credit",
    description:
      "Track customer balances and monitor outstanding credit payments.",
    icon: CreditCard,
  },
  {
    image: "/screenshots/expenses.jpeg",
    title: "Expense Tracking",
    description:
      "Record and review your business expenses in one place.",
    icon: DollarSign,
  },
  {
    image: "/screenshots/business-statistics.jpeg",
    title: "Business Statistics",
    description:
      "Understand your business performance through useful statistics.",
    icon: BarChart3,
  },
  {
    image: "/screenshots/employee-management.jpeg",
    title: "Employee Management",
    description:
      "Manage employees and keep your business team organized.",
    icon: UserCog,
  },
  {
    image: "/screenshots/app-settings.jpeg",
    title: "App Settings",
    description:
      "Customize and manage important settings for your business account.",
    icon: Settings,
  },
];

export default function ScreenshotGallery() {
  return (
    <section className="overflow-hidden bg-surface px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-primary">
            <Package size={14} />
            Explore the app
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Everything your business needs,
            <span className="block text-primary">
              right in your pocket.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted sm:text-base">
            Take a closer look at Biashara Manager and see how the app helps
            you manage sales, inventory, customers, expenses, employees, and
            business performance.
          </p>
        </div>

        {/* Gallery */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {screenshots.map((screenshot) => {
            const Icon = screenshot.icon;

            return (
              <div
                key={screenshot.title}
                className="group overflow-hidden rounded-[28px] border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl"
              >
                {/* Screenshot */}
                <div className="relative aspect-[9/16] overflow-hidden bg-slate-100">
                  <Image
                    src={screenshot.image}
                    alt={`${screenshot.title} - Biashara Manager`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Information */}
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon size={18} />
                    </div>

                    <h3 className="text-base font-bold text-foreground">
                      {screenshot.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-muted">
                    {screenshot.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}