
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

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  badge?: string;
  badgeColor?: string;
}

const Sidebar = () => {
  const menuItems: SidebarItem[] = [
    { 
      icon: <Home className="w-5 h-5" />, 
      label: "Dashboard Geral", 
      active: true 
    },
    { 
      icon: <Map className="w-5 h-5" />, 
      label: "Mapa Interativo" 
    },
    { 
      icon: <AlertTriangle className="w-5 h-5" />, 
      label: "Alertas Ativos", 
      badge: "12", 
      badgeColor: "bg-red-500" 
    },
    { 
      icon: <BarChart3 className="w-5 h-5" />, 
      label: "Monitoramento Ambiental" 
    },
    { 
      icon: <Heart className="w-5 h-5" />, 
      label: "Saúde Pública", 
      badge: "3", 
      badgeColor: "bg-orange-500" 
    },
    { 
      icon: <Shield className="w-5 h-5" />, 
      label: "Defesa Civil" 
    },
    { 
      icon: <FileText className="w-5 h-5" />, 
      label: "Relatórios" 
    },
    { 
      icon: <Settings className="w-5 h-5" />, 
      label: "Configurações" 
    }
  ];

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen">
      <div className="p-6">
        <nav className="space-y-2">
          {menuItems.map((item, index) => (
            <Button
              key={index}
              variant={item.active ? "secondary" : "ghost"}
              className={`w-full justify-start ${
                item.active 
                  ? "bg-green-600 hover:bg-green-700 text-white" 
                  : "text-gray-300 hover:text-white hover:bg-gray-800"
              }`}
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
