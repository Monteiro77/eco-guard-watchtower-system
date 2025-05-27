
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Shield, 
  Users, 
  Truck, 
  Radio, 
  MapPin, 
  Clock,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Activity
} from 'lucide-react';

const DefesaCivil = () => {
  const teams = [
    {
      id: 'EQUIPE-001',
      name: 'Bombeiros Cuiabá Norte',
      location: 'Parque Nacional da Chapada',
      status: 'em_campo',
      members: 8,
      vehicles: 2,
      mission: 'Combate a incêndio ativo',
      lastUpdate: '3 min atrás',
      equipment: ['Caminhão Pipa', 'Abafadores'],
      coordinates: '-15.4567, -56.1234'
    },
    {
      id: 'EQUIPE-002',
      name: 'Defesa Civil Várzea Grande',
      location: 'Vila Rural Pantanal',
      status: 'evacuacao',
      members: 12,
      vehicles: 4,
      mission: 'Evacuação preventiva - 150 famílias',
      lastUpdate: '1 min atrás',
      equipment: ['Ônibus', 'Ambulância', 'Caminhões'],
      coordinates: '-15.7123, -56.4567'
    },
    {
      id: 'EQUIPE-003',
      name: 'Bombeiros Pantanal Sul',
      location: 'Base Operacional',
      status: 'standby',
      members: 6,
      vehicles: 1,
      mission: 'Aguardando acionamento',
      lastUpdate: '15 min atrás',
      equipment: ['Caminhão Auto Bomba'],
      coordinates: '-15.8932, -56.2341'
    },
    {
      id: 'EQUIPE-004',
      name: 'Resgate Aéreo MT',
      location: 'Fazenda São João',
      status: 'resgate',
      members: 4,
      vehicles: 1,
      mission: 'Resgate de fauna - 15 animais',
      lastUpdate: '7 min atrás',
      equipment: ['Helicóptero', 'Kit Veterinário'],
      coordinates: '-15.3421, -56.2876'
    }
  ];

  const operations = [
    {
      id: 'OP-2024-001',
      title: 'Operação Chapada Norte',
      status: 'ativa',
      priority: 'critical',
      teamsInvolved: 3,
      startTime: '14:30',
      description: 'Combate a incêndio de grande porte com risco de propagação',
      affected: '500 hectares',
      evacuated: 0
    },
    {
      id: 'OP-2024-002',
      title: 'Evacuação Vila Pantanal',
      status: 'ativa',
      priority: 'high',
      teamsInvolved: 2,
      startTime: '16:45',
      description: 'Evacuação preventiva devido proximidade com área de risco',
      affected: '150 famílias',
      evacuated: 85
    },
    {
      id: 'OP-2024-003',
      title: 'Resgate Fauna Fazenda',
      status: 'ativa',
      priority: 'medium',
      teamsInvolved: 1,
      startTime: '15:20',
      description: 'Resgate de animais silvestres em área afetada',
      affected: '15 animais',
      evacuated: 8
    }
  ];

  const resources = [
    { name: 'Caminhões Pipa', available: 12, total: 15, status: 'good' },
    { name: 'Helicópteros', available: 2, total: 3, status: 'warning' },
    { name: 'Ambulâncias', available: 8, total: 10, status: 'good' },
    { name: 'Equipes Especializadas', available: 18, total: 25, status: 'normal' },
    { name: 'Equipamentos de Proteção', available: 150, total: 200, status: 'normal' },
    { name: 'Suprimentos de Emergência', available: 85, total: 100, status: 'warning' }
  ];

  const getStatusInfo = (status: string) => {
    switch (status) {
      case 'em_campo':
        return { label: 'Em Campo', color: 'bg-blue-600', icon: Activity };
      case 'evacuacao':
        return { label: 'Evacuação', color: 'bg-orange-600', icon: Users };
      case 'resgate':
        return { label: 'Resgate', color: 'bg-purple-600', icon: Shield };
      case 'standby':
        return { label: 'Stand By', color: 'bg-green-600', icon: CheckCircle };
      default:
        return { label: 'Inativo', color: 'bg-gray-600', icon: XCircle };
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-600';
      case 'high': return 'bg-orange-600';
      case 'medium': return 'bg-yellow-600';
      case 'low': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  const getResourceStatus = (available: number, total: number) => {
    const percentage = (available / total) * 100;
    if (percentage >= 80) return 'good';
    if (percentage >= 60) return 'warning';
    return 'critical';
  };

  const getResourceColor = (status: string) => {
    switch (status) {
      case 'good': return 'bg-green-500';
      case 'warning': return 'bg-orange-500';
      case 'critical': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Defesa Civil</h1>
        <p className="text-gray-600">Coordenação de operações e gestão de recursos de emergência</p>
      </div>

      {/* Resumo Operacional */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600">Equipes Ativas</p>
                <p className="text-2xl font-bold text-blue-700">
                  {teams.filter(team => team.status !== 'standby').length}
                </p>
              </div>
              <Shield className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-600">Operações Ativas</p>
                <p className="text-2xl font-bold text-orange-700">{operations.length}</p>
              </div>
              <Activity className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600">Pessoas Evacuadas</p>
                <p className="text-2xl font-bold text-purple-700">85</p>
              </div>
              <Users className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600">Recursos Disponíveis</p>
                <p className="text-2xl font-bold text-green-700">78%</p>
              </div>
              <Truck className="w-8 h-8 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Operações Ativas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
            Operações Ativas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {operations.map((operation, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg">{operation.title}</h4>
                    <p className="text-sm text-gray-600">ID: {operation.id}</p>
                  </div>
                  <Badge className={`${getPriorityColor(operation.priority)} text-white`}>
                    {operation.priority === 'critical' ? 'Crítica' :
                     operation.priority === 'high' ? 'Alta' :
                     operation.priority === 'medium' ? 'Média' : 'Baixa'}
                  </Badge>
                </div>
                
                <p className="text-gray-700 mb-3">{operation.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Início:</p>
                    <p className="font-semibold">{operation.startTime}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Equipes:</p>
                    <p className="font-semibold">{operation.teamsInvolved}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Área Afetada:</p>
                    <p className="font-semibold">{operation.affected}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Evacuados:</p>
                    <p className="font-semibold">{operation.evacuated}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Equipes em Campo */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="w-5 h-5 mr-2 text-blue-600" />
            Equipes em Campo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {teams.map((team, index) => {
              const statusInfo = getStatusInfo(team.status);
              const StatusIcon = statusInfo.icon;
              
              return (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold text-gray-900">{team.name}</h4>
                        <p className="text-sm text-gray-600">{team.id}</p>
                      </div>
                      <Badge className={`${statusInfo.color} text-white`}>
                        <StatusIcon className="w-3 h-3 mr-1" />
                        {statusInfo.label}
                      </Badge>
                    </div>
                    
                    <div className="mb-3">
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{team.location}</span>
                      </div>
                      <p className="text-sm font-medium text-gray-700">{team.mission}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-3 mb-3 text-sm">
                      <div>
                        <p className="text-gray-600">Membros:</p>
                        <p className="font-semibold">{team.members} pessoas</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Veículos:</p>
                        <p className="font-semibold">{team.vehicles} unidades</p>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <p className="text-xs text-gray-600 mb-1">Equipamentos:</p>
                      <div className="flex flex-wrap gap-1">
                        {team.equipment.map((eq, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {eq}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">
                        <Clock className="w-3 h-3 inline mr-1" />
                        {team.lastUpdate}
                      </span>
                      <Button size="sm" variant="outline">
                        <Radio className="w-3 h-3 mr-1" />
                        Contatar
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recursos Disponíveis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Truck className="w-5 h-5 mr-2 text-green-600" />
            Recursos Disponíveis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {resources.map((resource, index) => {
              const status = getResourceStatus(resource.available, resource.total);
              const percentage = (resource.available / resource.total) * 100;
              
              return (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 text-sm">{resource.name}</h4>
                    <Badge className={getResourceColor(status)}>
                      {resource.available}/{resource.total}
                    </Badge>
                  </div>
                  
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div 
                      className={`h-2 rounded-full ${getResourceColor(status)}`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  
                  <p className="text-xs text-gray-600">
                    {percentage.toFixed(0)}% disponível
                  </p>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DefesaCivil;
