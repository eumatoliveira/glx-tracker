import { useState } from "react";
import { Menu } from "lucide-react";
import { Dashboard } from "@/components/Dashboard";
import { Timeline } from "@/components/Timeline";
import { IntakeForm } from "@/components/IntakeForm";
import { Profile } from "@/components/Profile";
import { Sidebar } from "@/components/Sidebar";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <Dashboard />;
      case "timeline":
        return <Timeline />;
      case "intake":
        return <IntakeForm />;
      case "profile":
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  const getTitle = () => {
    switch (activeTab) {
      case "dashboard":
        return "Dashboard";
      case "timeline":
        return "Timeline do Projeto";
      case "intake":
        return "Diagnóstico";
      case "profile":
        return "Perfil da Instituição";
      default:
        return "Dashboard";
    }
  };

  return (
    <div className="min-h-screen bg-background flex w-full">
      <Sidebar 
        activeTab={activeTab} 
        onTabChange={setActiveTab}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      
      <div className="flex-1 lg:ml-64">
        <header className="sticky top-0 z-30 bg-card border-b border-border">
          <div className="px-4 py-4 lg:px-8 lg:py-6">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-6 w-6" />
              </Button>
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-foreground">
                  {getTitle()}
                </h1>
                <p className="text-xs lg:text-sm text-muted-foreground">
                  Consultoria Lean Health Care
                </p>
              </div>
            </div>
          </div>
        </header>

        <main className="p-4 lg:p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
