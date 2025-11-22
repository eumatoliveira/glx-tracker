import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { User, Mail, Phone, Calendar, LogOut, Bell, Shield } from "lucide-react";

export const Profile = () => {
  const profileInfo = [
    { icon: Mail, label: "Email", value: "joao.silva@email.com" },
    { icon: Phone, label: "Telefone", value: "(11) 98765-4321" },
    { icon: Calendar, label: "Paciente desde", value: "Março 2024" },
  ];

  const settings = [
    { icon: Bell, label: "Notificações", description: "Gerenciar alertas" },
    { icon: Shield, label: "Privacidade", description: "Configurações de dados" },
  ];

  return (
    <div className="space-y-6 animate-slide-up">
      <Card className="border-border">
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center">
            <Avatar className="h-20 w-20 mb-4">
              <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                JS
              </AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold text-foreground mb-1">João Silva</h2>
            <p className="text-sm text-muted-foreground mb-4">Paciente Verificado</p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-lg">Informações Pessoais</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {profileInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div key={index} className="flex items-center gap-3">
                <div className="p-2 bg-accent rounded-lg">
                  <Icon className="h-4 w-4 text-accent-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-muted-foreground">{info.label}</p>
                  <p className="text-sm font-medium text-foreground">{info.value}</p>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      <Card className="border-border">
        <CardHeader>
          <CardTitle className="text-lg">Configurações</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {settings.map((setting, index) => {
            const Icon = setting.icon;
            return (
              <Button
                key={index}
                variant="ghost"
                className="w-full justify-start h-auto py-3"
              >
                <Icon className="h-5 w-5 mr-3 text-muted-foreground" />
                <div className="flex-1 text-left">
                  <p className="font-medium text-foreground">{setting.label}</p>
                  <p className="text-xs text-muted-foreground">{setting.description}</p>
                </div>
              </Button>
            );
          })}
        </CardContent>
      </Card>

      <Button variant="outline" className="w-full" size="lg">
        <LogOut className="h-4 w-4 mr-2" />
        Sair
      </Button>
    </div>
  );
};
