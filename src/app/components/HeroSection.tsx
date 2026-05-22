import { Button } from "./ui/button";
import { motion } from "motion/react";
import { Sparkles, TrendingUp, Users, Brain } from "lucide-react";

export function HeroSection() {
  return (
    <section id="início" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-950 dark:from-blue-950 dark:via-purple-950 dark:to-black" />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
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
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0">
              Cadastrar Empresa
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20">
              Cadastrar Candidato
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10">
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
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 cursor-pointer"
              >
                <stat.icon className="w-8 h-8 text-blue-300 mb-3 mx-auto" />
                <div className="text-2xl font-bold text-white mb-1">{stat.label}</div>
                <div className="text-sm text-blue-200">{stat.desc}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full p-1">
          <div className="w-1.5 h-3 bg-white/50 rounded-full mx-auto" />
        </div>
      </motion.div>
    </section>
  );
}
