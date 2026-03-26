import HeroSection from "@/components/sections/hero";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AboutSection from "@/components/sections/about";
import ServicesSection from "@/components/sections/services";
import BenefitsHomeSection from "@/components/sections/benefits";
import ConsultoriaHomeSection from "@/components/sections/consultoria";
import MethodSection from "@/components/sections/method";
import WhatsAppButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <div className="bg-duri-bg min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <div className="bg-duri-bg flex flex-col">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <BenefitsHomeSection />
        <ConsultoriaHomeSection />
        <MethodSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}