import React from 'react';
import { TrendingDown } from 'lucide-react';

const HeroSection: React.FC = () => {
    return (
        <div className="relative w-screen h-[100vh] overflow-hidden">
            {/* Video Background - MANTIDO */}
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
            
            {/* Overlay - MAIS SUTIL */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-[#5C0508]/30 to-red-900/20"></div>
            
            {/* Content Container - AJUSTES DE LAYOUT */}
            <div className="relative z-10 flex flex-col items-start justify-center text-white text-left pt-2 pl-40 px-4 w-2/3 h-full">
                
                {/* Badge de Urgência - SEM PULSE */}
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10">
                    </div>
                </div>
                
                {/* Headline Principal - MELHOR ESPAÇAMENTO */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8">
                    Como Empresas Brasileiras
                    <span className="block text-red-300 mt-3">
                        Queimam R$ 500k+ Por Ano
                    </span>
                    <span className="block text-white text-3xl md:text-4xl lg:text-5xl mt-4">
                        em Custos Desnecessários de Importação
                    </span>
                </h1>
                
                {/* Subheadline - MELHOR CONTRASTE */}
                <h2 className="text-xl md:text-2xl text-white/90 leading-relaxed mb-10 max-w-4xl backdrop-blur-sm bg-black/20 p-4 rounded-lg">
                    Descubra os custos ocultos em comércio exterior que{' '}
                    <strong className="text-yellow-300">87% das trading companies</strong>{' '}
                    não revelam e como economizar até{' '}
                    <strong className="text-green-300">60% nos custos totais</strong>{' '}
                    de importação
                </h2>
                
                {/* CTA Principal - SEM PULSE PROBLEMÁTICO */}
                <div className="flex flex-col items-start gap-6">
                    <button className="group bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-10 py-5 rounded-full font-bold text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-orange-400/50 hover:border-white/30">
                        Descobrir Quanto Estou Desperdiçando
                    </button>
                    
                    {/* Qualificação - MELHOR VISIBILIDADE */}
                    <p className="text-white/80 text-lg font-medium bg-black/30 px-4 py-2 rounded-full">
                        Para empresas com importação a partir de{' '}
                        <span className="text-yellow-300 font-bold">US$ 20mil/ano</span>
                    </p>
                </div>
                
                {/* Elementos de Urgência Visual - REPOSICIONADOS */}
                <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span>Análise Gratuita</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>Sem Compromisso</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span>Resposta em 24h</span>
                    </div>
                </div>
            </div>
            
            {/* Elemento de Scroll Hint - SIMPLIFICADO */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm font-medium">Descubra os custos ocultos</span>
                    <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;