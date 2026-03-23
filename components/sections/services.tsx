import React from 'react';
import { 
  BarChart3, 
  Zap, 
  Rocket, 
  CheckCircle, 
  LightbulbIcon,
  AlertTriangle,
  Target,
  TrendingUp,
  Users,
  Globe,
  Award,
  Settings
} from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const ServicesSection: React.FC = () => {
    return (
        <section id="servicos" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                            <LightbulbIcon className="w-8 h-8 text-blue-600" />
                        </div>
                        <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center">
                            <BarChart3 className="w-8 h-8 text-yellow-600" />
                        </div>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        💡 Os 7 Tipos de Economia Que{' '}
                        <span className="text-blue-600">90% Das Trading Companies</span>{' '}
                        Ignoram
                    </h2>
                    
                    <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                        Enquanto suas concorrentes fazem apenas <strong>importação básica</strong>, existem múltiplas vertentes de economia 
                        que podem <strong className="text-green-600">reduzir seus custos totais de importação drasticamente</strong>:
                    </p>
                </div>

                {/* Grid Principal das 3 Categorias */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    
                    {/* Categoria 1: Economia Tributária */}
                    <Card className="group hover:shadow-2xl transition-all duration-500 transform md:hover:scale-105 border-t-4 border-blue-500">
                        <CardContent className="p-8 text-center h-full">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                                <BarChart3 className="w-10 h-10 text-blue-600" />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-blue-600 mb-6">
                                📊 ECONOMIA TRIBUTÁRIA
                            </h3>
                            
                            <div className="space-y-4 text-left">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Incentivos fiscais regionais</p>
                                        <p className="text-gray-600 text-sm">(PRODEPE, PEAP, TARE)</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Estruturas tributárias otimizadas</p>
                                        <p className="text-gray-600 text-sm">Por setor e perfil empresarial</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Modalidades que reduzem</p>
                                        <p className="text-gray-600 text-sm">Impostos totais significativamente</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-6 p-3 bg-blue-50 rounded-lg">
                                <p className="text-blue-800 font-medium text-sm">
                                    💰 Potencial: <strong>20-40% redução</strong> nos custos tributários
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Categoria 2: Economia Operacional */}
                    <Card className="group hover:shadow-2xl transition-all duration-500 transform md:hover:scale-105 border-t-4 border-orange-500">
                        <CardContent className="p-8 text-center h-full">
                            <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-200 transition-colors duration-300">
                                <Zap className="w-10 h-10 text-orange-600" />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-orange-600 mb-6">
                                ⚡ ECONOMIA OPERACIONAL
                            </h3>
                            
                            <div className="space-y-4 text-left">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Logística nacional e internacional</p>
                                        <p className="text-gray-600 text-sm">Completamente otimizada</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Desembaraço aduaneiro</p>
                                        <p className="text-gray-600 text-sm">Acelerado (tempo = dinheiro)</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Processos documentários</p>
                                        <p className="text-gray-600 text-sm">Eficientes e sem retrabalho</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-6 p-3 bg-orange-50 rounded-lg">
                                <p className="text-orange-800 font-medium text-sm">
                                    ⚡ Potencial: <strong>30-50% redução</strong> no tempo e custos operacionais
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Categoria 3: Economia Estratégica */}
                    <Card className="group hover:shadow-2xl transition-all duration-500 transform md:hover:scale-105 border-t-4 border-purple-500">
                        <CardContent className="p-8 text-center h-full">
                            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors duration-300">
                                <Rocket className="w-10 h-10 text-purple-600" />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-purple-600 mb-6">
                                🎯 ECONOMIA ESTRATÉGICA
                            </h3>
                            
                            <div className="space-y-4 text-left">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Planejamento fiscal prévio</p>
                                        <p className="text-gray-600 text-sm">Cenários e estratégias antecipadas</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Proteção contra mudanças</p>
                                        <p className="text-gray-600 text-sm">Regulatórias e de mercado</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                                    <div>
                                        <p className="font-semibold text-gray-900">Relacionamento privilegiado</p>
                                        <p className="text-gray-600 text-sm">Com órgãos fiscalizadores</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-6 p-3 bg-purple-50 rounded-lg">
                                <p className="text-purple-800 font-medium text-sm">
                                    🚀 Potencial: <strong>Proteção de longo prazo</strong> e vantagem competitiva
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Seção Problema + Razão */}
                <div className="space-y-8 max-w-5xl mx-auto mb-16">
                    
                    {/* Box Problema */}
                    <Card className="border-l-4 border-yellow-500 bg-yellow-50">
                        <CardContent className="p-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                                    <AlertTriangle className="w-6 h-6 text-yellow-700" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-yellow-800 mb-3">
                                        ⚠️ O PROBLEMA?
                                    </h3>
                                    <p className="text-lg text-yellow-800 leading-relaxed">
                                        Essas economias exigem <strong>expertise multidisciplinar</strong> e <strong>relacionamentos 
                                        privilegiados</strong> que <strong>90% das trading companies não têm</strong>.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Box Razão */}
                    <Card className="border-l-4 border-blue-500 bg-blue-50">
                        <CardContent className="p-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Target className="w-6 h-6 text-blue-700" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-blue-800 mb-3">
                                        🎯 POR ISSO
                                    </h3>
                                    <p className="text-lg text-blue-800 leading-relaxed">
                                        elas focam só no básico - é <strong>mais fácil competir por preço</strong> que 
                                        <strong> demonstrar valor real</strong> através de economias complexas.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Grid de Capacidades Específicas */}
                <div className="bg-white rounded-2xl p-8 shadow-xl mb-16">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">
                            🏆 Por Que a Duri Consegue Acessar <span className="text-green-600">Todas Essas Economias</span>
                        </h3>
                        <p className="text-lg text-gray-600">
                            25 anos construindo relacionamentos e expertise que fazem a diferença real nos seus custos
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-green-600" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">Credenciamentos Exclusivos</h4>
                            <p className="text-gray-600 text-sm">Acesso a modalidades que outras trading companies não conseguem</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-blue-600" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">Relacionamento Institucional</h4>
                            <p className="text-gray-600 text-sm">Contato direto com todos os órgãos reguladores</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <TrendingUp className="w-8 h-8 text-purple-600" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">Expertise Multidisciplinar</h4>
                            <p className="text-gray-600 text-sm">Equipe com visão tributária, logística e estratégica</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Settings className="w-8 h-8 text-orange-600" />
                            </div>
                            <h4 className="font-bold text-gray-900 mb-2">Tecnologia Proprietária</h4>
                            <p className="text-gray-600 text-sm">Sistemas que identificam oportunidades automaticamente</p>
                        </div>
                    </div>
                </div>

                {/* Resultado Final */}
                <div className="text-center bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 border-2 border-green-200">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-8 h-8 text-white" />
                        </div>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                        💡 RESULTADO PRÁTICO
                    </h3>
                    
                    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <Globe className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                            <p className="font-semibold text-gray-900">Visão 360° de todos os custos envolvidos</p>
                        </div>
                        
                        <div className="text-center">
                            <Target className="w-12 h-12 text-green-600 mx-auto mb-3" />
                            <p className="font-semibold text-gray-900">Capacidade de otimizar múltiplas vertentes simultaneamente</p>
                        </div>
                        
                        <div className="text-center">
                            <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-3" />
                            <p className="font-semibold text-gray-900">Economias que vão muito além do &ldquo;preço da trading&rdquo;</p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <button className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold px-10 py-4 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                            Descobrir Todas as Economias Disponíveis
                        </button>
                        
                        <p className="text-gray-600 mt-4 text-sm">
                            ✅ Análise completa das 7 vertentes • ✅ Identificação de oportunidades • ✅ Plano de economia personalizado
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;