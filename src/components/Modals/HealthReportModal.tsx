
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

interface HealthReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  reportData?: any;
  mode: 'create' | 'edit' | 'view';
}

const HealthReportModal: React.FC<HealthReportModalProps> = ({ isOpen, onClose, reportData, mode }) => {
  const [formData, setFormData] = useState({
    hospital: reportData?.hospital || '',
    reportType: reportData?.reportType || 'respiratory',
    patientCount: reportData?.patientCount || 0,
    severity: reportData?.severity || 'mild',
    symptoms: reportData?.symptoms || '',
    notes: reportData?.notes || '',
  });

  const handleSubmit = () => {
    console.log('Saving health report:', formData);
    onClose();
  };

  const isReadOnly = mode === 'view';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>
            {mode === 'create' && 'Novo Relatório de Saúde'}
            {mode === 'edit' && 'Editar Relatório'}
            {mode === 'view' && 'Detalhes do Relatório'}
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="hospital">Hospital/Unidade</Label>
            <Select value={formData.hospital} onValueChange={(value) => setFormData({ ...formData, hospital: value })} disabled={isReadOnly}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione o hospital" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="hospital_central">Hospital Central</SelectItem>
                <SelectItem value="hospital_regional">Hospital Regional</SelectItem>
                <SelectItem value="ubs_norte">UBS Norte</SelectItem>
                <SelectItem value="ubs_sul">UBS Sul</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="reportType">Tipo de Relatório</Label>
            <Select value={formData.reportType} onValueChange={(value) => setFormData({ ...formData, reportType: value })} disabled={isReadOnly}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="respiratory">Problemas Respiratórios</SelectItem>
                <SelectItem value="cardiovascular">Cardiovascular</SelectItem>
                <SelectItem value="burns">Queimaduras</SelectItem>
                <SelectItem value="general">Geral</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="patientCount">Número de Pacientes</Label>
            <Input
              id="patientCount"
              type="number"
              min="0"
              value={formData.patientCount}
              onChange={(e) => setFormData({ ...formData, patientCount: parseInt(e.target.value) })}
              readOnly={isReadOnly}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="severity">Gravidade Média</Label>
            <Select value={formData.severity} onValueChange={(value) => setFormData({ ...formData, severity: value })} disabled={isReadOnly}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mild">Leve</SelectItem>
                <SelectItem value="moderate">Moderada</SelectItem>
                <SelectItem value="severe">Grave</SelectItem>
                <SelectItem value="critical">Crítica</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="col-span-2 space-y-2">
            <Label htmlFor="symptoms">Principais Sintomas</Label>
            <Textarea
              id="symptoms"
              value={formData.symptoms}
              onChange={(e) => setFormData({ ...formData, symptoms: e.target.value })}
              readOnly={isReadOnly}
              rows={3}
            />
          </div>

          <div className="col-span-2 space-y-2">
            <Label htmlFor="notes">Observações</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              readOnly={isReadOnly}
              rows={4}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            {isReadOnly ? 'Fechar' : 'Cancelar'}
          </Button>
          {!isReadOnly && (
            <Button onClick={handleSubmit}>
              {mode === 'create' ? 'Criar Relatório' : 'Salvar Alterações'}
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default HealthReportModal;
