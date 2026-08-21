"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Support", href: "/support" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/95 backdrop-blur-xl">
      {/* Main navbar */}
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:h-[72px] sm:px-6 lg:h-20 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Biashara Manager Home"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/logo/logo.png"
            alt="Biashara Manager"
            width={180}
            height={55}
            priority
            className="h-9 w-auto object-contain sm:h-10 lg:h-11"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-1 md:flex lg:gap-3">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-lg px-2.5 py-2 text-sm font-medium text-muted transition-colors hover:bg-surface hover:text-primary lg:px-3"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-2 md:flex lg:gap-3">
          <Link
            href="/contact"
            className="rounded-xl px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-surface lg:px-4 lg:py-2.5"
          >
            Contact
          </Link>

          <Link
            href="#download"
            className="group inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white shadow-md shadow-primary/15 transition-all hover:bg-primary-dark hover:shadow-lg lg:gap-2 lg:px-5 lg:py-2.5"
          >
            Get Started

            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-white text-foreground shadow-sm transition-all active:scale-95 md:hidden sm:h-10 sm:w-10 sm:rounded-xl"
        >
          {open ? (
            <X size={19} className="sm:h-5 sm:w-5" />
          ) : (
            <Menu size={19} className="sm:h-5 sm:w-5" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute left-0 right-0 top-16 border-t border-border bg-background/98 px-4 pb-5 pt-2 shadow-xl backdrop-blur-xl sm:top-[72px] sm:px-6 md:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col">
            {/* Navigation links */}
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-lg px-3 py-2.5 text-[13px] font-medium text-muted transition-colors hover:bg-surface hover:text-primary active:bg-surface sm:min-h-12 sm:px-4 sm:text-sm"
              >
                {link.name}
              </Link>
            ))}

            {/* Contact */}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-1 flex min-h-11 items-center rounded-lg px-3 py-2.5 text-[13px] font-semibold text-foreground transition-colors hover:bg-surface active:bg-surface sm:min-h-12 sm:px-4 sm:text-sm"
            >
              Contact
            </Link>

            {/* CTA */}
            <Link
              href="#download"
              onClick={() => setOpen(false)}
              className="mt-2 flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-[13px] font-semibold text-white shadow-lg shadow-primary/20 transition-all active:scale-[0.98] hover:bg-primary-dark sm:min-h-12 sm:text-sm"
            >
              Get Started
              <ArrowRight size={15} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}