import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

type ActionInfo = {
  title: string;
  description: string;
  details: string[];
};

const actionInfoByLabel: Record<string, ActionInfo> = {
  "Cadastrar Empresa": {
    title: "Cadastro de empresa",
    description:
      "Esta opcao iniciaria o cadastro da empresa para publicar vagas e usar a IA na triagem de candidatos.",
    details: [
      "Informacoes da empresa e responsavel pelo recrutamento.",
      "Criacao de vagas com requisitos, beneficios e modelo de trabalho.",
      "Acesso ao painel para acompanhar candidatos e compatibilidade.",
    ],
  },
  "Cadastrar Candidato": {
    title: "Cadastro de candidato",
    description:
      "Esta opcao levaria o candidato para criar um perfil profissional e enviar o curriculo para analise inteligente.",
    details: [
      "Dados pessoais, experiencias, habilidades e objetivos.",
      "Upload ou preenchimento do curriculo.",
      "Sugestoes de vagas com base no perfil informado.",
    ],
  },
  "Saiba Mais": {
    title: "Saiba mais",
    description:
      "Esta area apresentaria mais detalhes sobre como o SmartHire AI melhora o processo seletivo.",
    details: [
      "Como a IA compara curriculos com requisitos da vaga.",
      "Beneficios para empresas, recrutadores e candidatos.",
      "Resumo das principais funcionalidades da plataforma.",
    ],
  },
  "Ver Detalhes": {
    title: "Detalhes da vaga",
    description:
      "Aqui seriam exibidas informacoes completas da vaga selecionada e os criterios usados pela IA.",
    details: [
      "Descricao do cargo, empresa, localidade e tipo de contrato.",
      "Habilidades obrigatorias e diferenciais.",
      "Compatibilidade, quantidade de candidatos e proximos passos.",
    ],
  },
  "Ver Perfil Completo": {
    title: "Perfil completo do candidato",
    description:
      "Esta opcao abriria a ficha completa do profissional para apoiar a decisao do recrutador.",
    details: [
      "Experiencia profissional, localidade e disponibilidade.",
      "Habilidades tecnicas, qualidades e pontos fortes.",
      "Percentual de compatibilidade com vagas abertas.",
    ],
  },
  "Ler mais": {
    title: "Artigo do blog",
    description:
      "Esta opcao abriria o conteudo completo do artigo selecionado.",
    details: [
      "Texto completo com dicas e contexto sobre recrutamento.",
      "Autor, data de publicacao e tempo estimado de leitura.",
      "Conteudos relacionados para continuar aprendendo.",
    ],
  },
  "Ver todos os artigos": {
    title: "Todos os artigos",
    description:
      "Esta opcao exibiria a lista completa de publicacoes do blog SmartHire AI.",
    details: [
      "Filtros por categoria, tema e data.",
      "Artigos sobre RH, carreira, produtividade e inteligencia artificial.",
      "Materiais para empresas e candidatos.",
    ],
  },
};

const blogCategories = [
  "Todos",
  "RH",
  "Recrutamento",
  "Inteligência Artificial",
  "InteligÃªncia Artificial",
  "Carreira",
  "Produtividade",
  "Desenvolvimento",
];

function getButtonText(button: HTMLButtonElement) {
  return (button.getAttribute("aria-label") || button.textContent || "")
    .replace(/\s+/g, " ")
    .trim();
}

function getActionInfo(label: string): ActionInfo {
  if (actionInfoByLabel[label]) {
    return actionInfoByLabel[label];
  }

  if (blogCategories.includes(label)) {
    return {
      title: `Categoria: ${label}`,
      description:
        label === "Todos"
          ? "Esta opcao mostraria todos os artigos disponiveis no blog."
          : `Esta opcao filtraria os artigos relacionados a ${label}.`,
      details: [
        "Lista de publicacoes da categoria selecionada.",
        "Resumo, autor, data e tempo de leitura de cada artigo.",
        "Acesso rapido ao conteudo completo.",
      ],
    };
  }

  return {
    title: label,
    description:
      "Esta opcao abriria uma area com mais informacoes sobre a acao selecionada.",
    details: [
      "Contexto da opcao escolhida.",
      "Informacoes relevantes para continuar o fluxo.",
      "Proximos passos disponiveis dentro da plataforma.",
    ],
  };
}

function shouldIgnoreButton(button: HTMLButtonElement) {
  if (button.disabled) return true;
  if (button.closest("[data-slot='dialog-content']")) return true;
  if (button.closest("[data-action-dialog='ignore']")) return true;
  if (button.getAttribute("role") === "combobox") return true;
  if (button.getAttribute("aria-haspopup") === "dialog") return true;
  if (button.getAttribute("aria-haspopup") === "menu") return true;
  if (button.getAttribute("aria-haspopup") === "listbox") return true;

  return getButtonText(button).length === 0;
}

export function ButtonActionDialog({ children }: { children: React.ReactNode }) {
  const [actionInfo, setActionInfo] = useState<ActionInfo | null>(null);

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    const button = (event.target as HTMLElement).closest("button");

    if (!button || shouldIgnoreButton(button)) {
      return;
    }

    setActionInfo(getActionInfo(getButtonText(button)));
  }

  return (
    <>
      <div onClick={handleClick}>{children}</div>

      <Dialog open={!!actionInfo} onOpenChange={(open) => !open && setActionInfo(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{actionInfo?.title}</DialogTitle>
            <DialogDescription>
              {actionInfo?.description}
            </DialogDescription>
          </DialogHeader>
          <ul className="space-y-2 text-sm text-foreground">
            {actionInfo?.details.map((detail) => (
              <li key={detail} className="flex gap-2">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-600" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </DialogContent>
      </Dialog>
    </>
  );
}
