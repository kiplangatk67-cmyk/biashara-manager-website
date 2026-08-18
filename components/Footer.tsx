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
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="inline-flex">
  <Logo />
</div>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Simple business management tools designed to help you organize
              your operations, understand your numbers, and grow with
              confidence.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <Link
                href="mailto:skylineglobalfreelance@gmail.com"
                aria-label="Email Biashara Manager"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-primary/30 hover:bg-primary hover:text-white"
              >
                <Mail size={17} />
              </Link>

              <Link
                href="https://wa.me/254765715011"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp Biashara Manager"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-primary/30 hover:bg-primary hover:text-white"
              >
                <MessageCircle size={17} />
              </Link>

              <Link
                href="tel:+254765715011"
                aria-label="Call Biashara Manager"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-400 transition hover:border-primary/30 hover:bg-primary hover:text-white"
              >
                <Phone size={17} />
              </Link>
            </div>
          </div>

          {/* Product */}
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

          {/* Support */}
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

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white">
              Get in touch
            </h3>

            <p className="mt-5 text-sm leading-6 text-slate-400">
              Have a question or need help? Contact us and we'll be happy to
              assist you.
            </p>

            <div className="mt-5 space-y-4">
              <a
                href="mailto:skylineglobalfreelance@gmail.com"
                className="flex items-start gap-3 text-sm text-slate-400 transition hover:text-primary"
              >
                <Mail size={17} className="mt-0.5 shrink-0" />
                <span className="break-all">
                  skylineglobalfreelance@gmail.com
                </span>
              </a>

              <a
                href="tel:+254765715011"
                className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-primary"
              >
                <Phone size={17} className="shrink-0" />
                +254 765 715 011
              </a>

              <a
                href="https://wa.me/254765715011"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-primary"
              >
                <MessageCircle size={17} className="shrink-0" />
                WhatsApp
              </a>

              <div className="flex items-center gap-3 text-sm text-slate-400">
                <MapPin size={17} className="shrink-0" />
                Kenya
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-xs text-slate-500">
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

          <a
            href="#top"
            className="group inline-flex items-center gap-2 self-start rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-semibold text-slate-400 transition hover:bg-primary hover:text-white md:self-auto"
          >
            Back to top
            <ArrowUp
              size={14}
              className="transition-transform group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}