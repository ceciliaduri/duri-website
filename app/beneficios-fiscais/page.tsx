import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import BenefitsHero from "@/components/sections/benefitsHero";
import BenefitsSection from "@/components/sections/benefitsSection";

const Page = () => {
    return (
        <div>
            <div className="bg-[#F9F9F9] h-screen w-screen">
                <Navbar />
                <div className="bg-[#F9F9F9] flex flex-col">
                    <BenefitsHero />
                    <BenefitsSection />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Page;