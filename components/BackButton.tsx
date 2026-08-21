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
      className="
        group
        inline-flex
        min-h-10
        items-center
        justify-center
        gap-1.5
        rounded-lg
        border
        border-border
        bg-white
        px-3.5
        py-2
        text-[12px]
        font-semibold
        text-foreground
        shadow-sm
        transition-all
        duration-200
        active:scale-[0.98]
        hover:-translate-x-0.5
        hover:border-primary/20
        hover:text-primary
        hover:shadow-md

        sm:min-h-11
        sm:gap-2
        sm:rounded-xl
        sm:px-4
        sm:py-2.5
        sm:text-sm
      "
    >
      <ArrowLeft
        size={15}
        className="shrink-0 transition-transform duration-200 group-hover:-translate-x-0.5 sm:h-4 sm:w-4"
      />

      <span>Back</span>
    </button>
  );
}