import Link from "next/link";

const modules = [
  {
    title: "Modulo 1 - O Chamado do Louco",
    learn:
      "Os 22 Arcanos Maiores como uma jornada simbolica do desenvolvimento humano, integrando significado, ordem tradicional e aplicacao pratica.",
    who: "Para quem quer base forte, visao simbolica e entendimento do Taro como caminho.",
    priceFrom: "R$ 360,00",
    priceTo: "R$ 95",
    cta: "Sim, eu quero aprender mais (Modulo 1)",
  },
  {
    title: "Modulo 2 - Os Arcanos Menores: A Vida em Movimento",
    learn:
      "A leitura do dia a dia: trabalho, relacoes, decisoes e conflitos. Entenda como a vida se move e como voce se move com ela.",
    who: "Para quem quer leituras completas e aplicaveis a vida real.",
    priceFrom: "R$ 460,00",
    priceTo: "R$ 127",
    cta: "Sim, eu quero aprender mais (Modulo 2)",
  },
  {
    title: "Modulo 3 - Leitura Relacional e Binariedade Simbolica",
    learn:
      "Interpretacao por relacao: pares de cartas, tensoes, complementaridades e dialogos simbolicos para leituras profundas e claras.",
    who: "Para quem ja conhece as cartas e quer interpretar com consistencia.",
    priceFrom: "R$ 360,00",
    priceTo: "R$ 147,00",
    cta: "Sim, eu quero aprender mais (Modulo 3)",
  },
  {
    title: "Modulo 4 - A Arte da Leitura: Escuta, Clareza e Conducao Etica",
    learn:
      "Escuta do consulente, boas perguntas, conducao etica e responsavel. Transforme a leitura em orientacao segura e consciente.",
    who: "Para quem quer maturidade, etica e seguranca ao conduzir leituras.",
    priceFrom: "R$ 630,00",
    priceTo: "R$ 197,00",
    cta: "Sim, eu quero aprender mais (Modulo 4)",
  },
];

const bundles = [
  {
    title: "Pacote Essencial - Base e Clareza",
    includes: "Inclui: Modulo 1 + Modulo 2",
    price: "R$ 197",
    anchor: "R$ 222",
    note: "Voce economiza e constroi base + vida pratica.",
    cta: "Quero o Pacote Essencial",
  },
  {
    title: "Pacote Profundo - Interpretacao e Metodo",
    includes: "Inclui: Modulo 1 + Modulo 2 + Modulo 3",
    price: "R$ 297",
    anchor: "R$ 369",
    note: "Clareza simbolica + leitura do cotidiano + interpretacao por relacao.",
    cta: "Quero o Pacote Profundo",
  },
  {
    title: "Pacote Formacao - Leitura Completa e Etica",
    includes: "Inclui: Modulo 1 + Modulo 2 + Modulo 3 + Modulo 4",
    price: "R$ 397",
    anchor: "R$ 566",
    note: "A trilha completa: base, aplicacao, profundidade e conducao etica.",
    cta: "Quero a Formacao Completa",
  },
];

const complements = [
  {
    title: "Complementar 1 - Cartas de Taro para Colorir",
    bullets: [
      "Treina memoria simbolica com foco e presenca",
      "Aprofunda a conexao com cada arcano",
      "Excelente para estudo diario e ritual de aprendizado",
    ],
    price: "R$ 29 a R$ 49",
    cta: "Quero adicionar as Cartas para Colorir",
  },
  {
    title: "Complementar 2 - Livro Didatico de Taro",
    bullets: [
      "Material de apoio para consulta e revisao",
      "Estrutura de estudo para acompanhar os modulos",
      "Guia para consolidar interpretacao com clareza",
    ],
    price: "R$ 59 a R$ 97",
    cta: "Quero adicionar o Livro Didatico",
  },
];

const faqs = [
  {
    q: "Preciso comprar o curso completo?",
    a: "Nao. Voce pode comecar por um modulo e avancar quando quiser.",
  },
  {
    q: "Qual modulo devo escolher primeiro?",
    a: "Se voce quer base solida, comece pelo Modulo 1. Se ja conhece os Arcanos Maiores, o Modulo 3 aprofunda interpretacao.",
  },
  {
    q: "Esse conteudo e muito avancado?",
    a: "Nao. E progressivo, claro e construido para ser compreendido passo a passo.",
  },
  {
    q: "Posso fazer para aprender e tambem atender pessoas?",
    a: "Sim. A estrutura permite evoluir do estudo ao uso pratico, com conducao responsavel.",
  },
];

