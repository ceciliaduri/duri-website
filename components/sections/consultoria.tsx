import React from 'react';
import { Search, RefreshCw, FileCheck } from 'lucide-react';

const services = [
    {
        icon: Search,
        title: 'Planejamento Tributário',
        desc: 'Estudo profundo do produto, tributos federais e estaduais, regime tributário e atividades da empresa para reduzir sua carga fiscal ao mínimo legal.',
    },
    {
        icon: RefreshCw,
        title: 'Restituição Tributária',
        desc: 'Recuperação de tributos pagos indevidamente na importação. Processo administrativo seguro para trazer de volta valores que pertencem à sua empresa.',
    },
    {
        icon: FileCheck,
        title: 'Credenciamento Fiscal',
        desc: 'Estudo completo para credenciamento em benefícios fiscais, com relatórios e orientações práticas para operar dentro das normas.',
    },
];

const ConsultoriaHomeSection: React.FC = () => {
    return (
        <section id="consultoria" className="py-16 md:py-20 bg-duri-bg">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">

                {/* Header */}
                <div className="max-w-3xl mb-12 md:mb-14">
                    <p className="text-duri-light font-medium text-sm uppercase tracking-[0.15em] mb-4">
                        Consultoria tributária
                    </p>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.1] mb-6">
                        Legislação complexa.<br />
                        Economia simples.
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        Equipe especializada em legislação aduaneira e tributária focada em uma coisa:
                        <span className="text-gray-900 font-medium"> reduzir o custo da sua operação.</span>
                    </p>
                </div>

                {/* 3 pilares */}
                <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-12">
                    {services.map((service) => (
                        <div key={service.title} className="bg-white rounded-xl p-6 md:p-8">
                            <service.icon className="w-5 h-5 text-duri-light mb-4" />
                            <h3 className="font-bold text-gray-900 text-lg mb-3">
                                {service.title}
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                                {service.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                    <a
                        href="#contato"
                        className="inline-block bg-duri-light hover:bg-duri-dark text-white font-semibold px-10 py-4 rounded-full text-base transition-all duration-300"
                    >
                        Falar com um especialista
                    </a>
                </div>

            </div>
        </section>
    );
};

export default ConsultoriaHomeSection;
