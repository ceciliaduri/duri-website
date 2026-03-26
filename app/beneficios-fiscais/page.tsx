import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import BenefitsSection from "@/components/sections/benefitsSection";

const Page = () => {
    return (
        <div>
            <div className="bg-duri-bg min-h-screen w-full overflow-x-hidden">
                <Navbar />
                <div className="bg-duri-bg flex flex-col">
                    <BenefitsSection />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Page;