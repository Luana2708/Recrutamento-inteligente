import { Card } from "./ui/card";
import { motion } from "motion/react";
import { Filter, Clock, Brain, FileText, BarChart3 } from "lucide-react";

export function BenefitsSection() {
  const benefits = [
    {
      icon: Filter,
      title: "Filtragem Inteligente",
      description: "IA analisa milhares de currículos em segundos, encontrando candidatos ideais automaticamente.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Clock,
      title: "Economia de Tempo",
      description: "Reduza em até 80% o tempo gasto em triagem manual de candidatos.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Brain,
      title: "Análise Comportamental",
      description: "Avaliação profunda de soft skills e compatibilidade cultural com sua empresa.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: FileText,
      title: "Gestão de Currículos",
      description: "Centralize e organize todos os currículos em um único lugar acessível.",
      gradient: "from-orange-500 to-amber-500",
    },
    {
      icon: BarChart3,
      title: "Dashboard de Desempenho",
      description: "Métricas em tempo real sobre processos seletivos e qualidade dos candidatos.",
      gradient: "from-indigo-500 to-blue-500",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Por que escolher o <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SmartHire AI</span>?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Revolucione seu processo de recrutamento com tecnologia de ponta
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="p-6 h-full cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-500/50 bg-card">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-4`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
