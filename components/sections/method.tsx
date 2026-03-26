'use client'
import React from 'react';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Controller, useForm } from 'react-hook-form';
import { useToast } from '@/hooks/use-toast';

interface ContactTypes {
    name: string;
    company: string;
    phone: string;
    email: string;
    service: string;
    terms: boolean;
}

const formatPhone = (value: string) => {
    return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
        .replace(/(\(\d{2}\)\s\d{5})\-(\d{4})\d+/, '($1) $2');
};

const MethodSection: React.FC = () => {
    const { toast } = useToast();
    const { register, handleSubmit, watch, setValue, control, reset } = useForm({
        defaultValues: {
            name: '',
            company: '',
            phone: '',
            email: '',
            service: '',
            terms: false,
        },
    });

    const termsAccepted = watch('terms');

    const onSubmit = async (data: ContactTypes) => {
        try {
            await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            toast({
                title: 'Mensagem enviada!',
                description: 'Em breve entraremos em contato com você.',
            });

            reset();
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error);
            toast({
                title: 'Erro ao enviar',
                description: 'Tente novamente mais tarde.',
                variant: 'destructive',
            });
        }
    };

    return (
        <section id="contato" className="py-24 md:py-32 bg-gray-900">
            <div className="max-w-6xl mx-auto px-6">

                <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
                    <div className="md:sticky md:top-32">
                        <p className="text-duri-light font-medium text-sm uppercase tracking-[0.15em] mb-4">
                            Próximo passo
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.15] mb-8">
                            Descubra quanto sua empresa pode economizar
                        </h2>
                        <p className="text-lg text-gray-400 leading-relaxed mb-12">
                            O diagnóstico é gratuito, sem compromisso e leva menos de uma semana.
                        </p>

                        <div className="space-y-8">
                            <div className="flex gap-5">
                                <span className="text-white/10 text-4xl font-bold leading-none">01</span>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Conversa inicial</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Entendemos sua operação, volumes e estrutura tributária.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <span className="text-white/10 text-4xl font-bold leading-none">02</span>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Análise completa</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Mapeamos as 7 vertentes de economia aplicáveis ao seu caso.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <span className="text-white/10 text-4xl font-bold leading-none">03</span>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Relatório de economia</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Você recebe o diagnóstico com projeções reais.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-5">
                                <span className="text-white/10 text-4xl font-bold leading-none">04</span>
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Implementação</h4>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        Executamos as otimizações com acompanhamento contínuo.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-8 md:p-10">
                        <h3 className="text-gray-900 font-semibold text-xl mb-6">
                            Solicitar diagnóstico gratuito
                        </h3>

                        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <Label htmlFor="name" className="text-gray-700">Nome Completo *</Label>
                                <Input
                                    id="name"
                                    {...register('name', { required: true })}
                                    className="border-gray-200 mt-1"
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="company" className="text-gray-700">Nome da Empresa</Label>
                                <Input
                                    id="company"
                                    {...register('company')}
                                    className="border-gray-200 mt-1"
                                />
                            </div>
                            <div>
                                <Label htmlFor="phone" className="text-gray-700">Telefone *</Label>
                                <Controller
                                    name="phone"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field: { value, onChange } }) => (
                                        <Input
                                            id="phone"
                                            value={value}
                                            onChange={(e) => onChange(formatPhone(e.target.value))}
                                            className="border-gray-200 mt-1"
                                            required
                                        />
                                    )}
                                />
                            </div>
                            <div>
                                <Label htmlFor="email" className="text-gray-700">Email *</Label>
                                <Input
                                    id="email"
                                    {...register('email', { required: true })}
                                    className="border-gray-200 mt-1"
                                    required
                                />
                            </div>
                            <div>
                                <Label htmlFor="service" className="text-gray-700">Serviço *</Label>
                                <Controller
                                    name="service"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <Select
                                            onValueChange={field.onChange}
                                            value={field.value}
                                        >
                                            <SelectTrigger className="w-full border-gray-200 mt-1">
                                                <SelectValue placeholder="Selecione um serviço" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="diagnostico-gratuito">
                                                    Diagnóstico Gratuito
                                                </SelectItem>
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
                                                    Habilitação no Siscomex
                                                </SelectItem>
                                                <SelectItem value="importacao-por-terceiros">
                                                    Importação por Conta e Ordem
                                                </SelectItem>
                                                <SelectItem value="importacao-por-encomenda">
                                                    Importação por Encomenda
                                                </SelectItem>
                                            </SelectContent>
                                        </Select>
                                    )}
                                />
                            </div>
                            <div className="flex items-start space-x-2 mt-2">
                                <Checkbox
                                    id="terms"
                                    {...register('terms')}
                                    onCheckedChange={(checked) => setValue('terms', !!checked)}
                                    className="mt-0.5"
                                />
                                <Label htmlFor="terms" className="text-xs text-gray-400 leading-relaxed">
                                    Ao enviar, você concorda que a Duri Trading utilize estas informações
                                    de acordo com os termos da LGPD.
                                </Label>
                            </div>
                            <button
                                className="bg-duri-light hover:bg-duri-dark text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 disabled:bg-gray-200 disabled:text-gray-400 mt-2"
                                type="submit"
                                disabled={!termsAccepted}
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MethodSection;
