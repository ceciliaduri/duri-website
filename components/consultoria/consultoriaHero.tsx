import Image from 'next/image';
import React from 'react';

const ConsultoriaHero: React.FC = () => {
    return (
        <div className="relative w-screen h-[70vh] overflow-x-hidden">
            <Image
                src="/consultoria/hero.png"
                alt="Imagem de uma calculadora"
                fill
                className="object-cover w-full h-full max-w-none"
                priority
            />
            <div className="absolute inset-0 bg-[#5C0508A6] bg-opacity-65"></div>
            <div className="absolute inset-0 flex flex-col items-start justify-center text-white text-left mt-20 pl-40 px-4 w-2/3">
                <h1 className="text-3xl font-bold">Consultoria Tributária</h1>
                <h2 className="text-xl mt-2">Simplifique, Economize e Garanta <br />Conformidade</h2>
            </div>
        </div>
    );
};

export default ConsultoriaHero;