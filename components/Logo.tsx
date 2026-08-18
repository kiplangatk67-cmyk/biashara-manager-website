import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3"
      aria-label="Biashara Manager home"
    >
      <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-primary/10 bg-white shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-md">
        <Image
          src="/logo.jfif"
          alt="Biashara Manager"
          width={44}
          height={44}
          className="h-full w-full object-cover"
          priority
        />
      </div>

      <div className="leading-none">
        <span className="block text-base font-extrabold tracking-tight text-foreground">
          Biashara
        </span>

        <span className="mt-1 block text-[11px] font-semibold tracking-[0.18em] text-primary">
          MANAGER
        </span>
      </div>
    </Link>
  );
}