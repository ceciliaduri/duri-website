import HeroSection from "@/components/sections/hero";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import AboutSection from "@/components/sections/about";

export default function Home() {
  return (
    <div className="bg-[#F9F9F9] h-screen w-screen">
      <Navbar />
      <div className="bg-[#F9F9F9] flex flex-col">
        <HeroSection />
        <section id="quem-somos"><AboutSection /></section>
        <section id="servicos">...</section>
        <section id="beneficios-fiscais">...</section>
        <section id="consultoria-tributaria">...</section>
      </div>
      <Footer />
    </div>
  );
}
