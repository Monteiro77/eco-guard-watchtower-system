
import React, { useState } from 'react';
import Header from '@/components/Layout/Header';
import Sidebar from '@/components/Layout/Sidebar';
import DashboardGeral from '@/components/Screens/DashboardGeral';
import MapaInterativo from '@/components/Screens/MapaInterativo';
import AlertasAtivos from '@/components/Screens/AlertasAtivos';
import MonitoramentoAmbiental from '@/components/Screens/MonitoramentoAmbiental';
import SaudePublica from '@/components/Screens/SaudePublica';
import DefesaCivil from '@/components/Screens/DefesaCivil';
import Relatorios from '@/components/Screens/Relatorios';
import Configuracoes from '@/components/Screens/Configuracoes';

export type ScreenType = 
  | 'dashboard' 
  | 'mapa' 
  | 'alertas' 
  | 'monitoramento' 
  | 'saude' 
  | 'defesa' 
  | 'relatorios' 
  | 'configuracoes';

const Index = () => {
  const [activeScreen, setActiveScreen] = useState<ScreenType>('dashboard');

  const renderScreen = () => {
    switch (activeScreen) {
      case 'dashboard':
        return <DashboardGeral />;
      case 'mapa':
        return <MapaInterativo />;
      case 'alertas':
        return <AlertasAtivos />;
      case 'monitoramento':
        return <MonitoramentoAmbiental />;
      case 'saude':
        return <SaudePublica />;
      case 'defesa':
        return <DefesaCivil />;
      case 'relatorios':
        return <Relatorios />;
      case 'configuracoes':
        return <Configuracoes />;
      default:
        return <DashboardGeral />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex w-full">
      <Sidebar activeScreen={activeScreen} onScreenChange={setActiveScreen} />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6">
          {renderScreen()}
        </main>
      </div>
    </div>
  );
};

export default Index;
