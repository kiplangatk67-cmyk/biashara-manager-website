"use client";

import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      aria-label="Go back to the previous page"
      className="
        group
        inline-flex
        min-h-10
        items-center
        justify-center
        gap-2
        rounded-xl
        border
        border-border
        bg-white
        px-3.5
        py-2
        text-[12px]
        font-bold
        text-foreground
        shadow-sm
        transition-all
        duration-200
        hover:-translate-x-0.5
        hover:border-primary/20
        hover:bg-surface
        hover:text-primary
        hover:shadow-md
        active:scale-[0.97]
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-primary
        focus-visible:ring-offset-2

        sm:min-h-11
        sm:rounded-xl
        sm:px-4
        sm:py-2.5
        sm:text-sm
      "
    >
      <ArrowLeft
        size={15}
        strokeWidth={2.2}
        className="
          shrink-0
          transition-transform
          duration-200
          group-hover:-translate-x-1
          sm:h-4
          sm:w-4
        "
      />

      <span className="whitespace-nowrap">
        Back
      </span>
    </button>
  );
}