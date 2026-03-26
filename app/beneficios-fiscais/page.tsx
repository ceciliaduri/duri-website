import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import BenefitsHomeSection from "@/components/sections/benefits";

const Page = () => {
    return (
        <div>
            <div className="bg-duri-bg min-h-screen w-full overflow-x-hidden">
                <Navbar />
                <div className="bg-duri-bg flex flex-col">
                    <BenefitsHomeSection />
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default Page;