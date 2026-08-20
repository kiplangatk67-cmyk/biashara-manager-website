"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.back()}
      aria-label="Go back to the previous page"
      className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-border bg-white px-4 py-2.5 text-sm font-semibold text-foreground shadow-sm transition-all duration-200 active:scale-[0.98] hover:-translate-x-0.5 hover:border-primary/20 hover:text-primary hover:shadow-md"
    >
      <ArrowLeft
        size={16}
        className="shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5"
      />

      <span>Back</span>
    </button>
  );
}