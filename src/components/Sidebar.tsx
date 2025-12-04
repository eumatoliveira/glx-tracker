import { Home, Clock, FileText, Building2, Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const tabs = [
    { id: "dashboard", icon: Home, label: "Dashboard" },
    { id: "timeline", icon: Clock, label: "Timeline" },
    { id: "intake", icon: FileText, label: "Diagnóstico" },
    { id: "profile", icon: Building2, label: "Instituição" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border z-50 flex flex-col">
      <div className="p-6 border-b border-border">
        <h1 className="text-xl font-bold text-primary">HealthLean</h1>
        <p className="text-sm text-muted-foreground">Consultoria Lean Six Sigma</p>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <li key={tab.id}>
                <button
                  onClick={() => onTabChange(tab.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-border">
        <p className="text-xs text-muted-foreground text-center">
          © 2024 HealthLean Consulting
        </p>
      </div>
    </aside>
  );
};