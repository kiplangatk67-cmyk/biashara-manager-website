import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex min-w-0 items-center gap-2.5 sm:gap-3"
      aria-label="Biashara Manager home"
    >
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md sm:h-11 sm:w-11">
        <Image
          src="/logo.jfif"
          alt="Biashara Manager"
          width={44}
          height={44}
          className="h-full w-full object-cover"
          priority
        />
      </div>

      <div className="min-w-0 leading-none">
        <span className="block truncate text-[15px] font-extrabold tracking-tight text-foreground sm:text-base">
          Biashara
        </span>

        <span className="mt-1 block text-[9px] font-semibold tracking-[0.16em] text-primary sm:text-[11px] sm:tracking-[0.18em]">
          MANAGER
        </span>
      </div>
    </Link>
  );
}