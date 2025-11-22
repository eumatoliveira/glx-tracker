import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Circle, Clock } from "lucide-react";

interface TimelineEvent {
  id: number;
  title: string;
  description: string;
  date: string;
  status: "completed" | "current" | "pending";
}

export const Timeline = () => {
  const events: TimelineEvent[] = [
    {
      id: 1,
      title: "Kick-off e Alinhamento",
      description: "Reunião inicial com liderança, definição de escopo e objetivos",
      date: "01 Nov, 09:00",
      status: "completed",
    },
    {
      id: 2,
      title: "Formulário de Intake",
      description: "Coleta de dados institucionais e mapeamento de processos críticos",
      date: "05 Nov, 14:00",
      status: "completed",
    },
    {
      id: 3,
      title: "Diagnóstico em Campo",
      description: "Observação direta, entrevistas e análise de indicadores atuais",
      date: "12 Nov - Em andamento",
      status: "current",
    },
    {
      id: 4,
      title: "VSM - Value Stream Mapping",
      description: "Mapeamento de fluxo de valor dos processos prioritários",
      date: "Previsto: 19 Nov",
      status: "pending",
    },
    {
      id: 5,
      title: "Workshop Kaizen",
      description: "Semana intensiva de melhorias rápidas com as equipes",
      date: "Previsto: 26 Nov",
      status: "pending",
    },
    {
      id: 6,
      title: "Plano de Implementação",
      description: "Definição de roadmap e cronograma de ações",
      date: "Previsto: 03 Dez",
      status: "pending",
    },
  ];

  const getStatusIcon = (status: TimelineEvent["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="h-5 w-5 text-success" />;
      case "current":
        return <Clock className="h-5 w-5 text-primary animate-pulse" />;
      case "pending":
        return <Circle className="h-5 w-5 text-muted-foreground" />;
    }
  };

  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Timeline do Projeto</h2>
        <p className="text-muted-foreground">Acompanhe todas as fases da consultoria</p>
      </div>

      <div className="space-y-4">
        {events.map((event, index) => (
          <div key={event.id} className="flex gap-4">
            <div className="flex flex-col items-center">
              <div className="flex-shrink-0">{getStatusIcon(event.status)}</div>
              {index < events.length - 1 && (
                <div
                  className={`w-0.5 h-full mt-2 ${
                    event.status === "completed" ? "bg-success" : "bg-border"
                  }`}
                />
              )}
            </div>
            <Card
              className={`flex-1 border-border transition-all ${
                event.status === "current" ? "border-primary shadow-sm" : ""
              }`}
            >
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-foreground">{event.title}</h3>
                  <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">{event.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{event.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
