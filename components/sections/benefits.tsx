import React from 'react';

const programs = ['Prodepe', 'PEAP II', 'TARE', 'Sist. Atacadista de Tecidos'];

const BenefitsHomeSection: React.FC = () => {
    return (
        <section id="beneficios" className="py-16 md:py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

                {/* Header */}
                <div className="max-w-3xl mb-12 md:mb-14">
                    <p className="text-duri-light font-medium text-sm uppercase tracking-[0.15em] mb-4">
                        Benefícios fiscais
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1] mb-6">
                        Sua trading negocia preço.<br />
                        Nós reduzimos imposto.
                    </h2>
                    <p className="text-lg md:text-xl text-gray-900 font-medium">
                        Sua trading não tem interesse em te mostrar isso.
                    </p>
                </div>

                {/* Bloco escuro */}
                <div className="bg-gray-900 rounded-2xl p-8 md:p-12 mb-12">

                    {/* Comparativo — R$5mil inline pequeno, R$50mil destaque */}
                    <div className="mb-8">
                        <div className="flex items-baseline gap-3 mb-6">
                            <span className="text-white/30 text-sm">Sua trading &ldquo;economiza&rdquo;</span>
                            <span className="text-white/30 text-2xl font-bold">R$ 5 mil</span>
                            <span className="text-white/20 text-sm">na margem do fornecedor</span>
                        </div>

                        <div>
                            <p className="text-sm text-gray-400 mb-2">O que você perde sem saber</p>
                            <p className="text-5xl md:text-6xl font-bold text-duri-light mb-2">R$ 50 mil+</p>
                            <p className="text-sm text-gray-400">Em incentivos fiscais que ninguém te apresentou</p>
                        </div>
                    </div>

                    {/* Separador */}
                    <div className="border-t border-white/10 mb-8"></div>

                    {/* Programas inline */}
                    <div>
                        <p className="text-sm text-gray-400 mb-4">Esses são os programas que ninguém te apresentou:</p>
                        <div className="flex flex-wrap gap-3">
                            {programs.map((program) => (
                                <span
                                    key={program}
                                    className="bg-white/10 text-white font-medium text-sm px-5 py-2.5 rounded-full border border-white/10"
                                >
                                    {program}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <a
                        href="#contato"
                        className="inline-block bg-duri-light hover:bg-duri-dark text-white font-semibold px-10 py-4 rounded-full text-base transition-all duration-300"
                    >
                        Ver quanto estou perdendo
                    </a>
                </div>

            </div>
        </section>
    );
};

export default BenefitsHomeSection;
