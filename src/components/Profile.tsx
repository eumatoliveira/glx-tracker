import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Building2, Mail, Phone, MapPin, Users, Calendar, Edit2, Save } from "lucide-react";
import { toast } from "sonner";

export const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleToggleEdit = () => {
    if (isEditing) {
      toast.success("Informações atualizadas com sucesso!");
    }
    setIsEditing(!isEditing);
  };
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
    <div className="space-y-5 sm:space-y-6 animate-slide-up">
      <Card className="border-border">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 sm:h-20 sm:w-20 mb-4">
              <AvatarFallback className="text-2xl sm:text-xl bg-primary text-primary-foreground">
                HSL
              </AvatarFallback>
            </Avatar>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-1">Hospital São Lucas</h2>
            <p className="text-sm sm:text-base text-muted-foreground mb-3">Hospital Geral</p>
            <div className="flex gap-2 flex-wrap justify-center">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary">
                Projeto Ativo
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-success/10 text-success">
                Fase 2/5
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Informações Institucionais</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {institutionInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div key={index}>
                {isEditing ? (
                  <div className="space-y-2">
                    <Label className="text-sm flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {info.label}
                    </Label>
                    <Input defaultValue={info.value} className="text-base" />
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 sm:p-2 bg-accent rounded-lg">
                      <Icon className="h-5 w-5 sm:h-4 sm:w-4 text-accent-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-sm sm:text-base font-medium text-foreground truncate">{info.value}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Contatos Principais</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {contacts.map((contact, index) => (
            <div key={index} className="p-3 sm:p-4 bg-accent/50 rounded-lg">
              <p className="text-base font-medium text-foreground">{contact.name}</p>
              <p className="text-sm text-muted-foreground mb-1">{contact.role}</p>
              <p className="text-sm text-primary">{contact.email}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Consultor Responsável</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 sm:h-10 sm:w-10">
              <AvatarFallback className="bg-secondary text-secondary-foreground text-lg sm:text-base">
                AC
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-base font-medium text-foreground">Ana Costa</p>
              <p className="text-sm text-muted-foreground">Especialista Lean Six Sigma</p>
              <p className="text-sm text-primary mt-1">ana.costa@leanhealthcare.com.br</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button 
        variant={isEditing ? "default" : "outline"}
        className="w-full h-14 text-base" 
        size="lg"
        onClick={handleToggleEdit}
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
  );
};
