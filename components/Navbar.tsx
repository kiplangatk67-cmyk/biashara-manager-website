"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const links = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Support", href: "/support" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;

      if (
        menuRef.current &&
        !menuRef.current.contains(target) &&
        !buttonRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:h-[68px] sm:px-6 lg:h-[72px] lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          aria-label="Biashara Manager Home"
          className="flex shrink-0 translate-y-[25px] items-center"
        >
          <Image
            src="/logo/logo.png"
            alt="Biashara Manager"
            width={90}
            height={32}
            priority
            sizes="(max-width: 640px) 90px, (max-width: 1024px) 100px, 110px"
            className="h-4 w-auto object-contain sm:h-[18px] lg:h-5"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 md:flex lg:gap-2"
        >
          {links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-lg px-3.5 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted hover:bg-surface hover:text-primary"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex lg:gap-3">
          <Link
            href="/contact"
            className="rounded-xl px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-surface"
          >
            Contact
          </Link>

          <Link
            href="#download"
            className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-primary/15 transition-all hover:bg-primary-dark hover:shadow-lg"
          >
            Get Started

            <ArrowRight
              size={16}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={buttonRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-white text-foreground shadow-sm transition-all active:scale-95 md:hidden"
        >
          {open ? (
            <X size={20} aria-hidden="true" />
          ) : (
            <Menu size={20} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div
          ref={menuRef}
          id="mobile-navigation"
          className="absolute left-0 right-0 top-16 max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background px-5 pb-6 pt-3 shadow-xl backdrop-blur-xl sm:top-[68px] sm:max-h-[calc(100vh-4.25rem)] sm:px-6 md:hidden"
        >
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex w-full max-w-7xl flex-col"
          >
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex min-h-12 items-center rounded-xl px-4 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted hover:bg-surface hover:text-primary active:bg-surface"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              aria-current={pathname === "/contact" ? "page" : undefined}
              className={`mt-1 flex min-h-12 items-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                pathname === "/contact"
                  ? "bg-primary/10 text-primary"
                  : "text-foreground hover:bg-surface active:bg-surface"
              }`}
            >
              Contact
            </Link>

            <Link
              href="#download"
              onClick={() => setOpen(false)}
              className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary-dark active:scale-[0.98]"
            >
              Get Started

              <ArrowRight
                size={16}
                aria-hidden="true"
              />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}