import React from 'react';
import Image from 'next/image';

const ServicesSection: React.FC = () => {
    return (
        <div className="relative w-screen h-[60vh] overflow-x-hidden">
            <Image
                src="/sections/services.png"
                alt="Imagem de um porto"
                fill
                className="object-cover w-full h-full max-w-none"
                priority
            />
            <div className="absolute inset-0 bg-[#5C0508A6] bg-opacity-65"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 w02">
                <h1 className="text-6xl">Nossos Serviços</h1>
                <h2 className="text-4xl mt-2">Proporcionamos redução de custos,<br /> alta qualidade e eficiência</h2>
            </div>
        </div>
    );
};

export default ServicesSection;
