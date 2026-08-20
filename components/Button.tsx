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
      ? "bg-primary text-white shadow-lg shadow-primary/15 hover:bg-primary-dark"
      : "border border-border bg-white text-foreground hover:bg-surface";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 active:scale-[0.98] hover:-translate-y-0.5 sm:w-auto sm:px-6 sm:py-3.5 ${styles}`}
    >
      <span>{children}</span>

      {showArrow && (
        <ArrowRight
          size={17}
          strokeWidth={2}
          className="shrink-0"
        />
      )}
    </Link>
  );
}