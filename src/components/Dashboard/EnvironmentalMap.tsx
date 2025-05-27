
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Map, Layers, Filter, Maximize2 } from 'lucide-react';

const EnvironmentalMap = () => {
  const mapData = {
    activeFires: 8,
    airQualityStations: 15,
    dronesActive: 4,
    riskAreas: 3
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center">
            <Map className="w-5 h-5 mr-2 text-blue-600" />
            Mapa de Monitoramento
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="sm">
              <Layers className="w-4 h-4 mr-1" />
              Camadas
            </Button>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-1" />
              Filtros
            </Button>
            <Button variant="outline" size="sm">
              <Maximize2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Simulação de mapa */}
        <div className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-lg h-64 mb-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-blue-200/30"></div>
          
          {/* Focos de incêndio simulados */}
          <div className="absolute top-8 left-12 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <div className="absolute top-16 right-20 w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-4 h-4 bg-red-600 rounded-full animate-pulse"></div>
          
          {/* Estações de monitoramento */}
          <div className="absolute top-12 right-12 w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="absolute bottom-12 right-16 w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="absolute top-20 left-32 w-2 h-2 bg-blue-500 rounded-full"></div>
          
          {/* Drones ativos */}
          <div className="absolute top-6 right-32 w-1 h-1 bg-green-500 rounded-full animate-bounce"></div>
          <div className="absolute bottom-8 left-8 w-1 h-1 bg-green-500 rounded-full animate-bounce"></div>
          
          <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg p-2 text-xs">
            <div className="text-gray-600">Última atualização: 30 seg atrás</div>
          </div>
        </div>
        
        {/* Legenda do mapa */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                <span className="text-sm">Focos Ativos</span>
              </div>
              <Badge variant="destructive">{mapData.activeFires}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                <span className="text-sm">Estações de Ar</span>
              </div>
              <Badge variant="secondary">{mapData.airQualityStations}</Badge>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                <span className="text-sm">Drones Ativos</span>
              </div>
              <Badge className="bg-green-600">{mapData.dronesActive}</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                <span className="text-sm">Áreas de Risco</span>
              </div>
              <Badge className="bg-orange-600">{mapData.riskAreas}</Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EnvironmentalMap;
