import { Hero } from './(marketing)/components/Hero';
import { Navbar } from './(marketing)/components/Navbar';
import { PortalShowcase } from './(marketing)/components/PortalShowcase';
import { DemoSection } from './(marketing)/components/DemoSection';
import { ValueStats } from './(marketing)/components/ValueStats';
import { Testimonials } from './(marketing)/components/Testimonials';
import { PricingSection } from './(marketing)/components/PricingSection';
import { ContactSection } from './(marketing)/components/ContactSection';
import { Footer } from './(marketing)/components/Footer';

export default function HomePage() {
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
