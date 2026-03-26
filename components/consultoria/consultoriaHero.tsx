import Image from 'next/image';
import React from 'react';

const ConsultoriaHero: React.FC = () => {
    return (
        <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
            <Image
                src="/consultoria/hero.png"
                alt="Imagem de uma calculadora"
                fill
                className="object-cover w-full h-full max-w-none"
                priority
            />
            <div className="absolute inset-0 bg-duri-dark/65"></div>
            <div className="absolute inset-0 flex flex-col items-start justify-center text-white text-left mt-20 px-6 md:px-16 lg:pl-40 lg:px-4 w-full lg:w-2/3">
                <h1 className="text-2xl sm:text-3xl font-bold">Consultoria Tributária</h1>
                <h2 className="text-base sm:text-xl mt-2">Simplifique, Economize e Garanta <br className="hidden sm:block" />Conformidade</h2>
            </div>
        </div>
    );
};

export default ConsultoriaHero;