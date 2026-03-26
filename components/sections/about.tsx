'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const setores = [
    { nome: 'Vestuário e Tecidos', img: '/setores/vestuario.jpg' },
    { nome: 'Alimentos', img: '/setores/alimentos.jpg' },
    { nome: 'Autopeças', img: '/setores/autopecas.jpg' },
    { nome: 'Eletrônicos', img: '/setores/eletronicos.jpg' },
    { nome: 'Químico', img: '/setores/quimico.jpg' },
    { nome: 'Máquinas', img: '/setores/maquinas.jpg' },
    { nome: 'Agro e Fertilizantes', img: '/setores/agro.jpg' },
    { nome: 'Cosméticos', img: '/setores/cosmeticos.jpg' },
    { nome: 'Saneamento', img: '/setores/saneamento.jpg' },
    { nome: 'Pneus', img: '/setores/pneus.jpg' },
    { nome: 'Aviação', img: '/setores/aviacao.jpg' },
    { nome: 'Metais e Minérios', img: '/setores/metais.jpg' },
    { nome: 'Farmacêutico', img: '/setores/farmaceutico.jpg' },
    { nome: 'Energia', img: '/setores/energia.jpg' },
    { nome: 'Plásticos', img: '/setores/plasticos.jpg' },
    { nome: 'Logística', img: '/setores/logistica.jpg' },
    { nome: 'Móveis', img: '/setores/moveis.jpg' },
];

const stats = [
    { value: 10000, label: 'containers movimentados', prefix: '+', suffix: '' },
    { value: 98, label: 'das operações em canal verde', prefix: '+', suffix: '%' },
    { value: 25, label: 'anos de mercado', prefix: '+', suffix: '' },
];

function useCountUp(target: number, duration: number, isVisible: boolean) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let startTime: number | null = null;
        let animationId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));

            if (progress < 1) {
                animationId = requestAnimationFrame(animate);
            }
        };

        animationId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationId);
    }, [target, duration, isVisible]);

    return count;
}

function formatNumber(n: number) {
    return n.toLocaleString('pt-BR');
}

function StatItem({ value, label, prefix, suffix }: { value: number; label: string; prefix: string; suffix: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    const count = useCountUp(value, 3500, isVisible);

    return (
        <div ref={ref}>
            <p className="text-4xl md:text-5xl font-bold text-duri-light mb-1">
                {prefix}{formatNumber(count)}{suffix}
            </p>
            <p className="text-base text-gray-500">{label}</p>
        </div>
    );
}

const AboutSection: React.FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        let animationId: number;
        let isPaused = false;
        let accumulated = 0;
        const speed = 0.6;

        const scroll = () => {
            if (!isPaused && container) {
                accumulated += speed;
                if (accumulated >= 1) {
                    const px = Math.floor(accumulated);
                    container.scrollLeft += px;
                    accumulated -= px;
                }
                if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
                    container.scrollLeft = 0;
                }
            }
            animationId = requestAnimationFrame(scroll);
        };

        const pause = () => { isPaused = true; };
        const resume = () => { isPaused = false; };

        container.addEventListener('mouseenter', pause);
        container.addEventListener('mouseleave', resume);
        container.addEventListener('touchstart', pause, { passive: true });
        container.addEventListener('touchend', resume);

        animationId = requestAnimationFrame(scroll);

        return () => {
            cancelAnimationFrame(animationId);
            container.removeEventListener('mouseenter', pause);
            container.removeEventListener('mouseleave', resume);
            container.removeEventListener('touchstart', pause);
            container.removeEventListener('touchend', resume);
        };
    }, []);

    return (
        <section id="quem-somos">
            <div className="pt-24 md:pt-32 pb-16 md:pb-20 px-6 md:px-12 lg:px-20 bg-white">
                <div className="max-w-7xl mx-auto">

                    <div className="grid md:grid-cols-[1fr_1fr] gap-16 md:gap-28 items-start">
                        {/* Headline — esquerda */}
                        <div>
                            <p className="text-duri-light font-medium text-sm uppercase tracking-[0.15em] mb-6">
                                Full service em comércio exterior
                            </p>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-8">
                                Do fornecedor internacional até a porta da sua empresa
                            </h2>
                            <p className="text-xl text-gray-500 leading-relaxed">
                                Você foca no seu negócio, a gente cuida do resto.
                            </p>
                        </div>

                        {/* Números — direita, empilhados */}
                        <div className="space-y-12 md:pt-4 md:pl-16 lg:pl-24">
                            {stats.map((stat) => (
                                <div key={stat.label} className="border-l-2 border-duri-light/20 pl-8">
                                    <StatItem {...stat} />
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Setores — scroll horizontal automático */}
            <div className="pb-10 md:pb-14 bg-white">
                <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 mb-16 md:mb-20">
                    <div className="border-t border-gray-100"></div>
                </div>
                <div className="mb-10 md:mb-12 px-6 md:px-12 lg:px-20">
                    <div className="max-w-7xl mx-auto text-center">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                            Atuamos com operação ponta a ponta em +40 segmentos
                        </h3>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    className="overflow-x-auto scrollbar-hide"
                >
                    <div className="flex gap-3 px-6 md:px-12 lg:px-20 pb-4" style={{ width: 'max-content' }}>
                        {setores.map((setor) => (
                            <div key={setor.nome} className="group relative w-[180px] md:w-[200px] aspect-[3/4] rounded-xl overflow-hidden flex-shrink-0">
                                <Image
                                    src={setor.img}
                                    alt={setor.nome}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
                                    <p className="text-white font-semibold text-sm">{setor.nome}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
