import type { LucideIcon } from "lucide-react";
import { ArrowUpRight } from "lucide-react";

type FeatureCardProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export default function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-white
        p-5
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/20
        hover:shadow-xl
        hover:shadow-slate-200/50

        sm:rounded-3xl
        sm:p-6

        lg:p-7
      "
    >
      {/* Decorative accent */}
      <div
        className="
          pointer-events-none
          absolute
          -right-10
          -top-10
          h-24
          w-24
          rounded-full
          bg-primary/5
          transition-transform
          duration-500
          group-hover:scale-150
        "
      />

      <div className="relative">
        {/* Top row */}
        <div className="flex items-start justify-between">
          {/* Icon */}
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-primary/10
              text-primary
              transition-all
              duration-300
              group-hover:bg-primary
              group-hover:text-white

              sm:h-12
              sm:w-12
              sm:rounded-2xl

              lg:h-13
              lg:w-13
            "
          >
            <Icon
              size={21}
              strokeWidth={1.9}
              className="sm:h-[23px] sm:w-[23px]"
            />
          </div>

          {/* Arrow */}
          <div
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-lg
              bg-surface
              text-muted
              transition-all
              duration-300
              group-hover:bg-primary
              group-hover:text-white

              sm:h-9
              sm:w-9
              sm:rounded-xl
            "
          >
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-4 sm:w-4"
            />
          </div>
        </div>

        {/* Title */}
        <h3
          className="
            mt-5
            text-[16px]
            font-bold
            leading-snug
            text-foreground

            sm:mt-6
            sm:text-lg

            lg:text-xl
          "
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="
            mt-2
            max-w-md
            text-[12px]
            leading-5
            text-muted

            sm:mt-3
            sm:text-sm
            sm:leading-6
          "
        >
          {description}
        </p>

        {/* Bottom accent */}
        <div
          className="
            mt-5
            flex
            items-center
            gap-2
            text-[10px]
            font-bold
            text-primary

            sm:mt-6
            sm:text-xs
          "
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          Biashara Manager
        </div>
      </div>
    </div>
  );
}