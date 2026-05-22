import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Search, MapPin, Briefcase, Award, TrendingUp } from "lucide-react";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export function RecruitmentSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedArea, setSelectedArea] = useState("all");
  const [selectedExperience, setSelectedExperience] = useState("all");

  const jobs = [
    {
      title: "Desenvolvedor Full Stack Sênior",
      company: "TechCorp Inc.",
      location: "São Paulo, SP",
      type: "CLT",
      experience: "5-8 anos",
      skills: ["React", "Node.js", "TypeScript", "AWS"],
      compatibility: 92,
      applicants: 47,
      area: "tecnologia",
    },
    {
      title: "Gerente de Produtos",
      company: "Innovate Solutions",
      location: "Remote",
      type: "PJ",
      experience: "3-5 anos",
      skills: ["Product Management", "Agile", "Data Analysis"],
      compatibility: 87,
      applicants: 32,
      area: "gestão",
    },
    {
      title: "Designer UX/UI",
      company: "Creative Studio",
      location: "Rio de Janeiro, RJ",
      type: "CLT",
      experience: "2-4 anos",
      skills: ["Figma", "User Research", "Prototyping"],
      compatibility: 95,
      applicants: 28,
      area: "criativo",
    },
    {
      title: "Analista de Marketing Digital",
      company: "Growth Marketing Co.",
      location: "Belo Horizonte, MG",
      type: "CLT",
      experience: "1-3 anos",
      skills: ["SEO", "Google Ads", "Analytics", "Social Media"],
      compatibility: 78,
      applicants: 53,
      area: "marketing",
    },
    {
      title: "Executivo de Vendas",
      company: "Sales Pro",
      location: "Curitiba, PR",
      type: "CLT",
      experience: "3-5 anos",
      skills: ["B2B Sales", "CRM", "Negociação"],
      compatibility: 84,
      applicants: 41,
      area: "vendas",
    },
  ];

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesArea = selectedArea === "all" || job.area === selectedArea;
    const matchesExperience = selectedExperience === "all" || job.experience.includes(selectedExperience);
    return matchesSearch && matchesArea && matchesExperience;
  });

  return (
    <section id="recrutamento" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Recrutamento <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Inteligente</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            IA avançada que conecta empresas aos melhores talentos
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-12"
        >
          <Card className="p-6 bg-card shadow-lg">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Buscar por cargo ou empresa..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={selectedArea} onValueChange={setSelectedArea}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Área" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as áreas</SelectItem>
                  <SelectItem value="tecnologia">Tecnologia</SelectItem>
                  <SelectItem value="gestão">Gestão</SelectItem>
                  <SelectItem value="criativo">Criativo</SelectItem>
                  <SelectItem value="marketing">Marketing</SelectItem>
                  <SelectItem value="vendas">Vendas</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedExperience} onValueChange={setSelectedExperience}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Experiência" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Qualquer experiência</SelectItem>
                  <SelectItem value="1">Júnior (1-3 anos)</SelectItem>
                  <SelectItem value="3">Pleno (3-5 anos)</SelectItem>
                  <SelectItem value="5">Sênior (5+ anos)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredJobs.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Card className="p-6 h-full cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500/50 bg-card">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground mb-1">{job.title}</h3>
                    <p className="text-muted-foreground">{job.company}</p>
                  </div>
                  {job.compatibility >= 80 && (
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        <TrendingUp className="w-4 h-4" />
                        {job.compatibility}%
                      </div>
                      <span className="text-xs text-muted-foreground mt-1">Compatibilidade</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {job.location}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Briefcase className="w-3 h-3" />
                    {job.type}
                  </Badge>
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Award className="w-3 h-3" />
                    {job.experience}
                  </Badge>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Habilidades necessárias:</p>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, idx) => (
                      <Badge key={idx} variant="outline" className="bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-border">
                  <span className="text-sm text-muted-foreground">{job.applicants} candidatos</span>
                  <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                    Ver Detalhes
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Nenhuma vaga encontrada com os filtros selecionados.</p>
          </div>
        )}
      </div>
    </section>
  );
}
