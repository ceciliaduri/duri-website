import React from 'react';
import Image from 'next/image';
import { DollarSign, Handshake, Settings } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const AboutSection: React.FC = () => {
    return (
        <div className='flex p-16 flex-col gap-16'>
            <h1 className='text-6xl text-center font-normal mx-60'>
                Nosso objetivo é importar e exportar de <span className='text-red-500 font-normal'>forma simplificada</span>
            </h1>
            <div className='grid grid-cols-2'>
                <Image
                    src={'/sections/about.png'}
                    alt='Imagem de um porto'
                    width={550}
                    height={550}
                />
                <div className='flex flex-col gap-10 text-[#252525B2]'>
                    <p className='text-2xl'>
                        Formada por profissionais das áreas financeira, tributária e de comércio exterior, a <span className='font-semibold'>Duri Trading</span> vem trabalhando desde 1998 para oferecer seus serviços a empresas que necessitam executar operações de importação e exportação com <span className='text-duri-medium font-semibold'>custos e prazos otimizados.</span>
                    </p>
                    <p className='text-2xl'>Somos o elo que <span className='font-semibold'>aproxima comprador e vendedor</span> em um mercado global.</p>
                    <div>
                        <p className='text-2xl'>• Reduzindo distâncias.</p>
                        <p className='text-2xl'>• Minimizando as burocracias.</p>
                        <p className='text-2xl'>• Facilitando o acesso ao mercado internacional.</p>
                    </div>
                </div>
            </div>
            <Card className="w-full max-w-8xl shadow-lg mx-auto">
                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
                            <Settings className="w-8 h-8 text-red-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Simplificação do Processo</h3>
                        <p className="text-gray-600">
                            Ficamos responsável por otimizar e resolver todo o processo burocrático e de documentação.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
                            <DollarSign className="w-8 h-8 text-red-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Redução de Custos</h3>
                        <p className="text-gray-600">
                            Possuímos incentivos fiscais, que possibilitam a redução do ICMS devido na importação.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
                            <Handshake className="w-8 h-8 text-red-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Facilidade de Negociação</h3>
                        <p className="text-gray-600">
                            Fazemos a busca e negociação do produto que você necessita em diversos países do mundo
                        </p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default AboutSection;
