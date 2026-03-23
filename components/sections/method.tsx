import React from 'react';
import { 
  CheckCircle, 
  X, 
  TrendingUp, 
  ArrowRight,
  Zap,
  BarChart3,
  Target,
  Shield,
  DollarSign,
  Award
} from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const MethodSection: React.FC = () => {
    return (
        <section id="metodo" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                            <X className="w-8 h-8 text-red-600" />
                        </div>
                        <span className="text-4xl font-bold text-gray-400">VS</span>
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-8 h-8 text-green-600" />
                        </div>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        ⚡ Trading Básica vs{' '}
                        <span className="text-blue-600">Consultoria Completa</span>{' '}
                        em Custos de Importação
                    </h2>
                </div>

                {/* Comparação Principal */}
                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    
                    {/* TRADING TRADICIONAL */}
                    <Card className="border-2 border-red-200 bg-red-50 relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-2 bg-red-500"></div>
                        <CardContent className="p-8">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <X className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-red-700">
                                    IMPORTAÇÃO TRADICIONAL
                                </h3>
                                <p className="text-red-600 font-medium">O que 90% das trading companies fazem</p>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <X className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-red-800">Foco apenas no desembaraço aduaneiro</p>
                                        <p className="text-red-600 text-sm">Processo básico, sem visão estratégica</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <X className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-red-800">Análise superficial de custos</p>
                                        <p className="text-red-600 text-sm">Vê apenas a ponta do iceberg</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <X className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-red-800">Solução padronizada "tamanho único"</p>
                                        <p className="text-red-600 text-sm">Mesma abordagem para todas empresas</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <X className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-red-800">Sem visão estratégica de longo prazo</p>
                                        <p className="text-red-600 text-sm">Resolve só o imediato</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-red-100 rounded-lg border-l-4 border-red-500">
                                <p className="text-red-800 font-bold text-center">
                                    ❌ RESULTADO: Custos ocultos não identificados
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* MÉTODO DURI */}
                    <Card className="border-2 border-green-200 bg-green-50 relative overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-2 bg-green-500"></div>
                        <CardContent className="p-8">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-green-700">
                                    MÉTODO DURI - OTIMIZAÇÃO COMPLETA
                                </h3>
                                <p className="text-green-600 font-medium">Consultoria integral em custos</p>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-green-800">Análise de TODOS os custos envolvidos</p>
                                        <p className="text-green-600 text-sm">Visão 360° de oportunidades</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-green-800">Mapeamento de economias múltiplas vertentes</p>
                                        <p className="text-green-600 text-sm">Tributária + Logística + Processual</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-green-800">Solução customizada por setor e perfil</p>
                                        <p className="text-green-600 text-sm">Estratégia única para sua empresa</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <CheckCircle className="w-4 h-4 text-white" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-green-800">Planejamento estratégico crescimento futuro</p>
                                        <p className="text-green-600 text-sm">Visão de longo prazo</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 p-4 bg-green-100 rounded-lg border-l-4 border-green-500">
                                <p className="text-green-800 font-bold text-center">
                                    ✅ RESULTADO: Economia real e sustentável
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Caso Real - Transformação */}
                <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 border-2 border-blue-200 mb-16">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <BarChart3 className="w-8 h-8 text-blue-600" />
                            <h3 className="text-3xl font-bold text-gray-900">
                                📊 CASO REAL - TRANSFORMAÇÃO COMPLETA
                            </h3>
                        </div>
                        <p className="text-lg text-gray-600">
                            Empresa do setor têxtil que descobriu o verdadeiro potencial de economia
                        </p>
                    </div>

                    {/* Timeline de Transformação */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
                        
                        {/* ANTES */}
                        <Card className="bg-red-50 border-2 border-red-200">
                            <CardContent className="p-6 text-center">
                                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="w-8 h-8 text-white transform rotate-180" />
                                </div>
                                <h4 className="text-xl font-bold text-red-700 mb-4">ESTRUTURA ANTERIOR</h4>
                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded-lg">
                                        <p className="text-2xl font-bold text-red-600">R$ 250k/ano</p>
                                        <p className="text-red-700 text-sm">custos totais de importação</p>
                                    </div>
                                    <p className="text-red-600 font-medium">Trading tradicional com foco só no básico</p>
                                    <p className="text-red-600">Zero otimização tributária ou logística</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* TRANSFORMAÇÃO */}
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <ArrowRight className="w-10 h-10 text-white" />
                            </div>
                            <div className="bg-blue-100 p-4 rounded-lg">
                                <p className="font-bold text-blue-800 text-lg">TRANSFORMAÇÃO DURI</p>
                                <p className="text-blue-600">Análise completa + Implementação estratégica</p>
                            </div>
                        </div>

                        {/* DEPOIS */}
                        <Card className="bg-green-50 border-2 border-green-200">
                            <CardContent className="p-6 text-center">
                                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <TrendingUp className="w-8 h-8 text-white" />
                                </div>
                                <h4 className="text-xl font-bold text-green-700 mb-4">OTIMIZAÇÃO DURI</h4>
                                <div className="space-y-3">
                                    <div className="bg-white p-3 rounded-lg">
                                        <p className="text-2xl font-bold text-green-600">R$ 97k/ano</p>
                                        <p className="text-green-700 text-sm">custos totais de importação</p>
                                    </div>
                                    <div className="bg-yellow-100 p-2 rounded">
                                        <p className="text-yellow-800 font-bold">Economia anual: R$ 153k</p>
                                    </div>
                                    <p className="text-green-600">Vertentes otimizadas: Tributária + Logística + Processual</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* ROI Destacado */}
                    <div className="text-center mt-12">
                        <div className="bg-gradient-to-r from-yellow-100 to-orange-100 border-2 border-yellow-400 rounded-2xl p-6 max-w-2xl mx-auto">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <Award className="w-8 h-8 text-yellow-600" />
                                <h4 className="text-2xl font-bold text-yellow-800">RESULTADO FINAL</h4>
                            </div>
                            <p className="text-3xl font-bold text-yellow-700 mb-2">
                                ROI: <span className="text-orange-600">8x</span> o investimento em consultoria especializada
                            </p>
                            <p className="text-yellow-700">
                                💰 <strong>R$ 153k economizados por ano</strong> vs investimento em consultoria
                            </p>
                        </div>
                    </div>
                </div>

                {/* Metodologia Detalhada */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            🔍 Como Funciona Nossa Metodologia de <span className="text-blue-600">Otimização Completa</span>
                        </h3>
                        <p className="text-lg text-gray-600">
                            Processo estruturado que identifica e implementa todas as economias possíveis
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BarChart3 className="w-8 h-8 text-blue-600" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">1. Diagnóstico 360°</h4>
                            <p className="text-gray-600 text-sm">Análise completa de todos os custos atuais e oportunidades perdidas</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Target className="w-8 h-8 text-green-600" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">2. Mapeamento Estratégico</h4>
                            <p className="text-gray-600 text-sm">Identificação de economias em múltiplas vertentes específicas do seu setor</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-8 h-8 text-purple-600" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">3. Implementação Ágil</h4>
                            <p className="text-gray-600 text-sm">Execução das otimizações de forma estruturada e com mínimo impacto operacional</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-orange-600" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">4. Monitoramento Contínuo</h4>
                            <p className="text-gray-600 text-sm">Acompanhamento dos resultados e ajustes para maximizar economias</p>
                        </div>
                    </div>
                </div>

                {/* CTA Final */}
                <div className="text-center mt-16">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Descubra Quanto Sua Empresa Pode Economizar com Nossa Metodologia Completa
                    </h3>
                    
                    <button className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white font-bold px-12 py-4 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4">
                        Solicitar Análise Completa Gratuita
                    </button>
                    
                    <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 text-sm text-gray-600 mt-4">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Diagnóstico 360° gratuito</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Projeção de economias</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            <span>Plano de implementação</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default MethodSection;