'use client';
import React from 'react';
import { Card, CardContent } from '../ui/card';
import Image from "next/image";
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Button } from '../ui/button';

const Contact: React.FC = () => {
    return (
        <div className='flex flex-col items-center my-[20vh] gap-16'>
            <div className='flex flex-col gap-16'>
                <h1 className='text-4xl text-center'>
                    Somos seu Parceiro para Soluções <br />
                    <span className='text-duri-light'>Estratégicas e Integradas</span> em <br />Comércio Exterior
                </h1>
                <div className='flex items-center gap-16 w-full'>
                    <Card className='p-4 w-1/2'>
                        <CardContent>
                            <form className="flex flex-col gap-4">
                                <h3 className='text-duri-medium'>
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
                                        informações colocadas acima.
                                    </Label>
                                </div>
                                <Button className="bg-duri-light w-1/2 mt-4 hover:bg-duri-dark">
                                    Enviar Informações
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                    <Image
                        src={'/contacts/formImage.svg'}
                        width={400}
                        height={400}
                        alt="Imagem de um formulário"
                        className='w-1/2'
                    />
                </div>
            </div>
        </div>
    );
};

export default Contact;
