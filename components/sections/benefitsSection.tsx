import React from 'react';
import { Card } from '../ui/card';

const BenefitsSection: React.FC = () => {
    return (
        <section className='flex flex-col py-16 px-40 gap-16'>
            <div className='flex flex-col gap-16'>
                <p className='text-xl text-[#252525B2]'>Benefícios fiscais são <span className='font-bold'>incentivos</span> concedidos pelo governo brasileiro para estimular determinados setores econômicos, atividades ou regiões do país. Eles consistem em <span className='font-bold'>reduções, isenções, compensações ou adiamentos</span> no pagamento de tributos com o objetivo principal de promover o desenvolvimento econômico e social.
                </p>
                <p className='text-xl text-[#252525B2]'>
                    Nossa equipe <span className='text-duri-light font-bold'>especializada em comércio exterior e direito tributário</span> analisa minuciosamente os dados da sua empresa e suas operações para identificar os melhores benefícios fiscais disponíveis. Trabalhamos com alguns programas estratégicos:
                </p>
            </div>
            <div className='flex justify-between gap-16'>
                <Card className='flex flex-col items-center gap-6 p-6 shadow-md'>
                    <h3 className='text-duri-medium uppercase text-2xl'>Prodepe</h3>
                    <p className='text-[#252525B2]'>O Programa de Desenvolvimento do Estado de Pernambuco é um incentivo fiscal que a Duri Trading oferece para empresas que realizam <span className='font-bold'>importações.</span> </p>
                    <p className='text-[#252525B2]'>Proporciona uma <span className='font-bold'>redução no ICMS</span> na importação de alguns produtos. Para operações dentro de Pernambuco, o ICMS, que é de 20,5%, pode ser reduzida para 12,5%. Para empresas fora do estado, o ICMS é reduzido para 2,10%. </p>
                </Card>
                <Card className='flex flex-col items-center gap-6 p-6 shadow-md'>
                    <h3 className='text-duri-medium uppercase text-2xl'>PEAP 1</h3>
                    <p className='text-[#252525B2]'>O Programa de Estímulo à Atividade Portuária permite a <span className='font-bold'>diminuição do ICMS sobre a importação</span> em três situações, dependendo do tipo de atividade ou destino do produto.</p>
                    <p className='text-[#252525B2]'>Sendo essas situações: Importação para Atacadistas ou Indústrias (quando o produto será revendido), Importação para Indústrias (quando o produto será usado como insumo) e Importação em outros casos. </p>
                </Card>
            </div>
            <div className='flex justify-between gap-16'>
                <Card className='flex flex-col items-center gap-6 p-6 shadow-md'>
                    <h3 className='text-duri-medium uppercase text-2xl'>PEAP 2</h3>
                    <p className='text-[#252525B2]'>O PEAP II, criado pela Lei nº 13.942/09, pode trazer <span className='font-bold'>grandes vantagens</span> para sua empresa.</p>
                    <p className='text-[#252525B2]'>Para aproveitar esse benefício, a exigência principal é que sua empresa tenha, como atividade principal ou secundária, o CNAE de <span className='font-bold'>atacadista</span>.</p>
                </Card>
                <Card className='flex flex-col items-center gap-6 p-6 shadow-md'>
                    <h3 className='text-duri-medium uppercase text-2xl'>TARE</h3>
                    <p className='text-[#252525B2]'>Proporciona uma diminuição no ICMS de importação, com <span className='font-bold'>única condição</span> de verificar a lista de produtos divulgada pelo Estado, pois alguns itens não podem ser incluídos.</p>
                    <p className='text-[#252525B2] self-start'>É um incentivo fiscal oferecido pelo <span className='font-bold'>estado da Paraíba.</span></p>
                </Card>
                <Card className='flex flex-col items-center gap-6 p-6 shadow-md'>
                    <h3 className='text-duri-medium uppercase text-2xl text-center'>Sistemática Atacadista de Tecidos</h3>
                    <p className='text-[#252525B2]'>A Sistemática, é um incentivo voltado para <span className='font-bold'>atacadistas do setor têxtil</span>.</p>
                    <p className='text-[#252525B2]'>Permite realizar <span className='font-bold'>planejamentos tributários estratégicos</span>, combinando outros benefícios fiscais, e resulta em queda significativa do ICMS.</p>
                </Card>
            </div>
            <div className='flex flex-col items-center gap-8'>
                <h1 className='text-3xl text-center font-normal'>Garantimos a <span className='text-duri-medium'>otimização dos seus recursos</span> com a orientação<br />dos nossos especialistas</h1>
                <button className="bg-duri-light rounded-full p-1 px-8 font-bold text-white hover:bg-duri-dark">
                    Saiba Mais
                </button>
            </div>
        </section>
    );
};

export default BenefitsSection;