import { Activity, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const Dashboard = () => {
  const stats = [
    {
      title: "Etapa Atual",
      value: "Análise",
      icon: Activity,
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      title: "Tempo Médio",
      value: "2.5 dias",
      icon: Clock,
      color: "text-info",
      bgColor: "bg-info/10",
    },
    {
      title: "Qualidade",
      value: "98.5%",
      icon: CheckCircle2,
      color: "text-success",
      bgColor: "bg-success/10",
    },
    {
      title: "Ações Pendentes",
      value: "2",
      icon: AlertCircle,
      color: "text-warning",
      bgColor: "bg-warning/10",
    },
  ];

  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Bem-vindo, João</h2>
        <p className="text-muted-foreground">Acompanhe o progresso do seu diagnóstico</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="border-border">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${stat.bgColor}`}>
                    <Icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground truncate">{stat.title}</p>
                    <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="border-border">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">Progresso do Diagnóstico</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Etapa 3 de 5</span>
              <span className="font-medium text-foreground">60%</span>
            </div>
            <Progress value={60} className="h-2" />
          </div>
          <div className="grid grid-cols-5 gap-2">
            {["Registro", "Triagem", "Análise", "Laudo", "Entrega"].map((step, idx) => (
              <div key={idx} className="text-center">
                <div
                  className={`w-full h-1 rounded-full mb-1 ${
                    idx < 3 ? "bg-primary" : "bg-muted"
                  }`}
                />
                <p className="text-[10px] text-muted-foreground">{step}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">Métricas Lean Six Sigma</h3>
        <div className="space-y-3">
          <Card className="border-border">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">Eficiência do Processo</span>
                <span className="text-sm font-semibold text-success">95%</span>
              </div>
              <Progress value={95} className="h-1.5" />
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">Taxa de Conformidade</span>
                <span className="text-sm font-semibold text-success">98.5%</span>
              </div>
              <Progress value={98.5} className="h-1.5" />
            </CardContent>
          </Card>
          <Card className="border-border">
            <CardContent className="p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-foreground">Tempo de Ciclo</span>
                <span className="text-sm font-semibold text-info">-15%</span>
              </div>
              <p className="text-xs text-muted-foreground">Redução vs. média histórica</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
