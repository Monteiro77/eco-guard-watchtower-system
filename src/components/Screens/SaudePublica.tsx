
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Activity, 
  Users, 
  Pill, 
  Bed,
  TrendingUp,
  AlertTriangle,
  Hospital,
  Stethoscope
} from 'lucide-react';

const SaudePublica = () => {
  const healthData = [
    {
      hospital: 'Hospital Regional de Cuiabá',
      respiratoryCases: 45,
      cardiovascularCases: 28,
      emergencies: 12,
      capacity: 85,
      oxygenLevel: 78,
      medicationStock: 65,
      status: 'warning',
      trend: '+35%'
    },
    {
      hospital: 'Santa Casa de Várzea Grande',
      respiratoryCases: 32,
      cardiovascularCases: 19,
      emergencies: 8,
      capacity: 72,
      oxygenLevel: 91,
      medicationStock: 82,
      status: 'normal',
      trend: '+18%'
    },
    {
      hospital: 'Hospital Municipal Pantanal',
      respiratoryCases: 58,
      cardiovascularCases: 35,
      emergencies: 18,
      capacity: 95,
      oxygenLevel: 45,
      medicationStock: 32,
      status: 'critical',
      trend: '+68%'
    },
    {
      hospital: 'UPA Norte Cuiabá',
      respiratoryCases: 23,
      cardiovascularCases: 14,
      emergencies: 6,
      capacity: 68,
      oxygenLevel: 88,
      medicationStock: 74,
      status: 'normal',
      trend: '+12%'
    }
  ];

  const medicationAlerts = [
    {
      medication: 'Broncodilatadores',
      currentStock: 23,
      minimumStock: 50,
      urgency: 'high',
      estimatedDepletion: '2 dias'
    },
    {
      medication: 'Corticosteroides',
      currentStock: 12,
      minimumStock: 30,
      urgency: 'critical',
      estimatedDepletion: '1 dia'
    },
    {
      medication: 'Antibióticos Respiratórios',
      currentStock: 45,
      minimumStock: 40,
      urgency: 'medium',
      estimatedDepletion: '5 dias'
    },
    {
      medication: 'Oxigênio Medicinal',
      currentStock: 67,
      minimumStock: 80,
      urgency: 'medium',
      estimatedDepletion: '3 dias'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'border-red-500 bg-red-50';
      case 'warning': return 'border-orange-500 bg-orange-50';
      case 'normal': return 'border-green-500 bg-green-50';
      default: return 'border-gray-200 bg-white';
    }
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'bg-red-600';
      case 'high': return 'bg-orange-600';
      case 'medium': return 'bg-yellow-600';
      case 'low': return 'bg-green-600';
      default: return 'bg-gray-600';
    }
  };

  const getCapacityColor = (capacity: number) => {
    if (capacity >= 90) return 'bg-red-500';
    if (capacity >= 75) return 'bg-orange-500';
    if (capacity >= 50) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const totalRespiratory = healthData.reduce((sum, hospital) => sum + hospital.respiratoryCases, 0);
  const totalCardiovascular = healthData.reduce((sum, hospital) => sum + hospital.cardiovascularCases, 0);
  const totalEmergencies = healthData.reduce((sum, hospital) => sum + hospital.emergencies, 0);
  const averageCapacity = Math.round(healthData.reduce((sum, hospital) => sum + hospital.capacity, 0) / healthData.length);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Saúde Pública</h1>
        <p className="text-gray-600">Monitoramento de impactos na saúde e gestão de recursos hospitalares</p>
      </div>

      {/* Resumo Geral de Saúde */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-600">Casos Respiratórios</p>
                <p className="text-2xl font-bold text-red-700">{totalRespiratory}</p>
                <p className="text-xs text-red-500">Últimas 24h</p>
              </div>
              <Activity className="w-8 h-8 text-red-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-orange-600">Cardiovasculares</p>
                <p className="text-2xl font-bold text-orange-700">{totalCardiovascular}</p>
                <p className="text-xs text-orange-500">Últimas 24h</p>
              </div>
              <Heart className="w-8 h-8 text-orange-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-purple-600">Emergências</p>
                <p className="text-2xl font-bold text-purple-700">{totalEmergencies}</p>
                <p className="text-xs text-purple-500">Últimas 24h</p>
              </div>
              <AlertTriangle className="w-8 h-8 text-purple-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600">Ocupação Média</p>
                <p className="text-2xl font-bold text-blue-700">{averageCapacity}%</p>
                <p className="text-xs text-blue-500">Hospitais</p>
              </div>
              <Bed className="w-8 h-8 text-blue-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Status dos Hospitais */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Hospital className="w-5 h-5 mr-2 text-blue-600" />
            Status dos Hospitais
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {healthData.map((hospital, index) => (
              <Card key={index} className={getStatusColor(hospital.status)}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{hospital.hospital}</h4>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-blue-600">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {hospital.trend}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 mb-4">
                    <div className="text-center">
                      <Activity className="w-4 h-4 mx-auto mb-1 text-red-500" />
                      <p className="text-xs text-gray-600">Respiratório</p>
                      <p className="font-semibold text-red-700">{hospital.respiratoryCases}</p>
                    </div>
                    <div className="text-center">
                      <Heart className="w-4 h-4 mx-auto mb-1 text-orange-500" />
                      <p className="text-xs text-gray-600">Cardiovascular</p>
                      <p className="font-semibold text-orange-700">{hospital.cardiovascularCases}</p>
                    </div>
                    <div className="text-center">
                      <AlertTriangle className="w-4 h-4 mx-auto mb-1 text-purple-500" />
                      <p className="text-xs text-gray-600">Emergências</p>
                      <p className="font-semibold text-purple-700">{hospital.emergencies}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Ocupação</span>
                        <span className="font-semibold">{hospital.capacity}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${getCapacityColor(hospital.capacity)}`}
                          style={{ width: `${hospital.capacity}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-600">Oxigênio: </span>
                        <span className={`font-semibold ${hospital.oxygenLevel < 60 ? 'text-red-600' : hospital.oxygenLevel < 80 ? 'text-orange-600' : 'text-green-600'}`}>
                          {hospital.oxygenLevel}%
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-600">Medicamentos: </span>
                        <span className={`font-semibold ${hospital.medicationStock < 50 ? 'text-red-600' : hospital.medicationStock < 70 ? 'text-orange-600' : 'text-green-600'}`}>
                          {hospital.medicationStock}%
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Alertas de Medicamentos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Pill className="w-5 h-5 mr-2 text-orange-600" />
            Alertas de Estoque de Medicamentos
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {medicationAlerts.map((alert, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Pill className="w-5 h-5 text-blue-600" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{alert.medication}</h4>
                    <p className="text-sm text-gray-600">
                      Estoque atual: {alert.currentStock} unidades (mín: {alert.minimumStock})
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Esgota em:</p>
                    <p className="font-semibold">{alert.estimatedDepletion}</p>
                  </div>
                  <Badge className={`${getUrgencyColor(alert.urgency)} text-white`}>
                    {alert.urgency === 'critical' ? 'Crítico' :
                     alert.urgency === 'high' ? 'Alto' :
                     alert.urgency === 'medium' ? 'Médio' : 'Baixo'}
                  </Badge>
                  <Button size="sm" variant="outline">
                    Solicitar
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Previsão de Demanda */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Stethoscope className="w-5 h-5 mr-2 text-green-600" />
            Previsão de Demanda (Próximas 24h)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mr-2" />
              <h4 className="font-semibold text-amber-800">Alerta de Previsão</h4>
            </div>
            <p className="text-amber-700 mb-3">
              Com base na deterioração da qualidade do ar (AQI: 156-201), prevê-se:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-red-700">+40% casos respiratórios</p>
                <p className="text-gray-600">Estimativa: 180-220 novos casos</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-orange-700">+25% casos cardiovasculares</p>
                <p className="text-gray-600">Estimativa: 120-140 novos casos</p>
              </div>
              <div className="bg-white rounded p-3">
                <p className="font-semibold text-purple-700">+60% emergências</p>
                <p className="text-gray-600">Estimativa: 65-75 emergências</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SaudePublica;
