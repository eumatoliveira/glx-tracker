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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Megaphone, Calendar, DollarSign, Heart, Settings, Target, Database,
  CheckCircle2, Edit2, Save, FileDown, FileText
} from "lucide-react";
import { toast } from "sonner";
import { saveAs } from "file-saver";
import { Document, Packer, Paragraph, TextRun, HeadingLevel } from "docx";

interface FormData {
  // Marketing
  leadsPerMonth: string;
  leadSources: string;
  costPerLead: string;
  whoRespondsLeads: string;
  avgResponseTime: string;
  funnel: string;
  hasFollowUp: string;
  followUpDetails: string;
  hasCRM: string;
  salesResponsible: string;
  leadsSectorResponsible: string;
  // Agenda
  consultationsPerDayBySpecialty: string;
  actualConsultationsBySpecialty: string;
  proceduresBySpecialty: string;
  weeklyOccupancy: string;
  deadHoursTimeline: string;
  noShowCount: string;
  rescheduleRate: string;
  cancellationRate: string;
  cancellationPolicy: string;
  agendaGapsAction: string;
  hasSecretary: string;
  secretaryFunction: string;
  hasAutoConfirmation: string;
  // Financeiro
  avgTicketInitial: string;
  avgTicketReturn: string;
  avgTicketPackages: string;
  avgTicketProtocols: string;
  protocolsSoldPerMonth: string;
  additionalServices: string;
  grossRevenue12m: string;
  netRevenue12m: string;
  fixedCosts: string;
  realMargin: string;
  revenueBreakdown: string;
  ltv: string;
  // UX
  postConsultationContact: string;
  followUpPlan: string;
  whatsappSupport: string;
  scheduledReturn: string;
  hasReminders: string;
  reminderProcess: string;
  postConsultationStructure: string;
  patientComplaints: string;
  avgWaitTime: string;
  // Processos
  ceoMeetings: string;
  teamPerceivedProblems: string;
  manualSecretaryTasks: string;
  automationOpportunities: string;
  decisionProcess: string;
  patientJourneyFlow: string;
  // Identidade
  ceoVision: string;
  growthPlan: string;
  differentiator: string;
  targetAudience: string;
  // Dados
  hasSpreadsheets: string;
  hasDashboards: string;
  dataLocation: string;
  dataReliability: string;
}

const initialFormData: FormData = {
  leadsPerMonth: "",
  leadSources: "",
  costPerLead: "",
  whoRespondsLeads: "",
  avgResponseTime: "",
  funnel: "",
  hasFollowUp: "",
  followUpDetails: "",
  hasCRM: "",
  salesResponsible: "",
  leadsSectorResponsible: "",
  consultationsPerDayBySpecialty: "",
  actualConsultationsBySpecialty: "",
  proceduresBySpecialty: "",
  weeklyOccupancy: "",
  deadHoursTimeline: "",
  noShowCount: "",
  rescheduleRate: "",
  cancellationRate: "",
  cancellationPolicy: "",
  agendaGapsAction: "",
  hasSecretary: "",
  secretaryFunction: "",
  hasAutoConfirmation: "",
  avgTicketInitial: "",
  avgTicketReturn: "",
  avgTicketPackages: "",
  avgTicketProtocols: "",
  protocolsSoldPerMonth: "",
  additionalServices: "",
  grossRevenue12m: "",
  netRevenue12m: "",
  fixedCosts: "",
  realMargin: "",
  revenueBreakdown: "",
  ltv: "",
  postConsultationContact: "",
  followUpPlan: "",
  whatsappSupport: "",
  scheduledReturn: "",
  hasReminders: "",
  reminderProcess: "",
  postConsultationStructure: "",
  patientComplaints: "",
  avgWaitTime: "",
  ceoMeetings: "",
  teamPerceivedProblems: "",
  manualSecretaryTasks: "",
  automationOpportunities: "",
  decisionProcess: "",
  patientJourneyFlow: "",
  ceoVision: "",
  growthPlan: "",
  differentiator: "",
  targetAudience: "",
  hasSpreadsheets: "",
  hasDashboards: "",
  dataLocation: "",
  dataReliability: "",
};

