
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { 
  Heart, 
  Users, 
  Activity, 
  Stethoscope,
  Plus,
  TrendingUp,
  AlertTriangle,
  Building,
  Pill
} from 'lucide-react';
import HealthReportModal from '@/components/Modals/HealthReportModal';

const SaudePublica = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: 'create' as 'create' | 'edit' | 'view',
    data: null as any,
  });

  const openModal = (mode: 'create' | 'edit' | 'view', data: any = null) => {
    setModalState({ isOpen: true, mode, data });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, mode: 'create', data: null });
  };

  const healthData = [
    {
      id: 1,
      hospital: 'Hospital Central',
      respiratoryPatients: 45,
      cardiovascularPatients: 23,
      burnPatients: 8,
      capacity: 85,
      oxygenLevel: 72,
      status: 'Alta Demanda',
    },
    {
      id: 2,
      hospital: 'Hospital Regional Norte',
      respiratoryPatients: 32,
      cardiovascularPatients: 18,
      burnPatients: 5,
      capacity: 67,
      oxygenLevel: 89,
      status: 'Normal',
    },
    {
      id: 3,
      hospital: 'UBS Centro',
      respiratoryPatients: 28,
      cardiovascularPatients: 12,
      burnPatients: 2,
      capacity: 78,
      oxygenLevel: 94,
      status: 'Normal',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Alta Demanda': return 'bg-red-100 text-red-800';
      case 'Normal': return 'bg-green-100 text-green-800';
      case 'Atenção': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCapacityColor = (capacity: number) => {
    if (capacity >= 80) return 'text-red-600';
    if (capacity >= 60) return 'text-yellow-600';
    return 'text-green-600';
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Saúde Pública</h1>
          <p className="text-gray-600">Monitoramento de impactos na saúde e capacidade hospitalar</p>
        </div>
        <Button onClick={() => openModal('create')}>
          <Plus className="w-4 h-4 mr-2" />
          Novo Relatório
        </Button>
      </div>

      {/* Métricas de saúde */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Atendimentos Respiratórios</p>
                <p className="text-2xl font-bold text-red-600">127</p>
                <p className="text-xs text-green-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +35% vs ontem
                </p>
              </div>
              <Activity className="w-8 h-8 text-red-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Casos Cardiovasculares</p>
                <p className="text-2xl font-bold text-orange-600">53</p>
                <p className="text-xs text-red-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +18% vs ontem
                </p>
              </div>
              <Heart className="w-8 h-8 text-orange-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Queimaduras</p>
                <p className="text-2xl font-bold text-yellow-600">15</p>
                <p className="text-xs text-yellow-600 flex items-center">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  +5 novos casos
                </p>
              </div>
              <Stethoscope className="w-8 h-8 text-yellow-500" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Hospitais em Alerta</p>
                <p className="text-2xl font-bold text-purple-600">3</p>
                <p className="text-xs text-purple-600 flex items-center">
                  <AlertTriangle className="w-3 h-3 mr-1" />
                  Capacidade reduzida
                </p>
              </div>
              <Building className="w-8 h-8 text-purple-500" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alertas de recursos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-orange-200 bg-orange-50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Pill className="w-5 h-5 text-orange-600" />
              <div>
                <p className="font-medium text-orange-800">Medicamentos Respiratórios</p>
                <p className="text-sm text-orange-600">Estoque baixo em 2 hospitais</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Activity className="w-5 h-5 text-red-600" />
              <div>
                <p className="font-medium text-red-800">Oxigênio Hospitalar</p>
                <p className="text-sm text-red-600">Consumo 40% acima do normal</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-yellow-200 bg-yellow-50">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-yellow-600" />
              <div>
                <p className="font-medium text-yellow-800">Leitos UTI</p>
                <p className="text-sm text-yellow-600">85% de ocupação média</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Situação dos hospitais */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Building className="w-5 h-5 mr-2 text-blue-600" />
            Situação dos Hospitais
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Hospital</TableHead>
                <TableHead>Respiratórios</TableHead>
                <TableHead>Cardiovasculares</TableHead>
                <TableHead>Queimaduras</TableHead>
                <TableHead>Capacidade</TableHead>
                <TableHead>Oxigênio</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {healthData.map((hospital) => (
                <TableRow key={hospital.id}>
                  <TableCell className="font-medium">{hospital.hospital}</TableCell>
                  <TableCell>
                    <span className="flex items-center">
                      <Activity className="w-4 h-4 mr-1 text-red-500" />
                      {hospital.respiratoryPatients}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="flex items-center">
                      <Heart className="w-4 h-4 mr-1 text-orange-500" />
                      {hospital.cardiovascularPatients}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="flex items-center">
                      <Stethoscope className="w-4 h-4 mr-1 text-yellow-500" />
                      {hospital.burnPatients}
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`font-medium ${getCapacityColor(hospital.capacity)}`}>
                      {hospital.capacity}%
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className={`font-medium ${getCapacityColor(hospital.oxygenLevel)}`}>
                      {hospital.oxygenLevel}%
                    </span>
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(hospital.status)}>
                      {hospital.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => openModal('view', hospital)}
                      >
                        Ver Detalhes
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => openModal('edit', hospital)}
                      >
                        Editar
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <HealthReportModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        reportData={modalState.data}
        mode={modalState.mode}
      />
    </div>
  );
};

export default SaudePublica;
