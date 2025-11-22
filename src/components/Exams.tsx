import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Exam {
  id: number;
  name: string;
  type: string;
  date: string;
  status: "completed" | "processing" | "scheduled";
  result?: string;
}

export const Exams = () => {
  const exams: Exam[] = [
    {
      id: 1,
      name: "Hemograma Completo",
      type: "Laboratório",
      date: "15 Nov 2024",
      status: "completed",
      result: "Normal",
    },
    {
      id: 2,
      name: "Glicemia em Jejum",
      type: "Laboratório",
      date: "15 Nov 2024",
      status: "completed",
      result: "Normal",
    },
    {
      id: 3,
      name: "Raio-X Tórax",
      type: "Imagem",
      date: "16 Nov 2024",
      status: "processing",
    },
    {
      id: 4,
      name: "Eletrocardiograma",
      type: "Cardiologia",
      date: "17 Nov 2024",
      status: "scheduled",
    },
  ];

  const getStatusBadge = (status: Exam["status"]) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-success text-success-foreground">Concluído</Badge>;
      case "processing":
        return <Badge className="bg-primary text-primary-foreground">Em Análise</Badge>;
      case "scheduled":
        return <Badge variant="outline">Agendado</Badge>;
    }
  };

  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Exames</h2>
        <p className="text-muted-foreground">Resultados e status dos seus exames</p>
      </div>

      <div className="space-y-4">
        {exams.map((exam) => (
          <Card key={exam.id} className="border-border">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-accent rounded-lg">
                    <FileText className="h-5 w-5 text-accent-foreground" />
                  </div>
                  <div>
                    <CardTitle className="text-base mb-1">{exam.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{exam.type}</p>
                  </div>
                </div>
                {getStatusBadge(exam.status)}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Data: {exam.date}</p>
                  {exam.result && (
                    <p className="text-sm font-medium text-success">
                      Resultado: {exam.result}
                    </p>
                  )}
                </div>
                {exam.status === "completed" && (
                  <Button variant="outline" size="sm">
                    <Download className="h-4 w-4 mr-2" />
                    Baixar
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
