import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary";
  showArrow?: boolean;
};

export default function Button({
  children,
  href = "#",
  variant = "primary",
  showArrow = false,
}: ButtonProps) {
  const styles =
    variant === "primary"
      ? "bg-primary text-white shadow-md shadow-primary/15 hover:bg-primary-dark"
      : "border border-border bg-white text-foreground hover:bg-surface";

  return (
    <Link
      href={href}
      className={`
        inline-flex
        min-h-10
        w-full
        items-center
        justify-center
        gap-1.5
        rounded-lg
        px-4
        py-2.5
        text-[13px]
        font-semibold
        transition-all
        duration-300
        active:scale-[0.98]
        hover:-translate-y-0.5

        sm:min-h-11
        sm:w-auto
        sm:gap-2
        sm:rounded-xl
        sm:px-5
        sm:py-3
        sm:text-sm

        lg:px-6
        lg:py-3.5

        ${styles}
      `}
    >
      <span className="whitespace-nowrap">
        {children}
      </span>

      {showArrow && (
        <ArrowRight
          size={15}
          strokeWidth={2}
          className="shrink-0 sm:h-[17px] sm:w-[17px]"
        />
      )}
    </Link>
  );
}