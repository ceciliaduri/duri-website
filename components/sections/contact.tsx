'use client';
import React from 'react';
import { Card, CardContent } from '../ui/card';
import Image from "next/image";
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';
import { BriefcaseBusiness, File, DollarSign } from 'lucide-react';


const Contact: React.FC = () => {
    return (
        <div className='flex flex-col items-center mt-16 gap-16 p-16'>
            <div className='flex flex-col gap-16'>
                <h1 className='text-3xl text-center font-normal'>
                    Somos seu Parceiro para Soluções <span className='text-duri-light'>Estratégicas e Integradas</span> <br />em Comércio Exterior
                </h1>
                <div className='flex items-center gap-16 w-full'>
                    <Card className='p-4 w-1/2'>
                        <CardContent>
                            <form className="flex flex-col gap-4">
                                <h3 className='text-duri-medium text-xl'>
                                    Preencha os campos que entraremos em contato!
                                </h3>
                                <div>
                                    <Label htmlFor="name">Nome Completo *</Label>
                                    <Input id="name" className='border-[#777E90]' />
                                </div>
                                <div>
                                    <Label htmlFor="company">Nome da Empresa</Label>
                                    <Input id="company" className='border-[#777E90]' />
                                </div>
                                <div>
                                    <Label htmlFor="phone">Telefone *</Label>
                                    <Input id="phone" className='border-[#777E90]' />
                                </div>
                                <div>
                                    <Label htmlFor="email">Email *</Label>
                                    <Input id="email" className='border-[#777E90]' />
                                </div>
                                <div>
                                    <Label htmlFor="service">Serviço *</Label>
                                    <Select>
                                        <SelectTrigger className="w-full border-[#777E90]">
                                            <SelectValue placeholder="Selecione um serviço" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="acessoria-comercio-exterior">
                                                Assessoria em Comércio Exterior
                                            </SelectItem>
                                            <SelectItem value="beneficios-fiscais">
                                                Benefícios Fiscais
                                            </SelectItem>
                                            <SelectItem value="consultoria-tributaria">
                                                Consultoria Tributária
                                            </SelectItem>
                                            <SelectItem value="habilitacao-siscomex">
                                                Habilitação no Siscomex e Revisão de Estimativas
                                            </SelectItem>
                                            <SelectItem value="importacao-por-terceiros">
                                                Importação por Conta e Ordem de Terceiros
                                            </SelectItem>
                                            <SelectItem value="importacao-por-encomenda">
                                                Importação por Encomenda
                                            </SelectItem>
                                            <SelectItem value="produtos-proprios">
                                                Produtos Próprios
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="terms" />
                                    <Label htmlFor="terms" className='text-sm text-[#777E90]'>
                                        Ao clicar nesse botão você concorda que a Duri Trading faça uso dessas
                                        informações colocadas acima, em concordancia com os termos gerais da LGPD.
                                    </Label>
                                </div>
                                <button className="bg-duri-light rounded-full p-1 px-8 text-white hover:bg-duri-dark w-1/3">
                                    Enviar Informações
                                </button>
                            </form>
                        </CardContent>
                    </Card>
                    <Image
                        src={'/contacts/formImage.png'}
                        width={500}
                        height={500}
                        alt="Imagem de um formulário"
                    />
                </div>
            </div>
            <div className='flex flex-col items-center'>
                <div className="relative w-screen h-[40vh] overflow-x-hidden">
                    <Image
                        src="/contacts/heroImage.png"
                        alt="Imagem de um porto"
                        fill
                        className="object-cover w-full h-full max-w-none"
                        priority
                    />
                    <div className="absolute inset-0 bg-[#5C0508A6] bg-opacity-65"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 w02">
                        <h1 className="text-3xl">Contatos</h1>
                    </div>
                </div>
            </div>
            <div className='flex justify-around w-full'>
                <Card className='shadow-md p-4'>
                    <CardContent className='flex flex-col text-center items-center'>
                        <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
                            <BriefcaseBusiness className="w-8 h-8 text-duri-dark" />
                        </div>
                        <p className='font-bold'>Comercial</p>
                        <p>+55 (81) 99424-2112</p>
                        <p>+55 (81) 3341-3438</p>
                        <p>comercial@duri.com.br</p>
                    </CardContent>
                </Card>
                <Card className='shadow-md p-4'>
                    <CardContent className='flex flex-col text-center items-center'>
                        <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
                            <File className="w-8 h-8 text-duri-dark" />
                        </div>
                        <p className='font-bold'>Operacional</p>
                        <p>+55 (81) 99635-4738</p>
                        <p>+55 (81) 3341-3438</p>
                        <p>operacional@duri.com.br</p>
                    </CardContent>
                </Card>
                <Card className='shadow-md p-4'>
                    <CardContent className='flex flex-col text-center items-center'>
                        <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mb-4">
                            <DollarSign className="w-8 h-8 text-duri-dark" />
                        </div>
                        <p className='font-bold'>Financeiro</p>
                        <p>+55 (81) 99424-3636</p>
                        <p>+55 (81) 3341-3438</p>
                        <p>financeiro@duri.com.br</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default Contact;
