import Image from 'next/image';
import React from 'react';
Image

const BenefitsHero: React.FC = () => {
    return (
        <div className="relative w-screen h-[90vh] overflow-x-hidden">
            <Image
                src="/sections/benefitsHero.png"
                alt="Imagem de um porto"
                fill
                className="object-cover w-full h-full max-w-none"
                priority
            />
            <div className="absolute inset-0 bg-[#5C0508A6] bg-opacity-65"></div>
            <div className="absolute inset-0 flex flex-col items-start justify-center text-white text-left mt-20 pl-40 px-4 w-2/3">
                <h1 className="text-6xl">Benefícios Fiscais</h1>
                <h2 className="text-4xl mt-2">Reduza custos e aumente sua <br />competitivdade.</h2>
            </div>
        </div>
    );
};

export default BenefitsHero;