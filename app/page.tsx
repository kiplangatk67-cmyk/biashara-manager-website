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
    <div className="min-h-screen bg-surface">
      <Navbar />

      <main id="top">
        {/* Hero */}
        <Hero />

        {/* Core features */}
        <Features />

        {/* How the app works */}
        <HowItWorks />

        {/* App preview */}
        <AppShowcase />

        {/* Real app screenshots */}
        <ScreenshotGallery />

        {/* Benefits */}
        <Benefits />

        {/* Pricing */}
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