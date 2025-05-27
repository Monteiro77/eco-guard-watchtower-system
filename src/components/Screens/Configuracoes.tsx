
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Settings, 
  Users, 
  Shield, 
  Bell, 
  Database,
  Eye,
  Wifi,
  Server,
  Key,
  UserPlus,
  Edit,
  Trash2,
  Power
} from 'lucide-react';

const Configuracoes = () => {
  const systemSettings = [
    {
      category: 'Detecção de Incêndios',
      settings: [
        { name: 'Sensibilidade de Detecção', value: 'Alta', type: 'select' },
        { name: 'Intervalo de Verificação', value: '30 segundos', type: 'select' },
        { name: 'Temperatura Crítica', value: '45°C', type: 'number' },
        { name: 'Área Mínima para Alerta', value: '100 m²', type: 'number' }
      ]
    },
    {
      category: 'Qualidade do Ar',
      settings: [
        { name: 'Limite AQI Não Saudável', value: '101', type: 'number' },
        { name: 'Limite AQI Perigoso', value: '201', type: 'number' },
        { name: 'Frequência de Medição', value: '5 minutos', type: 'select' },
        { name: 'Alertas Automáticos', value: 'Ativado', type: 'toggle' }
      ]
    },
    {
      category: 'Previsão de Saúde',
      settings: [
        { name: 'Modelo de Previsão', value: 'IA Avançada', type: 'select' },
        { name: 'Horizonte de Previsão', value: '24 horas', type: 'select' },
        { name: 'Precisão Mínima', value: '85%', type: 'number' },
        { name: 'Atualização de Dados', value: '15 minutos', type: 'select' }
      ]
    }
  ];

  const users = [
    {
      id: 1,
      name: 'João Silva',
      email: 'joao.silva@defesacivil.mt.gov.br',
      role: 'Coordenador Defesa Civil',
      status: 'ativo',
      lastLogin: '2024-02-05 14:30',
      permissions: ['alertas', 'operacoes', 'relatorios']
    },
    {
      id: 2,
      name: 'Dra. Maria Santos',
      email: 'maria.santos@saude.mt.gov.br',
      role: 'Secretária de Saúde',
      status: 'ativo',
      lastLogin: '2024-02-05 16:45',
      permissions: ['saude', 'relatorios']
    },
    {
      id: 3,
      name: 'Carlos Oliveira',
      email: 'carlos.oliveira@bombeiros.mt.gov.br',
      role: 'Comandante Bombeiros',
      status: 'ativo',
      lastLogin: '2024-02-05 15:20',
      permissions: ['alertas', 'operacoes', 'drones']
    },
    {
      id: 4,
      name: 'Ana Costa',
      email: 'ana.costa@sema.mt.gov.br',
      role: 'Analista Ambiental',
      status: 'inativo',
      lastLogin: '2024-02-03 10:15',
      permissions: ['monitoramento', 'relatorios']
    }
  ];

  const drones = [
    {
      id: 'DRONE-001',
      model: 'DJI Matrice 300 RTK',
      status: 'ativo',
      battery: 85,
      lastMaintenance: '2024-01-15',
      location: 'Base Norte - Chapada',
      flightHours: 324
    },
    {
      id: 'DRONE-002',
      model: 'DJI Phantom 4 RTK',
      status: 'ativo',
      battery: 92,
      lastMaintenance: '2024-01-20',
      location: 'Base Sul - Pantanal',
      flightHours: 189
    },
    {
      id: 'DRONE-003',
      model: 'Autel EVO II Pro',
      status: 'manutencao',
      battery: 0,
      lastMaintenance: '2024-02-01',
      location: 'Oficina Técnica',
      flightHours: 278
    },
    {
      id: 'DRONE-004',
      model: 'DJI Matrice 30T',
      status: 'ativo',
      battery: 76,
      lastMaintenance: '2024-01-25',
      location: 'Base Leste - Cerrado',
      flightHours: 156
    }
  ];

  const systemStatus = [
    { service: 'API Principal', status: 'online', uptime: '99.9%' },
    { service: 'Banco de Dados', status: 'online', uptime: '99.8%' },
    { service: 'Processamento IA', status: 'online', uptime: '98.5%' },
    { service: 'Integração Drones', status: 'warning', uptime: '97.2%' },
    { service: 'Notificações', status: 'online', uptime: '99.7%' },
    { service: 'Backup Sistema', status: 'online', uptime: '100%' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'ativo':
      case 'online':
        return 'bg-green-600';
      case 'inativo':
      case 'offline':
        return 'bg-red-600';
      case 'manutencao':
      case 'warning':
        return 'bg-orange-600';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Configurações</h1>
        <p className="text-gray-600">Gestão do sistema, usuários e parâmetros operacionais</p>
      </div>

      {/* Status do Sistema */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Server className="w-5 h-5 mr-2 text-green-600" />
            Status do Sistema
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {systemStatus.map((service, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(service.status)}`}></div>
                  <span className="font-medium text-gray-900">{service.service}</span>
                </div>
                <div className="text-right">
                  <Badge className={getStatusColor(service.status)}>
                    {service.status === 'online' ? 'Online' : 
                     service.status === 'warning' ? 'Alerta' : 'Offline'}
                  </Badge>
                  <p className="text-xs text-gray-500 mt-1">{service.uptime}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Configurações do Sistema */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Settings className="w-5 h-5 mr-2 text-blue-600" />
            Configurações do Sistema
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {systemSettings.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{category.category}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {category.settings.map((setting, settingIndex) => (
                    <div key={settingIndex} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                      <div>
                        <p className="font-medium text-gray-900">{setting.name}</p>
                        <p className="text-sm text-gray-600">Valor atual: {setting.value}</p>
                      </div>
                      <Button size="sm" variant="outline">
                        <Edit className="w-3 h-3 mr-1" />
                        Editar
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Gestão de Usuários */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Users className="w-5 h-5 mr-2 text-purple-600" />
              Gestão de Usuários
            </CardTitle>
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              <UserPlus className="w-4 h-4 mr-1" />
              Novo Usuário
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.map((user, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{user.name}</h4>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <p className="text-xs text-gray-500">{user.role}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="text-right">
                    <Badge className={getStatusColor(user.status)}>
                      {user.status === 'ativo' ? 'Ativo' : 'Inativo'}
                    </Badge>
                    <p className="text-xs text-gray-500 mt-1">Último login: {user.lastLogin}</p>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Edit className="w-3 h-3" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Shield className="w-3 h-3" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Gestão de Drones */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Eye className="w-5 h-5 mr-2 text-orange-600" />
            Gestão de Drones
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {drones.map((drone, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-gray-900">{drone.id}</h4>
                    <p className="text-sm text-gray-600">{drone.model}</p>
                    <p className="text-xs text-gray-500">{drone.location}</p>
                  </div>
                  <Badge className={getStatusColor(drone.status)}>
                    {drone.status === 'ativo' ? 'Ativo' : 
                     drone.status === 'manutencao' ? 'Manutenção' : 'Inativo'}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-gray-600">Bateria:</p>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                        <div 
                          className={`h-2 rounded-full ${
                            drone.battery > 70 ? 'bg-green-500' : 
                            drone.battery > 30 ? 'bg-yellow-500' : 'bg-red-500'
                          }`}
                          style={{ width: `${drone.battery}%` }}
                        ></div>
                      </div>
                      <span className="font-semibold">{drone.battery}%</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-gray-600">Horas de Voo:</p>
                    <p className="font-semibold">{drone.flightHours}h</p>
                  </div>
                </div>
                
                <div className="mt-3 text-xs text-gray-500">
                  Última manutenção: {new Date(drone.lastMaintenance).toLocaleDateString('pt-BR')}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Configurações de Notificações */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bell className="w-5 h-5 mr-2 text-yellow-600" />
            Configurações de Notificações
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Alertas de Incêndio</h4>
                <p className="text-sm text-gray-600">Notificações imediatas para focos críticos</p>
              </div>
              <Badge className="bg-green-600">Ativado</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Relatórios de Saúde</h4>
                <p className="text-sm text-gray-600">Relatórios semanais de impacto na saúde</p>
              </div>
              <Badge className="bg-green-600">Ativado</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Manutenção de Equipamentos</h4>
                <p className="text-sm text-gray-600">Lembretes de manutenção preventiva</p>
              </div>
              <Badge className="bg-orange-600">Pausado</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
              <div>
                <h4 className="font-medium text-gray-900">Atualizações do Sistema</h4>
                <p className="text-sm text-gray-600">Notificações sobre atualizações e melhorias</p>
              </div>
              <Badge className="bg-green-600">Ativado</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Configuracoes;
