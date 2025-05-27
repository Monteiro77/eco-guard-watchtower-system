
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Map, Layers, Filter, Maximize2, Satellite, ZoomIn, ZoomOut } from 'lucide-react';

const MapaInterativo = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Mapa Interativo</h1>
        <p className="text-gray-600">Visualização em tempo real de focos de queimadas e monitoramento ambiental</p>
      </div>

      {/* Controles do Mapa */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Map className="w-5 h-5 mr-2 text-blue-600" />
              Controles do Mapa
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
                <Satellite className="w-4 h-4 mr-1" />
                Satélite
              </Button>
              <Button variant="outline" size="sm">
                <Maximize2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {/* Mapa Principal Expandido */}
          <div className="relative bg-gradient-to-br from-green-100 to-blue-100 rounded-lg h-96 mb-4 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-green-200/30 to-blue-200/30"></div>
            
            {/* Controles de Zoom */}
            <div className="absolute top-4 right-4 flex flex-col space-y-2">
              <Button size="sm" variant="secondary">
                <ZoomIn className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="secondary">
                <ZoomOut className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Focos de incêndio simulados */}
            <div className="absolute top-12 left-16 w-4 h-4 bg-red-500 rounded-full animate-pulse shadow-lg"></div>
            <div className="absolute top-24 right-24 w-3 h-3 bg-orange-500 rounded-full animate-pulse shadow-lg"></div>
            <div className="absolute bottom-32 left-32 w-5 h-5 bg-red-600 rounded-full animate-pulse shadow-lg"></div>
            <div className="absolute top-40 center w-3 h-3 bg-red-400 rounded-full animate-pulse shadow-lg"></div>
            
            {/* Estações de monitoramento */}
            <div className="absolute top-20 right-20 w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
            <div className="absolute bottom-20 right-24 w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
            <div className="absolute top-32 left-40 w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
            <div className="absolute bottom-40 center w-3 h-3 bg-blue-500 rounded-full shadow-lg"></div>
            
            {/* Drones ativos */}
            <div className="absolute top-8 right-40 w-2 h-2 bg-green-500 rounded-full animate-bounce shadow-lg"></div>
            <div className="absolute bottom-12 left-12 w-2 h-2 bg-green-500 rounded-full animate-bounce shadow-lg"></div>
            <div className="absolute top-60 left-60 w-2 h-2 bg-green-500 rounded-full animate-bounce shadow-lg"></div>
            
            {/* Áreas de risco */}
            <div className="absolute top-16 left-20 w-8 h-8 border-2 border-orange-400 rounded-full bg-orange-200/50"></div>
            <div className="absolute bottom-24 right-32 w-12 h-12 border-2 border-red-400 rounded-full bg-red-200/50"></div>
            
            <div className="absolute bottom-4 left-4 bg-white/90 rounded-lg p-3 text-sm">
              <div className="text-gray-600">Última atualização: 15 seg atrás</div>
              <div className="text-xs text-gray-500">Zoom: 12x | Lat: -15.7942, Lng: -56.0675</div>
            </div>
          </div>
          
          {/* Legenda Expandida */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium">Focos Críticos</span>
                </div>
                <Badge variant="destructive">5</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-orange-500 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm font-medium">Focos Moderados</span>
                </div>
                <Badge className="bg-orange-600">3</Badge>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Estações de Ar</span>
                </div>
                <Badge variant="secondary">15</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded-full mr-2 animate-bounce"></div>
                  <span className="text-sm font-medium">Drones Ativos</span>
                </div>
                <Badge className="bg-green-600">4</Badge>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 border-2 border-orange-400 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Áreas de Risco</span>
                </div>
                <Badge className="bg-orange-600">3</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Hospitais</span>
                </div>
                <Badge className="bg-purple-600">8</Badge>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Equipes</span>
                </div>
                <Badge className="bg-yellow-600">12</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">Estações Meteo</span>
                </div>
                <Badge variant="secondary">6</Badge>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MapaInterativo;
