import React from 'react';
import Image from 'next/image';
import { DollarSign, Handshake, Settings } from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const AboutSection: React.FC = () => {
    return (
        <div className='flex p-16 flex-col gap-16'>
            <h1 className='text-3xl text-center'>
                Nosso objetivo é importar e exportar de <span className='text-red-500'><br />forma simplificada</span>
            </h1>
            <div className='grid grid-cols-2'>
                <Image
                    src={'/sections/about.png'}
                    alt='Imagem de um porto'
                    width={450}
                    height={450}
                />
                <div className='flex flex-col gap-10 text-[#252525B2]'>
                    <p className='text-xl'>
                        Formada por profissionais das áreas financeira, tributária e de comércio exterior, a <span className='font-semibold'>Duri Trading</span> vem trabalhando desde 1998 para oferecer seus serviços a empresas que necessitam executar operações de importação e exportação com <span className='text-duri-medium font-semibold'>custos e prazos otimizados.</span>
                    </p>
                    <p className='text-xl'>Somos o elo que <span className='font-semibold'>aproxima comprador e vendedor</span> em um mercado global.</p>
                    <div>
                        <p className='text-xl'>• Reduzindo distâncias.</p>
                        <p className='text-xl'>• Minimizando as burocracias.</p>
                        <p className='text-xl'>• Facilitando o acesso ao mercado internacional.</p>
                    </div>
                </div>
            </div>
            <Card className="w-full max-w-8xl shadow-lg mx-auto">
                <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
                            <Settings className="w-8 h-8 text-duri-dark" />
                        </div>
                        <h3 className="text-xl mb-2">Simplificação do Processo</h3>
                        <p className="text-gray-600 2/3">
                            Ficamos responsáveis por otimizar e resolver todo o processo burocrático e de documentação.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
                            <DollarSign className="w-8 h-8 text-duri-dark" />
                        </div>
                        <h3 className="text-xl mb-2">Redução de Custos</h3>
                        <p className="text-gray-600 2/3">
                            Possuímos incentivos fiscais, que possibilitam a redução do ICMS devido na importação.
                        </p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
                            <Handshake className="w-8 h-8 text-duri-dark" />
                        </div>
                        <h3 className="text-xl mb-2">Facilidade de Negociação</h3>
                        <p className="text-gray-600 2/3">
                            Fazemos a busca e negociação do produto que você necessita em diversos países do mundo
                        </p>
                    </div>
                </CardContent>
            </Card>
            <Card
                style={{
                    backgroundImage: 'url(/comex/comexBackground.png)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
                className="w-full max-w-8xl shadow-lg mx-auto"
            >
                <CardContent className="p-8 flex items-center justify-around text-white">
                    <div className="text-4xl">
                        Eleita Duas Vezes a Trading <span className='font-bold'>Mais <br />
                            Recomendada</span> de Pernambuco
                    </div>
                    <Image
                        src={'/comex/comexLogo.png'}
                        alt="Logomarca Comex Pernambuco"
                        width={340}
                        height={160}
                    />
                </CardContent>
            </Card>
            <div className='flex justify-around'>
                <div className='flex items-center flex-col gap-1'>
                    <Image
                        src={'/comex/comex1.png'}
                        alt='Destaques Comex 2023'
                        width={450}
                        height={450}
                    />
                    <p>Destaques COMEX 2023</p>
                </div>
                <div className='flex items-center flex-col gap-1'>
                    <Image
                        src={'/comex/comex2.png'}
                        alt='Destaques Comex 2024'
                        width={450}
                        height={450}
                    />
                    <p>Destaques COMEX 2024</p>
                </div>

            </div>
        </div>
    );
};

export default AboutSection;