export const IntakeForm = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleToggleEdit = () => {
    if (isEditing) {
      toast.success("Alterações salvas com sucesso!");
    }
    setIsEditing(!isEditing);
  };

  const exportToCSV = () => {
    // Headers otimizados para Power BI
    const headers = [
      "ID",
      "Secao",
      "Categoria",
      "Pergunta",
      "Resposta",
      "Tipo_Dado",
      "Data_Coleta"
    ];
    
    const dataColeta = new Date().toISOString().split('T')[0];
    
    const rows = [
      // Marketing e Aquisição
      ["MKT_001", "Marketing e Aquisicao", "Leads", "Quantos leads entram por mes", formData.leadsPerMonth, "Numerico", dataColeta],
      ["MKT_002", "Marketing e Aquisicao", "Leads", "De onde vem os leads", formData.leadSources, "Texto", dataColeta],
      ["MKT_003", "Marketing e Aquisicao", "Custos", "Custo por lead", formData.costPerLead, "Monetario", dataColeta],
      ["MKT_004", "Marketing e Aquisicao", "Atendimento", "Quem responde os leads", formData.whoRespondsLeads, "Texto", dataColeta],
      ["MKT_005", "Marketing e Aquisicao", "Atendimento", "Tempo medio de resposta", formData.avgResponseTime, "Tempo", dataColeta],
      ["MKT_006", "Marketing e Aquisicao", "Funil", "Funil de conversao", formData.funnel, "Texto", dataColeta],
      ["MKT_007", "Marketing e Aquisicao", "Follow Up", "Tem follow up", formData.hasFollowUp, "Booleano", dataColeta],
      ["MKT_008", "Marketing e Aquisicao", "Follow Up", "Detalhes do follow up", formData.followUpDetails, "Texto", dataColeta],
      ["MKT_009", "Marketing e Aquisicao", "Sistemas", "Tem CRM ou planilha", formData.hasCRM, "Texto", dataColeta],
      ["MKT_010", "Marketing e Aquisicao", "Responsaveis", "Responsavel pelas vendas", formData.salesResponsible, "Texto", dataColeta],
      ["MKT_011", "Marketing e Aquisicao", "Responsaveis", "Responsavel pelo setor de leads", formData.leadsSectorResponsible, "Texto", dataColeta],
      // Agenda/Operação
      ["AGD_001", "Agenda e Operacao", "Capacidade", "Consultas que cabem por dia por especialidade", formData.consultationsPerDayBySpecialty, "Numerico", dataColeta],
      ["AGD_002", "Agenda e Operacao", "Producao", "Consultas realizadas por especialidade", formData.actualConsultationsBySpecialty, "Numerico", dataColeta],
      ["AGD_003", "Agenda e Operacao", "Producao", "Procedimentos realizados por especialidade", formData.proceduresBySpecialty, "Numerico", dataColeta],
      ["AGD_004", "Agenda e Operacao", "Ocupacao", "Taxa de ocupacao semanal", formData.weeklyOccupancy, "Percentual", dataColeta],
      ["AGD_005", "Agenda e Operacao", "Ocupacao", "Timeline de horarios mortos e cheios", formData.deadHoursTimeline, "Texto", dataColeta],
      ["AGD_006", "Agenda e Operacao", "No-Shows", "Numero de no-shows", formData.noShowCount, "Numerico", dataColeta],
      ["AGD_007", "Agenda e Operacao", "No-Shows", "Taxa de remarcacao e comparecimento", formData.rescheduleRate, "Percentual", dataColeta],
      ["AGD_008", "Agenda e Operacao", "Cancelamentos", "Taxa de cancelamentos", formData.cancellationRate, "Percentual", dataColeta],
      ["AGD_009", "Agenda e Operacao", "Cancelamentos", "Politica de cancelamento", formData.cancellationPolicy, "Texto", dataColeta],
      ["AGD_010", "Agenda e Operacao", "Processos", "Acoes durante buracos na agenda", formData.agendaGapsAction, "Texto", dataColeta],
      ["AGD_011", "Agenda e Operacao", "Equipe", "Tem secretaria e reorganizacao", formData.hasSecretary, "Texto", dataColeta],
      ["AGD_012", "Agenda e Operacao", "Equipe", "Funcao da secretaria", formData.secretaryFunction, "Texto", dataColeta],
      ["AGD_013", "Agenda e Operacao", "Automacao", "Confirmacao automatica", formData.hasAutoConfirmation, "Booleano", dataColeta],
      // Financeiro
      ["FIN_001", "Financeiro", "Ticket Medio", "Ticket medio consulta inicial", formData.avgTicketInitial, "Monetario", dataColeta],
      ["FIN_002", "Financeiro", "Ticket Medio", "Ticket medio retorno", formData.avgTicketReturn, "Monetario", dataColeta],
      ["FIN_003", "Financeiro", "Ticket Medio", "Ticket medio pacotes", formData.avgTicketPackages, "Monetario", dataColeta],
      ["FIN_004", "Financeiro", "Ticket Medio", "Ticket medio protocolos", formData.avgTicketProtocols, "Monetario", dataColeta],
      ["FIN_005", "Financeiro", "Vendas", "Protocolos vendidos por mes", formData.protocolsSoldPerMonth, "Numerico", dataColeta],
      ["FIN_006", "Financeiro", "Vendas", "Servicos adicionais", formData.additionalServices, "Texto", dataColeta],
      ["FIN_007", "Financeiro", "Receita", "Receita bruta 12 meses", formData.grossRevenue12m, "Monetario", dataColeta],
      ["FIN_008", "Financeiro", "Receita", "Receita liquida 12 meses", formData.netRevenue12m, "Monetario", dataColeta],
      ["FIN_009", "Financeiro", "Custos", "Custos fixos detalhados", formData.fixedCosts, "Monetario", dataColeta],
      ["FIN_010", "Financeiro", "Margem", "Margem real", formData.realMargin, "Percentual", dataColeta],
      ["FIN_011", "Financeiro", "Receita", "Breakdown novos x recorrencia x retorno", formData.revenueBreakdown, "Texto", dataColeta],
      ["FIN_012", "Financeiro", "Metricas", "LTV", formData.ltv, "Monetario", dataColeta],
      // UX (Retenção)
      ["UX_001", "UX e Retencao", "Pos-Consulta", "Contato pos consulta", formData.postConsultationContact, "Texto", dataColeta],
      ["UX_002", "UX e Retencao", "Acompanhamento", "Plano de acompanhamento", formData.followUpPlan, "Texto", dataColeta],
      ["UX_003", "UX e Retencao", "Suporte", "Suporte via WhatsApp", formData.whatsappSupport, "Booleano", dataColeta],
      ["UX_004", "UX e Retencao", "Retorno", "Retorno programado", formData.scheduledReturn, "Texto", dataColeta],
      ["UX_005", "UX e Retencao", "Lembretes", "Tem lembretes", formData.hasReminders, "Booleano", dataColeta],
      ["UX_006", "UX e Retencao", "Lembretes", "Processo de lembretes", formData.reminderProcess, "Texto", dataColeta],
      ["UX_007", "UX e Retencao", "Pos-Consulta", "Estrutura pos-consulta", formData.postConsultationStructure, "Texto", dataColeta],
      ["UX_008", "UX e Retencao", "Feedback", "Reclamacoes dos pacientes", formData.patientComplaints, "Texto", dataColeta],
      ["UX_009", "UX e Retencao", "Experiencia", "Tempo de espera medio", formData.avgWaitTime, "Tempo", dataColeta],
      // Processos Internos
      ["PROC_001", "Processos Internos", "Gestao", "Reunioes do CEO com equipe", formData.ceoMeetings, "Texto", dataColeta],
      ["PROC_002", "Processos Internos", "Problemas", "3 problemas percebidos pela equipe", formData.teamPerceivedProblems, "Texto", dataColeta],
      ["PROC_003", "Processos Internos", "Tarefas", "Tarefas manuais da secretaria", formData.manualSecretaryTasks, "Texto", dataColeta],
      ["PROC_004", "Processos Internos", "Automacao", "Oportunidades de automacao", formData.automationOpportunities, "Texto", dataColeta],
      ["PROC_005", "Processos Internos", "Decisao", "Processo de tomada de decisao", formData.decisionProcess, "Texto", dataColeta],
      ["PROC_006", "Processos Internos", "Jornada", "Fluxo da jornada do paciente", formData.patientJourneyFlow, "Texto", dataColeta],
      // Identidade e Posicionamento
      ["IDENT_001", "Identidade e Posicionamento", "Visao", "Visao do CEO para clinica", formData.ceoVision, "Texto", dataColeta],
      ["IDENT_002", "Identidade e Posicionamento", "Crescimento", "Como quer crescer", formData.growthPlan, "Texto", dataColeta],
      ["IDENT_003", "Identidade e Posicionamento", "Diferencial", "O que a clinica faz de diferente", formData.differentiator, "Texto", dataColeta],
      ["IDENT_004", "Identidade e Posicionamento", "Publico", "Publico alvo desejado", formData.targetAudience, "Texto", dataColeta],
      // Dados
      ["DAD_001", "Dados", "Documentacao", "Tem planilhas dashboards relatorios", formData.hasSpreadsheets, "Texto", dataColeta],
      ["DAD_002", "Dados", "BI", "Tem dashboards BI", formData.hasDashboards, "Booleano", dataColeta],
      ["DAD_003", "Dados", "Localizacao", "Onde estao os dados", formData.dataLocation, "Texto", dataColeta],
      ["DAD_004", "Dados", "Qualidade", "Os dados sao confiaveis", formData.dataReliability, "Texto", dataColeta],
    ];

    // Usar ponto e vírgula como separador (melhor para Power BI em PT-BR)
    const csvContent = [
      headers.join(";"),
      ...rows.map(row => row.map(cell => `"${(cell || "").replace(/"/g, '""')}"`).join(";"))
    ].join("\r\n");

    // UTF-8 BOM para Power BI reconhecer acentos corretamente
    const blob = new Blob(["\ufeff" + csvContent], { type: "text/csv;charset=utf-8" });
    saveAs(blob, `diagnostico-lean-health-${dataColeta}.csv`);
    toast.success("CSV para Power BI exportado com sucesso!");
  };

  const exportToWord = async () => {
    const sections = [
      {
        title: "1. Marketing e Aquisição (Leads)",
        objective: "Problema de ativação, tempo de ativação lento, falta de lead scoring, falta de previsibilidade",
        questions: [
          { q: "Quantos leads entram por mês e de onde vêm?", a: `${formData.leadsPerMonth} - ${formData.leadSources}` },
          { q: "Custo por lead", a: formData.costPerLead },
          { q: "Quem responde os leads e qual é o tempo médio de resposta?", a: `${formData.whoRespondsLeads} - ${formData.avgResponseTime}` },
          { q: "Qual é o funil? (Recebe lead → responde → agenda → comparece)", a: formData.funnel },
          { q: "Tem follow up? Em quanto tempo, quantas vezes?", a: `${formData.hasFollowUp} - ${formData.followUpDetails}` },
          { q: "Tem CRM ou alguma planilha?", a: formData.hasCRM },
          { q: "Quem faz as vendas? Existe algum responsável?", a: formData.salesResponsible },
          { q: "Quem é o responsável pelo setor de leads e vendas?", a: formData.leadsSectorResponsible },
        ]
      },
      {
        title: "2. Agenda/Operação",
        objective: "Otimizar a agenda e aumentar receita sem necessidade de aumentar volume de pacientes. 10% de redução dos no-shows pode significar +- 10K/mês",
        questions: [
          { q: "Número de consultas que cabem por dia para cada especialidade", a: formData.consultationsPerDayBySpecialty },
          { q: "Número de consultas realizadas de fato para cada especialidade", a: formData.actualConsultationsBySpecialty },
          { q: "Número de procedimentos realizados por cada especialidade", a: formData.proceduresBySpecialty },
          { q: "Taxa de ocupação semanal", a: formData.weeklyOccupancy },
          { q: "Timeline de horários mortos/vagos e cheios", a: formData.deadHoursTimeline },
          { q: "Número de no-shows? Quantos remarcam e de fato assistem?", a: `${formData.noShowCount} - ${formData.rescheduleRate}` },
          { q: "Taxa de cancelamentos. Existe alguma política de cancelamento?", a: `${formData.cancellationRate} - ${formData.cancellationPolicy}` },
          { q: "O que fazem durante os buracos na agenda?", a: formData.agendaGapsAction },
          { q: "Tem secretária? Consegue reorganizar rápido?", a: formData.hasSecretary },
          { q: "Qual é a função da secretária?", a: formData.secretaryFunction },
          { q: "Existe confirmação automática?", a: formData.hasAutoConfirmation },
        ]
      },
      {
        title: "3. Financeiro",
        objective: "Identificar o driver financeiro principal da clínica. A maioria das clínicas perde dinheiro da falta de recorrência, não na aquisição.",
        questions: [
          { q: "Ticket médio - Consulta inicial", a: formData.avgTicketInitial },
          { q: "Ticket médio - Retorno", a: formData.avgTicketReturn },
          { q: "Ticket médio - Pacotes", a: formData.avgTicketPackages },
          { q: "Ticket médio - Protocolos", a: formData.avgTicketProtocols },
          { q: "Quantos protocolos vendem por mês?", a: formData.protocolsSoldPerMonth },
          { q: "Tem algum serviço adicional? Produtos, procedimentos?", a: formData.additionalServices },
          { q: "Receita bruta dos últimos 12 meses", a: formData.grossRevenue12m },
          { q: "Receita líquida dos últimos 12 meses", a: formData.netRevenue12m },
          { q: "Custos fixos detalhados (aluguel, serviços, pessoal, insumos, etc.)", a: formData.fixedCosts },
          { q: "Qual é a margem real?", a: formData.realMargin },
          { q: "Qual percentual vem de: novos pacientes / recorrência / retorno?", a: formData.revenueBreakdown },
          { q: "LTV (Lifetime Value)?", a: formData.ltv },
        ]
      },
      {
        title: "4. UX (Retenção)",
        objective: "Criar loop de retenção e recorrência. Melhora receita sem custo de aquisição.",
        questions: [
          { q: "O que o paciente recebe depois da consulta? É contatado novamente?", a: formData.postConsultationContact },
          { q: "Tem algum plano de acompanhamento?", a: formData.followUpPlan },
          { q: "Tem suporte via WhatsApp?", a: formData.whatsappSupport },
          { q: "Retorno programado? Já sai com consulta marcada?", a: formData.scheduledReturn },
          { q: "Tem lembretes? Quem faz? Manual ou secretária?", a: `${formData.hasReminders} - ${formData.reminderProcess}` },
          { q: "Existe uma estrutura de pós-consulta estruturada?", a: formData.postConsultationStructure },
          { q: "Tem reclamações dos pacientes? Do que mais reclamam?", a: formData.patientComplaints },
          { q: "Tempo de espera médio, o que fazem nesse tempo de espera?", a: formData.avgWaitTime },
        ]
      },
      {
        title: "5. Processos Internos (Lean Six Sigma)",
        objective: "Cortar desperdício, diminuir atraso, reduzir espera e melhorar produtividade.",
        questions: [
          { q: "Como CEO, tem reuniões com sua equipe (todos juntos e individuais) pelo menos 1x a cada 15 dias?", a: formData.ceoMeetings },
          { q: "Quais são os 3 problemas percebidos pela equipe?", a: formData.teamPerceivedProblems },
          { q: "Quais tarefas a secretária faz manualmente?", a: formData.manualSecretaryTasks },
          { q: "Quais tarefas repetitivas poderiam ser automatizadas?", a: formData.automationOpportunities },
          { q: "Quem decide o quê? Como é o processo de tomada de decisão?", a: formData.decisionProcess },
          { q: "O fluxo da jornada do paciente como está?", a: formData.patientJourneyFlow },
        ]
      },
      {
        title: "6. Identidade e Posicionamento",
        objective: "Entender a visão estratégica e diferenciação da clínica.",
        questions: [
          { q: "Qual é sua visão como CEO para a clínica?", a: formData.ceoVision },
          { q: "Como quer crescer?", a: formData.growthPlan },
          { q: "O que sua clínica faz de diferente?", a: formData.differentiator },
          { q: "Qual é seu público-alvo desejado?", a: formData.targetAudience },
        ]
      },
      {
        title: "7. Dados (O que tem e não tem)",
        objective: "Definir o que vamos coletar nas próximas 4 semanas se não houver dados.",
        questions: [
          { q: "Tem planilhas? Dashboards? Relatórios? Histórico?", a: formData.hasSpreadsheets },
          { q: "Tem dashboards/BI?", a: formData.hasDashboards },
          { q: "Onde estão esses dados?", a: formData.dataLocation },
          { q: "Os dados são confiáveis?", a: formData.dataReliability },
        ]
      },
    ];

    const docChildren: Paragraph[] = [
      new Paragraph({
        text: "DIAGNÓSTICO LEAN HEALTH CARE",
        heading: HeadingLevel.TITLE,
        spacing: { after: 400 },
      }),
      new Paragraph({
        children: [
          new TextRun({
            text: "Objetivo da reunião: ",
            bold: true,
          }),
          new TextRun("Diagnóstico claro de onde a clínica perde dinheiro e oportunidades. Identificar o caminho mais rápido para aumentar receita líquida."),
        ],
        spacing: { after: 400 },
      }),
    ];

    sections.forEach(section => {
      docChildren.push(
        new Paragraph({
          text: section.title,
          heading: HeadingLevel.HEADING_1,
          spacing: { before: 400, after: 200 },
        }),
        new Paragraph({
          children: [
            new TextRun({
              text: "Objetivo: ",
              bold: true,
              italics: true,
            }),
            new TextRun({
              text: section.objective,
              italics: true,
            }),
          ],
          spacing: { after: 200 },
        })
      );

      section.questions.forEach((item, idx) => {
        docChildren.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `${idx + 1}. ${item.q}`,
                bold: true,
              }),
            ],
            spacing: { before: 200 },
          }),
          new Paragraph({
            children: [
              new TextRun({
                text: "R: ",
                bold: true,
              }),
              new TextRun(item.a || "(Não preenchido)"),
            ],
            spacing: { after: 100 },
          })
        );
      });
    });

    const doc = new Document({
      sections: [{
        properties: {},
        children: docChildren,
      }],
    });

    const blob = await Packer.toBlob(doc);
    saveAs(blob, "diagnostico-lean-health.docx");
    toast.success("Word exportado com sucesso!");
  };

  const sections = [
    { id: "1", title: "Marketing e Aquisição", icon: Megaphone, completed: false },
    { id: "2", title: "Agenda/Operação", icon: Calendar, completed: false },
    { id: "3", title: "Financeiro", icon: DollarSign, completed: false },
    { id: "4", title: "UX (Retenção)", icon: Heart, completed: false },
    { id: "5", title: "Processos Internos", icon: Settings, completed: false },
    { id: "6", title: "Identidade e Posicionamento", icon: Target, completed: false },
    { id: "7", title: "Dados", icon: Database, completed: false },
  ];

  return (
    <div className="space-y-5 sm:space-y-6 animate-slide-up">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-3xl font-bold text-foreground mb-2">Diagnóstico Lean Health Care</h2>
          <p className="text-sm sm:text-base text-muted-foreground">Identificar onde a clínica perde dinheiro e o caminho mais rápido para aumentar receita líquida</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={exportToCSV} className="flex-1 sm:flex-none h-12 sm:h-10">
            <FileDown className="h-5 w-5 sm:h-4 sm:w-4 mr-2" />
            <span className="text-sm">CSV</span>
          </Button>
          <Button variant="outline" onClick={exportToWord} className="flex-1 sm:flex-none h-12 sm:h-10">
            <FileText className="h-5 w-5 sm:h-4 sm:w-4 mr-2" />
            <span className="text-sm">Word</span>
          </Button>
        </div>
      </div>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base sm:text-lg flex items-center justify-between">
            <span>Seções do Diagnóstico</span>
            <span className="text-sm font-normal text-muted-foreground">7 seções</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-4 sm:grid-cols-7 gap-3 sm:gap-4">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div key={section.id} className="flex flex-col items-center gap-2">
                  <div className={`p-3 sm:p-3 rounded-lg ${section.completed ? 'bg-success/10' : 'bg-muted'}`}>
                    <Icon className={`h-6 w-6 sm:h-5 sm:w-5 ${section.completed ? 'text-success' : 'text-muted-foreground'}`} />
                  </div>
                  <span className="text-[10px] sm:text-xs text-center text-muted-foreground leading-tight">{section.title}</span>
                  {section.completed && (
                    <CheckCircle2 className="h-4 w-4 text-success" />
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      <Accordion type="multiple" className="space-y-4">
        {/* Section 1 - Marketing */}
        <AccordionItem value="section-1" className="border border-border rounded-lg px-4 sm:px-6">
          <AccordionTrigger className="hover:no-underline py-4 sm:py-6">
            <div className="flex items-center gap-3">
              <Megaphone className="h-6 w-6 sm:h-6 sm:w-6 text-primary" />
              <div className="text-left">
                <span className="font-semibold text-base sm:text-lg">1. Marketing e Aquisição (Leads)</span>
                <p className="text-xs sm:text-sm text-muted-foreground font-normal">Problema de ativação, lead scoring, previsibilidade</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-5 sm:space-y-6 pt-4 pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Quantos leads entram por mês?</Label>
                <Input 
                  value={formData.leadsPerMonth} 
                  onChange={(e) => handleChange('leadsPerMonth', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Ex: 150 leads/mês"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">De onde vêm os leads?</Label>
                <Input 
                  value={formData.leadSources} 
                  onChange={(e) => handleChange('leadSources', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Ex: Instagram, Google, indicação"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Custo por lead</Label>
                <Input 
                  value={formData.costPerLead} 
                  onChange={(e) => handleChange('costPerLead', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Ex: R$ 25,00"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Quem responde os leads?</Label>
                <Input 
                  value={formData.whoRespondsLeads} 
                  onChange={(e) => handleChange('whoRespondsLeads', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Ex: Secretária, equipe comercial"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Tempo médio de resposta</Label>
                <Input 
                  value={formData.avgResponseTime} 
                  onChange={(e) => handleChange('avgResponseTime', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Ex: 2 horas"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Tem CRM ou planilha?</Label>
                <Input 
                  value={formData.hasCRM} 
                  onChange={(e) => handleChange('hasCRM', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Ex: Planilha Excel, RD Station"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-sm sm:text-base">Qual é o funil? (Recebe lead → responde → agenda → comparece)</Label>
              <Textarea 
                value={formData.funnel} 
                onChange={(e) => handleChange('funnel', e.target.value)}
                disabled={!isEditing} 
                placeholder="Descreva as taxas de conversão de cada etapa do funil"
                rows={3}
                className="text-base sm:text-sm"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Tem follow up?</Label>
                <Input 
                  value={formData.hasFollowUp} 
                  onChange={(e) => handleChange('hasFollowUp', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Sim/Não"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Detalhes do follow up (tempo, frequência)</Label>
                <Input 
                  value={formData.followUpDetails} 
                  onChange={(e) => handleChange('followUpDetails', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Ex: 3x em 7 dias"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Responsável pelas vendas</Label>
                <Input 
                  value={formData.salesResponsible} 
                  onChange={(e) => handleChange('salesResponsible', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Nome ou cargo"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Responsável pelo setor de leads</Label>
                <Input 
                  value={formData.leadsSectorResponsible} 
                  onChange={(e) => handleChange('leadsSectorResponsible', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Nome ou cargo"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Section 2 - Agenda */}
        <AccordionItem value="section-2" className="border border-border rounded-lg px-4 sm:px-6">
          <AccordionTrigger className="hover:no-underline py-4 sm:py-6">
            <div className="flex items-center gap-3">
              <Calendar className="h-6 w-6 text-primary" />
              <div className="text-left">
                <span className="font-semibold text-base sm:text-lg">2. Agenda/Operação</span>
                <p className="text-xs sm:text-sm text-muted-foreground font-normal">Otimizar agenda, aumentar receita sem mais pacientes</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-5 sm:space-y-6 pt-4 pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Consultas que cabem por dia (por especialidade)</Label>
                <Textarea 
                  value={formData.consultationsPerDayBySpecialty} 
                  onChange={(e) => handleChange('consultationsPerDayBySpecialty', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Ex: Dermatologia: 20, Estética: 15"
                  rows={2}
                  className="text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Consultas realizadas de fato (por especialidade)</Label>
                <Textarea 
                  value={formData.actualConsultationsBySpecialty} 
                  onChange={(e) => handleChange('actualConsultationsBySpecialty', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Ex: Dermatologia: 14, Estética: 10"
                  rows={2}
                  className="text-base sm:text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Procedimentos realizados por especialidade</Label>
                <Textarea 
                  value={formData.proceduresBySpecialty} 
                  onChange={(e) => handleChange('proceduresBySpecialty', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Liste os procedimentos por área"
                  rows={2}
                  className="text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Taxa de ocupação semanal</Label>
                <Input 
                  value={formData.weeklyOccupancy} 
                  onChange={(e) => handleChange('weeklyOccupancy', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Ex: 70%"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-sm sm:text-base">Timeline de horários mortos/vagos e cheios</Label>
              <Textarea 
                value={formData.deadHoursTimeline} 
                onChange={(e) => handleChange('deadHoursTimeline', e.target.value)}
                disabled={!isEditing} 
                placeholder="Ex: Segunda 8-10h vazio, Terça tarde cheio..."
                rows={3}
                className="text-base sm:text-sm"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Número de no-shows</Label>
                <Input 
                  value={formData.noShowCount} 
                  onChange={(e) => handleChange('noShowCount', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Ex: 15/mês"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Remarcam e comparecem?</Label>
                <Input 
                  value={formData.rescheduleRate} 
                  onChange={(e) => handleChange('rescheduleRate', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Ex: 60% remarcam"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Taxa de cancelamentos</Label>
                <Input 
                  value={formData.cancellationRate} 
                  onChange={(e) => handleChange('cancellationRate', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Ex: 20%"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Política de cancelamento</Label>
                <Textarea 
                  value={formData.cancellationPolicy} 
                  onChange={(e) => handleChange('cancellationPolicy', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Descreva a política atual"
                  rows={2}
                  className="text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">O que fazem durante buracos na agenda?</Label>
                <Textarea 
                  value={formData.agendaGapsAction} 
                  onChange={(e) => handleChange('agendaGapsAction', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Descreva as ações tomadas"
                  rows={2}
                  className="text-base sm:text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Tem secretária? Reorganiza rápido?</Label>
                <Input 
                  value={formData.hasSecretary} 
                  onChange={(e) => handleChange('hasSecretary', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Sim/Não - capacidade"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Função da secretária</Label>
                <Input 
                  value={formData.secretaryFunction} 
                  onChange={(e) => handleChange('secretaryFunction', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Liste as funções"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Confirmação automática?</Label>
                <Input 
                  value={formData.hasAutoConfirmation} 
                  onChange={(e) => handleChange('hasAutoConfirmation', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Sim/Não - qual sistema"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Section 3 - Financeiro */}
        <AccordionItem value="section-3" className="border border-border rounded-lg px-4 sm:px-6">
          <AccordionTrigger className="hover:no-underline py-4 sm:py-6">
            <div className="flex items-center gap-3">
              <DollarSign className="h-6 w-6 text-primary" />
              <div className="text-left">
                <span className="font-semibold text-base sm:text-lg">3. Financeiro</span>
                <p className="text-xs sm:text-sm text-muted-foreground font-normal">Driver financeiro, foco em recorrência</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-5 sm:space-y-6 pt-4 pb-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Ticket - Consulta inicial</Label>
                <Input 
                  value={formData.avgTicketInitial} 
                  onChange={(e) => handleChange('avgTicketInitial', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="R$"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Ticket - Retorno</Label>
                <Input 
                  value={formData.avgTicketReturn} 
                  onChange={(e) => handleChange('avgTicketReturn', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="R$"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Ticket - Pacotes</Label>
                <Input 
                  value={formData.avgTicketPackages} 
                  onChange={(e) => handleChange('avgTicketPackages', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="R$"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Ticket - Protocolos</Label>
                <Input 
                  value={formData.avgTicketProtocols} 
                  onChange={(e) => handleChange('avgTicketProtocols', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="R$"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Protocolos vendidos por mês</Label>
                <Input 
                  value={formData.protocolsSoldPerMonth} 
                  onChange={(e) => handleChange('protocolsSoldPerMonth', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Ex: 25"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Serviços adicionais (produtos, procedimentos)</Label>
                <Input 
                  value={formData.additionalServices} 
                  onChange={(e) => handleChange('additionalServices', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Liste os serviços"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Receita bruta últimos 12 meses</Label>
                <Input 
                  value={formData.grossRevenue12m} 
                  onChange={(e) => handleChange('grossRevenue12m', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="R$"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Receita líquida últimos 12 meses</Label>
                <Input 
                  value={formData.netRevenue12m} 
                  onChange={(e) => handleChange('netRevenue12m', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="R$"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-sm sm:text-base">Custos fixos detalhados (aluguel, serviços, pessoal, logística, empréstimos, insumos)</Label>
              <Textarea 
                value={formData.fixedCosts} 
                onChange={(e) => handleChange('fixedCosts', e.target.value)}
                disabled={!isEditing} 
                placeholder="Detalhe cada categoria de custo"
                rows={4}
                className="text-base sm:text-sm"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6">
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Margem real</Label>
                <Input 
                  value={formData.realMargin} 
                  onChange={(e) => handleChange('realMargin', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Ex: 25%"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Breakdown: novos / recorrência / retorno</Label>
                <Input 
                  value={formData.revenueBreakdown} 
                  onChange={(e) => handleChange('revenueBreakdown', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Ex: 40% / 35% / 25%"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">LTV (Lifetime Value)</Label>
                <Input 
                  value={formData.ltv} 
                  onChange={(e) => handleChange('ltv', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="R$"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Section 4 - UX */}
        <AccordionItem value="section-4" className="border border-border rounded-lg px-4 sm:px-6">
          <AccordionTrigger className="hover:no-underline py-4 sm:py-6">
            <div className="flex items-center gap-3">
              <Heart className="h-6 w-6 text-primary" />
              <div className="text-left">
                <span className="font-semibold text-base sm:text-lg">4. UX (Retenção)</span>
                <p className="text-xs sm:text-sm text-muted-foreground font-normal">Loop de retenção e recorrência</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-5 sm:space-y-6 pt-4 pb-6">
            <div className="space-y-2">
              <Label className="text-sm sm:text-base">O que o paciente recebe depois da consulta? É contatado novamente?</Label>
              <Textarea 
                value={formData.postConsultationContact} 
                onChange={(e) => handleChange('postConsultationContact', e.target.value)}
                disabled={!isEditing} 
                placeholder="Descreva o contato pós-consulta"
                rows={3}
                className="text-base sm:text-sm"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Tem plano de acompanhamento?</Label>
                <Input 
                  value={formData.followUpPlan} 
                  onChange={(e) => handleChange('followUpPlan', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Sim/Não - descreva"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Tem suporte via WhatsApp?</Label>
                <Input 
                  value={formData.whatsappSupport} 
                  onChange={(e) => handleChange('whatsappSupport', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Sim/Não - como funciona"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Retorno programado? Já sai com consulta marcada?</Label>
                <Input 
                  value={formData.scheduledReturn} 
                  onChange={(e) => handleChange('scheduledReturn', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Sim/Não"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Tem lembretes? Manual ou automático?</Label>
                <Input 
                  value={formData.hasReminders} 
                  onChange={(e) => handleChange('hasReminders', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Sim/Não - tipo"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-sm sm:text-base">Processo de lembretes (quem faz, como, quando)</Label>
              <Textarea 
                value={formData.reminderProcess} 
                onChange={(e) => handleChange('reminderProcess', e.target.value)}
                disabled={!isEditing} 
                placeholder="Descreva o processo"
                rows={2}
                className="text-base sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm sm:text-base">Existe estrutura de pós-consulta?</Label>
              <Textarea 
                value={formData.postConsultationStructure} 
                onChange={(e) => handleChange('postConsultationStructure', e.target.value)}
                disabled={!isEditing} 
                placeholder="Descreva a estrutura"
                rows={2}
                className="text-base sm:text-sm"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Reclamações dos pacientes - do que mais reclamam?</Label>
                <Textarea 
                  value={formData.patientComplaints} 
                  onChange={(e) => handleChange('patientComplaints', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Liste as principais reclamações"
                  rows={2}
                  className="text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Tempo de espera médio e o que fazem nesse tempo</Label>
                <Textarea 
                  value={formData.avgWaitTime} 
                  onChange={(e) => handleChange('avgWaitTime', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Ex: 20min, oferecem café"
                  rows={2}
                  className="text-base sm:text-sm"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Section 5 - Processos */}
        <AccordionItem value="section-5" className="border border-border rounded-lg px-4 sm:px-6">
          <AccordionTrigger className="hover:no-underline py-4 sm:py-6">
            <div className="flex items-center gap-3">
              <Settings className="h-6 w-6 text-primary" />
              <div className="text-left">
                <span className="font-semibold text-base sm:text-lg">5. Processos Internos (Lean Six Sigma)</span>
                <p className="text-xs sm:text-sm text-muted-foreground font-normal">Cortar desperdício, melhorar produtividade</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-5 sm:space-y-6 pt-4 pb-6">
            <div className="space-y-2">
              <Label className="text-sm sm:text-base">Como CEO, tem reuniões com equipe (todos juntos e individuais) pelo menos 1x a cada 15 dias?</Label>
              <Textarea 
                value={formData.ceoMeetings} 
                onChange={(e) => handleChange('ceoMeetings', e.target.value)}
                disabled={!isEditing} 
                placeholder="Descreva a frequência e formato das reuniões"
                rows={2}
                className="text-base sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm sm:text-base">Quais são os 3 problemas percebidos pela equipe?</Label>
              <Textarea 
                value={formData.teamPerceivedProblems} 
                onChange={(e) => handleChange('teamPerceivedProblems', e.target.value)}
                disabled={!isEditing} 
                placeholder="1. ...\n2. ...\n3. ..."
                rows={3}
                className="text-base sm:text-sm"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Tarefas que a secretária faz manualmente</Label>
                <Textarea 
                  value={formData.manualSecretaryTasks} 
                  onChange={(e) => handleChange('manualSecretaryTasks', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Liste as tarefas manuais"
                  rows={3}
                  className="text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Tarefas que poderiam ser automatizadas</Label>
                <Textarea 
                  value={formData.automationOpportunities} 
                  onChange={(e) => handleChange('automationOpportunities', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Liste as oportunidades de automação"
                  rows={3}
                  className="text-base sm:text-sm"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-sm sm:text-base">Quem decide o quê? Processo de tomada de decisão</Label>
              <Textarea 
                value={formData.decisionProcess} 
                onChange={(e) => handleChange('decisionProcess', e.target.value)}
                disabled={!isEditing} 
                placeholder="Descreva a estrutura de decisão"
                rows={2}
                className="text-base sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm sm:text-base">Fluxo da jornada do paciente - como está?</Label>
              <Textarea 
                value={formData.patientJourneyFlow} 
                onChange={(e) => handleChange('patientJourneyFlow', e.target.value)}
                disabled={!isEditing} 
                placeholder="Descreva o fluxo atual do paciente desde o primeiro contato"
                rows={4}
                className="text-base sm:text-sm"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Section 6 - Identidade */}
        <AccordionItem value="section-6" className="border border-border rounded-lg px-4 sm:px-6">
          <AccordionTrigger className="hover:no-underline py-4 sm:py-6">
            <div className="flex items-center gap-3">
              <Target className="h-6 w-6 text-primary" />
              <div className="text-left">
                <span className="font-semibold text-base sm:text-lg">6. Identidade e Posicionamento</span>
                <p className="text-xs sm:text-sm text-muted-foreground font-normal">Visão estratégica e diferenciação</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-5 sm:space-y-6 pt-4 pb-6">
            <div className="space-y-2">
              <Label className="text-sm sm:text-base">Qual é sua visão como CEO para a clínica?</Label>
              <Textarea 
                value={formData.ceoVision} 
                onChange={(e) => handleChange('ceoVision', e.target.value)}
                disabled={!isEditing} 
                placeholder="Descreva sua visão de futuro"
                rows={3}
                className="text-base sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm sm:text-base">Como quer crescer?</Label>
              <Textarea 
                value={formData.growthPlan} 
                onChange={(e) => handleChange('growthPlan', e.target.value)}
                disabled={!isEditing} 
                placeholder="Descreva os planos de crescimento"
                rows={3}
                className="text-base sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm sm:text-base">O que sua clínica faz de diferente?</Label>
              <Textarea 
                value={formData.differentiator} 
                onChange={(e) => handleChange('differentiator', e.target.value)}
                disabled={!isEditing} 
                placeholder="Descreva seus diferenciais competitivos"
                rows={3}
                className="text-base sm:text-sm"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-sm sm:text-base">Qual é seu público-alvo desejado?</Label>
              <Textarea 
                value={formData.targetAudience} 
                onChange={(e) => handleChange('targetAudience', e.target.value)}
                disabled={!isEditing} 
                placeholder="Descreva o perfil do cliente ideal"
                rows={3}
                className="text-base sm:text-sm"
              />
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Section 7 - Dados */}
        <AccordionItem value="section-7" className="border border-border rounded-lg px-4 sm:px-6">
          <AccordionTrigger className="hover:no-underline py-4 sm:py-6">
            <div className="flex items-center gap-3">
              <Database className="h-6 w-6 text-primary" />
              <div className="text-left">
                <span className="font-semibold text-base sm:text-lg">7. Dados (O que tem e não tem)</span>
                <p className="text-xs sm:text-sm text-muted-foreground font-normal">Definir coleta para as próximas 4 semanas</p>
              </div>
            </div>
          </AccordionTrigger>
          <AccordionContent className="space-y-5 sm:space-y-6 pt-4 pb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Tem planilhas, relatórios, histórico?</Label>
                <Textarea 
                  value={formData.hasSpreadsheets} 
                  onChange={(e) => handleChange('hasSpreadsheets', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Liste os documentos disponíveis"
                  rows={2}
                  className="text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Tem dashboards/BI?</Label>
                <Input 
                  value={formData.hasDashboards} 
                  onChange={(e) => handleChange('hasDashboards', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Ex: Power BI, Metabase, não tem"
                  className="h-12 sm:h-10 text-base sm:text-sm"
                />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Onde estão os dados?</Label>
                <Textarea 
                  value={formData.dataLocation} 
                  onChange={(e) => handleChange('dataLocation', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Descreva onde os dados estão armazenados"
                  rows={2}
                  className="text-base sm:text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label className="text-sm sm:text-base">Os dados são confiáveis?</Label>
                <Textarea 
                  value={formData.dataReliability} 
                  onChange={(e) => handleChange('dataReliability', e.target.value)}
                  disabled={!isEditing} 
                  placeholder="Avalie a qualidade e confiabilidade"
                  rows={2}
                  className="text-base sm:text-sm"
                />
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="flex gap-4">
        <Button 
          className="flex-1 h-14 sm:h-12 text-base" 
          size="lg"
          onClick={handleToggleEdit}
          variant={isEditing ? "default" : "outline"}
        >
          {isEditing ? (
            <>
              <Save className="h-5 w-5 mr-2" />
              Salvar Alterações
            </>
          ) : (
            <>
              <Edit2 className="h-5 w-5 mr-2" />
              Editar Informações
            </>
          )}
        </Button>
      </div>
    </div>
  );
};