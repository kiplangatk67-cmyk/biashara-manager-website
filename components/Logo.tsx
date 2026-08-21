import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex min-w-0 items-center gap-2 sm:gap-2.5"
      aria-label="Biashara Manager home"
    >
      {/* Logo icon */}
      <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-primary/10 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md sm:h-11 sm:w-11 sm:rounded-xl">
        <Image
          src="/logo.jfif"
          alt="Biashara Manager"
          width={44}
          height={44}
          className="h-full w-full object-cover"
          priority
        />
      </div>

      {/* Logo text */}
      <div className="min-w-0 leading-none">
        <span className="block truncate text-[14px] font-extrabold tracking-tight text-foreground sm:text-base">
          Biashara
        </span>

        <span className="mt-0.5 block text-[8px] font-semibold tracking-[0.15em] text-primary sm:mt-1 sm:text-[11px] sm:tracking-[0.18em]">
          MANAGER
        </span>
      </div>
    </Link>
  );
}