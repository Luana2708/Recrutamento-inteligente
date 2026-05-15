const benefits = [
  'Triagem automatizada de currículos com critérios claros',
  'Ranking de candidatos por aderência à vaga',
  'Painel simples para acompanhar cada etapa do funil',
]

const metrics = [
  { label: 'menos tempo na triagem', value: '70%' },
  { label: 'candidatos priorizados por vaga', value: '+120' },
  { label: 'etapas do processo em um só painel', value: '5' },
]

function App() {
  return (
    <main className="app-shell">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__content">
          <p className="eyebrow">Recrutamento inteligente com IA</p>
          <h1 id="hero-title">Encontre os melhores talentos com mais velocidade e precisão.</h1>
          <p className="hero__description">
            O SmartHire AI ajuda equipes de RH a organizar vagas, analisar currículos e priorizar
            candidatos com base em critérios objetivos, reduzindo tarefas manuais no processo seletivo.
          </p>
          <div className="hero__actions" aria-label="Ações principais">
            <a className="button button--primary" href="mailto:contato@smarthire.ai">
              Solicitar demonstração
            </a>
            <a className="button button--secondary" href="#beneficios">
              Ver benefícios
            </a>
          </div>
        </div>

        <aside className="candidate-card" aria-label="Resumo de candidato em destaque">
          <div className="candidate-card__header">
            <span className="status-dot" aria-hidden="true" />
            <span>Match alto</span>
          </div>
          <strong>Analista de Dados Pleno</strong>
          <p>Compatibilidade com a vaga: 94%</p>
          <div className="progress-bar" aria-hidden="true">
            <span />
          </div>
          <ul>
            <li>Python e SQL avançado</li>
            <li>Experiência com BI</li>
            <li>Disponível para entrevista</li>
          </ul>
        </aside>
      </section>

      <section className="metrics" aria-label="Indicadores do produto">
        {metrics.map((metric) => (
          <article className="metric" key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </section>

      <section className="benefits" id="beneficios" aria-labelledby="benefits-title">
        <div>
          <p className="eyebrow">Por que usar</p>
          <h2 id="benefits-title">Um fluxo de contratação mais organizado.</h2>
        </div>
        <ul>
          {benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App
