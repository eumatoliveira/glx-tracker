import { Activity, Clock, CheckCircle2, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const Dashboard = () => {
  const stats = [
    {
      title: "Fase Atual",
      value: "Diagnóstico",
      icon: Activity,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Tempo Decorrido",
      value: "12 dias",
      icon: Clock,
      color: "text-info",
      bgColor: "bg-info/10",
    },
    {
      title: "Metas Atingidas",
      value: "3/8",
      icon: CheckCircle2,
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      title: "Melhoria",
      value: "+18%",
      icon: TrendingUp,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
    },
  ];

  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">Hospital São Lucas</h2>
        <p className="text-sm sm:text-base text-muted-foreground">Projeto de Consultoria Lean Health Care</p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border-border">
              <CardContent className="p-3 sm:p-4">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className={`p-2 sm:p-3 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${stat.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs sm:text-sm text-muted-foreground truncate">{stat.title}</p>
                    <p className="text-base sm:text-lg font-semibold text-foreground">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-base sm:text-lg">Progresso do Projeto</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm sm:text-base">
              <span className="text-muted-foreground">Fase 2 de 5</span>
              <span className="font-medium text-foreground">40%</span>
            </div>
            <Progress value={40} className="h-2 sm:h-3" />
          </div>
          <div className="grid grid-cols-5 gap-1 sm:gap-2">
            {["Intake", "Diagnóstico", "Mapeamento", "Implementação", "Sustentação"].map((step, idx) => (
              <div key={idx} className="text-center">
                <div
                  className={`w-full h-1.5 sm:h-2 rounded-full mb-1 ${
                    idx < 2 ? "bg-primary" : "bg-muted"
                  }`}
                />
                <p className="text-[9px] sm:text-xs text-muted-foreground leading-tight">{step}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <h3 className="text-base sm:text-lg font-semibold text-foreground">Indicadores Lean Six Sigma</h3>
        <div className="space-y-3">
          <Card className="border-border">
            <CardContent className="p-3 sm:p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm sm:text-base font-medium text-foreground">Redução de Desperdícios</span>
                <span className="text-sm sm:text-base font-semibold text-success">-22%</span>
              </div>
              <Progress value={78} className="h-2" />
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">vs. baseline inicial</p>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="p-3 sm:p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm sm:text-base font-medium text-foreground">Eficiência Operacional</span>
                <span className="text-sm sm:text-base font-semibold text-success">+18%</span>
              </div>
              <Progress value={68} className="h-2" />
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">melhoria detectada</p>
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="p-3 sm:p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm sm:text-base font-medium text-foreground">Tempo de Ciclo</span>
                <span className="text-sm sm:text-base font-semibold text-info">-15%</span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Redução média nos processos mapeados</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
