const modules = [
  {
    title: "Módulo 1 - O Chamado do Louco",
    price: "R$ 67",
    summary: [
      "Onde tudo começa",
      "O que é o Tarô de verdade",
      "Fundamentos para quem nunca estudou",
    ],
    cta: "Quero começar pelo Louco",
  },
  {
    title: "Módulo 2 - A Vida em Movimento",
    price: "R$ 127",
    summary: [
      "O fluxo da vida nos Arcanos",
      "Aplicação prática no cotidiano",
      "Clareza emocional e decisões",
    ],
    cta: "Quero avançar no caminho",
  },
  {
    title: "Módulo 3 - As Quatro Forças",
    price: "R$ 197",
    summary: [
      "Os quatro naipes e suas forças",
      "Emoções, ação, mente e matéria",
      "Leituras mais completas",
    ],
    cta: "Quero dominar as bases",
  },
  {
    title: "A Arte da Leitura: Escuta, Clareza e Condução Ética da Leitura",
    price: "R$ 197",
    summary: [
      "Escuta ativa e presença no atendimento",
      "Boas perguntas para leituras claras",
      "Condução ética, segura e consciente",
    ],
    cta: "Quero aprender a conduzir leituras",
  },
  {
    title: "Módulo 4 - Os 78 Espelhos",
    price: "R$ 297",
    summary: [
      "Todos os Arcanos integrados",
      "Leitura simbólica e contextual",
      "Autonomia real nas leituras",
    ],
    cta: "Quero entender o Tarô por completo",
  },
  {
    title: "Módulo 5 - Leitura com Propósito",
    price: "R$ 347",
    summary: [
      "Perguntas certas, respostas claras",
      "Ética e responsabilidade",
      "Leituras para si e para outros",
    ],
    cta: "Quero ler com clareza",
  },
  {
    title: "Módulo 6 - O Caminho do Tarólogo",
    price: "R$ 697",
    summary: [
      "Estrutura profissional",
      "Posicionamento e prática",
      "Base ética sem promessas fáceis",
    ],
    cta: "Quero seguir o caminho profissional",
  },
];

const objections = [
  "Não precisa ter dom",
  "Serve para iniciantes",
  "Pode usar só para si",
  "Pode profissionalizar depois",
  "Método claro, sem misticismo vazio",
];

export default function CursoPage() {
  return (
    <div className="bg-sand text-ink">
      <header className="border-b border-ink/10 bg-sand/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-wine/70">
              Curso modular de Tarô
            </p>
            <h1 className="font-display text-3xl text-ink md:text-4xl">
              Comece pelo essencial e avance com método
            </h1>
          </div>
          <a
            href="/"
            className="text-sm font-semibold text-wine hover:text-terracotta"
          >
            Voltar para a home
          </a>
        </div>
      </header>

      <main>
        <section className="section">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <h2 className="font-display text-4xl text-ink">
                Aprenda Tarô de forma estruturada, prática e progressiva —
                começando pelo essencial.
              </h2>
              <p className="text-base text-ink/80 md:text-lg">
                Um curso modular que transforma o Tarô em uma ferramenta real de
                autoconhecimento, clareza e tomada de decisão, sem misticismo
                raso ou dependência de "dom".
              </p>
              <a
                href="#modulos"
                className="inline-flex rounded-full bg-wine px-6 py-3 text-sm font-semibold text-sand shadow-soft hover:bg-terracotta"
              >
                Começar minha jornada no Tarô
              </a>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-paper p-6 shadow-soft">
              <h3 className="font-display text-2xl text-ink">
                O problema não é o Tarô
              </h3>
              <p className="mt-3 text-sm text-ink/70">
                Cartas demais. Significados soltos. Conteúdo confuso. O que falta
                é um caminho estruturado. Este curso existe para resolver
                exatamente isso.
              </p>
              <p className="mt-4 text-sm text-ink/70">
                Você não compra "um curso". Você entra em um caminho.
              </p>
            </div>
          </div>
        </section>

        <section className="section bg-ink text-sand">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Modular e progressivo",
                  body: "Cada módulo resolve uma etapa clara da jornada.",
                },
                {
                  title: "Linguagem didática",
                  body: "Aplicação prática para uso pessoal ou profissional.",
                },
                {
                  title: "Caminho completo",
                  body: "Você escolhe até onde quer ir, com base sólida.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-sand/20 bg-sand/5 p-6 shadow-soft"
                >
                  <h3 className="font-display text-xl">{item.title}</h3>
                  <p className="mt-2 text-sm text-sand/80">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="modulos" className="section">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="section-title">Módulos do curso</h2>
            <p className="section-lead">
              Escolha o ponto de partida e avance no seu ritmo.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {modules.map((module) => (
                <article
                  key={module.title}
                  className="rounded-3xl border border-ink/10 bg-paper p-6 shadow-soft"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-wine/70">
                    {module.price}
                  </p>
                  <h3 className="mt-3 font-display text-2xl text-ink">
                    {module.title}
                  </h3>
                  <ul className="mt-4 space-y-2 text-sm text-ink/70">
                    {module.summary.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#"
                    className="mt-5 inline-flex text-sm font-semibold text-wine hover:text-terracotta"
                  >
                    {module.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-paper">
          <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="section-title">Tarô sem mistério confuso</h2>
              <p className="section-lead">
                Linguagem clara, método e prática para quem busca autonomia.
              </p>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-sand p-6 shadow-soft">
              <h3 className="font-display text-xl text-ink">
                Inversão de objeções
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                {objections.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-wine"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-3xl border border-ink/10 bg-ink p-8 text-sand shadow-soft">
              <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="font-display text-3xl">
                    Começar agora minha jornada no Tarô
                  </h2>
                  <p className="mt-2 text-sm text-sand/80">
                    Acesso imediato na Hotmart. Estude no seu ritmo com garantia
                    legal.
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-flex rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-sand"
                >
                  Ir para o checkout
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
