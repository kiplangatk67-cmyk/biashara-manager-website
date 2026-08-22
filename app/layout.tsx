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
    "Biashara Manager is a simple business management app for managing sales, products, inventory, customers, expenses, credit, receipts, and business performance in one place.",

  keywords: [
    "Biashara Manager",
    "Biashara Manager app",
    "business management app",
    "business management software",
    "small business management",
    "sales management",
    "inventory management",
    "stock management",
    "customer management",
    "expense tracking",
    "credit management",
    "business reports",
    "business app Kenya",
    "small business app Kenya",
    "Kenya business management app",
  ],

  authors: [
    {
      name: "Biashara Manager",
    },
  ],

  creator: "Biashara Manager",
  publisher: "Biashara Manager",
  applicationName: "Biashara Manager",
  category: "Business",

  alternates: {
    canonical: siteUrl,
  },

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
        alt: "Biashara Manager business management app",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Biashara Manager | Manage Smarter. Grow Faster.",
    description:
      "Simple business management tools for sales, inventory, customers, expenses, credit, receipts, and business performance.",
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
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Biashara Manager",
        url: siteUrl,
        logo: `${siteUrl}/logo/logo.png`,
        email: "biasharamanager@gmail.com",
        description:
          "Biashara Manager provides simple business management tools for sales, inventory, customers, expenses, credit, receipts, and business performance.",
      },

      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "Biashara Manager",
        description:
          "Simple business management tools for small and growing businesses.",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },

      {
        "@type": "SoftwareApplication",
        "@id": `${siteUrl}/#software`,
        name: "Biashara Manager",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Android",
        url: siteUrl,
        image: `${siteUrl}/icons/icon/icon.png`,
        description:
          "Biashara Manager helps businesses manage sales, products, inventory, customers, expenses, credit, receipts, and business performance.",
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>

      <body className="min-h-full w-full overflow-x-hidden bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}