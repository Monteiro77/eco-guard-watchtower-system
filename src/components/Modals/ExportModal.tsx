
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { FileText, Download, Mail } from 'lucide-react';

interface ExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  dataType: 'alerts' | 'reports' | 'health' | 'environmental' | 'general';
}

const ExportModal: React.FC<ExportModalProps> = ({ 
  isOpen, 
  onClose, 
  dataType 
}) => {
  const [exportConfig, setExportConfig] = useState({
    format: 'pdf',
    includeCharts: true,
    includeImages: true,
    dateRange: 'last30days',
    fields: [],
    emailDelivery: false,
  });

  const handleExport = () => {
    console.log('Exportando dados:', exportConfig);
    // Simulate export process
    alert(`Exportando ${dataType} em formato ${exportConfig.format.toUpperCase()}...`);
    onClose();
  };

  const getAvailableFields = () => {
    switch (dataType) {
      case 'alerts':
        return ['Título', 'Tipo', 'Gravidade', 'Localização', 'Status', 'Data/Hora'];
      case 'health':
        return ['Hospital', 'Casos Respiratórios', 'Casos Cardiovasculares', 'Capacidade', 'Status'];
      case 'environmental':
        return ['Sensor', 'Temperatura', 'Umidade', 'Qualidade do Ar', 'Status'];
      default:
        return ['ID', 'Nome', 'Status', 'Data'];
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <Download className="w-5 h-5 mr-2" />
            Exportar Dados
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label>Formato de Exportação</Label>
            <Select 
              value={exportConfig.format} 
              onValueChange={(value) => setExportConfig({ ...exportConfig, format: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="excel">Excel (.xlsx)</SelectItem>
                <SelectItem value="csv">CSV</SelectItem>
                <SelectItem value="json">JSON</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Período dos Dados</Label>
            <Select 
              value={exportConfig.dateRange} 
              onValueChange={(value) => setExportConfig({ ...exportConfig, dateRange: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Hoje</SelectItem>
                <SelectItem value="last7days">Últimos 7 dias</SelectItem>
                <SelectItem value="last30days">Últimos 30 dias</SelectItem>
                <SelectItem value="last3months">Últimos 3 meses</SelectItem>
                <SelectItem value="custom">Período Personalizado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Campos a Incluir</Label>
            <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto border rounded p-3">
              {getAvailableFields().map((field) => (
                <div key={field} className="flex items-center space-x-2">
                  <Checkbox id={field} defaultChecked />
                  <Label htmlFor={field} className="text-sm">{field}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label>Opções Adicionais</Label>
            
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="includeCharts" 
                checked={exportConfig.includeCharts}
                onCheckedChange={(checked) => setExportConfig({ ...exportConfig, includeCharts: !!checked })}
              />
              <Label htmlFor="includeCharts">Incluir Gráficos</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="includeImages" 
                checked={exportConfig.includeImages}
                onCheckedChange={(checked) => setExportConfig({ ...exportConfig, includeImages: !!checked })}
              />
              <Label htmlFor="includeImages">Incluir Imagens e Mapas</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox 
                id="emailDelivery" 
                checked={exportConfig.emailDelivery}
                onCheckedChange={(checked) => setExportConfig({ ...exportConfig, emailDelivery: !!checked })}
              />
              <Label htmlFor="emailDelivery">Enviar por E-mail</Label>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <FileText className="w-5 h-5 text-blue-600" />
              <span className="font-medium text-blue-900">Resumo da Exportação</span>
            </div>
            <div className="space-y-1 text-sm text-blue-800">
              <p>Formato: <Badge variant="secondary">{exportConfig.format.toUpperCase()}</Badge></p>
              <p>Período: <Badge variant="secondary">{exportConfig.dateRange}</Badge></p>
              <p>Tipo de dados: <Badge variant="secondary">{dataType}</Badge></p>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={handleExport} className="bg-green-600 hover:bg-green-700">
            <Download className="w-4 h-4 mr-2" />
            Exportar Dados
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ExportModal;
