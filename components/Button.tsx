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
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${styles}`}
    >
      {children}

      {showArrow && <ArrowRight size={17} strokeWidth={2} />}
    </Link>
  );
}