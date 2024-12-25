import ConsultoriaHero from "@/components/consultoria/consultoriaHero";
import ConsultoriaSection from "@/components/consultoria/consultoriaSection";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const Page = () => {
    return (
        <div>
            <div className="bg-[#F9F9F9] h-screen w-screen">
                <Navbar />
                <div className="bg-[#F9F9F9] flex flex-col">
                    <ConsultoriaHero />
                    <ConsultoriaSection />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Page;