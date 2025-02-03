import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <div className="relative w-screen h-[70vh] overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="video.mp4" type="video/mp4" />
                Seu navegador não suporta o elemento de vídeo.
            </video>
            <div className="absolute inset-0 bg-[#5C0508A6] bg-opacity-65"></div>
            <div className="absolute inset-0 flex flex-col items-start justify-center text-white text-left mt-20 pl-40 px-4 w-2/3">
                <h1 className="text-3xl font-bold">Excelência e Confiabilidade em Comércio Exterior</h1>
                <h2 className="text-xl mt-2">Soluções completas da origem ao destino</h2>
            </div>
        </div>
    );
};

export default HeroSection;
