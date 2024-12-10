import HeroSection from "@/components/sections/hero";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AboutSection from "@/components/sections/about";
import ServicesSection from "@/components/sections/services";

export default function Home() {
  return (
    <div className="bg-[#F9F9F9] h-screen w-screen">
      <Navbar />
      <div className="bg-[#F9F9F9] flex flex-col">
        <section id="home"><HeroSection /></section>
        <section id="quem-somos"><AboutSection /></section>
        <section id="servicos"><ServicesSection /></section>
      </div>
      <Footer />
    </div>
  );
}
