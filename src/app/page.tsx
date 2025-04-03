import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import PortfolioSection from "@/components/portfolio-section";
import ResumeSection from "@/components/resume-section";
import TestimonialSection from "@/components/testimonial-section";
import ClientsSection from "@/components/clients-section";
import PricingSection from "@/components/pricing-section";
import BlogSection from "@/components/blog-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ResumeSection />
      {/* <TestimonialSection /> */}
      {/* <ClientsSection /> */}
      {/* <PricingSection /> */}
     
      <ContactSection />
      <Footer />
    </main>
  );
}
