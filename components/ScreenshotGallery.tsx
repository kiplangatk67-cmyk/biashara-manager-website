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
    <section className="relative overflow-hidden bg-surface px-4 py-12 sm:px-6 sm:py-20 lg:px-8 lg:py-28">

      {/* =========================
          BACKGROUND DECORATION
      ========================== */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl sm:h-80 sm:w-80" />

      <div className="pointer-events-none absolute -right-24 bottom-20 h-56 w-56 rounded-full bg-secondary/5 blur-3xl sm:-right-32 sm:h-72 sm:w-72" />

      <div className="relative mx-auto max-w-7xl">

        {/* =========================
            HEADING
        ========================== */}
        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-primary sm:gap-2 sm:px-4 sm:py-2 sm:text-xs">
            <Package
              size={12}
              className="sm:h-[14px] sm:w-[14px]"
            />

            Explore the app
          </span>

          <h2 className="mx-auto mt-4 max-w-[350px] text-[1.8rem] font-bold leading-[1.08] tracking-tight text-foreground sm:mt-5 sm:max-w-3xl sm:text-4xl lg:text-5xl">
            Everything your business needs,
            <span className="block text-primary">
              right in your pocket.
            </span>
          </h2>

          <p className="mx-auto mt-3 max-w-[350px] text-[13px] leading-5 text-muted sm:mt-5 sm:max-w-2xl sm:text-base sm:leading-7">
            Take a closer look at Biashara Manager and see how the app helps
            you manage sales, inventory, customers, expenses, employees, and
            business performance.
          </p>
        </div>

        {/* =========================
            GALLERY
        ========================== */}
        <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">

          {screenshots.map((screenshot, index) => {
            const Icon = screenshot.icon;

            return (
              <article
                key={screenshot.title}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  border
                  border-border
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-primary/20
                  hover:shadow-2xl

                  sm:rounded-3xl
                "
              >

                {/* =========================
                    SCREENSHOT
                ========================== */}
                <div className="relative flex justify-center overflow-hidden bg-slate-100 px-5 pt-5 sm:px-7 sm:pt-7">

                  {/* Phone frame */}
                  <div className="relative w-full max-w-[230px] overflow-hidden rounded-t-[26px] border-[5px] border-slate-900 bg-slate-900 shadow-xl transition-transform duration-500 group-hover:-translate-y-1 sm:max-w-[250px]">

                    <Image
                      src={screenshot.image}
                      alt={`${screenshot.title} screen in Biashara Manager`}
                      width={500}
                      height={1000}
                      className="h-auto w-full object-cover object-top"
                    />

                  </div>

                  {/* Number */}
                  <div className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/60 bg-white/90 text-[9px] font-bold text-slate-500 shadow-sm backdrop-blur-sm sm:right-4 sm:top-4 sm:h-8 sm:w-8 sm:text-[10px]">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* =========================
                    INFORMATION
                ========================== */}
                <div className="p-4 sm:p-6">

                  <div className="flex items-center gap-2.5 sm:gap-3">

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary sm:h-11 sm:w-11 sm:rounded-xl">
                      <Icon
                        size={17}
                        strokeWidth={1.8}
                        className="sm:h-[19px] sm:w-[19px]"
                      />
                    </div>

                    <h3 className="text-[14px] font-bold leading-snug text-foreground sm:text-base">
                      {screenshot.title}
                    </h3>

                  </div>

                  <p className="mt-3 text-[12px] leading-5 text-muted sm:mt-4 sm:text-sm sm:leading-6">
                    {screenshot.description}
                  </p>

                  {/* Feature label */}
                  <div className="mt-4 flex items-center gap-1.5 text-[10px] font-bold text-primary sm:mt-5 sm:text-xs">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    Built into Biashara Manager
                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* =========================
            BOTTOM MESSAGE
        ========================== */}
        <div className="mx-auto mt-10 max-w-3xl text-center sm:mt-16">

          <p className="text-[11px] leading-5 text-muted sm:text-sm sm:leading-6">
            From your first sale to your daily business reports,
            <span className="font-semibold text-foreground">
              {" "}Biashara Manager keeps your essential tools together.
            </span>
          </p>

        </div>
      </div>
    </section>
  );
}