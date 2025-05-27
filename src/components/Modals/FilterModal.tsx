
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
import { Checkbox } from '@/components/ui/checkbox';
import { DatePickerWithRange } from '@/components/ui/date-picker';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: any) => void;
  filterType: 'alerts' | 'reports' | 'drones' | 'health' | 'general';
}

const FilterModal: React.FC<FilterModalProps> = ({ 
  isOpen, 
  onClose, 
  onApplyFilters, 
  filterType 
}) => {
  const [filters, setFilters] = useState({
    dateRange: null,
    status: [],
    severity: [],
    type: [],
    location: '',
    department: [],
  });

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters({
      dateRange: null,
      status: [],
      severity: [],
      type: [],
      location: '',
      department: [],
    });
  };

  const getFilterOptions = () => {
    switch (filterType) {
      case 'alerts':
        return {
          statuses: ['Ativo', 'Resolvido', 'Monitoramento'],
          severities: ['Baixa', 'Média', 'Alta', 'Crítica'],
          types: ['Incêndio', 'Qualidade do Ar', 'Saúde Pública', 'Resgate'],
        };
      case 'health':
        return {
          statuses: ['Normal', 'Atenção', 'Alta Demanda', 'Crítico'],
          types: ['Respiratório', 'Cardiovascular', 'Queimaduras', 'Geral'],
          departments: ['Hospital Central', 'Hospital Regional', 'UBS Centro'],
        };
      case 'drones':
        return {
          statuses: ['Ativo', 'Patrulhando', 'Manutenção', 'Inativo'],
          types: ['DJI Mavic 3', 'DJI Air 2S', 'DJI Mini 3'],
        };
      default:
        return {
          statuses: ['Ativo', 'Inativo'],
          types: ['Geral'],
        };
    }
  };

  const options = getFilterOptions();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Filtros Avançados</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Período</Label>
            <Input
              type="date"
              placeholder="Data inicial"
              className="mb-2"
            />
            <Input
              type="date"
              placeholder="Data final"
            />
          </div>

          {options.statuses && (
            <div className="space-y-2">
              <Label>Status</Label>
              <div className="grid grid-cols-2 gap-2">
                {options.statuses.map((status) => (
                  <div key={status} className="flex items-center space-x-2">
                    <Checkbox id={status} />
                    <Label htmlFor={status}>{status}</Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {options.severities && (
            <div className="space-y-2">
              <Label>Gravidade</Label>
              <div className="grid grid-cols-2 gap-2">
                {options.severities.map((severity) => (
                  <div key={severity} className="flex items-center space-x-2">
                    <Checkbox id={severity} />
                    <Label htmlFor={severity}>{severity}</Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {options.types && (
            <div className="space-y-2">
              <Label>Tipo</Label>
              <div className="grid grid-cols-2 gap-2">
                {options.types.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox id={type} />
                    <Label htmlFor={type}>{type}</Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {options.departments && (
            <div className="space-y-2">
              <Label>Departamento/Hospital</Label>
              <div className="space-y-2">
                {options.departments.map((dept) => (
                  <div key={dept} className="flex items-center space-x-2">
                    <Checkbox id={dept} />
                    <Label htmlFor={dept}>{dept}</Label>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="location">Localização</Label>
            <Input
              id="location"
              placeholder="Digite a localização..."
              value={filters.location}
              onChange={(e) => setFilters({ ...filters, location: e.target.value })}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleReset}>
            Limpar Filtros
          </Button>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={handleApply}>
            Aplicar Filtros
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default FilterModal;
