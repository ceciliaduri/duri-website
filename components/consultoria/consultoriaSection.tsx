import React from 'react';
import Image from 'next/image';

const ConsultoriaSection: React.FC = () => {
    return (
        <section className='flex flex-col py-16 px-40 gap-16'>
            <div className='flex flex-col gap-16'>
                <p className='text-xl text-[#252525B2] text-justify'>A legislação tributária é complexa, repleta de detalhamentos e com frequentes mudanças, mas somos uma organização <span className='font-bold'>especializada em legislação aduaneira e tributária</span>.

                </p>
                <p className='text-xl text-[#252525B2] text-justify'>
                    Composta por uma equipe altamente capacitada para prestar serviços específicos que envolvem essas duas áreas, buscando sempre a<span className='font-bold text-duri-medium'> maior redução possível do custo tributário</span>. Além disso, as análises são formuladas levando em consideração tanto o processo de importação quanto a etapa seguinte de faturamento dos clientes.
                </p>
            </div>
            <div className='flex flex-col gap-16'>
                <div className='flex justify-between gap-16'>
                    <Image
                        src="/consultoria/consultoria1.png"
                        alt="Imagem de uma calculadora"
                        width={350}
                        height={350}
                    />
                    <div className='flex flex-col gap-4 text-justify'>
                        <h2 className='text-2xl text-duri-medium font-bold'>
                            Soluções e Planejamentos Tributários no Âmbito do Comércio Exterior
                        </h2>
                        <p className='text-xl text-[#252525B2]'>
                            Realizamos consultorias para planejar e trazer soluções, focando na  <span className='font-bold'>redução da carga tributária</span>. A análise é feita levando em consideração um <span className='font-bold'>estudo profundo</span> do produto alvo da operação, tributos federais, tributos estaduais, tipo de atividades principal e secundária, o regime tributário, necessidade de saldo credor, entre outros fatores.

                        </p>
                    </div>
                </div>
                <div className='flex justify-between gap-16'>
                    <div className='flex flex-col gap-4 text-justify'>
                        <h2 className='text-2xl text-duri-medium font-bold text-end'>
                            Restituição Tributária
                        </h2>
                        <p className='text-xl text-[#252525B2]'>
                            No comércio exterior, existem muitas possibilidades de <span className='font-bold'>restituição do pagamento de tributos</span>, seja por alguma legislação que desobriga, integralmente ou parcialmente, a tributação para determinado produto, reclassificação tarifária, perdimento, entre outros.
                        </p>
                        <p className='text-xl text-[#252525B2]'>
                            Oferecemos o serviço de recuperação desses tributos pagos indevidamente, através de um processo administrativo, <span className='font-bold'>seguro, transparente</span> e focado em <span className='font-bold'>trazer de volta valores</span> que pertencem à sua empresa.
                        </p>
                    </div>
                    <Image
                        src="/consultoria/consultoria2.png"
                        alt="Imagem de uma calculadora"
                        width={300}
                        height={300}
                    />
                </div>
                <div className='flex justify-between gap-16'>
                    <Image
                        src="/consultoria/consultoria3.png"
                        alt="Imagem de uma calculadora"
                        width={400}
                        height={400}
                    />
                    <div className='flex flex-col gap-4 text-justify'>
                        <h2 className='text-2xl text-duri-medium font-bold'>
                            Credenciamento e Consultoria Envolvendo Benefícios Fiscais
                        </h2>
                        <p className='text-xl text-[#252525B2]'>
                            Realizamos todo o <span className='font-bold'>estudo para credenciamento</span> em determinado benefício fiscal, indicando as <span className='font-bold'>melhores práticas</span> para aproveitar incentivos tributários sem riscos financeiros.
                        </p>
                        <p className='text-xl text-[#252525B2]'>
                            Bem como, no caso da empresa já ser credenciada, apresentamos <span className='font-bold'>relatórios e orientações práticas</span>, garantindo que a operação esteja dentro das normas contábil, fiscal e tributária.
                        </p>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center gap-8'>
                <h1 className='text-3xl text-center font-normal'>Transforme a complexidade tributária em <br /><span className='text-duri-medium'>economia</span> real e operações <br /><span className='text-duri-medium'>mais eficientes</span></h1>
                <button className="bg-duri-light rounded-full p-1 px-8 font-bold text-white hover:bg-duri-dark">
                    Saiba Mais
                </button>
            </div>
        </section>
    );
};

export default ConsultoriaSection;