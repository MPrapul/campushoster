import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { PortalShowcase } from './components/PortalShowcase';
import { DemoSection } from './components/DemoSection';
import { ValueStats } from './components/ValueStats';
import { Testimonials } from './components/Testimonials';
import { PricingSection } from './components/PricingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function MarketingPage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <PortalShowcase />
      <DemoSection />
      <ValueStats />
      <Testimonials />
      <PricingSection />
      <ContactSection />
      <Footer />
    </main>
  );
} 