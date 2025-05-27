import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  Thermometer, 
  Wind, 
  Droplets, 
  Eye, 
  Plus, 
  Settings,
  BarChart3,
  MapPin,
  Battery,
  Signal,
  Filter,
  Download
} from 'lucide-react';
import DroneModal from '@/components/Modals/DroneModal';
import EnvironmentalStationModal from '@/components/Modals/EnvironmentalStationModal';
import FilterModal from '@/components/Modals/FilterModal';
import ExportModal from '@/components/Modals/ExportModal';

const MonitoramentoAmbiental = () => {
  const [droneModalState, setDroneModalState] = useState({
    isOpen: false,
    mode: 'create' as 'create' | 'edit' | 'view',
    data: null as any,
  });

  const [stationModalState, setStationModalState] = useState({
    isOpen: false,
    mode: 'create' as 'create' | 'edit' | 'view',
    data: null as any,
  });

  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [exportModalOpen, setExportModalOpen] = useState(false);

  const openDroneModal = (mode: 'create' | 'edit' | 'view', data: any = null) => {
    setDroneModalState({ isOpen: true, mode, data });
  };

  const closeDroneModal = () => {
    setDroneModalState({ isOpen: false, mode: 'create', data: null });
  };

  const openStationModal = (mode: 'create' | 'edit' | 'view', data: any = null) => {
    setStationModalState({ isOpen: true, mode, data });
  };

  const closeStationModal = () => {
    setStationModalState({ isOpen: false, mode: 'create', data: null });
  };

  const handleApplyFilters = (filters: any) => {
    console.log('Aplicando filtros:', filters);
  };

  const drones = [
    {
      id: 1,
      name: 'Drone Alpha',
      model: 'DJI Mavic 3',
      status: 'Ativo',
      battery: 85,
      location: 'Setor Norte',
      signal: 'Forte',
    },
    {
      id: 2,
      name: 'Drone Beta',
      model: 'DJI Air 2S',
      status: 'Patrulhando',
      battery: 72,
      location: 'Zona Rural',
      signal: 'Médio',
    },
    {
      id: 3,
      name: 'Drone Gamma',
      model: 'DJI Mini 3',
      status: 'Manutenção',
      battery: 15,
      location: 'Base',
      signal: 'Forte',
    },
  ];

  const sensors = [
    { id: 1, name: 'Sensor Norte', temp: 34, humidity: 45, air_quality: 156, status: 'online' },
    { id: 2, name: 'Sensor Sul', temp: 32, humidity: 52, air_quality: 142, status: 'online' },
    { id: 3, name: 'Sensor Leste', temp: 35, humidity: 38, air_quality: 189, status: 'offline' },
    { id: 4, name: 'Sensor Oeste', temp: 33, humidity: 48, air_quality: 134, status: 'online' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativo':
      case 'online': return 'bg-green-100 text-green-800';
      case 'Patrulhando': return 'bg-blue-100 text-blue-800';
      case 'Manutenção':
      case 'offline': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getAirQualityStatus = (aqi: number) => {
    if (aqi <= 50) return { label: 'Bom', color: 'bg-green-500' };
    if (aqi <= 100) return { label: 'Moderado', color: 'bg-yellow-500' };
    if (aqi <= 150) return { label: 'Não Saudável', color: 'bg-orange-500' };
    return { label: 'Perigoso', color: 'bg-red-500' };
  };

  const getBatteryColor = (battery: number) => {
    if (battery > 50) return 'text-green-600';
    if (battery > 20) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Monitoramento Ambiental</h1>
          <p className="text-gray-600">Dados em tempo real de sensores e drones de monitoramento</p>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" onClick={() => setFilterModalOpen(true)}>
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>
          <Button variant="outline" onClick={() => setExportModalOpen(true)}>
            <Download className="w-4 h-4 mr-2" />
            Exportar
          </Button>
          <Button onClick={() => openDroneModal('create')}>
            <Plus className="w-4 h-4 mr-2" />
            Adicionar Drone
          </Button>
        </div>
      </div>

      {/* Métricas ambientais */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Temperatura Média</p>
                <p className="text-2xl font-bold text-orange-600">33.5°C</p>
                <p className="text-xs text-gray-500">+2.3° vs ontem</p>
              </div>
              <Thermometer className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Umidade</p>
                <p className="text-2xl font-bold text-blue-600">45.8%</p>
                <p className="text-xs text-gray-500">-5.2% vs ontem</p>
              </div>
              <Droplets className="w-8 h-8 text-blue-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Qualidade do Ar</p>
                <p className="text-2xl font-bold text-red-600">156 AQI</p>
                <p className="text-xs text-gray-500">Não saudável</p>
              </div>
              <Wind className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Sensores Ativos</p>
                <p className="text-2xl font-bold text-green-600">12/15</p>
                <p className="text-xs text-gray-500">3 offline</p>
              </div>
              <BarChart3 className="w-8 h-8 text-green-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Drones ativos */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Eye className="w-5 h-5 mr-2 text-blue-600" />
            Drones de Monitoramento
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {drones.map((drone) => (
              <Card key={drone.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold">{drone.name}</h3>
                      <p className="text-sm text-gray-600">{drone.model}</p>
                    </div>
                    <Badge className={getStatusColor(drone.status)}>
                      {drone.status}
                    </Badge>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Battery className={`w-4 h-4 mr-2 ${getBatteryColor(drone.battery)}`} />
                        <span className="text-sm">Bateria</span>
                      </div>
                      <span className={`text-sm font-medium ${getBatteryColor(drone.battery)}`}>
                        {drone.battery}%
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-sm">Localização</span>
                      </div>
                      <span className="text-sm">{drone.location}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Signal className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-sm">Sinal</span>
                      </div>
                      <span className="text-sm">{drone.signal}</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2 mt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => openDroneModal('view', drone)}
                    >
                      Ver Detalhes
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => openDroneModal('edit', drone)}
                    >
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Sensores ambientais */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Estações de Monitoramento</CardTitle>
            <Button onClick={() => openStationModal('create')} size="sm">
              <Plus className="w-4 h-4 mr-2" />
              Nova Estação
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Sensor</TableHead>
                <TableHead>Temperatura</TableHead>
                <TableHead>Umidade</TableHead>
                <TableHead>Qualidade do Ar</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sensors.map((sensor) => {
                const airQuality = getAirQualityStatus(sensor.air_quality);
                return (
                  <TableRow key={sensor.id}>
                    <TableCell className="font-medium">{sensor.name}</TableCell>
                    <TableCell>{sensor.temp}°C</TableCell>
                    <TableCell>{sensor.humidity}%</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        <span>{sensor.air_quality}</span>
                        <Badge className={`${airQuality.color} text-white`}>
                          {airQuality.label}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge className={getStatusColor(sensor.status)}>
                        {sensor.status === 'online' ? 'Online' : 'Offline'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex space-x-1">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => openStationModal('view', sensor)}
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => openStationModal('edit', sensor)}
                        >
                          <Settings className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <DroneModal
        isOpen={droneModalState.isOpen}
        onClose={closeDroneModal}
        droneData={droneModalState.data}
        mode={droneModalState.mode}
      />

      <EnvironmentalStationModal
        isOpen={stationModalState.isOpen}
        onClose={closeStationModal}
        stationData={stationModalState.data}
        mode={stationModalState.mode}
      />

      <FilterModal
        isOpen={filterModalOpen}
        onClose={() => setFilterModalOpen(false)}
        onApplyFilters={handleApplyFilters}
        filterType="general"
      />

      <ExportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
        dataType="environmental"
      />
    </div>
  );
};

export default MonitoramentoAmbiental;
