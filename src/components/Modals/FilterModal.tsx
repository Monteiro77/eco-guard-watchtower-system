
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
import { DateRange } from "react-day-picker"

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
    dateRange: undefined as DateRange | undefined,
    status: [] as string[],
    severity: [] as string[],
    type: [] as string[],
    location: '',
    department: [] as string[],
  });

  const handleApply = () => {
    onApplyFilters(filters);
    onClose();
  };

  const handleReset = () => {
    setFilters({
      dateRange: undefined,
      status: [],
      severity: [],
      type: [],
      location: '',
      department: [],
    });
  };

  const handleCheckboxChange = (field: keyof typeof filters, value: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      [field]: checked 
        ? [...(prev[field] as string[]), value]
        : (prev[field] as string[]).filter(item => item !== value)
    }));
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
      case 'general':
        return {
          statuses: ['Ativo', 'Patrulhando', 'Manutenção', 'Inativo'],
          types: ['Monitoramento', 'Qualidade do Ar', 'Meteorológica', 'Umidade', 'Temperatura'],
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
            <DatePickerWithRange
              date={filters.dateRange}
              onDateChange={(dateRange) => setFilters({ ...filters, dateRange })}
            />
          </div>

          {options.statuses && (
            <div className="space-y-2">
              <Label>Status</Label>
              <div className="grid grid-cols-2 gap-2">
                {options.statuses.map((status) => (
                  <div key={status} className="flex items-center space-x-2">
                    <Checkbox 
                      id={status}
                      checked={filters.status.includes(status)}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('status', status, checked as boolean)
                      }
                    />
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
                    <Checkbox 
                      id={severity}
                      checked={filters.severity.includes(severity)}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('severity', severity, checked as boolean)
                      }
                    />
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
                    <Checkbox 
                      id={type}
                      checked={filters.type.includes(type)}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('type', type, checked as boolean)
                      }
                    />
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
                    <Checkbox 
                      id={dept}
                      checked={filters.department.includes(dept)}
                      onCheckedChange={(checked) => 
                        handleCheckboxChange('department', dept, checked as boolean)
                      }
                    />
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
