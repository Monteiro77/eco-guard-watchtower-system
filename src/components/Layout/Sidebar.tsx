
import React from 'react';
import { 
  BarChart3, 
  Map, 
  AlertTriangle, 
  Heart, 
  Shield, 
  FileText, 
  Settings,
  Home
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScreenType } from '@/pages/Index';

interface SidebarItem {
  id: ScreenType;
  icon: React.ReactNode;
  label: string;
  badge?: string;
  badgeColor?: string;
}

interface SidebarProps {
  activeScreen: ScreenType;
  onScreenChange: (screen: ScreenType) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeScreen, onScreenChange }) => {
  const menuItems: SidebarItem[] = [
    { 
      id: 'dashboard',
      icon: <Home className="w-5 h-5" />, 
      label: "Dashboard Geral"
    },
    { 
      id: 'mapa',
      icon: <Map className="w-5 h-5" />, 
      label: "Mapa Interativo" 
    },
    { 
      id: 'alertas',
      icon: <AlertTriangle className="w-5 h-5" />, 
      label: "Alertas Ativos", 
      badge: "12", 
      badgeColor: "bg-red-500" 
    },
    { 
      id: 'monitoramento',
      icon: <BarChart3 className="w-5 h-5" />, 
      label: "Monitoramento Ambiental" 
    },
    { 
      id: 'saude',
      icon: <Heart className="w-5 h-5" />, 
      label: "Saúde Pública", 
      badge: "3", 
      badgeColor: "bg-orange-500" 
    },
    { 
      id: 'defesa',
      icon: <Shield className="w-5 h-5" />, 
      label: "Defesa Civil" 
    },
    { 
      id: 'relatorios',
      icon: <FileText className="w-5 h-5" />, 
      label: "Relatórios" 
    },
    { 
      id: 'configuracoes',
      icon: <Settings className="w-5 h-5" />, 
      label: "Configurações" 
    }
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen">
      <div className="p-6">
        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={activeScreen === item.id ? "secondary" : "ghost"}
              className={`w-full justify-start ${
                activeScreen === item.id
                  ? "bg-green-600 hover:bg-green-700 text-white" 
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
              onClick={() => onScreenChange(item.id)}
            >
              {item.icon}
              <span className="ml-3 flex-1 text-left">{item.label}</span>
              {item.badge && (
                <Badge className={`${item.badgeColor} text-white`}>
                  {item.badge}
                </Badge>
              )}
            </Button>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
