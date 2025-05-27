
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Settings, 
  Users, 
  Bell, 
  Database, 
  Shield, 
  Wifi,
  Plus,
  Edit,
  Trash2,
  Eye
} from 'lucide-react';
import UserModal from '@/components/Modals/UserModal';

const Configuracoes = () => {
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

  const users = [
    {
      id: 1,
      name: 'João Silva',
      email: 'joao.silva@bombeiros.gov.br',
      role: 'Bombeiro',
      department: 'Corpo de Bombeiros',
      status: 'Ativo',
      lastLogin: '2024-01-15 14:30',
    },
    {
      id: 2,
      name: 'Maria Santos',
      email: 'maria.santos@saude.gov.br',
      role: 'Coordenadora',
      department: 'Secretaria de Saúde',
      status: 'Ativo',
      lastLogin: '2024-01-15 13:45',
    },
    {
      id: 3,
      name: 'Pedro Costa',
      email: 'pedro.costa@defesacivil.gov.br',
      role: 'Operador',
      department: 'Defesa Civil',
      status: 'Inativo',
      lastLogin: '2024-01-14 16:20',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Ativo': return 'bg-green-100 text-green-800';
      case 'Inativo': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Configurações do Sistema</h1>
        <p className="text-gray-600">Gerenciamento de usuários, alertas e configurações gerais</p>
      </div>

      <Tabs defaultValue="users" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="users" className="flex items-center">
            <Users className="w-4 h-4 mr-2" />
            Usuários
          </TabsTrigger>
          <TabsTrigger value="alerts" className="flex items-center">
            <Bell className="w-4 h-4 mr-2" />
            Alertas
          </TabsTrigger>
          <TabsTrigger value="system" className="flex items-center">
            <Settings className="w-4 h-4 mr-2" />
            Sistema
          </TabsTrigger>
          <TabsTrigger value="integrations" className="flex items-center">
            <Wifi className="w-4 h-4 mr-2" />
            Integrações
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center">
            <Shield className="w-4 h-4 mr-2" />
            Segurança
          </TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-6">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle>Gerenciamento de Usuários</CardTitle>
                <Button onClick={() => openModal('create')}>
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Usuário
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Função</TableHead>
                    <TableHead>Departamento</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Último Login</TableHead>
                    <TableHead>Ações</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {users.map((user) => (
                    <TableRow key={user.id}>
                      <TableCell className="font-medium">{user.name}</TableCell>
                      <TableCell>{user.email}</TableCell>
                      <TableCell>{user.role}</TableCell>
                      <TableCell>{user.department}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusColor(user.status)}`}>
                          {user.status}
                        </span>
                      </TableCell>
                      <TableCell>{user.lastLogin}</TableCell>
                      <TableCell>
                        <div className="flex space-x-1">
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => openModal('view', user)}
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm"
                            onClick={() => openModal('edit', user)}
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
        </TabsContent>

        <TabsContent value="alerts" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Configurações de Alertas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-alerts">Alertas por Email</Label>
                  <Switch id="email-alerts" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="sms-alerts">Alertas por SMS</Label>
                  <Switch id="sms-alerts" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-alerts">Notificações Push</Label>
                  <Switch id="push-alerts" defaultChecked />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="alert-frequency">Frequência de Alertas</Label>
                  <Select defaultValue="immediate">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Imediato</SelectItem>
                      <SelectItem value="5min">A cada 5 minutos</SelectItem>
                      <SelectItem value="15min">A cada 15 minutos</SelectItem>
                      <SelectItem value="30min">A cada 30 minutos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Níveis de Criticidade</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="critical-temp">Temperatura Crítica (°C)</Label>
                  <Input id="critical-temp" defaultValue="40" type="number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="critical-aqi">AQI Crítico</Label>
                  <Input id="critical-aqi" defaultValue="200" type="number" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="critical-wind">Vento Crítico (km/h)</Label>
                  <Input id="critical-wind" defaultValue="60" type="number" />
                </div>
                <Button className="w-full">Salvar Configurações</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="system" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Configurações Gerais</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="system-name">Nome do Sistema</Label>
                  <Input id="system-name" defaultValue="EcoGuard" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Fuso Horário</Label>
                  <Select defaultValue="america-saopaulo">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="america-saopaulo">América/São Paulo</SelectItem>
                      <SelectItem value="america-brasilia">América/Brasília</SelectItem>
                      <SelectItem value="america-manaus">América/Manaus</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="data-retention">Retenção de Dados (dias)</Label>
                  <Input id="data-retention" defaultValue="365" type="number" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monitoramento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="auto-backup">Backup Automático</Label>
                  <Switch id="auto-backup" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="maintenance-mode">Modo Manutenção</Label>
                  <Switch id="maintenance-mode" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="backup-frequency">Frequência de Backup</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hourly">Por hora</SelectItem>
                      <SelectItem value="daily">Diário</SelectItem>
                      <SelectItem value="weekly">Semanal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="integrations" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>APIs Externas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="weather-api">API Meteorológica</Label>
                  <Input id="weather-api" placeholder="Chave da API" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maps-api">API de Mapas</Label>
                  <Input id="maps-api" placeholder="Chave da API" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sms-api">API SMS</Label>
                  <Input id="sms-api" placeholder="Chave da API" />
                </div>
                <Button className="w-full">Testar Conexões</Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Banco de Dados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="db-host">Host do Banco</Label>
                  <Input id="db-host" defaultValue="localhost" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="db-port">Porta</Label>
                  <Input id="db-port" defaultValue="5432" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="db-name">Nome do Banco</Label>
                  <Input id="db-name" defaultValue="ecoguard" />
                </div>
                <Button className="w-full">Testar Conexão</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="security" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Políticas de Senha</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="min-password">Tamanho Mínimo</Label>
                  <Input id="min-password" defaultValue="8" type="number" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="require-uppercase">Letras Maiúsculas</Label>
                  <Switch id="require-uppercase" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="require-numbers">Números</Label>
                  <Switch id="require-numbers" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="require-symbols">Símbolos</Label>
                  <Switch id="require-symbols" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sessão e Acesso</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="session-timeout">Timeout de Sessão (min)</Label>
                  <Input id="session-timeout" defaultValue="30" type="number" />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="two-factor">Autenticação 2FA</Label>
                  <Switch id="two-factor" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="max-attempts">Tentativas de Login</Label>
                  <Input id="max-attempts" defaultValue="5" type="number" />
                </div>
                <Button className="w-full">Salvar Configurações</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <UserModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        userData={modalState.data}
        mode={modalState.mode}
      />
    </div>
  );
};

export default Configuracoes;
