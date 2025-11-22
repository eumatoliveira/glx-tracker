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
      title: "Registro Inicial",
      description: "Cadastro realizado com sucesso",
      date: "15 Nov, 10:30",
      status: "completed",
    },
    {
      id: 2,
      title: "Triagem Médica",
      description: "Avaliação preliminar concluída",
      date: "15 Nov, 14:45",
      status: "completed",
    },
    {
      id: 3,
      title: "Análise em Andamento",
      description: "Exames sendo processados",
      date: "16 Nov, 09:00",
      status: "current",
    },
    {
      id: 4,
      title: "Elaboração de Laudo",
      description: "Aguardando análise completa",
      date: "Previsto: 17 Nov",
      status: "pending",
    },
    {
      id: 5,
      title: "Entrega de Resultados",
      description: "Resultados serão disponibilizados",
      date: "Previsto: 18 Nov",
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
        <h2 className="text-2xl font-bold text-foreground mb-1">Timeline</h2>
        <p className="text-muted-foreground">Acompanhe todas as etapas do processo</p>
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
                  <span className="text-xs text-muted-foreground">{event.date}</span>
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
