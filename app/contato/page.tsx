import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Contact from "@/components/sections/contact";

const Page = () => {
    return (
        <div className="bg-[#F9F9F9] min-h-screen w-full overflow-x-hidden">
            <Navbar />
            <div className="bg-[#F9F9F9] flex flex-col">
                <Contact />
            </div>
            <Footer />
        </div>
    );
};

export default Page;