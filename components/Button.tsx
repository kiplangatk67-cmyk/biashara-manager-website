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
  const isPrimary = variant === "primary";

  return (
    <Link
      href={href}
      className={`
        group
        inline-flex
        min-h-11
        w-full
        items-center
        justify-center
        gap-2
        rounded-xl
        px-5
        py-3
        text-[13px]
        font-bold
        transition-all
        duration-200
        active:scale-[0.98]
        hover:-translate-y-0.5
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
        focus-visible:ring-offset-2

        sm:min-h-12
        sm:w-auto
        sm:px-6
        sm:py-3.5
        sm:text-sm

        lg:px-7

        ${
          isPrimary
            ? `
              bg-primary
              text-white
              shadow-lg
              shadow-primary/20
              hover:bg-primary-dark
              hover:shadow-xl
            `
            : `
              border
              border-border
              bg-white
              text-foreground
              shadow-sm
              hover:border-primary/20
              hover:bg-surface
              hover:shadow-md
            `
        }
      `}
    >
      <span className="whitespace-nowrap">
        {children}
      </span>

      {showArrow && (
        <ArrowRight
          size={15}
          strokeWidth={2}
          className="shrink-0 transition-transform duration-200 group-hover:translate-x-1 sm:h-4 sm:w-4"
        />
      )}
    </Link>
  );
}