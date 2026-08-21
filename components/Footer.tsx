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
    <footer className="border-t border-border bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

        {/* =========================
            MAIN FOOTER
        ========================== */}
        <div className="grid gap-9 sm:gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">

          {/* =========================
              BRAND
          ========================== */}
          <div>
            {/* Logo */}
            <div className="inline-flex">
              <Logo />
            </div>

            {/* Clearly visible brand name */}
            <div className="mt-4">
              <p className="text-lg font-bold tracking-tight text-white sm:text-xl">
                Biashara Manager
              </p>

              <p className="mt-1 text-xs font-medium text-primary sm:text-sm">
                Manage Smarter. Grow Faster.
              </p>
            </div>

            <p className="mt-4 max-w-sm text-[13px] leading-5 text-slate-400 sm:mt-5 sm:text-sm sm:leading-7">
              Simple business management tools designed to help you organize
              your operations, understand your numbers, and grow with
              confidence.
            </p>

            {/* Social/contact buttons */}
            <div className="mt-5 flex items-center gap-2.5 sm:mt-6 sm:gap-3">

              {/* Email */}
              <a
                href="mailto:biasharamanager@gmail.com"
                aria-label="Email Biashara Manager"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-primary/30 hover:bg-primary hover:text-white sm:h-10 sm:w-10 sm:rounded-xl"
              >
                <Mail size={16} className="sm:h-[17px] sm:w-[17px]" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/254765715011"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Biashara Manager"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-primary/30 hover:bg-primary hover:text-white sm:h-10 sm:w-10 sm:rounded-xl"
              >
                <MessageCircle
                  size={16}
                  className="sm:h-[17px] sm:w-[17px]"
                />
              </a>

              {/* Phone */}
              <a
                href="tel:+254765715011"
                aria-label="Call Biashara Manager"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-400 transition hover:border-primary/30 hover:bg-primary hover:text-white sm:h-10 sm:w-10 sm:rounded-xl"
              >
                <Phone size={16} className="sm:h-[17px] sm:w-[17px]" />
              </a>
            </div>
          </div>

          {/* =========================
              PRODUCT
          ========================== */}
          <div>
            <h3 className="text-[13px] font-bold text-white sm:text-sm">
              Product
            </h3>

            <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-slate-400 transition hover:text-primary sm:text-sm"
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
            <h3 className="text-[13px] font-bold text-white sm:text-sm">
              Support
            </h3>

            <ul className="mt-4 space-y-2.5 sm:mt-5 sm:space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-slate-400 transition hover:text-primary sm:text-sm"
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
            <h3 className="text-[13px] font-bold text-white sm:text-sm">
              Get in touch
            </h3>

            <p className="mt-4 text-[13px] leading-5 text-slate-400 sm:mt-5 sm:text-sm sm:leading-6">
              Have a question or need help? Contact us and we'll be happy to
              assist you.
            </p>

            <div className="mt-4 space-y-3 sm:mt-5 sm:space-y-4">

              {/* Email */}
              <a
                href="mailto:biasharamanager@gmail.com"
                className="flex items-start gap-2.5 text-[13px] text-slate-400 transition hover:text-primary sm:gap-3 sm:text-sm"
              >
                <Mail
                  size={16}
                  className="mt-0.5 shrink-0 sm:h-[17px] sm:w-[17px]"
                />

                <span className="break-all">
                  biasharamanager@gmail.com
                </span>
              </a>

              {/* Phone */}
              <a
                href="tel:+254765715011"
                className="flex items-center gap-2.5 text-[13px] text-slate-400 transition hover:text-primary sm:gap-3 sm:text-sm"
              >
                <Phone
                  size={16}
                  className="shrink-0 sm:h-[17px] sm:w-[17px]"
                />

                <span>+254 765 715 011</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/254765715011"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-[13px] text-slate-400 transition hover:text-primary sm:gap-3 sm:text-sm"
              >
                <MessageCircle
                  size={16}
                  className="shrink-0 sm:h-[17px] sm:w-[17px]"
                />

                <span>WhatsApp</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-2.5 text-[13px] text-slate-400 sm:gap-3 sm:text-sm">
                <MapPin
                  size={16}
                  className="shrink-0 sm:h-[17px] sm:w-[17px]"
                />

                <span>Kenya</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            BOTTOM
        ========================== */}
        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-6 sm:mt-14 sm:gap-6 sm:pt-7 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-[10px] leading-4 text-slate-500 sm:text-xs">
              © {new Date().getFullYear()} Biashara Manager. All rights
              reserved.
            </p>

            <div className="mt-2.5 flex flex-wrap gap-x-4 gap-y-2 sm:mt-3 sm:gap-x-5">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[10px] text-slate-500 transition hover:text-primary sm:text-xs"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Back to top */}
          <a
            href="#top"
            className="group inline-flex min-h-9 items-center gap-1.5 self-start rounded-lg border border-white/10 bg-white/5 px-3.5 py-2 text-[11px] font-semibold text-slate-400 transition hover:bg-primary hover:text-white sm:min-h-10 sm:gap-2 sm:rounded-xl sm:px-4 sm:py-2.5 sm:text-xs md:self-auto"
          >
            Back to top

            <ArrowUp
              size={13}
              className="transition-transform group-hover:-translate-y-0.5 sm:h-[14px] sm:w-[14px]"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}