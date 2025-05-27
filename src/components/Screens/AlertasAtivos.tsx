
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, MapPin, Clock, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const AlertasAtivos = () => {
  const alerts = [
    {
      id: '1',
      type: 'fire',
      title: 'Foco de Incêndio de Grande Porte',
      location: 'Parque Nacional da Chapada, MT',
      time: '2 min atrás',
      severity: 'critical',
      description: 'Drone detectou foco ativo com alta propagação. Vento de 25km/h favorecendo expansão.',
      coordinates: '-15.4567, -56.1234'
    },
    {
      id: '2',
      type: 'air_quality',
      title: 'Qualidade do Ar em Nível Crítico',
      location: 'Centro de Cuiabá, MT',
      time: '8 min atrás',
      severity: 'critical',
      description: 'PM2.5 acima de 200 μg/m³. População deve evitar atividades ao ar livre.',
      coordinates: '-15.6014, -56.0979'
    },
    {
      id: '3',
      type: 'health',
      title: 'Aumento Significativo de Atendimentos',
      location: 'Hospital Regional, MT',
      time: '15 min atrás',
      severity: 'high',
      description: 'Aumento de 60% em casos respiratórios. Solicitando reforço de medicamentos.',
      coordinates: '-15.5989, -56.0666'
    },
    {
      id: '4',
      type: 'fire',
      title: 'Novo Foco Detectado',
      location: 'Fazenda São João, MT',
      time: '32 min atrás',
      severity: 'high',
      description: 'Foco inicial detectado por satélite. Equipe de drones despachada para verificação.',
      coordinates: '-15.3421, -56.2876'
    },
    {
      id: '5',
      type: 'emergency',
      title: 'Evacuação Preventiva',
      location: 'Vila Rural Pantanal, MT',
      time: '45 min atrás',
      severity: 'medium',
      description: 'Iniciada evacuação preventiva de 150 famílias devido proximidade com área de risco.',
      coordinates: '-15.7123, -56.4567'
    },
    {
      id: '6',
      type: 'air_quality',
      title: 'Degradação da Qualidade do Ar',
      location: 'Várzea Grande, MT',
      time: '1h atrás',
      severity: 'medium',
      description: 'PM10 acima do recomendado. Grupos sensíveis devem tomar precauções.',
      coordinates: '-15.6468, -56.1326'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-600 hover:bg-red-700';
      case 'high': return 'bg-orange-600 hover:bg-orange-700';
      case 'medium': return 'bg-yellow-600 hover:bg-yellow-700';
      case 'low': return 'bg-blue-600 hover:bg-blue-700';
      default: return 'bg-gray-600 hover:bg-gray-700';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'fire': return '🔥';
      case 'air_quality': return '🌫️';
      case 'health': return '🏥';
      case 'emergency': return '🚨';
      default: return '⚠️';
    }
  };

  const criticalAlerts = alerts.filter(alert => alert.severity === 'critical').length;
  const highAlerts = alerts.filter(alert => alert.severity === 'high').length;
  const mediumAlerts = alerts.filter(alert => alert.severity === 'medium').length;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Alertas Ativos</h1>
        <p className="text-gray-600">Monitoramento em tempo real de alertas críticos e emergências</p>
      </div>

      {/* Resumo de Alertas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-600">Críticos</p>
                <p className="text-2xl font-bold text-red-700">{criticalAlerts}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-600">Altos</p>
                <p className="text-2xl font-bold text-orange-700">{highAlerts}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-yellow-600">Médios</p>
                <p className="text-2xl font-bold text-yellow-700">{mediumAlerts}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-yellow-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-gray-200 bg-gray-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total</p>
                <p className="text-2xl font-bold text-gray-700">{alerts.length}</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-gray-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filtros e Busca */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Filtros e Busca</CardTitle>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Buscar alertas..."
                  className="pl-10 w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-1" />
                Filtros
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Lista de Alertas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
            Todos os Alertas Ativos
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {alerts.map((alert) => (
            <div 
              key={alert.id}
              className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{getTypeIcon(alert.type)}</span>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 text-lg">{alert.title}</h4>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{alert.location}</span>
                      <span className="mx-2">•</span>
                      <span className="text-xs">{alert.coordinates}</span>
                    </div>
                  </div>
                </div>
                <Badge className={`text-white ${getSeverityColor(alert.severity)}`}>
                  {alert.severity}
                </Badge>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">{alert.description}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  <span>{alert.time}</span>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    Ver no Mapa
                  </Button>
                  <Button size="sm" variant="outline">
                    Ver Detalhes
                  </Button>
                  <Button size="sm" className="bg-green-600 hover:bg-green-700">
                    Responder
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default AlertasAtivos;
