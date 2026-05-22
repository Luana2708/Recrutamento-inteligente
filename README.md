# SmartHire AI Website Design

Landing page em React para uma plataforma de recrutamento inteligente com IA. O projeto apresenta secoes de beneficios, vagas, curriculos, dashboard, blog, chatbot e notificacoes.

Design original no Figma: <https://www.figma.com/design/9yZTx6YlneY5YowVqx8icL/SmartHire-AI-Website-Design>

## Tecnologias

- React 18
- Vite 6
- Tailwind CSS 4
- Radix UI
- Motion
- Recharts

## Como rodar localmente

Instale as dependencias:

```bash
npm install
```

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

Se voce esta usando o Node portatil incluido na pasta do projeto, rode:

```powershell
.\.tools\node\npm.cmd run dev
```

Depois abra a URL exibida no terminal, normalmente `http://localhost:5173`.

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Estrutura

```txt
src/
  app/
    App.tsx
    components/
  styles/
    index.css
```

## Observacoes

- `node_modules/`, `dist/` e `.tools/` ficam fora do Git.
- `package-lock.json` deve ser versionado para manter instalacoes reproduziveis com npm.
