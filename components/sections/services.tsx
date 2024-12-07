import React from 'react';
import Image from 'next/image';
import AccordionGroup from '../support/accordionGroup';
const services = [
    {
        icon: "/icons/navio.svg",
        title: "Assessoria em Comércio Exterior",
        content: "Garantimos suporte completo para suas operações de comércio exterior, desde o contato com exportadores para fechar pedidos de compra até a simulação de custos de importação e exportação.",
        hasButton: false
    },
    {
        icon: "/icons/troca.svg",
        title: "Importação por Conta e Ordem de Terceiros",
        content: "Oferecemos um serviço completo para empresas que desejam importar produtos sem lidar diretamente com as complexidades do processo. Atuamos conforme a Instrução Normativa nº 1861/2018 da Receita Federal, cuidando da análise tributária, logística, documentação, liberação alfandegária e entrega da mercadoria. Tudo com agilidade, transparência e segurança.",
        hasButton: false
    },
    {
        icon: "/icons/certificado.svg",
        title: "Consultoria Tributária",
        content: "Descomplicamos a legislação tributária para sua empresa. Realizamos análises detalhadas do tratamento tributário e administrativo dos produtos com base no NCM/SH, otimizando sua carga fiscal e garantindo operações alinhadas às normas legais e administrativas.",
        hasButton: true
    },
    {
        icon: "/icons/porcentagem.svg",
        title: "Benefícios Fiscais",
        content: "Analisamos os dados da sua empresa e operações para identificar e aplicar os melhores benefícios fiscais disponíveis, como PRODEPE, PEAP 1, entre outros. Com isso, reduzimos custos de forma estratégica, assegurando total conformidade legal e aumentando sua competitividade no mercado.",
        hasButton: true
    },
    {
        icon: "/icons/sistema.svg",
        title: "Habilitação no Siscomex e Revisão de Estimativas",
        content: "Para operar no comércio exterior, sua empresa precisa estar habilitada no Radar da Receita Federal. Cuidamos de todo o processo de habilitação no Siscomex e revisamos as estimativas de limite para importação, garantindo que você possa importar e exportar com segurança e tranquilidade.",
        hasButton: false
    },
    {
        icon: "/icons/mundo.svg",
        title: "Exportação por Conta e Ordem de Terceiros",
        content: "Regulamentada pela IN nº 1702/2017, essa operação permite que empresas terceirizem toda a cadeia logística de exportação, mantendo o foco no seu core business. Como responsáveis pela operação, asseguramos que o processo seja realizado com transparência e dentro do prazo legal de 30 dias, tudo ajustado em contrato.",
        hasButton: false
    },
    {
        icon: "/icons/importacao.svg",
        title: "Importação por Encomenda",
        content: "Regulamentada pela IN nº 1861/2018, essa operação permite que a importadora adquira mercadorias no exterior, realize o despacho aduaneiro e as revenda ao contratante. Oferecemos uma solução completa, assegurando que sua empresa aproveite os benefícios fiscais e operacionais dessa modalidade, com toda a segurança jurídica necessária.",
        hasButton: false
    },
    {
        icon: "/icons/vendas.svg",
        title: "Produtos Próprios",
        content: "Possuímos diversos produtos próprios para venda. xxxxxxxxxxxxxxxxxxxxx",
        hasButton: false
    }
];

const ServicesSection: React.FC = () => {
    return (
        <div className='flex flex-col items-center'>
            <div className="relative w-screen h-[60vh] overflow-x-hidden">
                <Image
                    src="/sections/services.png"
                    alt="Imagem de um porto"
                    fill
                    className="object-cover w-full h-full max-w-none"
                    priority
                />
                <div className="absolute inset-0 bg-[#5C0508A6] bg-opacity-65"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 w02">
                    <h1 className="text-6xl">Nossos Serviços</h1>
                    <h2 className="text-4xl mt-2">Proporcionamos redução de custos,<br /> alta qualidade e eficiência</h2>
                </div>
            </div>
            <AccordionGroup services={services} />
        </div>
    );
};

export default ServicesSection;

