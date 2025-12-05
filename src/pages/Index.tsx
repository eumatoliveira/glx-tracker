import { useState } from "react";
import { Dashboard } from "@/components/Dashboard";
import { Timeline } from "@/components/Timeline";
import { IntakeForm } from "@/components/IntakeForm";
import { Profile } from "@/components/Profile";
import { Sidebar } from "@/components/Sidebar";
import { BottomNav } from "@/components/BottomNav";

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
      {/* Sidebar only visible on desktop */}
      <div className="hidden lg:block">
        <Sidebar 
          activeTab={activeTab} 
          onTabChange={setActiveTab}
          isOpen={true}
          onClose={() => {}}
        />
      </div>
      
      <div className="flex-1 lg:ml-64">
        {/* Mobile header */}
        <header className="sticky top-0 z-30 bg-card border-b border-border">
          <div className="px-4 py-3 lg:px-8 lg:py-6">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <h1 className="text-lg lg:text-2xl font-bold text-foreground">
                  {getTitle()}
                </h1>
                <p className="text-xs lg:text-sm text-muted-foreground">
                  Consultoria Lean Health Care
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Main content with bottom padding for mobile nav */}
        <main className="p-4 lg:p-8 pb-28 lg:pb-8">
          {renderContent()}
        </main>
      </div>

      {/* Bottom navigation only on mobile */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
