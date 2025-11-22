import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Building2, Target, Users, FileText, TrendingUp, MapPin, Settings, CheckCircle2, Edit2, Save } from "lucide-react";
import { toast } from "sonner";

export const IntakeForm = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => {
    if (isEditing) {
      toast.success("Alterações salvas com sucesso!");
    }
    setIsEditing(!isEditing);
  };
  const sections = [
    { id: "1", title: "Dados Institucionais", icon: Building2, completed: true },
    { id: "2", title: "Contexto Estratégico", icon: Target, completed: true },
    { id: "3", title: "Estrutura Organizacional", icon: Users, completed: false },
    { id: "4", title: "Indicadores Atuais", icon: TrendingUp, completed: false },
    { id: "5", title: "Processos Críticos", icon: Settings, completed: false },
    { id: "6", title: "Documentação Disponível", icon: FileText, completed: false },
    { id: "7", title: "Áreas Prioritárias", icon: MapPin, completed: false },
  ];

  return (
    <div className="space-y-6 animate-slide-up">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-1">Formulário de Intake</h2>
        <p className="text-muted-foreground">Diagnóstico Organizacional Lean Health Care</p>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base flex items-center justify-between">
            <span>Progresso do Preenchimento</span>
            <span className="text-sm font-normal text-muted-foreground">2/7 completas</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-7 gap-2">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.id} className="flex flex-col items-center gap-1">
                  <div className={`p-2 rounded-lg ${section.completed ? 'bg-success/10' : 'bg-muted'}`}>
                    <Icon className={`h-4 w-4 ${section.completed ? 'text-success' : 'text-muted-foreground'}`} />
                  </div>
                  {section.completed && (
                    <CheckCircle2 className="h-3 w-3 text-success" />
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="space-y-3">
        <AccordionItem value="section-1" className="border border-border rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3">
              <Building2 className="h-5 w-5 text-primary" />
              <span className="font-semibold">1. Dados Institucionais</span>
              <Badge className="ml-auto mr-2 bg-success text-success-foreground">Completo</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label>Nome da Instituição</Label>
              <Input value="Hospital São Lucas" disabled={!isEditing} />
            </div>
            <div className="space-y-2">
              <Label>Tipo de organização</Label>
              <div className="grid grid-cols-2 gap-2">
                {["Hospital Geral", "Hospital Especializado", "Clínica", "Laboratório"].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox id={type} checked={type === "Hospital Geral"} disabled={!isEditing} />
                    <label htmlFor={type} className="text-sm">{type}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Total de colaboradores</Label>
                <Input type="number" value="450" disabled={!isEditing} />
              </div>
              <div className="space-y-2">
                <Label>Médicos credenciados</Label>
                <Input type="number" value="85" disabled={!isEditing} />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="section-2" className="border border-border rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-primary" />
              <span className="font-semibold">2. Contexto Estratégico</span>
              <Badge className="ml-auto mr-2 bg-success text-success-foreground">Completo</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label>Principais metas estratégicas para os próximos 12 meses</Label>
              <div className="space-y-2">
                {[
                  "Redução de custos",
                  "Aumento de eficiência",
                  "Redução de espera",
                  "Melhor experiência do paciente",
                ].map((meta) => (
                  <div key={meta} className="flex items-center space-x-2">
                    <Checkbox id={meta} checked disabled={!isEditing} />
                    <label htmlFor={meta} className="text-sm">{meta}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label>Maior desafio atual da instituição</Label>
              <Textarea
                value="Alto tempo de espera no pronto-socorro e baixo giro de leitos"
                disabled={!isEditing}
                rows={3}
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="section-3" className="border border-border rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-primary" />
              <span className="font-semibold">3. Estrutura Organizacional</span>
              <Badge variant="outline" className="ml-auto mr-2">Pendente</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-2">
              <Label>Organograma disponível?</Label>
              <div className="flex gap-4">
                <div className="flex items-center space-x-2">
                  <Checkbox id="org-sim" disabled={!isEditing} />
                  <label htmlFor="org-sim" className="text-sm">Sim (anexar)</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="org-nao" disabled={!isEditing} />
                  <label htmlFor="org-nao" className="text-sm">Não</label>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <Label>Níveis de maturidade em gestão</Label>
              {["Cultura de melhoria contínua", "Padronização de processos", "Governança e indicadores"].map((item) => (
                <div key={item} className="space-y-2">
                  <p className="text-sm">{item}</p>
                  <div className="flex gap-4">
                    {["Baixa", "Média", "Alta"].map((nivel) => (
                      <div key={nivel} className="flex items-center space-x-2">
                        <Checkbox id={`${item}-${nivel}`} disabled={!isEditing} />
                        <label htmlFor={`${item}-${nivel}`} className="text-sm">{nivel}</label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="section-4" className="border border-border rounded-lg px-4">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="font-semibold">4. Indicadores Atuais</span>
              <Badge variant="outline" className="ml-auto mr-2">Pendente</Badge>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div>
              <h4 className="font-medium mb-3">Indicadores Assistenciais</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label className="text-xs">Tempo Médio de Permanência (LOS)</Label>
                  <Input placeholder="Ex: 5.2 dias" disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Taxa de ocupação</Label>
                  <Input placeholder="Ex: 85%" disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Giro de leitos</Label>
                  <Input placeholder="Ex: 2.5" disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Tempo de espera triagem</Label>
                  <Input placeholder="Ex: 45 min" disabled={!isEditing} />
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-3">Indicadores Financeiros</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-2">
                  <Label className="text-xs">Custo médio por paciente</Label>
                  <Input placeholder="Ex: R$ 3.500" disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label className="text-xs">Glosas (% e valor)</Label>
                  <Input placeholder="Ex: 8% / R$ 120k" disabled={!isEditing} />
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button 
        className="w-full" 
        size="lg"
        onClick={handleToggleEdit}
        variant={isEditing ? "default" : "outline"}
      >
        {isEditing ? (
          <>
            <Save className="h-4 w-4 mr-2" />
            Salvar Alterações
          </>
        ) : (
          <>
            <Edit2 className="h-4 w-4 mr-2" />
            Editar Informações
          </>
        )}
      </Button>
    </div>
  );
};
