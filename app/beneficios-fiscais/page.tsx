import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import BenefitsSection from "@/components/sections/benefitsSection";

const Page = () => {
    return (
        <div>
            <div className="bg-[#F9F9F9] min-h-screen w-full overflow-x-hidden">
                <Navbar />
                <div className="bg-[#F9F9F9] flex flex-col">
                    <BenefitsSection />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Page;