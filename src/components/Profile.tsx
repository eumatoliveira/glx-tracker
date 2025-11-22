import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Building2, Mail, Phone, MapPin, Users, Calendar } from "lucide-react";

export const Profile = () => {
  const institutionInfo = [
    { icon: Building2, label: "Instituição", value: "Hospital São Lucas" },
    { icon: Mail, label: "Email", value: "contato@saolucas.com.br" },
    { icon: Phone, label: "Telefone", value: "(11) 3456-7890" },
    { icon: MapPin, label: "Localização", value: "São Paulo, SP" },
    { icon: Users, label: "Colaboradores", value: "450 funcionários" },
    { icon: Calendar, label: "Cliente desde", value: "Novembro 2024" },
  ];

  const contacts = [
    {
      name: "Dr. Roberto Almeida",
      role: "Diretor Médico",
      email: "roberto.almeida@saolucas.com.br",
    },
    {
      name: "Maria Santos",
      role: "Gerente de Qualidade",
      email: "maria.santos@saolucas.com.br",
    },
  ];

  return (
    <div className="space-y-6 animate-slide-up">
      <Card className="border-border">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-20 w-20 mb-4">
              <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                HSL
              </AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold text-foreground mb-1">Hospital São Lucas</h2>
            <p className="text-sm text-muted-foreground mb-2">Hospital Geral</p>
            <div className="flex gap-2">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                Projeto Ativo
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-success/10 text-success">
                Fase 2/5
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-lg">Informações Institucionais</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {institutionInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div key={index} className="flex items-center gap-3">
                <div className="p-2 bg-accent rounded-lg">
                  <Icon className="h-4 w-4 text-accent-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-muted-foreground">{info.label}</p>
                  <p className="text-sm font-medium text-foreground truncate">{info.value}</p>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-lg">Contatos Principais</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {contacts.map((contact, index) => (
            <div key={index} className="p-3 bg-accent/50 rounded-lg">
              <p className="font-medium text-foreground">{contact.name}</p>
              <p className="text-xs text-muted-foreground mb-1">{contact.role}</p>
              <p className="text-xs text-primary">{contact.email}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-lg">Consultor Responsável</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-secondary text-secondary-foreground">
                AC
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="font-medium text-foreground">Ana Costa</p>
              <p className="text-xs text-muted-foreground">Especialista Lean Six Sigma</p>
              <p className="text-xs text-primary mt-1">ana.costa@leanhealthcare.com.br</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button variant="outline" className="w-full" size="lg">
        Editar Informações
      </Button>
    </div>
  );
};
