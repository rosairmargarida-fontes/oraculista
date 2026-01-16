import Link from "next/link";

export default function QuemSomosPage() {
  return (
    <div className="bg-sand text-ink">
      <header className="border-b border-ink/10 bg-sand/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-wine/70">
              Nossa Proposta
            </p>
            <h1 className="font-display text-3xl text-ink md:text-4xl">
              Oraculista de Delfos
            </h1>
          </div>
          <Link
            href="/"
            className="text-sm font-semibold text-wine hover:text-terracotta"
          >
            Voltar para a home
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="grid gap-10 md:grid-cols-[1fr_1.1fr]">
          <div className="rounded-3xl border border-ink/10 bg-paper p-4 shadow-soft">
            <img
              src="/Quemsomos.jpg"
              alt="Nossa Proposta"
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="space-y-5 text-sm text-ink/80">
            <h2 className="font-display text-2xl text-ink">Nossa Proposta</h2>
            <p>
              Oraculista de Delfos e um projeto dedicado ao Tarot e a Astrologia
              como linguagens simbolicas do presente, voltado ao
              autoconhecimento, a clareza e a ampliacao da consciencia sobre as
              proprias escolhas.
            </p>
            <p>
              O trabalho parte da compreensao do Tarot nao como instrumento de
              previsao literal do futuro, mas como um espelho simbolico — uma
              linguagem visual capaz de refletir padroes, movimentos internos e
              situacoes vividas. O foco esta na leitura do presente, afastando-se
              de ideias de sorte, destino fixo ou respostas prontas.
            </p>
            <p>
              A abordagem do Oraculista de Delfos prioriza o entendimento
              profundo dos Arcanos, tratando as cartas como figuras vivas, com
              atitudes, emocoes e comportamentos proprios. O Tarot e ensinado e
              praticado como uma linguagem aplicada a vida cotidiana, tornando
              sua leitura mais acessivel, concreta e significativa.
            </p>
            <p>
              O projeto tambem se fundamenta em principios eticos claros. Nao
              realiza leituras sobre a vida de terceiros, nao trabalha com
              diagnosticos de saude nem com praticas manipulativas. O Tarot e
              compreendido como um espaco de escuta, responsabilidade e
              orientacao consciente — nunca de dependencia.
            </p>
            <p>
              Alem da pratica oracular, o Oraculista de Delfos atua como um
              espaco de ensino e formacao, dedicado a transmissao responsavel do
              saber simbolico. Seu compromisso e contribuir para a continuidade
              do Tarot de forma acessivel, etica e profunda, auxiliando pessoas
              a desenvolverem uma relacao mais madura com os simbolos e com suas
              proprias decisoes.
            </p>
          </div>
        </section>

        <section className="mt-12 space-y-5 text-sm text-ink/80">
          <h2 className="font-display text-2xl text-ink">Quem sou</h2>
          <p>
            Sou Tarologa, Astrologa e Artista Visual, com estudos continuos em
            Tarot desde 2008. Sou formada em Astrologia pela Gaia Escola de
            Astrologia e desenvolvo pesquisas independentes em mitologia grega,
            simbolos e linguagem imagetica, que fundamentam minha pratica e
            abordagem pedagogica.
          </p>
          <p>
            Atuo a partir da compreensao do Tarot como uma linguagem simbolica
            do presente, e nao como instrumento de previsao literal do futuro.
            Entendo o Tarot como um espelho capaz de refletir padroes,
            movimentos internos e contextos vividos, ampliando a consciencia e
            apoiando processos de tomada de decisao mais responsaveis.
          </p>
          <p>
            Meu trabalho e voltado ao autoconhecimento, a leitura de padroes
            comportamentais e a clareza de situacoes, afastando-se de concepcoes
            ligadas a sorte ou a destinos fixos. Acredito que compreender o
            momento presente e o que devolve autonomia e poder de escolha as
            pessoas.
          </p>
          <p>
            Como professora, priorizo o entendimento profundo dos Arcanos,
            evitando abordagens baseadas em memorizacao de palavras-chave.
            Ensino o Tarot como uma linguagem viva, em que cada arcano expressa
            atitudes, emocoes e comportamentos, aproximando o estudo das cartas
            da experiencia cotidiana e tornando o aprendizado mais acessivel,
            consistente e aplicavel.
          </p>
        </section>
      </main>
    </div>
  );
}
