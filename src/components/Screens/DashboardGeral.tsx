
import React from 'react';
import MetricCard from '@/components/Dashboard/MetricCard';
import AlertsPanel from '@/components/Dashboard/AlertsPanel';
import EnvironmentalMap from '@/components/Dashboard/EnvironmentalMap';
import HealthImpactChart from '@/components/Dashboard/HealthImpactChart';
import { 
  Flame, 
  Wind, 
  Thermometer, 
  Activity, 
  Shield, 
  AlertTriangle,
  Eye,
  Users
} from 'lucide-react';

const DashboardGeral = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard Geral</h1>
        <p className="text-gray-600">Visão geral do sistema de monitoramento EcoGuard</p>
      </div>

      {/* Métricas principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Focos Ativos"
          value={8}
          subtitle="Queimadas detectadas"
          icon={<Flame className="w-5 h-5" />}
          status="critical"
          trend="up"
          trendValue="+3"
        />
        
        <MetricCard
          title="Qualidade do Ar"
          value="156 AQI"
          subtitle="Não saudável"
          icon={<Wind className="w-5 h-5" />}
          status="warning"
          trend="up"
          trendValue="+12%"
        />
        
        <MetricCard
          title="Temperatura Média"
          value="34°C"
          subtitle="Acima da média"
          icon={<Thermometer className="w-5 h-5" />}
          status="warning"
          trend="up"
          trendValue="+8°C"
        />
        
        <MetricCard
          title="Casos de Saúde"
          value={127}
          subtitle="Últimas 24h"
          icon={<Activity className="w-5 h-5" />}
          status="critical"
          trend="up"
          trendValue="+35%"
        />
      </div>

      {/* Status dos serviços */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <MetricCard
          title="Drones Ativos"
          value={4}
          subtitle="de 6 disponíveis"
          icon={<Eye className="w-5 h-5" />}
          status="good"
        />
        
        <MetricCard
          title="Equipes em Campo"
          value={12}
          subtitle="Bombeiros + Defesa Civil"
          icon={<Shield className="w-5 h-5" />}
          status="normal"
        />
        
        <MetricCard
          title="Hospitais Alerta"
          value={3}
          subtitle="Capacidade reduzida"
          icon={<Users className="w-5 h-5" />}
          status="warning"
        />
        
        <MetricCard
          title="Alertas Pendentes"
          value={12}
          subtitle="Requerem ação"
          icon={<AlertTriangle className="w-5 h-5" />}
          status="critical"
        />
      </div>

      {/* Seção principal com mapa e alertas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <EnvironmentalMap />
        </div>
        <div className="lg:col-span-1">
          <AlertsPanel />
        </div>
      </div>

      {/* Gráfico de impacto na saúde */}
      <div className="grid grid-cols-1 gap-6">
        <HealthImpactChart />
      </div>
    </div>
  );
};

export default DashboardGeral;
