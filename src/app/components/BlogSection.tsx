import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { motion } from "motion/react";
import { Calendar, Clock, User, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function BlogSection() {
  const posts = [
    {
      title: "Como a IA está revolucionando o recrutamento em 2026",
      excerpt: "Descubra as principais tendências de inteligência artificial aplicadas ao RH e como elas estão transformando processos seletivos.",
      category: "Inteligência Artificial",
      author: "Ana Silva",
      date: "10 Mai 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop",
    },
    {
      title: "10 dicas para criar um currículo que se destaca",
      excerpt: "Aprenda as melhores práticas para elaborar um currículo profissional que chama atenção de recrutadores e sistemas de IA.",
      category: "Carreira",
      author: "Carlos Mendes",
      date: "08 Mai 2026",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&h=450&fit=crop",
    },
    {
      title: "Soft Skills: as habilidades mais valorizadas em 2026",
      excerpt: "Conheça as competências comportamentais que as empresas mais buscam e como desenvolvê-las para se destacar no mercado.",
      category: "Desenvolvimento",
      author: "Mariana Costa",
      date: "05 Mai 2026",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=450&fit=crop",
    },
    {
      title: "Entrevista remota: guia completo para candidatos",
      excerpt: "Dicas essenciais para se preparar e se destacar em entrevistas de emprego realizadas online com confiança.",
      category: "Recrutamento",
      author: "Rafael Santos",
      date: "03 Mai 2026",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=450&fit=crop",
    },
    {
      title: "Diversidade e inclusão: tendências em RH",
      excerpt: "Como empresas estão implementando práticas de D&I e os benefícios para os negócios e equipes.",
      category: "RH",
      author: "Juliana Oliveira",
      date: "01 Mai 2026",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?w=800&h=450&fit=crop",
    },
    {
      title: "Produtividade no trabalho: técnicas comprovadas",
      excerpt: "Métodos práticos e ferramentas para aumentar sua produtividade e alcançar melhores resultados profissionais.",
      category: "Produtividade",
      author: "Pedro Almeida",
      date: "28 Abr 2026",
      readTime: "5 min",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=450&fit=crop",
    },
  ];

  const categories = ["Todos", "RH", "Recrutamento", "Inteligência Artificial", "Carreira", "Produtividade", "Desenvolvimento"];

  return (
    <section id="blog" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blog <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SmartHire AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conteúdos exclusivos sobre RH, recrutamento e desenvolvimento profissional
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((category, i) => (
            <Button
              key={i}
              variant={i === 0 ? "default" : "outline"}
              size="sm"
              className={i === 0 ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white" : ""}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <Card className="overflow-hidden h-full cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-500/50 bg-card flex flex-col">
                <div className="relative h-48 overflow-hidden bg-muted">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <Badge className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                    {post.category}
                  </Badge>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-card-foreground mb-3 line-clamp-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3 flex-1">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <Button variant="ghost" className="w-full justify-between group">
                    Ler mais
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button size="lg" variant="outline" className="group">
            Ver todos os artigos
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
