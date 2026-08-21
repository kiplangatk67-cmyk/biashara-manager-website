import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://biashara-manager-website.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Biashara Manager | Manage Smarter. Grow Faster.",
    template: "%s | Biashara Manager",
  },

  description:
    "Biashara Manager helps small and growing businesses manage sales, products, inventory, customers, expenses, credit, receipts, and business performance in one place.",

  keywords: [
    "Biashara Manager",
    "business management app",
    "business management software",
    "sales management",
    "inventory management",
    "stock management",
    "customer management",
    "expense tracking",
    "credit management",
    "business reports",
    "Kenya business app",
    "small business app Kenya",
  ],

  authors: [
    {
      name: "Biashara Manager",
    },
  ],

  creator: "Biashara Manager",
  publisher: "Biashara Manager",

  applicationName: "Biashara Manager",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "26RCmuqo_XeZdXBsKGaZlMtRo0dkW7CW0AahWqCLfWM",
  },

  icons: {
    icon: [
      {
        url: "/icons/icon/icon.png",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/icons/apple/apple-icon.png",
        type: "image/png",
      },
    ],
  },

  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Biashara Manager",
    title: "Biashara Manager | Manage Smarter. Grow Faster.",
    description:
      "Manage sales, products, inventory, customers, expenses, credit, receipts, and business performance in one place.",
    locale: "en_KE",
    images: [
      {
        url: "/logo/logo.png",
        width: 1200,
        height: 630,
        alt: "Biashara Manager",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Biashara Manager | Manage Smarter. Grow Faster.",
    description:
      "Simple business management tools for sales, inventory, customers, expenses, and business performance.",
    images: ["/logo/logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563EB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full w-full overflow-x-hidden bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}