import { Sparkles, Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const footerLinks = {
    Plataforma: ["Recursos", "Preços", "Integração", "API", "Status"],
    Empresa: ["Sobre", "Blog", "Carreiras", "Imprensa", "Parceiros"],
    Suporte: ["Central de Ajuda", "Documentação", "Comunidade", "Contato", "FAQ"],
    Legal: ["Privacidade", "Termos de Uso", "Cookies", "Compliance", "Segurança"],
  };

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center gap-2 mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-foreground">SmartHire AI</h3>
                <p className="text-xs text-muted-foreground">Recrutamento Inteligente</p>
              </div>
            </motion.div>
            <p className="text-sm text-muted-foreground mb-6">
              Transformando o recrutamento com inteligência artificial. Encontre os melhores talentos de forma rápida, eficiente e precisa.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contato@smarthireai.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>(11) 9999-9999</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>São Paulo, SP - Brasil</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © 2026 SmartHire AI. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-muted hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 flex items-center justify-center text-muted-foreground hover:text-white transition-all cursor-pointer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
