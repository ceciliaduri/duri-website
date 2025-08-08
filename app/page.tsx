import HeroSection from "@/components/sections/hero";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AboutSection from "@/components/sections/about";
import ServicesSection from "@/components/sections/services";
import MethodSection from "@/components/sections/method";

export default function Home() {
  return (
    <div className="bg-[#F9F9F9] min-h-screen w-screen">
      <Navbar />
      <div className="bg-[#F9F9F9] flex flex-col">
        <section id="home"><HeroSection /></section>
        <section id="quem-somos"><AboutSection /></section>
        <section id="servicos"><ServicesSection /></section>
        <section id="metodo"><MethodSection /></section>
      </div>
      <Footer />
    </div>
  );
}