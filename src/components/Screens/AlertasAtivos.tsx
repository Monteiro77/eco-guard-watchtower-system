
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
  AlertTriangle, 
  Plus, 
  Search, 
  Eye, 
  Edit, 
  Trash2,
  Filter,
  Download
} from 'lucide-react';
import AlertModal from '@/components/Modals/AlertModal';

const AlertasAtivos = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: 'create' as 'create' | 'edit' | 'view',
    data: null as any,
  });

  const alerts = [
    {
      id: 1,
      title: 'Foco de Incêndio - Zona Rural',
      type: 'Incêndio',
      severity: 'Crítica',
      location: 'Fazenda São José, Km 15',
      status: 'Ativo',
      time: '14:35',
      date: '2024-01-15',
    },
    {
      id: 2,
      title: 'Qualidade do Ar Comprometida',
      type: 'Ar',
      severity: 'Alta',
      location: 'Centro da Cidade',
      status: 'Monitoramento',
      time: '13:20',
      date: '2024-01-15',
    },
    {
      id: 3,
      title: 'Aumento de Atendimentos Respiratórios',
      type: 'Saúde',
      severity: 'Média',
      location: 'Hospital Regional',
      status: 'Ativo',
      time: '12:15',
      date: '2024-01-15',
    },
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Crítica': return 'bg-red-500';
      case 'Alta': return 'bg-orange-500';
      case 'Média': return 'bg-yellow-500';
      default: return 'bg-blue-500';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativo': return 'bg-red-100 text-red-800';
      case 'Resolvido': return 'bg-green-100 text-green-800';
      case 'Monitoramento': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const openModal = (mode: 'create' | 'edit' | 'view', data: any = null) => {
    setModalState({ isOpen: true, mode, data });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, mode: 'create', data: null });
  };

  const filteredAlerts = alerts.filter(alert =>
    alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    alert.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Alertas Ativos</h1>
          <p className="text-gray-600">Gerenciamento de alertas e notificações do sistema</p>
        </div>
        <Button onClick={() => openModal('create')} className="bg-red-600 hover:bg-red-700">
          <Plus className="w-4 h-4 mr-2" />
          Novo Alerta
        </Button>
      </div>

      {/* Métricas rápidas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <span className="text-sm font-medium">Críticos</span>
              <span className="text-lg font-bold ml-auto">5</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-sm font-medium">Altos</span>
              <span className="text-lg font-bold ml-auto">3</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <span className="text-sm font-medium">Médios</span>
              <span className="text-lg font-bold ml-auto">4</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-medium">Total</span>
              <span className="text-lg font-bold ml-auto">12</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filtros e busca */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Lista de Alertas</CardTitle>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filtros
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Buscar alertas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Alerta</TableHead>
                <TableHead>Tipo</TableHead>
                <TableHead>Gravidade</TableHead>
                <TableHead>Localização</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Data/Hora</TableHead>
                <TableHead>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAlerts.map((alert) => (
                <TableRow key={alert.id}>
                  <TableCell className="font-medium">{alert.title}</TableCell>
                  <TableCell>{alert.type}</TableCell>
                  <TableCell>
                    <Badge className={`${getSeverityColor(alert.severity)} text-white`}>
                      {alert.severity}
                    </Badge>
                  </TableCell>
                  <TableCell>{alert.location}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(alert.status)}>
                      {alert.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{alert.date} {alert.time}</TableCell>
                  <TableCell>
                    <div className="flex space-x-1">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => openModal('view', alert)}
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => openModal('edit', alert)}
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <AlertModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        alertData={modalState.data}
        mode={modalState.mode}
      />
    </div>
  );
};

export default AlertasAtivos;
