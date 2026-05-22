import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { motion } from "motion/react";
import { MapPin, Briefcase, Award, CheckCircle2, TrendingUp } from "lucide-react";

export function ResumesSection() {
  const candidates = [
    {
      name: "Ana Silva",
      role: "Desenvolvedora Full Stack",
      experience: "5 anos",
      location: "São Paulo, SP",
      company: "Google",
      availability: "Imediato",
      skills: ["React", "Node.js", "Python", "AWS"],
      qualities: ["Proativa", "Liderança", "Comunicação"],
      compatibility: 94,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      type: "tecnológico",
    },
    {
      name: "Carlos Mendes",
      role: "Designer UX/UI Senior",
      experience: "7 anos",
      location: "Rio de Janeiro, RJ",
      company: "Nubank",
      availability: "15 dias",
      skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
      qualities: ["Criativo", "Inovador", "Detalhista"],
      compatibility: 91,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      type: "criativo",
    },
    {
      name: "Mariana Costa",
      role: "Gerente de Projetos",
      experience: "8 anos",
      location: "Belo Horizonte, MG",
      company: "Microsoft",
      availability: "30 dias",
      skills: ["Agile", "Scrum", "PMBOK", "Jira"],
      qualities: ["Organizada", "Estratégica", "Liderança"],
      compatibility: 89,
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      type: "executivo",
    },
    {
      name: "Rafael Santos",
      role: "Analista Financeiro",
      experience: "4 anos",
      location: "Curitiba, PR",
      company: "BTG Pactual",
      availability: "Imediato",
      skills: ["Excel Avançado", "Power BI", "SQL", "Python"],
      qualities: ["Analítico", "Preciso", "Focado"],
      compatibility: 86,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
      type: "administrativo",
    },
    {
      name: "Juliana Oliveira",
      role: "Especialista em Marketing Digital",
      experience: "6 anos",
      location: "Porto Alegre, RS",
      company: "Amazon",
      availability: "Imediato",
      skills: ["SEO", "Google Ads", "Analytics", "Content Marketing"],
      qualities: ["Estratégica", "Criativa", "Data-Driven"],
      compatibility: 92,
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop",
      type: "criativo",
    },
    {
      name: "Pedro Almeida",
      role: "Coordenador de Logística",
      experience: "9 anos",
      location: "Campinas, SP",
      company: "DHL",
      availability: "45 dias",
      skills: ["Supply Chain", "SAP", "Gestão de Estoque", "Lean"],
      qualities: ["Eficiente", "Planejador", "Resolução de Problemas"],
      compatibility: 83,
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      type: "logística",
    },
    {
      name: "Beatriz Lima",
      role: "Líder de Customer Success",
      experience: "5 anos",
      location: "Florianópolis, SC",
      company: "Salesforce",
      availability: "Imediato",
      skills: ["CRM", "Customer Service", "Análise de Métricas", "Comunicação"],
      qualities: ["Empática", "Comunicativa", "Resolutiva"],
      compatibility: 88,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
      type: "atendimento",
    },
    {
      name: "Lucas Ferreira",
      role: "Diretor Comercial",
      experience: "12 anos",
      location: "São Paulo, SP",
      company: "Oracle",
      availability: "60 dias",
      skills: ["Vendas B2B", "Estratégia Comercial", "Negociação", "Gestão de Equipes"],
      qualities: ["Visionário", "Persuasivo", "Líder"],
      compatibility: 95,
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop",
      type: "liderança",
    },
  ];

  return (
    <section id="currículos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Currículos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profissionais qualificados prontos para fazer a diferença na sua empresa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {candidates.map((candidate, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <Card className="p-6 h-full cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-500/50 bg-card flex flex-col">
                <div className="flex flex-col items-center text-center mb-4">
                  <Avatar className="w-20 h-20 mb-3 ring-4 ring-purple-500/20">
                    <AvatarImage src={candidate.avatar} alt={candidate.name} />
                    <AvatarFallback>{candidate.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-semibold text-card-foreground">{candidate.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{candidate.role}</p>
                  {candidate.compatibility >= 85 && (
                    <div className="flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      <TrendingUp className="w-3 h-3" />
                      Compatibilidade: {candidate.compatibility}%
                    </div>
                  )}
                </div>

                <div className="space-y-2 mb-4 flex-1">
                  <div className="flex items-center gap-2 text-sm">
                    <Briefcase className="w-4 h-4 text-muted-foreground" />
                    <span className="text-card-foreground">{candidate.company}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="w-4 h-4 text-muted-foreground" />
                    <span className="text-card-foreground">{candidate.experience} de experiência</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-muted-foreground" />
                    <span className="text-card-foreground">{candidate.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span className="text-card-foreground">Disponível: {candidate.availability}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-2">Habilidades:</p>
                  <div className="flex flex-wrap gap-1">
                    {candidate.skills.slice(0, 3).map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                    {candidate.skills.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{candidate.skills.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-muted-foreground mb-2">Qualidades:</p>
                  <div className="flex flex-wrap gap-1">
                    {candidate.qualities.map((quality, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800">
                        {quality}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Button size="sm" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Ver Perfil Completo
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
