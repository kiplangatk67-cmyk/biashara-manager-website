import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Biashara Manager home"
      className="group inline-flex min-w-0 items-center gap-0.5 sm:gap-1"
    >
      {/* Logo Mark */}
      <div className="relative flex h-[8px] w-[8px] shrink-0 items-center justify-center overflow-hidden rounded-[2px] bg-white transition-all duration-300 group-hover:-translate-y-0.5 sm:h-[9px] sm:w-[9px] sm:rounded-[2px]">
        <Image
          src="/logo/logo.png"
          alt="Biashara Manager logo"
          width={10}
          height={10}
          priority
          className="h-full w-full object-contain p-0.5"
        />
      </div>

      {/* Brand Name */}
      <div className="min-w-0 leading-none">
        <span className="block truncate text-[4px] font-extrabold tracking-[-0.02em] text-foreground sm:text-[4.5px]">
          Biashara
        </span>

        <span className="mt-0.5 block text-[2px] font-bold tracking-[0.16em] text-primary sm:text-[2.5px] sm:tracking-[0.18em]">
          MANAGER
        </span>
      </div>
    </Link>
  );
}