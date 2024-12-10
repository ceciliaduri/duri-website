import React from 'react';
import { Card, CardContent } from '../ui/card';

const Supporters: React.FC = () => {
    return (
        <div className='flex flex-col p-16 items-center w-full gap-16'>
            <Card className="w-full max-w-8xl shadow-lg mx-auto">
                <CardContent className="flex flex-col items-center p-8">
                    <h1 className='font-bold text-4xl'>Empresas que confiam na <span className='text-duri-medium'>DURI</span></h1>
                    <h2 className='text-[#6B6B6B]'>Clientes e Parceiros</h2>
                </CardContent>
            </Card>
            <div className='flex flex-col items-center align-center gap-8'>
                <h3 className='text-5xl text-center'>Transformamos <span className='text-duri-medium'>Desafios em <br />Oportunidades</span> Através de <br />Soluções de Comércio Exterior</h3>
                <button className="bg-duri-light rounded-full p-1 px-8 font-bold text-white hover:bg-duri-dark">
                    Conheça nosso Trabalho
                </button>
            </div>
        </div>
    );
};

export default Supporters;