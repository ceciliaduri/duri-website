import React from 'react';
import { Card, CardContent } from '../ui/card';
import Image from 'next/image';
import Link from 'next/link';

const Supporters: React.FC = () => {
    return (
        <div className='flex flex-col items-center w-full gap-28 py-8'>
            <Card className="max-w-5xl shadow-2xl scale-105 p-6">
                <CardContent className="flex flex-col items-center p-12">
                    <h1 className='font-bold text-3xl mb-6'>Vantagens de Contratar a <span className='text-duri-medium'>DURI</span></h1>
                    <div className='flex flex-col gap-4 text-lg'>
                        {[
                            "Diminuição da incidência tributária.",
                            "Otimização dos custos em produtos importados.",
                            "Facilitação no gerenciamento dos pagamentos.",
                            "Estratégias eficientes para operações cambiais.",
                            "Gestão terceirizada e estratégica dos processos de COMEX."
                        ].map((text, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <Image
                                    src="/icons/duriCheck.svg"
                                    width={40}
                                    height={40}
                                    alt="Duri Check"
                                />
                                <h3>{text}</h3>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
            <div className='flex flex-col items-center align-center gap-10'>
                <h1 className='text-4xl text-center font-bold'>
                    Transformamos <span className='text-duri-medium'>Desafios <br />em Oportunidades</span> Através de <br />Soluções de Comércio Exterior
                </h1>
                <Link href={'/contato'}>
                    <button className="bg-duri-light rounded-full p-3 px-12 text-xl font-bold text-white hover:bg-duri-dark">
                        Conheça nosso Trabalho
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Supporters;
