import Link from "next/link";
import {
  ArrowUp,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import Logo from "./Logo";

const productLinks = [
  { name: "Features", href: "/features" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
];

const supportLinks = [
  { name: "Support", href: "/support" },
  { name: "Contact Us", href: "/contact" },
  { name: "FAQ", href: "/#faq" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

        {/* =========================
            FOOTER MAIN CONTENT
        ========================== */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.25fr] lg:gap-14">

          {/* =========================
              BRAND
          ========================== */}
          <div className="max-w-md">

            <Link
              href="/"
              className="inline-flex items-center"
              aria-label="Biashara Manager home"
            >
              <Logo />
            </Link>

            <h2 className="mt-5 text-xl font-bold tracking-tight sm:text-2xl">
              Biashara Manager
            </h2>

            <p className="mt-1 text-xs font-semibold text-primary sm:text-sm">
              Manage Smarter. Grow Faster.
            </p>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400 sm:leading-7">
              Simple business management tools designed to help you organize
              your operations, understand your numbers, and grow your business
              with confidence.
            </p>

            {/* Contact icons */}
            <div className="mt-6 flex items-center gap-3">

              <a
                href="mailto:biasharamanager@mail.com"
                aria-label="Email Biashara Manager"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-primary/30 hover:bg-primary hover:text-white"
              >
                <Mail size={17} />
              </a>

              <a
                href="https://wa.me/254765715011"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Biashara Manager"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-primary/30 hover:bg-primary hover:text-white"
              >
                <MessageCircle size={17} />
              </a>

              <a
                href="tel:+254765715011"
                aria-label="Call Biashara Manager"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-primary/30 hover:bg-primary hover:text-white"
              >
                <Phone size={17} />
              </a>

            </div>
          </div>

          {/* =========================
              PRODUCT
          ========================== */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Product
            </h3>

            <ul className="mt-5 space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================
              SUPPORT
          ========================== */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Support
            </h3>

            <ul className="mt-5 space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-primary"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* =========================
              CONTACT
          ========================== */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Get in touch
            </h3>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              Have a question or need help? Our team is here to assist you.
            </p>

            <div className="mt-5 space-y-4">

              {/* Email */}
              <a
                href="mailto:biasharamanager@mail.com"
                className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-primary"
              >
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0"
                />

                <span className="break-all">
                  biasharamanager@mail.com
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+254765715011"
                className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-primary"
              >
                <Phone
                  size={17}
                  className="shrink-0"
                />

                <span>
                  +254 765 715 011
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/254765715011"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-primary"
              >
                <MessageCircle
                  size={17}
                  className="shrink-0"
                />

                <span>
                  WhatsApp
                </span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin
                  size={17}
                  className="shrink-0"
                />

                <span>
                  Kenya
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* =========================
            FOOTER BOTTOM
        ========================== */}
        <div className="mt-12 border-t border-white/10 pt-7 sm:mt-16 sm:pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            {/* Copyright + Legal */}
            <div>
              <p className="text-xs leading-5 text-slate-500">
                © {new Date().getFullYear()} Biashara Manager. All rights
                reserved.
              </p>

              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-xs text-slate-500 transition hover:text-primary"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Back to top */}
            <a
              href="#top"
              className="group inline-flex min-h-10 items-center gap-2 self-start rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-400 transition hover:border-primary/30 hover:bg-primary hover:text-white md:self-auto"
            >
              Back to top

              <ArrowUp
                size={14}
                className="transition-transform group-hover:-translate-y-0.5"
              />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}