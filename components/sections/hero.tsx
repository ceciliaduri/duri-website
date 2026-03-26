import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <div className="relative w-full min-h-screen h-[100svh] overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                poster="/hero-poster.jpg"
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="video.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/65"></div>

            <div className="relative z-10 flex flex-col items-center justify-center text-white text-center px-6 h-full max-w-4xl mx-auto">
                <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/60 mb-12 font-medium">
                    Consultoria em Comércio Exterior · Desde 1998
                </p>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-8">
                    Até 60% dos seus custos de importação são evitáveis
                </h1>

                <p className="text-lg md:text-xl text-white/80 max-w-2xl mb-14 leading-relaxed">
                    Identificamos 7 vertentes de economia que sua trading não analisa
                    e transformamos em dinheiro de volta para sua operação.
                </p>

                <a href="#contato" className="inline-block bg-duri-light hover:bg-duri-dark text-white px-8 md:px-10 py-4 rounded-full font-semibold text-base md:text-lg transition-all duration-300">
                    Receber diagnóstico gratuito
                </a>
                <p className="text-white/50 text-xs mt-5 tracking-wide">
                    Sem compromisso · Resposta em 24h
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
