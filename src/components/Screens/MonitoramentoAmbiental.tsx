
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Thermometer, 
  Wind, 
  Droplets, 
  Sun, 
  Cloud, 
  Eye,
  Activity,
  TrendingUp,
  TrendingDown
} from 'lucide-react';

const MonitoramentoAmbiental = () => {
  const environmentalData = [
    {
      station: 'Estação Centro - Cuiabá',
      temperature: 38,
      humidity: 25,
      windSpeed: 18,
      airQuality: 156,
      precipitation: 0,
      status: 'critical',
      lastUpdate: '5 min atrás'
    },
    {
      station: 'Estação Pantanal Sul',
      temperature: 35,
      humidity: 45,
      windSpeed: 12,
      airQuality: 89,
      precipitation: 2,
      status: 'warning',
      lastUpdate: '3 min atrás'
    },
    {
      station: 'Estação Chapada Norte',
      temperature: 42,
      humidity: 15,
      windSpeed: 25,
      airQuality: 201,
      precipitation: 0,
      status: 'critical',
      lastUpdate: '1 min atrás'
    },
    {
      station: 'Estação Várzea Grande',
      temperature: 36,
      humidity: 35,
      windSpeed: 8,
      airQuality: 78,
      precipitation: 0,
      status: 'normal',
      lastUpdate: '7 min atrás'
    }
  ];

  const droneData = [
    {
      id: 'DRONE-001',
      location: 'Setor Norte - Chapada',
      battery: 85,
      temperature: 41,
      humidity: 18,
      fireDetected: true,
      wildlifeCount: 3,
      status: 'active'
    },
    {
      id: 'DRONE-002',
      location: 'Setor Sul - Pantanal',
      battery: 62,
      temperature: 36,
      humidity: 42,
      fireDetected: false,
      wildlifeCount: 12,
      status: 'active'
    },
    {
      id: 'DRONE-003',
      location: 'Setor Leste - Cerrado',
      battery: 91,
      temperature: 39,
      humidity: 28,
      fireDetected: true,
      wildlifeCount: 7,
      status: 'active'
    },
    {
      id: 'DRONE-004',
      location: 'Setor Oeste - Fazendas',
      battery: 23,
      temperature: 37,
      humidity: 31,
      fireDetected: false,
      wildlifeCount: 1,
      status: 'returning'
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

  const getAirQualityLevel = (aqi: number) => {
    if (aqi <= 50) return { level: 'Bom', color: 'bg-green-600' };
    if (aqi <= 100) return { level: 'Moderado', color: 'bg-yellow-600' };
    if (aqi <= 150) return { level: 'Não Saudável', color: 'bg-orange-600' };
    return { level: 'Perigoso', color: 'bg-red-600' };
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Monitoramento Ambiental</h1>
        <p className="text-gray-600">Dados em tempo real de estações meteorológicas e drones de monitoramento</p>
      </div>

      {/* Resumo Geral */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-600">Temp. Máxima</p>
                <p className="text-xl font-bold text-red-700">42°C</p>
              </div>
              <Thermometer className="w-6 h-6 text-red-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-blue-600">Umidade Mín.</p>
                <p className="text-xl font-bold text-blue-700">15%</p>
              </div>
              <Droplets className="w-6 h-6 text-blue-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-gray-200 bg-gray-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Vento Máx.</p>
                <p className="text-xl font-bold text-gray-700">25 km/h</p>
              </div>
              <Wind className="w-6 h-6 text-gray-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-red-600">AQI Crítico</p>
                <p className="text-xl font-bold text-red-700">201</p>
              </div>
              <Activity className="w-6 h-6 text-red-600" />
            </div>
          </CardContent>
        </Card>
        
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-green-600">Drones Ativos</p>
                <p className="text-xl font-bold text-green-700">4/6</p>
              </div>
              <Eye className="w-6 h-6 text-green-600" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Estações Meteorológicas */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Cloud className="w-5 h-5 mr-2 text-blue-600" />
            Estações Meteorológicas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {environmentalData.map((station, index) => (
              <Card key={index} className={getStatusColor(station.status)}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-semibold text-gray-900">{station.station}</h4>
                    <Badge className={getAirQualityLevel(station.airQuality).color}>
                      {getAirQualityLevel(station.airQuality).level}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 mb-3">
                    <div className="text-center">
                      <Thermometer className="w-4 h-4 mx-auto mb-1 text-red-500" />
                      <p className="text-xs text-gray-600">Temperatura</p>
                      <p className="font-semibold">{station.temperature}°C</p>
                    </div>
                    <div className="text-center">
                      <Droplets className="w-4 h-4 mx-auto mb-1 text-blue-500" />
                      <p className="text-xs text-gray-600">Umidade</p>
                      <p className="font-semibold">{station.humidity}%</p>
                    </div>
                    <div className="text-center">
                      <Wind className="w-4 h-4 mx-auto mb-1 text-gray-500" />
                      <p className="text-xs text-gray-600">Vento</p>
                      <p className="font-semibold">{station.windSpeed} km/h</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">AQI: {station.airQuality}</span>
                    <span className="text-gray-500">{station.lastUpdate}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Monitoramento por Drones */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Eye className="w-5 h-5 mr-2 text-green-600" />
            Monitoramento por Drones
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {droneData.map((drone, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold text-gray-900">{drone.id}</h4>
                      <p className="text-sm text-gray-600">{drone.location}</p>
                    </div>
                    <Badge className={
                      drone.status === 'active' ? 'bg-green-600' : 
                      drone.status === 'returning' ? 'bg-yellow-600' : 'bg-gray-600'
                    }>
                      {drone.status === 'active' ? 'Ativo' : 
                       drone.status === 'returning' ? 'Retornando' : 'Inativo'}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div>
                      <p className="text-xs text-gray-600">Bateria</p>
                      <div className="flex items-center">
                        <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                          <div 
                            className={`h-2 rounded-full ${
                              drone.battery > 50 ? 'bg-green-500' : 
                              drone.battery > 20 ? 'bg-yellow-500' : 'bg-red-500'
                            }`}
                            style={{ width: `${drone.battery}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold">{drone.battery}%</span>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Temperatura</p>
                      <p className="font-semibold">{drone.temperature}°C</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2 text-center text-sm">
                    <div>
                      <p className="text-xs text-gray-600">Umidade</p>
                      <p className="font-semibold">{drone.humidity}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Fogo</p>
                      <p className={`font-semibold ${drone.fireDetected ? 'text-red-600' : 'text-green-600'}`}>
                        {drone.fireDetected ? '🔥 Sim' : '✅ Não'}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Fauna</p>
                      <p className="font-semibold">🦌 {drone.wildlifeCount}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Gráfico de Tendências */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
            Tendências Ambientais (Últimas 24h)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Gráfico de tendências ambientais seria renderizado aqui</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MonitoramentoAmbiental;
