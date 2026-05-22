import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Avatar, AvatarFallback } from "./ui/avatar";

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Olá! Sou o assistente virtual da SmartHire AI. Como posso ajudar você hoje?", sender: "bot" },
  ]);
  const [inputValue, setInputValue] = useState("");

  const quickReplies = [
    "Como funciona a plataforma?",
    "Quero cadastrar uma vaga",
    "Preciso de ajuda com currículo",
    "Falar com suporte",
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;

    setMessages([...messages, { text: inputValue, sender: "user" }]);
    setInputValue("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Obrigado pela sua mensagem! Em breve um de nossos especialistas entrará em contato. Enquanto isso, você pode explorar nossas funcionalidades no menu.",
          sender: "bot",
        },
      ]);
    }, 1000);
  };

  const handleQuickReply = (reply: string) => {
    setMessages([...messages, { text: reply, sender: "user" }]);

    setTimeout(() => {
      let response = "";
      if (reply.includes("funciona")) {
        response = "Nossa plataforma usa IA para analisar currículos e vagas, fazendo matches inteligentes. Empresas criam vagas, candidatos enviam currículos e nossa IA calcula a compatibilidade!";
      } else if (reply.includes("vaga")) {
        response = "Para cadastrar uma vaga, clique em 'Cadastrar Empresa' no menu principal. Você poderá preencher os requisitos e nossa IA começará a buscar candidatos compatíveis automaticamente!";
      } else if (reply.includes("currículo")) {
        response = "Temos diversos recursos para otimizar seu currículo! Visite nosso blog para dicas ou cadastre-se como candidato para receber análises personalizadas.";
      } else {
        response = "Você pode entrar em contato conosco pelo email suporte@smarthireai.com ou telefone (11) 9999-9999. Estamos aqui para ajudar!";
      }
      setMessages((prev) => [...prev, { text: response, sender: "bot" }]);
    }, 1000);
  };

  return (
    <>
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          size="icon"
          className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)]"
          >
            <Card className="shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 text-white">
                <h3 className="font-semibold">Assistente Virtual</h3>
                <p className="text-xs text-blue-100">Online agora</p>
              </div>

              <div className="h-96 overflow-y-auto p-4 bg-muted/20">
                {messages.map((message, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex gap-2 mb-4 ${message.sender === "user" ? "justify-end" : ""}`}
                  >
                    {message.sender === "bot" && (
                      <Avatar className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600">
                        <AvatarFallback className="text-white text-xs">AI</AvatarFallback>
                      </Avatar>
                    )}
                    <div
                      className={`px-4 py-2 rounded-2xl max-w-[80%] ${
                        message.sender === "user"
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                          : "bg-card border border-border"
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </motion.div>
                ))}

                {messages.length === 1 && (
                  <div className="mt-4 space-y-2">
                    <p className="text-xs text-muted-foreground mb-2">Respostas rápidas:</p>
                    {quickReplies.map((reply, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        size="sm"
                        className="w-full justify-start text-left h-auto py-2"
                        onClick={() => handleQuickReply(reply)}
                      >
                        {reply}
                      </Button>
                    ))}
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-border bg-card">
                <div className="flex gap-2">
                  <Input
                    placeholder="Digite sua mensagem..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  />
                  <Button
                    size="icon"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                    onClick={handleSend}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
