import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { ArrowDown, Brain, Building2, Sparkles, TrendingUp, UserRound, Users } from "lucide-react";
import { toast } from "sonner";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Textarea } from "./ui/textarea";
import type { Candidate, Job } from "../types";

type SignupMode = "company" | "candidate" | "learn" | null;

type HeroSectionProps = {
  onCreateJob: (job: Job) => void;
  onCreateCandidate: (candidate: Candidate) => void;
};

const splitList = (value: string) =>
  value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);

export function HeroSection({ onCreateJob, onCreateCandidate }: HeroSectionProps) {
  const [signupMode, setSignupMode] = useState<SignupMode>(null);
  const [companyForm, setCompanyForm] = useState({
    company: "",
    email: "",
    title: "",
    location: "",
    type: "CLT",
    experience: "",
    skills: "",
    description: "",
  });
  const [candidateForm, setCandidateForm] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    location: "",
    experience: "",
    company: "",
    availability: "Imediato",
    education: "",
    linkedin: "",
    portfolio: "",
    salaryExpectation: "",
    skills: "",
    qualities: "",
    summary: "",
  });
  const stars = useMemo(
    () =>
      Array.from({ length: 20 }, () => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: Math.random() * 2,
      })),
    [],
  );

  function handleCreateJob(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!companyForm.company.trim() || !companyForm.title.trim()) {
      toast.error("Preencha empresa e cargo para cadastrar a vaga.");
      return;
    }

    const skills = splitList(companyForm.skills);
    onCreateJob({
      title: companyForm.title.trim(),
      company: companyForm.company.trim(),
      location: companyForm.location.trim() || "Local a combinar",
      type: companyForm.type,
      experience: companyForm.experience.trim() || "Experiência a combinar",
      skills: skills.length ? skills : ["Perfil em análise"],
      compatibility: 96,
      applicants: 0,
      area: "tecnologia",
      description: companyForm.description.trim(),
      contactEmail: companyForm.email.trim(),
    });

    setSignupMode(null);
    toast.success("Vaga criada", {
      description: `${companyForm.title} foi adicionada em Recrutamento.`,
    });
    window.location.hash = "recrutamento";
  }

  function handleCreateCandidate(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!candidateForm.name.trim() || !candidateForm.role.trim()) {
      toast.error("Preencha nome e cargo desejado para criar o currículo.");
      return;
    }

    const skills = splitList(candidateForm.skills);
    const qualities = splitList(candidateForm.qualities);
    onCreateCandidate({
      name: candidateForm.name.trim(),
      role: candidateForm.role.trim(),
      experience: candidateForm.experience.trim() || "Experiência não informada",
      location: candidateForm.location.trim() || "Localidade não informada",
      company: candidateForm.company.trim() || "Experiência anterior não informada",
      availability: candidateForm.availability,
      skills: skills.length ? skills : ["Habilidades em análise"],
      qualities: qualities.length ? qualities : ["Perfil em desenvolvimento"],
      compatibility: 93,
      avatar: "",
      type: "cadastrado",
      email: candidateForm.email.trim(),
      phone: candidateForm.phone.trim(),
      education: candidateForm.education.trim(),
      linkedin: candidateForm.linkedin.trim(),
      portfolio: candidateForm.portfolio.trim(),
      salaryExpectation: candidateForm.salaryExpectation.trim(),
      summary: candidateForm.summary.trim(),
    });

    setSignupMode(null);
    toast.success("Currículo criado", {
      description: `${candidateForm.name} foi adicionado em Currículos.`,
    });
    window.location.hash = "curriculos";
  }

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-950 dark:from-blue-950 dark:via-purple-950 dark:to-black" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="absolute inset-0 opacity-10">
        {stars.map((star, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{ left: star.left, top: star.top }}
            animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
            transition={{ duration: 3, repeat: Infinity, delay: star.delay }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white mb-6"
          >
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Tecnologia de IA Avançada</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Encontre os melhores talentos com{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              inteligência artificial
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            A plataforma automatiza processos seletivos, analisa currículos com IA e encontra os candidatos mais compatíveis para cada vaga.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0" onClick={() => setSignupMode("company")}>
              Cadastrar Empresa
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" onClick={() => setSignupMode("candidate")}>
              Cadastrar Candidato
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10" onClick={() => setSignupMode("learn")}>
              Saiba Mais
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {[
              { icon: Users, label: "10.000+", desc: "Candidatos" },
              { icon: TrendingUp, label: "95%", desc: "Taxa de Sucesso" },
              { icon: Brain, label: "IA Avançada", desc: "Análise Precisa" },
            ].map((stat, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05, y: -5 }} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 cursor-pointer">
                <stat.icon className="w-8 h-8 text-blue-300 mb-3 mx-auto" />
                <div className="text-2xl font-bold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-blue-200">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div className="absolute bottom-10 left-1/2 transform -translate-x-1/2" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto" />
        </div>
      </motion.div>

      <Dialog open={!!signupMode} onOpenChange={(open) => !open && setSignupMode(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-3xl">
          {signupMode === "company" && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-blue-600" />
                  Cadastro de empresa
                </DialogTitle>
                <DialogDescription>
                  Preencha os dados para criar uma nova vaga na área de recrutamento.
                </DialogDescription>
              </DialogHeader>
              <form className="grid gap-4" onSubmit={handleCreateJob}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="company-name">Empresa</Label>
                    <Input id="company-name" placeholder="Nome da empresa" value={companyForm.company} onChange={(event) => setCompanyForm({ ...companyForm, company: event.target.value })} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="company-email">E-mail corporativo</Label>
                    <Input id="company-email" type="email" placeholder="rh@empresa.com" value={companyForm.email} onChange={(event) => setCompanyForm({ ...companyForm, email: event.target.value })} />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company-title">Cargo da vaga</Label>
                  <Input id="company-title" placeholder="Ex.: Desenvolvedor Full Stack" value={companyForm.title} onChange={(event) => setCompanyForm({ ...companyForm, title: event.target.value })} />
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="grid gap-2">
                    <Label htmlFor="company-location">Localidade</Label>
                    <Input id="company-location" placeholder="São Paulo, SP ou remoto" value={companyForm.location} onChange={(event) => setCompanyForm({ ...companyForm, location: event.target.value })} />
                  </div>
                  <div className="grid gap-2">
                    <Label>Contrato</Label>
                    <Select value={companyForm.type} onValueChange={(type) => setCompanyForm({ ...companyForm, type })}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="CLT">CLT</SelectItem>
                        <SelectItem value="PJ">PJ</SelectItem>
                        <SelectItem value="Estágio">Estágio</SelectItem>
                        <SelectItem value="Freelancer">Freelancer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="company-experience">Experiência</Label>
                    <Input id="company-experience" placeholder="Ex.: 3-5 anos" value={companyForm.experience} onChange={(event) => setCompanyForm({ ...companyForm, experience: event.target.value })} />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company-skills">Habilidades necessárias</Label>
                  <Textarea id="company-skills" placeholder="Separe por vírgula: React, Node.js, liderança, SQL" value={companyForm.skills} onChange={(event) => setCompanyForm({ ...companyForm, skills: event.target.value })} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="company-description">Descrição da vaga</Label>
                  <Textarea id="company-description" placeholder="Conte o que a pessoa fará, benefícios e diferenciais." value={companyForm.description} onChange={(event) => setCompanyForm({ ...companyForm, description: event.target.value })} />
                </div>
                <Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                  Criar vaga
                </Button>
              </form>
            </>
          )}

          {signupMode === "candidate" && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <UserRound className="h-5 w-5 text-purple-600" />
                  Cadastro de candidato
                </DialogTitle>
                <DialogDescription>
                  Preencha as informações principais para criar um currículo completo.
                </DialogDescription>
              </DialogHeader>
              <form className="grid gap-4" onSubmit={handleCreateCandidate}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="candidate-name">Nome completo</Label>
                    <Input id="candidate-name" placeholder="Seu nome" value={candidateForm.name} onChange={(event) => setCandidateForm({ ...candidateForm, name: event.target.value })} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="candidate-email">E-mail</Label>
                    <Input id="candidate-email" type="email" placeholder="voce@email.com" value={candidateForm.email} onChange={(event) => setCandidateForm({ ...candidateForm, email: event.target.value })} />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="candidate-phone">Telefone</Label>
                    <Input id="candidate-phone" placeholder="(11) 99999-9999" value={candidateForm.phone} onChange={(event) => setCandidateForm({ ...candidateForm, phone: event.target.value })} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="candidate-location">Cidade/Estado</Label>
                    <Input id="candidate-location" placeholder="São Paulo, SP" value={candidateForm.location} onChange={(event) => setCandidateForm({ ...candidateForm, location: event.target.value })} />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="candidate-role">Cargo desejado</Label>
                    <Input id="candidate-role" placeholder="Ex.: Analista de RH" value={candidateForm.role} onChange={(event) => setCandidateForm({ ...candidateForm, role: event.target.value })} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="candidate-experience">Tempo de experiência</Label>
                    <Input id="candidate-experience" placeholder="Ex.: 4 anos" value={candidateForm.experience} onChange={(event) => setCandidateForm({ ...candidateForm, experience: event.target.value })} />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="candidate-company">Última empresa</Label>
                    <Input id="candidate-company" placeholder="Empresa atual ou anterior" value={candidateForm.company} onChange={(event) => setCandidateForm({ ...candidateForm, company: event.target.value })} />
                  </div>
                  <div className="grid gap-2">
                    <Label>Disponibilidade</Label>
                    <Select value={candidateForm.availability} onValueChange={(availability) => setCandidateForm({ ...candidateForm, availability })}>
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Imediato">Imediato</SelectItem>
                        <SelectItem value="15 dias">15 dias</SelectItem>
                        <SelectItem value="30 dias">30 dias</SelectItem>
                        <SelectItem value="60 dias">60 dias</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="candidate-education">Formação acadêmica</Label>
                  <Input id="candidate-education" placeholder="Curso, instituição e conclusão" value={candidateForm.education} onChange={(event) => setCandidateForm({ ...candidateForm, education: event.target.value })} />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="grid gap-2">
                    <Label htmlFor="candidate-linkedin">LinkedIn</Label>
                    <Input id="candidate-linkedin" placeholder="linkedin.com/in/seu-perfil" value={candidateForm.linkedin} onChange={(event) => setCandidateForm({ ...candidateForm, linkedin: event.target.value })} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="candidate-portfolio">Portfólio/GitHub</Label>
                    <Input id="candidate-portfolio" placeholder="github.com/seuusuario ou site" value={candidateForm.portfolio} onChange={(event) => setCandidateForm({ ...candidateForm, portfolio: event.target.value })} />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="candidate-salary">Pretensão salarial</Label>
                  <Input id="candidate-salary" placeholder="Ex.: R$ 5.000 ou a combinar" value={candidateForm.salaryExpectation} onChange={(event) => setCandidateForm({ ...candidateForm, salaryExpectation: event.target.value })} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="candidate-skills">Habilidades técnicas</Label>
                  <Textarea id="candidate-skills" placeholder="Separe por vírgula: React, atendimento, Power BI, SQL" value={candidateForm.skills} onChange={(event) => setCandidateForm({ ...candidateForm, skills: event.target.value })} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="candidate-qualities">Qualidades profissionais</Label>
                  <Textarea id="candidate-qualities" placeholder="Separe por vírgula: liderança, comunicação, organização" value={candidateForm.qualities} onChange={(event) => setCandidateForm({ ...candidateForm, qualities: event.target.value })} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="candidate-summary">Resumo profissional</Label>
                  <Textarea id="candidate-summary" placeholder="Conte suas principais experiências, resultados e objetivos." value={candidateForm.summary} onChange={(event) => setCandidateForm({ ...candidateForm, summary: event.target.value })} />
                </div>
                <Button type="submit" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700">
                  Criar currículo
                </Button>
              </form>
            </>
          )}

          {signupMode === "learn" && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-center gap-2">
                  <ArrowDown className="h-5 w-5 text-blue-600" />
                  Como o SmartHire AI funciona
                </DialogTitle>
                <DialogDescription>
                  A plataforma combina triagem automatizada, ranking de compatibilidade e indicadores para decisões mais rápidas.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-3 text-sm text-muted-foreground">
                <p>1. Empresas cadastram vagas com requisitos técnicos, comportamentais e modelo de trabalho.</p>
                <p>2. Candidatos informam experiências, habilidades e disponibilidade.</p>
                <p>3. A IA calcula compatibilidade, destaca riscos e organiza prioridades para o recrutador.</p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
