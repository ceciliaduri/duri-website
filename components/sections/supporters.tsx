import React from 'react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';

const Supporters: React.FC = () => {
    return (
        <div className='flex flex-col p-16 items-center w-full gap-16'>
            <Card className="w-full max-w-8xl shadow-lg mx-auto">
                <CardContent className="flex flex-col items-center p-8">
                    <h1 className='font-bold text-2xl mb-4'>Vantagens de Contratar a <span className='text-duri-medium'>DURI</span></h1>
                    <div className='flex flex-col gap-2'>
                        <div className="flex items-center gap-2">
                            <Image
                                src="/icons/duriCheck.svg"
                                width={32}
                                height={32}
                                alt="Duri Check"
                            />
                            <h3>Diminuição da incidência tributária.</h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image
                                src="/icons/duriCheck.svg"
                                width={32}
                                height={32}
                                alt="Duri Check"
                            />
                            <h3>Otimização dos custos em produtos importados.</h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image
                                src="/icons/duriCheck.svg"
                                width={32}
                                height={32}
                                alt="Duri Check"
                            />
                            <h3>Facilitação no gerenciamento dos pagamentos.</h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image
                                src="/icons/duriCheck.svg"
                                width={32}
                                height={32}
                                alt="Duri Check"
                            />
                            <h3>Estratégias eficientes para operações cambiais.</h3>
                        </div>
                        <div className="flex items-center gap-2">
                            <Image
                                src="/icons/duriCheck.svg"
                                width={32}
                                height={32}
                                alt="Duri Check"
                            />
                            <h3>Gestão terceirizada e estratégica dos processos de COMEX.</h3>
                        </div>
                    </div>
                </CardContent>
            </Card>
            <div className='flex flex-col items-center align-center gap-8'>
                <h1 className='text-3xl text-center font-normal'>Transformamos <span className='text-duri-medium'>Desafios em Oportunidades</span> Através de <br />Soluções de Comércio Exterior</h1>
                <button className="bg-duri-light rounded-full p-1 px-8 font-bold text-white hover:bg-duri-dark">
                    Conheça nosso Trabalho
                </button>
            </div>
        </div>
    );
};

export default Supporters;