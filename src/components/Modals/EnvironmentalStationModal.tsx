
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';

interface EnvironmentalStationModalProps {
  isOpen: boolean;
  onClose: () => void;
  stationData?: any;
  mode: 'create' | 'edit' | 'view';
}

const EnvironmentalStationModal: React.FC<EnvironmentalStationModalProps> = ({ 
  isOpen, 
  onClose, 
  stationData, 
  mode 
}) => {
  const [formData, setFormData] = useState({
    name: stationData?.name || '',
    location: stationData?.location || '',
    latitude: stationData?.latitude || '',
    longitude: stationData?.longitude || '',
    type: stationData?.type || 'air_quality',
    status: stationData?.status || 'active',
    lastMaintenance: stationData?.lastMaintenance || '',
    isActive: stationData?.isActive ?? true,
  });

  const handleSubmit = () => {
    console.log('Saving environmental station:', formData);
    onClose();
  };

  const isReadOnly = mode === 'view';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {mode === 'create' && 'Adicionar Nova Estação'}
            {mode === 'edit' && 'Editar Estação'}
            {mode === 'view' && 'Detalhes da Estação'}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome da Estação</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              readOnly={isReadOnly}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="type">Tipo</Label>
            <Select value={formData.type} onValueChange={(value) => setFormData({ ...formData, type: value })} disabled={isReadOnly}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="air_quality">Qualidade do Ar</SelectItem>
                <SelectItem value="weather">Meteorológica</SelectItem>
                <SelectItem value="humidity">Umidade</SelectItem>
                <SelectItem value="temperature">Temperatura</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-2 space-y-2">
            <Label htmlFor="location">Localização</Label>
            <Input
              id="location"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              readOnly={isReadOnly}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="latitude">Latitude</Label>
            <Input
              id="latitude"
              type="number"
              step="any"
              value={formData.latitude}
              onChange={(e) => setFormData({ ...formData, latitude: e.target.value })}
              readOnly={isReadOnly}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="longitude">Longitude</Label>
            <Input
              id="longitude"
              type="number"
              step="any"
              value={formData.longitude}
              onChange={(e) => setFormData({ ...formData, longitude: e.target.value })}
              readOnly={isReadOnly}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select value={formData.status} onValueChange={(value) => setFormData({ ...formData, status: value })} disabled={isReadOnly}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Ativo</SelectItem>
                <SelectItem value="maintenance">Manutenção</SelectItem>
                <SelectItem value="offline">Offline</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastMaintenance">Última Manutenção</Label>
            <Input
              id="lastMaintenance"
              type="date"
              value={formData.lastMaintenance}
              onChange={(e) => setFormData({ ...formData, lastMaintenance: e.target.value })}
              readOnly={isReadOnly}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              id="isActive"
              checked={formData.isActive}
              onCheckedChange={(checked) => setFormData({ ...formData, isActive: checked })}
              disabled={isReadOnly}
            />
            <Label htmlFor="isActive">Estação Ativa</Label>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            {isReadOnly ? 'Fechar' : 'Cancelar'}
          </Button>
          {!isReadOnly && (
            <Button onClick={handleSubmit}>
              {mode === 'create' ? 'Adicionar Estação' : 'Salvar Alterações'}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EnvironmentalStationModal;
