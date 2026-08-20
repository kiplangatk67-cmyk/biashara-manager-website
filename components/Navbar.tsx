"use client";

import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

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
      <div className="mx-auto flex h-[68px] w-full max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="min-w-0">
          <Logo />
        </div>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-6 md:flex lg:gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="rounded-lg px-2 py-2 text-sm font-medium text-muted transition hover:text-primary"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-2 md:flex lg:gap-3">
          <Link
            href="/contact"
            className="rounded-xl px-3 py-2.5 text-sm font-semibold text-foreground transition hover:bg-surface sm:px-4"
          >
            Contact
          </Link>

          <Link
            href="#download"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/15 transition hover:bg-primary-dark sm:px-5"
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
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-white text-foreground shadow-sm transition active:scale-95 md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute left-0 right-0 top-[68px] max-h-[calc(100vh-68px)] overflow-y-auto border-t border-border bg-background px-4 pb-6 pt-3 shadow-2xl sm:top-20 sm:px-6 md:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-12 items-center rounded-xl px-4 py-3 text-sm font-medium text-muted transition active:bg-surface hover:bg-surface hover:text-primary"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 flex min-h-12 items-center rounded-xl px-4 py-3 text-sm font-semibold text-foreground transition active:bg-surface hover:bg-surface"
            >
              Contact
            </Link>

            <Link
              href="#download"
              onClick={() => setOpen(false)}
              className="mt-2 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition active:scale-[0.98] hover:bg-primary-dark"
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