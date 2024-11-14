import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
    return (
        <div className='flex p-16 flex-col gap-16'>
            <h1 className='text-[64px] text-center'>Nosso objetivo é importar e exportar de <span className='text-duri-medium'>forma simplificada</span></h1>
            <div className='grid grid-cols-2'>
                <Image
                    src={'/sections/about.png'}
                    alt='Imagem de um porto'
                    width={550}
                    height={550}
                />
                <div className='flex flex-col gap-8  text-[#252525B2]'>
                    <p className='text-2xl'> Formada por profissionais das áreas financeira, tributária e de comércio exterior, a <span className='font-semibold'>Duri Trading</span> vem trabalhando desde 1998 para oferecer seus serviços a empresas que necessitam executar operações de importação e exportação com <span className='text-duri-medium font-semibold'>custos e prazos otimizados.</span></p>
                    <p className='text-2xl'>Somos o elo que <span className='font-semibold'>aproxima comprador e vendedor</span> em um mercado global.</p>
                    <div>
                        <p className='text-2xl'>• Reduzindo distâncias.</p>
                        <p className='text-2xl'>• Minimizando as burocracias.</p>
                        <p className='text-2xl'>• Facilitando o acesso ao mercado internacional.</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AboutSection;
