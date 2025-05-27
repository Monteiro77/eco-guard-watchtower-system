
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
import { Textarea } from '@/components/ui/textarea';
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
import { FileText, Calendar, Users, Settings } from 'lucide-react';

interface ReportGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (config: any) => void;
}

const ReportGeneratorModal: React.FC<ReportGeneratorModalProps> = ({ 
  isOpen, 
  onClose, 
  onGenerate 
}) => {
  const [reportConfig, setReportConfig] = useState({
    title: '',
    type: 'custom',
    frequency: 'once',
    format: 'pdf',
    sections: [],
    dateRange: 'last30days',
    includeCharts: true,
    includeImages: true,
    recipients: '',
    description: '',
  });

  const handleGenerate = () => {
    onGenerate(reportConfig);
    onClose();
  };

  const availableSections = [
    { id: 'executive_summary', name: 'Resumo Executivo' },
    { id: 'fire_incidents', name: 'Incidentes de Queimadas' },
    { id: 'air_quality', name: 'Qualidade do Ar' },
    { id: 'health_impact', name: 'Impacto na Saúde' },
    { id: 'emergency_operations', name: 'Operações de Emergência' },
    { id: 'drone_operations', name: 'Operações de Drones' },
    { id: 'environmental_data', name: 'Dados Ambientais' },
    { id: 'predictions', name: 'Análises Preditivas' },
    { id: 'recommendations', name: 'Recomendações' },
  ];

  const toggleSection = (sectionId: string) => {
    const newSections = reportConfig.sections.includes(sectionId)
      ? reportConfig.sections.filter((s: string) => s !== sectionId)
      : [...reportConfig.sections, sectionId];
    setReportConfig({ ...reportConfig, sections: newSections });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center">
            <FileText className="w-5 h-5 mr-2" />
            Gerador de Relatórios Personalizado
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Título do Relatório</Label>
              <Input
                id="title"
                placeholder="Digite o título do relatório..."
                value={reportConfig.title}
                onChange={(e) => setReportConfig({ ...reportConfig, title: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <Label>Tipo de Relatório</Label>
              <Select 
                value={reportConfig.type} 
                onValueChange={(value) => setReportConfig({ ...reportConfig, type: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="custom">Personalizado</SelectItem>
                  <SelectItem value="fire_summary">Resumo de Queimadas</SelectItem>
                  <SelectItem value="health_impact">Impacto na Saúde</SelectItem>
                  <SelectItem value="environmental">Ambiental</SelectItem>
                  <SelectItem value="operational">Operacional</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label>Frequência</Label>
              <Select 
                value={reportConfig.frequency} 
                onValueChange={(value) => setReportConfig({ ...reportConfig, frequency: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="once">Uma vez</SelectItem>
                  <SelectItem value="daily">Diário</SelectItem>
                  <SelectItem value="weekly">Semanal</SelectItem>
                  <SelectItem value="monthly">Mensal</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Formato</Label>
              <Select 
                value={reportConfig.format} 
                onValueChange={(value) => setReportConfig({ ...reportConfig, format: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pdf">PDF</SelectItem>
                  <SelectItem value="excel">Excel</SelectItem>
                  <SelectItem value="word">Word</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Período dos Dados</Label>
              <Select 
                value={reportConfig.dateRange} 
                onValueChange={(value) => setReportConfig({ ...reportConfig, dateRange: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="today">Hoje</SelectItem>
                  <SelectItem value="last7days">Últimos 7 dias</SelectItem>
                  <SelectItem value="last30days">Últimos 30 dias</SelectItem>
                  <SelectItem value="last3months">Últimos 3 meses</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label>Descrição</Label>
            <Textarea
              placeholder="Descreva o objetivo e contexto do relatório..."
              value={reportConfig.description}
              onChange={(e) => setReportConfig({ ...reportConfig, description: e.target.value })}
              rows={3}
            />
          </div>

          <div className="space-y-3">
            <Label>Seções a Incluir</Label>
            <div className="grid grid-cols-2 gap-3 max-h-60 overflow-y-auto border rounded p-4">
              {availableSections.map((section) => (
                <div key={section.id} className="flex items-center space-x-2">
                  <Checkbox 
                    id={section.id}
                    checked={reportConfig.sections.includes(section.id)}
                    onCheckedChange={() => toggleSection(section.id)}
                  />
                  <Label htmlFor={section.id} className="text-sm">{section.name}</Label>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-3">
              <Label>Opções de Conteúdo</Label>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="includeCharts" 
                  checked={reportConfig.includeCharts}
                  onCheckedChange={(checked) => setReportConfig({ ...reportConfig, includeCharts: !!checked })}
                />
                <Label htmlFor="includeCharts">Incluir Gráficos</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="includeImages" 
                  checked={reportConfig.includeImages}
                  onCheckedChange={(checked) => setReportConfig({ ...reportConfig, includeImages: !!checked })}
                />
                <Label htmlFor="includeImages">Incluir Imagens</Label>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="recipients">Destinatários (e-mails)</Label>
              <Textarea
                id="recipients"
                placeholder="exemplo1@email.com, exemplo2@email.com"
                value={reportConfig.recipients}
                onChange={(e) => setReportConfig({ ...reportConfig, recipients: e.target.value })}
                rows={3}
              />
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Settings className="w-5 h-5 text-green-600" />
              <span className="font-medium text-green-900">Configuração do Relatório</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-green-800">
              <div>
                <p>Seções: <Badge variant="secondary">{reportConfig.sections.length}</Badge></p>
                <p>Formato: <Badge variant="secondary">{reportConfig.format.toUpperCase()}</Badge></p>
              </div>
              <div>
                <p>Frequência: <Badge variant="secondary">{reportConfig.frequency}</Badge></p>
                <p>Período: <Badge variant="secondary">{reportConfig.dateRange}</Badge></p>
              </div>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Cancelar
          </Button>
          <Button onClick={handleGenerate} className="bg-green-600 hover:bg-green-700">
            <FileText className="w-4 h-4 mr-2" />
            Gerar Relatório
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ReportGeneratorModal;
