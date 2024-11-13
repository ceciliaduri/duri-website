import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="bg-[#F9F9F9] h-screen w-screen">
      <Navbar />
      <div className="pt-16">
        <section id="quem-somos">...</section>
        <section id="servicos">...</section>
        <section id="beneficios-fiscais">...</section>
        <section id="consultoria-tributaria">...</section>
      </div>
      <Footer />
    </div>
  );
}
