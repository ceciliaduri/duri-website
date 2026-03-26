import ConsultoriaHero from "@/components/consultoria/consultoriaHero";
import ConsultoriaSection from "@/components/consultoria/consultoriaSection";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

const Page = () => {
    return (
        <div>
            <div className="bg-duri-bg min-h-screen w-full overflow-x-hidden">
                <Navbar />
                <div className="bg-duri-bg flex flex-col">
                    <ConsultoriaHero />
                    <ConsultoriaSection />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Page;