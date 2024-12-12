import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
    return (
        <div className="relative w-screen h-[70vh] overflow-x-hidden">
            <Image
                src="/sections/hero.png"
                alt="Imagem de um porto"
                fill
                className="object-cover w-full h-full max-w-none"
                priority
            />
            <div className="absolute inset-0 bg-[#5C0508A6] bg-opacity-65"></div>
            <div className="absolute inset-0 flex flex-col items-start justify-center text-white text-left mt-20 pl-40 px-4 w-2/3">
                <h1 className="text-3xl">Excelência e Confiabilidade em Comercio Exterior</h1>
                <h2 className="text-xl mt-2">Soluções completas da origem ao destino</h2>
            </div>
        </div>
    );
};

export default HeroSection;
