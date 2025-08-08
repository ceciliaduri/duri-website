import React from 'react';
import { 
  AlertTriangle, 
  DollarSign, 
  Clock, 
  Target, 
  Award, 
  Clipboard,
  TrendingDown,
  AlertCircle
} from 'lucide-react';
import { Card, CardContent } from '../ui/card';

const AboutSection: React.FC = () => {
    return (
        <section id="quem-somos" className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                
                {/* Header com Ícone de Alerta */}
                <div className="text-center mb-16">
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                            <AlertTriangle className="w-8 h-8 text-red-600" />
                        </div>
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                            <TrendingDown className="w-8 h-8 text-orange-600" />
                        </div>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        A Verdade Sobre Custos de Importação Que{' '}
                        <span className="text-red-600">Trading Companies Escondem</span>
                    </h2>
                </div>

                {/* Parágrafo de Abertura */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-gray-50 p-8 rounded-2xl border-l-4 border-red-500">
                        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-6">
                            Se sua empresa faz importação acima de <strong className="text-red-600">US$ 20 mil por ano</strong> e você escolheu sua trading baseado em "preço competitivo" ou "confiança"...
                        </p>
                        <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-semibold">
                            <span className="text-red-600">Você provavelmente está desperdiçando entre R$ 100k a R$ 500k+ por ano.</span>
                        </p>
                    </div>
                </div>

                {/* Fato Comprovado */}
                <div className="mb-16">
                    <Card className="border-2 border-red-200 bg-red-50 max-w-5xl mx-auto">
                        <CardContent className="p-8 text-center">
                            <div className="flex items-center justify-center gap-3 mb-4">
                                <AlertCircle className="w-8 h-8 text-red-600" />
                                <span className="text-red-800 font-bold text-xl">FATO COMPROVADO</span>
                            </div>
                            <p className="text-lg md:text-xl text-red-800 font-semibold leading-relaxed">
                                <strong>87% das empresas brasileiras</strong> pagam entre <strong>30% a 60% a mais</strong> em custos totais 
                                de importação porque suas trading companies fazem análise superficial focada apenas no desembaraço básico.
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Título dos Custos Ocultos */}
                <div className="text-center mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Os custos ocultos que elas <span className="text-red-600">NÃO analisam:</span>
                    </h3>
                </div>

                {/* Grid de Custos Ocultos */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    
                    {/* Custo 1 */}
                    <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-red-500">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center group-hover:bg-red-200 transition-colors duration-300">
                                    <DollarSign className="w-6 h-6 text-red-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900 mb-2">
                                        Tributação Desnecessária
                                    </h4>
                                    <p className="text-gray-600">
                                        Múltiplas esferas tributárias mal otimizadas gerando custos extras evitáveis
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Custo 2 */}
                    <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors duration-300">
                                    <Clock className="w-6 h-6 text-orange-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900 mb-2">
                                        Ineficiências Logísticas
                                    </h4>
                                    <p className="text-gray-600">
                                        Processos lentos e desorganizados que custam tempo e dinheiro
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Custo 3 */}
                    <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors duration-300">
                                    <Target className="w-6 h-6 text-purple-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900 mb-2">
                                        Modalidades Inadequadas
                                    </h4>
                                    <p className="text-gray-600">
                                        Escolha errada de modalidades de importação para seu perfil empresarial
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Custo 4 */}
                    <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-green-500">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                                    <Award className="w-6 h-6 text-green-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900 mb-2">
                                        Incentivos Desperdiçados
                                    </h4>
                                    <p className="text-gray-600">
                                        Oportunidades de incentivos fiscais não identificadas ou mal aplicadas
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Custo 5 */}
                    <Card className="group hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 md:col-span-2 lg:col-span-1">
                        <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                                    <Clipboard className="w-6 h-6 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-gray-900 mb-2">
                                        Processos Mal Otimizados
                                    </h4>
                                    <p className="text-gray-600">
                                        Burocracias que poderiam ser simplificadas mas são mantidas por comodismo
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Resultado Final - Box Destacado */}
                <div className="max-w-4xl mx-auto">
                    <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-300 shadow-2xl">
                        <CardContent className="p-8 text-center">
                            <div className="flex items-center justify-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                                    <TrendingDown className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                                RESULTADO DEVASTADOR
                            </h3>
                            
                            <div className="grid md:grid-cols-3 gap-8 items-center">
                                <div className="text-center">
                                    <div className="bg-green-100 p-4 rounded-xl mb-3">
                                        <p className="text-green-800 font-bold text-lg">Você "economiza"</p>
                                        <p className="text-green-600 text-3xl font-bold">R$ 5k</p>
                                        <p className="text-green-700 text-sm">na margem da trading</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-center justify-center">
                                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-2xl">VS</span>
                                    </div>
                                </div>
                                
                                <div className="text-center">
                                    <div className="bg-red-100 p-4 rounded-xl mb-3">
                                        <p className="text-red-800 font-bold text-lg">E perde</p>
                                        <p className="text-red-600 text-3xl font-bold">R$ 50k+</p>
                                        <p className="text-red-700 text-sm">em custos que nem percebeu</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-8 p-4 bg-yellow-100 rounded-xl border-l-4 border-yellow-500">
                                <p className="text-yellow-800 font-semibold text-lg">
                                    💡 <strong>A conta não fecha:</strong> Pequena economia na margem, 
                                    grande prejuízo nos custos ocultos que ninguém te mostra.
                                </p>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Call to Action Final */}
                <div className="text-center mt-16">
                    <p className="text-xl text-gray-600 mb-8">
                        Descubra <strong>exatamente quanto sua empresa está perdendo</strong> em custos ocultos
                    </p>
                    
                    <button className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold px-12 py-4 rounded-full text-xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                        Fazer Análise Gratuita dos Meus Custos
                    </button>
                    
                    <p className="text-gray-500 mt-4 text-sm">
                        ✅ Análise completa gratuita • ✅ Sem compromisso • ✅ Resposta em 24h
                    </p>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;