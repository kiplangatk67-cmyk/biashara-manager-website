import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Biashara Manager home"
      className="group inline-flex min-w-0 items-center gap-2 sm:gap-2.5"
    >
      {/* =========================
          LOGO MARK
      ========================== */}
      <div className="relative flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white transition-all duration-300 group-hover:-translate-y-0.5 sm:h-10 sm:w-10 sm:rounded-[13px]">
        <Image
          src="/logo.jfif"
          alt="Biashara Manager logo"
          width={40}
          height={40}
          priority
          className="h-full w-full object-contain p-1"
        />
      </div>

      {/* =========================
          BRAND NAME
      ========================== */}
      <div className="min-w-0 leading-none">
        <span className="block truncate text-[14px] font-extrabold tracking-[-0.02em] text-foreground sm:text-[16px]">
          Biashara
        </span>

        <span className="mt-1 block text-[7px] font-bold tracking-[0.2em] text-primary sm:text-[9px] sm:tracking-[0.22em]">
          MANAGER
        </span>
      </div>
    </Link>
  );
}