import { Card } from "./ui/card";
import { motion } from "motion/react";
import { Users, Briefcase, TrendingUp, Target, BarChart3 } from "lucide-react";
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Progress } from "./ui/progress";

export function DashboardSection() {
  const stats = [
    {
      label: "Total de Candidatos",
      value: "10.247",
      change: "+15%",
      icon: Users,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Vagas Abertas",
      value: "143",
      change: "+8%",
      icon: Briefcase,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Taxa de Aprovação",
      value: "87%",
      change: "+12%",
      icon: Target,
      color: "from-green-500 to-emerald-500",
    },
    {
      label: "Compatibilidade Média",
      value: "91%",
      change: "+5%",
      icon: TrendingUp,
      color: "from-orange-500 to-amber-500",
    },
  ];

  const candidatesByMonth = [
    { month: "Jan", candidatos: 450 },
    { month: "Fev", candidatos: 520 },
    { month: "Mar", candidatos: 680 },
    { month: "Abr", candidatos: 790 },
    { month: "Mai", candidatos: 920 },
    { month: "Jun", candidatos: 1100 },
  ];

  const candidatesByArea = [
    { name: "Tecnologia", value: 3200, color: "#3b82f6" },
    { name: "Marketing", value: 1800, color: "#8b5cf6" },
    { name: "Vendas", value: 2100, color: "#10b981" },
    { name: "Administrativo", value: 1500, color: "#f59e0b" },
    { name: "Outros", value: 1647, color: "#ec4899" },
  ];

  const conversionData = [
    { stage: "Candidaturas", value: 100 },
    { stage: "Triagem", value: 75 },
    { stage: "Entrevista", value: 45 },
    { stage: "Aprovados", value: 30 },
  ];

  return (
    <section id="dashboard" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Dashboard <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Empresarial</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Métricas e análises em tempo real para decisões estratégicas
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="p-6 cursor-pointer hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500/50 bg-card">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-green-500 text-sm font-semibold">{stat.change}</span>
                </div>
                <h3 className="text-3xl font-bold text-card-foreground mb-1">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-card">
              <div className="flex items-center gap-2 mb-6">
                <BarChart3 className="w-5 h-5 text-blue-600" />
                <h3 className="text-xl font-semibold text-card-foreground">Candidatos por Mês</h3>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={candidatesByMonth}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Line type="monotone" dataKey="candidatos" stroke="#3b82f6" strokeWidth={3} dot={{ fill: "#3b82f6", r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-card">
              <div className="flex items-center gap-2 mb-6">
                <BarChart3 className="w-5 h-5 text-purple-600" />
                <h3 className="text-xl font-semibold text-card-foreground">Candidatos por Área</h3>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={candidatesByArea}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {candidatesByArea.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-card">
              <div className="flex items-center gap-2 mb-6">
                <BarChart3 className="w-5 h-5 text-green-600" />
                <h3 className="text-xl font-semibold text-card-foreground">Funil de Conversão</h3>
              </div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={conversionData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" stroke="hsl(var(--muted-foreground))" />
                  <YAxis dataKey="stage" type="category" stroke="hsl(var(--muted-foreground))" width={100} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar dataKey="value" fill="#10b981" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-card h-full">
              <div className="flex items-center gap-2 mb-6">
                <Target className="w-5 h-5 text-orange-600" />
                <h3 className="text-xl font-semibold text-card-foreground">Indicadores de Performance</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-card-foreground">Tempo Médio de Contratação</span>
                    <span className="text-sm font-semibold text-card-foreground">18 dias</span>
                  </div>
                  <Progress value={72} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">Meta: 25 dias</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-card-foreground">Satisfação dos Candidatos</span>
                    <span className="text-sm font-semibold text-card-foreground">94%</span>
                  </div>
                  <Progress value={94} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">Meta: 90%</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-card-foreground">Qualidade das Contratações</span>
                    <span className="text-sm font-semibold text-card-foreground">88%</span>
                  </div>
                  <Progress value={88} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">Meta: 85%</p>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-card-foreground">Retenção após 6 meses</span>
                    <span className="text-sm font-semibold text-card-foreground">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">Meta: 80%</p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
