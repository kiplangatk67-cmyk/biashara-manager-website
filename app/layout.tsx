import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "Biashara Manager | Manage Smarter. Grow Faster.",
  description:
    "Biashara Manager helps businesses manage sales, products, customers, expenses, inventory, and business performance.",
  keywords: [
    "Biashara Manager",
    "business management",
    "sales management",
    "inventory management",
    "Kenya business app",
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "26RCmuqo_XeZdXBsKGaZlMtRo0dkW7CW0AahWqCLfWM",
  },
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