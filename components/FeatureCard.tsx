import type { LucideIcon } from "lucide-react";

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
        rounded-xl
        border border-border
        bg-white
        p-4
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-primary/20
        hover:shadow-xl
        hover:shadow-slate-200/60

        sm:rounded-2xl
        sm:p-5

        lg:p-6
      "
    >
      {/* Icon */}
      <div
        className="
          mb-4
          flex h-10 w-10
          items-center justify-center
          rounded-lg
          bg-primary/10
          text-primary
          transition-all
          duration-300
          group-hover:bg-primary
          group-hover:text-white

          sm:mb-5
          sm:h-11
          sm:w-11
          sm:rounded-xl

          lg:h-12
          lg:w-12
        "
      >
        <Icon
          size={20}
          strokeWidth={2}
          className="sm:h-[22px] sm:w-[22px] lg:h-6 lg:w-6"
        />
      </div>

      {/* Title */}
      <h3
        className="
          text-base
          font-bold
          leading-snug
          text-foreground

          sm:text-[17px]

          lg:text-lg
        "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-2
          text-[13px]
          leading-5
          text-muted

          sm:mt-3
          sm:text-sm
          sm:leading-6
        "
      >
        {description}
      </p>
    </div>
  );
}