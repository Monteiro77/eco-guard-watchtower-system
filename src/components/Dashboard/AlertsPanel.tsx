
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, MapPin, Clock } from 'lucide-react';

interface Alert {
  id: string;
  type: 'fire' | 'air_quality' | 'health' | 'emergency';
  title: string;
  location: string;
  time: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  description: string;
}

const AlertsPanel = () => {
  const alerts: Alert[] = [
    {
      id: '1',
      type: 'fire',
      title: 'Foco de Incêndio Detectado',
      location: 'Parque Nacional da Chapada, MT',
      time: '2 min atrás',
      severity: 'critical',
      description: 'Drone detectou foco ativo com alta propagação'
    },
    {
      id: '2',
      type: 'air_quality',
      title: 'Qualidade do Ar Crítica',
      location: 'Centro de Cuiabá, MT',
      time: '15 min atrás',
      severity: 'high',
      description: 'PM2.5 acima de 150 μg/m³'
    },
    {
      id: '3',
      type: 'health',
      title: 'Aumento de Atendimentos',
      location: 'Hospital Regional, MT',
      time: '1h atrás',
      severity: 'medium',
      description: 'Aumento de 40% em casos respiratórios'
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

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle className="flex items-center">
          <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
          Alertas Ativos
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => (
          <div 
            key={alert.id}
            className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center">
                <span className="text-lg mr-2">{getTypeIcon(alert.type)}</span>
                <div>
                  <h4 className="font-semibold text-gray-900">{alert.title}</h4>
                  <div className="flex items-center text-sm text-gray-600 mt-1">
                    <MapPin className="w-3 h-3 mr-1" />
                    <span>{alert.location}</span>
                  </div>
                </div>
              </div>
              <Badge className={`text-white ${getSeverityColor(alert.severity)}`}>
                {alert.severity}
              </Badge>
            </div>
            <p className="text-sm text-gray-700 mb-3">{alert.description}</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center text-xs text-gray-500">
                <Clock className="w-3 h-3 mr-1" />
                <span>{alert.time}</span>
              </div>
              <Button size="sm" variant="outline">
                Ver Detalhes
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default AlertsPanel;
