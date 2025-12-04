import { useState } from "react";
import { Dashboard } from "@/components/Dashboard";
import { Timeline } from "@/components/Timeline";
import { IntakeForm } from "@/components/IntakeForm";
import { Profile } from "@/components/Profile";
import { Sidebar } from "@/components/Sidebar";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

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

  return (
    <div className="min-h-screen bg-background flex w-full">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 ml-64">
        <header className="sticky top-0 z-40 bg-card border-b border-border">
          <div className="px-8 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-foreground">
                  {activeTab === "dashboard" && "Dashboard"}
                  {activeTab === "timeline" && "Timeline do Projeto"}
                  {activeTab === "intake" && "Diagnóstico"}
                  {activeTab === "profile" && "Perfil da Instituição"}
                </h1>
                <p className="text-sm text-muted-foreground">Consultoria Lean Health Care</p>
              </div>
            </div>
          </div>
        </header>

        <main className="p-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;