import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AppShowcase from "@/components/AppShowcase";
import ScreenshotGallery from "@/components/ScreenshotGallery";
import Benefits from "@/components/Benefits";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-surface">
      <Navbar />

      <main id="top">
        {/* Main introduction */}
        <Hero />

        {/* What Biashara Manager can do */}
        <Features />

        {/* How it works */}
        <HowItWorks />

        {/* App overview */}
        <AppShowcase />

        {/* Real app screens */}
        <ScreenshotGallery />

        {/* Why choose Biashara Manager */}
        <Benefits />

        {/* Subscription plans */}
        <Pricing />

        {/* Frequently asked questions */}
        <FAQ />

        {/* Final call to action */}
        <CTA />
      </main>

      <Footer />
    </div>
  );
}