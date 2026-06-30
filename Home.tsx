import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhyChooseUs from '@/components/WhyChooseUs';
import PropertyShowcase from '@/components/PropertyShowcase';
import LeadCaptureForm from '@/components/LeadCaptureForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <WhyChooseUs />
        <PropertyShowcase />
        <LeadCaptureForm />
      </main>
      <Footer />
    </div>
  );
}
