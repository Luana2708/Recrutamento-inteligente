# SmartHire AI

Landing page para um produto de recrutamento inteligente com IA. O projeto usa React, Vite e Tailwind CSS v4 para apresentar a proposta de valor do SmartHire AI: acelerar a triagem de currículos, priorizar candidatos por aderência à vaga e organizar o funil de contratação.

> Projeto originado a partir do design **SmartHire AI Website Design** no Figma: <https://www.figma.com/design/9yZTx6YlneY5YowVqx8icL/SmartHire-AI-Website-Design>.

## Status do projeto

O repositório agora possui uma aplicação React mínima e funcional em `src/`, com:

- ponto de entrada em `src/main.tsx`;
- componente principal em `src/App.tsx`;
- estilos globais em `src/styles.css`;
- configuração TypeScript em `tsconfig.json`;
- lockfile para instalações reproduzíveis com npm.

## Tecnologias

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- TypeScript/TSX

## Requisitos

- Node.js 20 ou superior recomendado
- npm 10 ou superior recomendado

## Como rodar localmente

Instale as dependências:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Depois acesse a URL exibida no terminal, normalmente:

```txt
http://localhost:5173
```

## Build de produção

Gere os arquivos finais:

```bash
npm run build
```

O Vite criará a pasta `dist/` com os arquivos prontos para deploy.

## Preview do build

Depois de rodar o build, você pode visualizar a versão de produção localmente:

```bash
npm run preview
```

## Estrutura principal

```txt
.
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
├── vite.config.ts
└── src
    ├── App.tsx
    ├── main.tsx
    └── styles.css
```

## Scripts disponíveis

| Script | Descrição |
| --- | --- |
| `npm run dev` | Inicia o ambiente de desenvolvimento com Vite. |
| `npm run build` | Gera o build de produção. |
| `npm run preview` | Abre um servidor local para validar o build gerado. |

## Próximos passos sugeridos

- Evoluir a landing page para refletir fielmente todos os blocos do design do Figma.
- Separar a interface em componentes reutilizáveis dentro de `src/components/`.
- Revisar dependências não utilizadas no `package.json` e remover o que não for necessário.
- Adicionar ESLint/Prettier para padronizar o código.
- Adicionar testes de interface ou testes de componentes quando houver regras de negócio.
- Configurar deploy em Vercel, Netlify, GitHub Pages ou outro provedor.
