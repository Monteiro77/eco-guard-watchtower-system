
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, TrendingUp, Users } from 'lucide-react';

const HealthImpactChart = () => {
  const healthData = [
    { hour: '00:00', respiratorio: 12, cardiovascular: 8, emergencia: 3 },
    { hour: '04:00', respiratorio: 8, cardiovascular: 5, emergencia: 2 },
    { hour: '08:00', respiratorio: 25, cardiovascular: 15, emergencia: 7 },
    { hour: '12:00', respiratorio: 35, cardiovascular: 22, emergencia: 12 },
    { hour: '16:00', respiratorio: 42, cardiovascular: 28, emergencia: 15 },
    { hour: '20:00', respiratorio: 38, cardiovascular: 25, emergencia: 13 },
  ];

  const currentData = healthData[healthData.length - 1];
  const previousData = healthData[healthData.length - 2];

  const calculateTrend = (current: number, previous: number) => {
    const change = ((current - previous) / previous) * 100;
    return {
      value: Math.abs(change).toFixed(1),
      direction: change > 0 ? 'up' : change < 0 ? 'down' : 'stable'
    };
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Activity className="w-5 h-5 mr-2 text-red-600" />
          Impacto na Saúde Pública
        </CardTitle>
      </CardHeader>
      <CardContent>
        {/* Gráfico simulado */}
        <div className="mb-6">
          <div className="flex items-end justify-between h-32 border-b border-gray-200">
            {healthData.map((data, index) => (
              <div key={index} className="flex flex-col items-center space-y-1 flex-1">
                <div className="flex flex-col space-y-1 w-full max-w-6">
                  <div 
                    className="bg-red-500 rounded-t"
                    style={{ height: `${(data.respiratorio / 50) * 80}px` }}
                  ></div>
                  <div 
                    className="bg-orange-500"
                    style={{ height: `${(data.cardiovascular / 30) * 50}px` }}
                  ></div>
                  <div 
                    className="bg-purple-500 rounded-b"
                    style={{ height: `${(data.emergencia / 20) * 30}px` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-500 transform -rotate-45">
                  {data.hour}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Métricas atuais */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-red-500 rounded mr-2"></div>
              <span className="text-sm font-medium">Casos Respiratórios</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold">{currentData.respiratorio}</span>
              <Badge className={`${
                calculateTrend(currentData.respiratorio, previousData.respiratorio).direction === 'up' 
                  ? 'bg-red-100 text-red-800' 
                  : 'bg-green-100 text-green-800'
              }`}>
                <TrendingUp className="w-3 h-3 mr-1" />
                {calculateTrend(currentData.respiratorio, previousData.respiratorio).value}%
              </Badge>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-orange-500 rounded mr-2"></div>
              <span className="text-sm font-medium">Casos Cardiovasculares</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold">{currentData.cardiovascular}</span>
              <Badge className={`${
                calculateTrend(currentData.cardiovascular, previousData.cardiovascular).direction === 'up' 
                  ? 'bg-red-100 text-red-800' 
                  : 'bg-green-100 text-green-800'
              }`}>
                <TrendingUp className="w-3 h-3 mr-1" />
                {calculateTrend(currentData.cardiovascular, previousData.cardiovascular).value}%
              </Badge>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-purple-500 rounded mr-2"></div>
              <span className="text-sm font-medium">Emergências</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="font-bold">{currentData.emergencia}</span>
              <Badge className={`${
                calculateTrend(currentData.emergencia, previousData.emergencia).direction === 'up' 
                  ? 'bg-red-100 text-red-800' 
                  : 'bg-green-100 text-green-800'
              }`}>
                <TrendingUp className="w-3 h-3 mr-1" />
                {calculateTrend(currentData.emergencia, previousData.emergencia).value}%
              </Badge>
            </div>
          </div>
        </div>

        <div className="mt-4 p-3 bg-amber-50 border border-amber-200 rounded-lg">
          <div className="flex items-center">
            <Users className="w-4 h-4 text-amber-600 mr-2" />
            <span className="text-sm font-medium text-amber-800">Previsão:</span>
          </div>
          <p className="text-sm text-amber-700 mt-1">
            Aumento esperado de 25% nos atendimentos nas próximas 6 horas devido à deterioração da qualidade do ar.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default HealthImpactChart;
