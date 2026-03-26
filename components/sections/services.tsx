import React from 'react';
import Image from 'next/image';
import { BarChart3, Clock, Ship, Activity } from 'lucide-react';

const ServicesSection: React.FC = () => {
    return (
        <section id="servicos" className="py-24 md:py-32 bg-duri-bg">
            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-10">

                {/* Dashboard + Header */}
                <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-center">
                    <div>
                        <p className="text-duri-light font-medium text-sm uppercase tracking-[0.15em] mb-4">
                            Como funciona
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1] mb-8">
                            Você acompanha tudo em tempo real
                        </h2>
                        <p className="text-lg text-gray-500 leading-relaxed mb-8">
                            Cada cliente tem acesso ao nosso sistema de gestão operacional.
                            Processos, status, documentos e gráficos — tudo na palma da mão.
                        </p>

                        <div className="space-y-4">
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <Activity className="w-4 h-4 text-duri-light" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-0.5">Follow-up em tempo real</h3>
                                    <p className="text-gray-400 text-sm">Acompanhe cada etapa da sua operação ao vivo, do embarque ao desembaraço.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <BarChart3 className="w-4 h-4 text-duri-light" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-0.5">Gráficos operacionais</h3>
                                    <p className="text-gray-400 text-sm">Top exportadores, distribuição de produtos, companhias de transporte e cronograma ETA.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <Ship className="w-4 h-4 text-duri-light" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-0.5">Operações recentes</h3>
                                    <p className="text-gray-400 text-sm">Status, navio, ETA, canal e cia de transporte de cada processo.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                                    <Clock className="w-4 h-4 text-duri-light" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900 mb-0.5">Cronograma ETA</h3>
                                    <p className="text-gray-400 text-sm">Visualização temporal de todas as operações programadas por mês.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative md:-mr-28 lg:-mr-40">
                        <Image
                            src="/mockup-sistemaduri.png"
                            alt="Dashboard Operacional Duri — sistema de acompanhamento em tempo real"
                            width={1600}
                            height={1000}
                            className="w-full h-auto max-w-none"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;