export default function ModulosPage() {
  return (
    <div className="bg-sand text-ink">
      <main>
        <section className="section">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.35em] text-wine/70">
                Cursos modulares de Taro
              </p>
              <h1 className="font-display text-4xl text-ink md:text-5xl">
                Aprenda Taro com clareza, metodo e autonomia - modulo por modulo,
                no seu ritmo.
              </h1>
              <p className="text-base text-ink/80 md:text-lg">
                Os cursos do Oraculista de Delfos foram organizados em modulos
                independentes para voce investir so no que faz sentido agora,
                reduzir o impacto financeiro e construir um conhecimento solido,
                passo a passo.
              </p>
              <ul className="grid gap-3 text-sm text-ink/80">
                <li>Aprendizado acessivel: comece por um modulo e avance quando quiser</li>
                <li>Conteudo direto ao ponto, sem excesso e sem confusao</li>
                <li>Evolucao progressiva: compreensao simbolica + aplicacao pratica</li>
                <li>Mais confianca nas leituras e mais clareza no seu processo</li>
              </ul>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#modulos"
                  className="rounded-full bg-wine px-6 py-3 text-sm font-semibold text-sand shadow-soft hover:bg-terracotta"
                >
                  Quero escolher meu modulo agora
                </a>
                <span className="text-xs text-ink/60">
                  Acesso imediato. Estude no seu ritmo.
                </span>
              </div>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-paper p-6 shadow-soft">
              <h2 className="font-display text-2xl text-ink">
                Voce nao precisa comprar tudo para comecar bem.
              </h2>
              <p className="mt-4 text-sm text-ink/70">
                A estrutura modular torna o estudo mais flexivel e justo: voce
                escolhe o que ressoa com o seu momento, aprofunda onde deseja e
                mantem total autonomia sobre sua jornada - com clareza e
                proposito.
              </p>
            </div>
          </div>
        </section>

        <section id="modulos" className="section bg-ink text-sand">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-3xl md:text-4xl">
              Escolha seu modulo
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {modules.map((module) => (
                <article
                  key={module.title}
                  className="rounded-3xl border border-sand/20 bg-sand/5 p-6"
                >
                  <h3 className="font-display text-2xl">{module.title}</h3>
                  <p className="mt-3 text-sm text-sand/80">
                    <strong>O que voce vai dominar:</strong> {module.learn}
                  </p>
                  <p className="mt-3 text-sm text-sand/80">
                    <strong>Para quem e:</strong> {module.who}
                  </p>
                  <p className="mt-4 text-sm text-sand/70 line-through">
                    {module.priceFrom}
                  </p>
                  <p className="text-2xl font-semibold text-gold">
                    {module.priceTo}
                  </p>
                  <a
                    href="#"
                    className="mt-5 inline-flex text-sm font-semibold text-gold hover:text-sand"
                  >
                    {module.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="pacotes" className="section bg-paper">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-3xl text-ink">
              Quer economizar mais e acelerar sua evolucao?
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {bundles.map((bundle) => (
                <article
                  key={bundle.title}
                  className="rounded-3xl border border-ink/20 bg-paper p-6 shadow-[0_18px_40px_rgba(15,59,102,5.12)]"
                >
                  <h3 className="font-display text-xl text-ink">
                    {bundle.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/70">{bundle.includes}</p>
                  <p className="mt-3 text-sm text-ink/60 line-through">
                    {bundle.anchor}
                  </p>
                  <p className="text-2xl font-semibold text-wine">
                    {bundle.price}
                  </p>
                  <p className="mt-3 text-sm text-ink/70">{bundle.note}</p>
                  <a
                    href="#"
                    className="mt-5 inline-flex text-sm font-semibold text-wine hover:text-terracotta"
                  >
                    {bundle.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-paper">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-3xl text-ink">
              Leve sua pratica para o mundo fisico (complementos didaticos)
            </h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {complements.map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-ink/10 bg-sand p-6"
                >
                  <h3 className="font-display text-xl text-ink">{item.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-ink/70">
                    {item.bullets.map((line) => (
                      <li key={line} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-wine"></span>
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-ink/60">
                    Oferta sugerida: {item.price}
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-flex text-sm font-semibold text-wine hover:text-terracotta"
                  >
                    {item.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-3xl border border-ink/10 bg-ink p-8 text-sand">
              <h2 className="font-display text-3xl">
                Voce estuda no seu ritmo, com leveza e metodo.
              </h2>
              <ul className="mt-4 grid gap-2 text-sm text-sand/80 md:grid-cols-2">
                <li>Acesso online imediato</li>
                <li>Conteudo organizado em passos</li>
                <li>Sem sobrecarga de informacao</li>
                <li>Voce escolhe modulo, pacote e complementos</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="font-display text-3xl text-ink">
              Perguntas frequentes
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="rounded-3xl border border-ink/10 bg-paper p-5"
                >
                  <p className="font-semibold text-ink">{faq.q}</p>
                  <p className="mt-2 text-sm text-ink/70">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="formacao" className="section">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-3xl border border-ink/10 bg-paper p-8 text-center">
              <h2 className="font-display text-3xl text-ink">
                Escolha o modulo que mais ressoa com voce e comece hoje.
              </h2>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href="#modulos"
                  className="rounded-full bg-wine px-6 py-3 text-sm font-semibold text-sand shadow-soft hover:bg-terracotta"
                >
                  Quero escolher um modulo
                </a>
                <a
                  href="#pacotes"
                  className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink hover:border-wine hover:text-wine"
                >
                  Quero um pacote promocional
                </a>
                <a
                  href="#pacotes"
                  className="rounded-full border border-ink/20 px-6 py-3 text-sm font-semibold text-ink hover:border-wine hover:text-wine"
                >
                  Quero a formacao completa
                </a>
              </div>
              <p className="mt-4 text-xs text-ink/60">
                Autonomia, clareza e proposito - do seu jeito.
              </p>
              <Link
                href="/"
                className="mt-5 inline-flex text-sm font-semibold text-wine hover:text-terracotta"
              >
                Voltar para a home
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
