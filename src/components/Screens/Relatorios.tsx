
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  FileText, 
  Download, 
  Calendar, 
  BarChart3, 
  TrendingUp,
  Clock,
  Filter,
  Search,
  Share2
} from 'lucide-react';
import { Input } from '@/components/ui/input';

const Relatorios = () => {
  const reports = [
    {
      id: 'REL-2024-001',
      title: 'Relatório Mensal de Queimadas - Janeiro 2024',
      type: 'mensal',
      category: 'queimadas',
      status: 'finalizado',
      generatedAt: '2024-02-01',
      generatedBy: 'Sistema Automático',
      fileSize: '2.3 MB',
      downloads: 45,
      description: 'Análise completa de focos de queimadas detectados em janeiro de 2024'
    },
    {
      id: 'REL-2024-002',
      title: 'Impacto na Saúde Pública - Semana 28/01 a 03/02',
      type: 'semanal',
      category: 'saude',
      status: 'finalizado',
      generatedAt: '2024-02-04',
      generatedBy: 'Dr. Maria Santos',
      fileSize: '1.8 MB',
      downloads: 23,
      description: 'Correlação entre qualidade do ar e casos de doenças respiratórias'
    },
    {
      id: 'REL-2024-003',
      title: 'Operações de Defesa Civil - Janeiro 2024',
      type: 'mensal',
      category: 'operacoes',
      status: 'finalizado',
      generatedAt: '2024-02-02',
      generatedBy: 'Coord. João Silva',
      fileSize: '3.1 MB',
      downloads: 38,
      description: 'Resumo de todas as operações realizadas pelas equipes de emergência'
    },
    {
      id: 'REL-2024-004',
      title: 'Qualidade do Ar - Relatório Diário',
      type: 'diario',
      category: 'ambiental',
      status: 'processando',
      generatedAt: '2024-02-05',
      generatedBy: 'Sistema Automático',
      fileSize: '0.9 MB',
      downloads: 0,
      description: 'Monitoramento da qualidade do ar em todas as estações'
    },
    {
      id: 'REL-2024-005',
      title: 'Análise de Eficiência de Drones - Janeiro 2024',
      type: 'mensal',
      category: 'tecnologia',
      status: 'rascunho',
      generatedAt: '2024-02-05',
      generatedBy: 'Eng. Carlos Oliveira',
      fileSize: '1.2 MB',
      downloads: 0,
      description: 'Avaliação de performance e eficiência dos drones de monitoramento'
    }
  ];

  const quickStats = [
    { label: 'Relatórios Gerados', value: 127, trend: '+15%', period: 'Este mês' },
    { label: 'Downloads Totais', value: 2341, trend: '+28%', period: 'Este mês' },
    { label: 'Relatórios Automáticos', value: 89, trend: '+8%', period: 'Este mês' },
    { label: 'Relatórios Personalizados', value: 38, trend: '+45%', period: 'Este mês' }
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'finalizado':
        return { label: 'Finalizado', color: 'bg-green-600' };
      case 'processando':
        return { label: 'Processando', color: 'bg-blue-600' };
      case 'rascunho':
        return { label: 'Rascunho', color: 'bg-gray-600' };
      case 'erro':
        return { label: 'Erro', color: 'bg-red-600' };
      default:
        return { label: 'Desconhecido', color: 'bg-gray-600' };
    }
  };

  const getCategoryInfo = (category: string) => {
    switch (category) {
      case 'queimadas':
        return { label: 'Queimadas', icon: '🔥', color: 'bg-red-100 text-red-800' };
      case 'saude':
        return { label: 'Saúde', icon: '🏥', color: 'bg-blue-100 text-blue-800' };
      case 'operacoes':
        return { label: 'Operações', icon: '🚒', color: 'bg-orange-100 text-orange-800' };
      case 'ambiental':
        return { label: 'Ambiental', icon: '🌱', color: 'bg-green-100 text-green-800' };
      case 'tecnologia':
        return { label: 'Tecnologia', icon: '🤖', color: 'bg-purple-100 text-purple-800' };
      default:
        return { label: 'Geral', icon: '📄', color: 'bg-gray-100 text-gray-800' };
    }
  };

  const getTypeInfo = (type: string) => {
    switch (type) {
      case 'diario':
        return 'Diário';
      case 'semanal':
        return 'Semanal';
      case 'mensal':
        return 'Mensal';
      case 'anual':
        return 'Anual';
      default:
        return 'Personalizado';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Relatórios</h1>
        <p className="text-gray-600">Geração e gestão de relatórios do sistema EcoGuard</p>
      </div>

      {/* Estatísticas Rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <Card key={index} className="border-gray-200">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-gray-600">{stat.label}</p>
                <BarChart3 className="w-4 h-4 text-gray-400" />
              </div>
              <p className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <div className="flex items-center text-xs">
                <TrendingUp className="w-3 h-3 text-green-600 mr-1" />
                <span className="text-green-600 font-semibold">{stat.trend}</span>
                <span className="text-gray-500 ml-1">{stat.period}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Controles de Filtro e Busca */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Filtros e Busca</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Buscar relatórios..."
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-1" />
                Filtros
              </Button>
              <Button variant="outline" size="sm">
                <Calendar className="w-4 h-4 mr-1" />
                Período
              </Button>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <FileText className="w-4 h-4 mr-1" />
                Novo Relatório
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Relatórios Predefinidos */}
      <Card>
        <CardHeader>
          <CardTitle>Relatórios Rápidos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex flex-col">
              <FileText className="w-6 h-6 mb-2 text-red-600" />
              <span className="text-sm">Relatório de Queimadas</span>
              <span className="text-xs text-gray-500">Último 30 dias</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col">
              <BarChart3 className="w-6 h-6 mb-2 text-blue-600" />
              <span className="text-sm">Impacto na Saúde</span>
              <span className="text-xs text-gray-500">Última semana</span>
            </Button>
            <Button variant="outline" className="h-20 flex flex-col">
              <TrendingUp className="w-6 h-6 mb-2 text-green-600" />
              <span className="text-sm">Qualidade do Ar</span>
              <span className="text-xs text-gray-500">Hoje</span>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Lista de Relatórios */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="w-5 h-5 mr-2 text-blue-600" />
            Todos os Relatórios
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {reports.map((report, index) => {
              const statusInfo = getStatusInfo(report.status);
              const categoryInfo = getCategoryInfo(report.category);
              
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-lg mr-2">{categoryInfo.icon}</span>
                        <h4 className="font-semibold text-gray-900">{report.title}</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{report.description}</p>
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <span>ID: {report.id}</span>
                        <span>•</span>
                        <span>Gerado por: {report.generatedBy}</span>
                        <span>•</span>
                        <span>Tamanho: {report.fileSize}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-2">
                      <Badge className={`${statusInfo.color} text-white`}>
                        {statusInfo.label}
                      </Badge>
                      <Badge className={categoryInfo.color}>
                        {categoryInfo.label}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{new Date(report.generatedAt).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>{getTypeInfo(report.type)}</span>
                      </div>
                      <div className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        <span>{report.downloads} downloads</span>
                      </div>
                    </div>
                    
                    <div className="flex space-x-2">
                      {report.status === 'finalizado' && (
                        <>
                          <Button size="sm" variant="outline">
                            <Share2 className="w-3 h-3 mr-1" />
                            Compartilhar
                          </Button>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Download className="w-3 h-3 mr-1" />
                            Download
                          </Button>
                        </>
                      )}
                      {report.status === 'rascunho' && (
                        <Button size="sm" variant="outline">
                          <FileText className="w-3 h-3 mr-1" />
                          Editar
                        </Button>
                      )}
                      {report.status === 'processando' && (
                        <Button size="sm" variant="outline" disabled>
                          Processando...
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Agendamento de Relatórios */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Clock className="w-5 h-5 mr-2 text-green-600" />
            Relatórios Agendados
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-lg">📊</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Relatório Semanal de Qualidade do Ar</h4>
                  <p className="text-sm text-gray-600">Toda segunda-feira às 08:00</p>
                </div>
              </div>
              <Badge className="bg-green-600">Ativo</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-lg">🔥</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Relatório Mensal de Queimadas</h4>
                  <p className="text-sm text-gray-600">Todo dia 1º às 00:00</p>
                </div>
              </div>
              <Badge className="bg-green-600">Ativo</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <span className="text-lg">🏥</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Relatório Diário de Saúde Pública</h4>
                  <p className="text-sm text-gray-600">Todos os dias às 23:30</p>
                </div>
              </div>
              <Badge className="bg-green-600">Ativo</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Relatorios;
