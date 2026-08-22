import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Biashara Manager home"
      className="group inline-flex min-w-0 items-center gap-1 sm:gap-1.5"
    >
      {/* Logo Mark */}
      <div className="relative flex h-[18px] w-[18px] shrink-0 items-center justify-center overflow-hidden rounded-[5px] bg-white transition-all duration-300 group-hover:-translate-y-0.5 sm:h-5 sm:w-5 sm:rounded-md">
        <Image
          src="/logo/logo.png"
          alt="Biashara Manager logo"
          width={20}
          height={20}
          priority
          className="h-full w-full object-contain p-0.5"
        />
      </div>

      {/* Brand Name */}
      <div className="min-w-0 leading-none">
        <span className="block truncate text-[9px] font-extrabold tracking-[-0.02em] text-foreground sm:text-[10px]">
          Biashara
        </span>

        <span className="mt-0.5 block text-[4.5px] font-bold tracking-[0.18em] text-primary sm:text-[5.5px] sm:tracking-[0.2em]">
          MANAGER
        </span>
      </div>
    </Link>
  );
}