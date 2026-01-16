import Link from "next/link";
import { fetchPosts, getMediaUrl } from "@/lib/strapi";

const fallbackPosts = [
  {
    tag: "Autoconhecimento",
    title: "Como fazer perguntas certas no tarot",
    summary: "Evite o sim ou nao e abra espaco para clareza real.",
    slug: "como-fazer-perguntas-no-tarot",
  },
  {
    tag: "Amor",
    title: "Cursos para fortalecer a autoestima",
    summary: "Use o jogo para se ouvir antes de decidir pelo outro.",
    slug: "leituras-para-autoestima",
  },
  {
    tag: "Trabalho",
    title: "Cartas que indicam novos caminhos",
    summary: "Descubra sinais de mudanca e como se preparar.",
    slug: "cartas-que-indicam-novos-caminhos",
  },
];

export default async function Home() {
  const posts = await fetchPosts(3);
  const blogPosts =
    posts.length > 0
      ? posts.map((post) => ({
          tag: "Blog",
          title: post.title,
          summary: post.summary || "Sem resumo ainda.",
          slug: post.slug,
          cover: post.cover,
          image: post.image,
        }))
      : fallbackPosts;

  return (
    <div className="bg-sand text-ink">
      <main>
        <section className="relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-glow opacity-60"></div>
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-wine/80">
                Oraculista de Delfos
              </p>
              <h1 className="font-display text-4xl leading-tight text-ink md:text-5xl">
                Ensino esoterico com clareza, metodo e consciencia.
              </h1>
              <p className="text-base text-ink/80 md:text-lg">
                Um espaco dedicado ao estudo do simbolico como linguagem de
                compreensao da vida, dos ciclos e dos processos internos - sem
                excessos, sem confusao.
              </p>
              <p className="text-sm text-ink/70">
                O Oraculista de Delfos reune conteudos, estudos e cursos que
                tratam o esoterico com seriedade, profundidade e organizacao.
                Aqui, simbolos nao sao respostas prontas. Sao ferramentas de
                entendimento.
              </p>
              <ul className="grid gap-2 text-sm text-ink/80">
                <li>Abordagem simbolica clara e estruturada</li>
                <li>Estudo consciente, sem misticismo confuso</li>
                <li>Conteudos organizados para diferentes momentos da jornada</li>
                <li>Autonomia para aprender no seu ritmo</li>
              </ul>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#quem-somos"
                  className="rounded-full bg-wine px-6 py-3 text-sm font-semibold text-sand shadow-soft hover:bg-terracotta"
                >
                  Conhecer o Oraculista de Delfos
                </a>
                <a
                  href="/cursos"
                  className="rounded-full border border-ink/30 px-6 py-3 text-sm font-semibold text-ink hover:border-wine hover:text-wine"
                >
                  Explorar os cursos
                </a>
              </div>
              <p className="text-xs font-semibold text-ink/70">
                Estudo progressivo - Linguagem acessivel - Consciencia e metodo
              </p>
            </div>
            <div className="overflow-hidden rounded-[32px] border border-ink/15 bg-paper shadow-card">
              <img
                src="/Quemsomos.jpg"
                alt="Oraculista de Delfos"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="mx-auto max-w-6xl px-6">
            <div className="space-y-3">
              <h2 className="section-title">Por que estudar com a gente?</h2>
              <p className="section-lead">
                Metodologia clara, linguagem simbolica aplicada e acompanhamento
                pensado para quem quer evoluir com autonomia.
              </p>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Metodo estruturado",
                  body: "Aprendizado progressivo, sem excesso e com foco no essencial.",
                },
                {
                  title: "Simbolos aplicados",
                  body: "Leituras mais claras com base nos ciclos e arquetipos.",
                },
                {
                  title: "Autonomia real",
                  body: "Voce aprende a interpretar e confiar no proprio processo.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-ink/10 bg-paper p-6 shadow-soft"
                >
                  <h3 className="font-display text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-[32px] border border-ink/15 bg-paper p-8 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/70">
                Curso em destaque
              </p>
              <h2 className="font-display text-3xl text-ink">O Chamado do Louco</h2>
              <p className="mt-3 text-sm text-ink/70">
                Aprenda Tarot do zero com metodo e pratica.
              </p>
              <div className="mt-6 rounded-2xl border border-ink/10 bg-sand p-4">
                <a
                  href="#cursos"
                  className="inline-flex rounded-full bg-ink px-5 py-2 text-sm font-semibold text-sand hover:bg-wine"
                >
                  Acessar Hotmart
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="cursos" className="section bg-ink text-sand">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-6">
              <div className="space-y-3">
                <h2 className="font-display text-3xl md:text-4xl">
                  Cursos em destaque
                </h2>
                <p className="text-sand/80">
                  Os cursos do Oraculista de Delfos foram organizados em
                  modulos independentes para tornar o aprendizado mais
                  acessivel, flexivel e alinhado as necessidades de cada
                  pessoa. Assim, voce pode investir apenas nos conteudos que
                  realmente fazem sentido para o seu momento, reduzindo o
                  impacto financeiro e mantendo total autonomia sobre sua
                  jornada de estudos.
                </p>
                <p className="text-sand/80">
                  Essa estrutura modular tambem facilita o aprendizado: cada
                  modulo e focado, direto ao ponto e construido para ser
                  compreendido passo a passo, sem sobrecarga de informacoes.
                  Voce avanca no seu ritmo, aprofunda onde deseja e constroi
                  conhecimento solido com clareza e proposito.
                </p>
                <p className="text-sand/80">
                  Escolha o modulo que mais ressoa com voce, clique em
                  \"Saber Mais\" e conheca todos os detalhes antes de decidir.
                </p>
                <p className="text-sand/80">
                  Cada modulo tem sua landing page aqui e leva direto para a
                  pagina de vendas na Hotmart.
                </p>
              </div>
              <a
                href="/cursos"
                className="self-start rounded-full border border-sand/40 px-5 py-2 text-sm font-semibold text-sand hover:border-gold hover:text-gold"
              >
                Ver todos os cursos
              </a>
            </div>
            <div className="mt-10 overflow-hidden rounded-3xl border border-sand/20 bg-sand/5 md:grid md:grid-cols-[1.1fr_0.9fr]">
              <div className="p-6 md:p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-gold">
                  Modulo em destaque
                </p>
                <h3 className="mt-3 font-display text-3xl">
                  O Chamado do Louco
                </h3>
                <p className="mt-2 text-sm font-semibold text-sand/80">
                  Sua porta de entrada no Tarot
                </p>
                <p className="mt-3 text-sm text-sand/70">
                  Comece pelo essencial e construa uma base solida para
                  interpretar os Arcanos Maiores com clareza e seguranca.
                  Aprenda o Tarot como linguagem simbolica, compreendendo
                  arquetipos e significados de forma estruturada e aplicada a
                  vida real. Um estudo pensado para quem busca metodo, autonomia
                  e entendimento profundo do Tarot como expressao da experiencia
                  humana.
                </p>
                <p className="mt-4 text-lg font-semibold text-gold">R$ 95</p>
                <a
                  href="#"
                  className="mt-4 inline-flex text-sm font-semibold text-gold hover:text-sand"
                >
                  Ir para a Hotmart
                </a>
              </div>
              <div className="h-64 md:h-full">
                <img
                  src="/Olouco.png"
                  alt="O Chamado do Louco"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Os Arcanos Menores: A Vida em Movimento",
                  price: "R$ 127",
                  body: "Os Arcanos Menores sao as cartas do Tarot que falam da vida como ela acontece no dia a dia. Elas mostram como a vida se move e como nos movemos junto com ela. Trabalho, relacoes, decisoes e conflitos aparecem nas cartas de forma clara quando voce compreende a linguagem desses arcanos, tornando as leituras ainda mais completas.",
                },
                {
                  title: "Leitura Relacional e Binariedade Simbolica",
                  price: "R$ 147",
                  body: "O Tarot nao se le carta por carta, mas na relacao entre elas. Aqui voce aprende a interpretar pares de cartas, compreendendo tensoes, complementaridades e dialogos simbolicos, tornando suas leituras mais claras e profundas.",
                },
                {
                  title:
                    "A Arte da Leitura: Escuta, Clareza e Conducao Etica da Leitura",
                  price: "R$ 197",
                  body: "Ler Tarot e mais do que abrir cartas. Aqui voce aprende a escutar o consulente, formular boas perguntas e conduzir leituras com clareza e etica, tornando o Tarot um espaco de orientacao responsavel, segura e consciente.",
                },
              ].map((course) => (
                <div
                  key={course.title}
                  className="rounded-3xl border border-sand/20 bg-sand/5 p-6"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">
                    Modulo
                  </p>
                  <h3 className="mt-3 font-display text-2xl">{course.title}</h3>
                  <p className="mt-2 text-sm text-sand/70">{course.body}</p>
                  <p className="mt-4 text-lg font-semibold text-gold">
                    {course.price}
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-flex text-sm font-semibold text-gold hover:text-sand"
                  >
                    Ir para a Hotmart
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="modulo-1" className="section">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <h2 className="section-title">Modulo 1: O Chamado do Louco</h2>
              <p className="section-lead">
                Comece pelo essencial e construa uma base solida para interpretar
                os Arcanos Maiores com clareza e metodo.
              </p>
              <a
                href="/modulos"
                className="inline-flex rounded-full bg-wine px-6 py-3 text-sm font-semibold text-sand shadow-soft hover:bg-terracotta"
              >
                Conhecer o Modulo 1
              </a>
            </div>
            <div className="rounded-3xl border border-ink/10 bg-paper p-6 shadow-soft">
              <h3 className="font-display text-2xl text-ink">
                Sua porta de entrada no Tarot
              </h3>
              <p className="mt-3 text-sm text-ink/70">
                Linguagem simbolica, arquetipos e leitura aplicada para quem quer
                aprender com estrutura e autonomia.
              </p>
            </div>
          </div>
        </section>

        <section id="indicacoes" className="section">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="section-title">Indicacoes</h2>
                <p className="section-lead">
                  Produtos selecionados de lojas parceiras, com itens
                  essenciais do universo esoterico.
                </p>
              </div>
              <Link
                href="/loja"
                className="self-start text-sm font-semibold text-wine hover:text-terracotta"
              >
                Ver todas as indicacoes
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Baralho de Tarot Classico",
                  body: "Cartas resistentes para leitura diaria.",
                  image: "/oraculista-logo.jpg",
                },
                {
                  title: "Velas Ritualisticas",
                  body: "Apoio para intencoes e rituais pessoais.",
                  image: "/capaoraculistadelfos.jpg",
                },
                {
                  title: "Incensos Naturais",
                  body: "Aromas suaves para foco e atmosfera.",
                  image: "/logooraculista.png",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-paper shadow-soft"
                >
                  <div className="h-40 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex h-full flex-col p-6">
                    <h3 className="font-display text-lg">{item.title}</h3>
                    <p className="mt-2 text-sm text-ink/70">{item.body}</p>
                    <Link
                      href="/loja"
                      className="mt-auto inline-flex text-sm font-semibold text-wine hover:text-terracotta"
                    >
                      Ver indicacoes
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="personalizados" className="section bg-paper">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="section-title">Personalizados</h2>
                <p className="section-lead">
                  Produtos com identidade visual do Oraculista de Delfos para o
                  dia a dia.
                </p>
              </div>
              <Link
                href="/personalizados"
                className="self-start text-sm font-semibold text-wine hover:text-terracotta"
              >
                Ver todos os personalizados
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Caderno Personalizado",
                  body: "Anotacoes, estudos e tiragens.",
                  image: "/oraculista-logo.png",
                },
                {
                  title: "Poster Simbolico",
                  body: "Arte decorativa com simbolos.",
                  image: "/ORACULISTADEDELFOS.png",
                },
                {
                  title: "Camiseta Tematica",
                  body: "Estampa exclusiva e significativa.",
                  image: "/logomagenta.png",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-sand shadow-soft"
                >
                  <div className="h-40 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex h-full flex-col p-6">
                    <h3 className="font-display text-lg">{item.title}</h3>
                    <p className="mt-2 text-sm text-ink/70">{item.body}</p>
                    <Link
                      href="/personalizados"
                      className="mt-auto inline-flex text-sm font-semibold text-wine hover:text-terracotta"
                    >
                      Ver produtos
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

                <section id="livros" className="section">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="section-title">Livros da autora</h2>
                <p className="section-lead">
                  Obras voltadas ao estudo do simbolismo, autoconhecimento e
                  leitura aplicada para aprofundar sua jornada.
                </p>
              </div>
              <a
                href="/livros"
                className="self-start text-sm font-semibold text-wine hover:text-terracotta"
              >
                Ver todos os livros
              </a>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Tarot: Fundamentos e Simbolos",
                  body: "Guia pratico para compreender os Arcanos Maiores.",
                  image: "/oraculista-logo.jpg",
                },
                {
                  title: "Numerologia e Autoconhecimento",
                  body: "Ciclos pessoais e clareza de caminho.",
                  image: "/ORACULISTADEDELFOS.png",
                },
                {
                  title: "Astrologia Essencial",
                  body: "Introducao ao mapa astral e seus fundamentos.",
                  image: "/logooraculista.png",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-paper shadow-soft"
                >
                  <div className="h-40 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex h-full flex-col p-6">
                    <h3 className="font-display text-lg">{item.title}</h3>
                    <p className="mt-2 text-sm text-ink/70">{item.body}</p>
                    <a
                      href="/livros"
                      className="mt-auto inline-flex text-sm font-semibold text-wine hover:text-terracotta"
                    >
                      Ver livro
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section id="quem-somos" className="section bg-paper">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-[1fr_1.1fr]">
            <div className="rounded-3xl border border-ink/10 bg-sand p-4 shadow-soft">
              <img
                src="/Quemsomos.jpg"
                alt="Nossa Proposta"
                className="h-full w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-4">
              <h2 className="section-title">Nossa Proposta</h2>
              <p className="section-lead">
                Oraculista de Delfos e um projeto dedicado ao Tarot como
                linguagem simbolica do presente, com clareza e responsabilidade.
              </p>
              <Link
                href="/quem-somos"
                className="inline-flex text-sm font-semibold text-wine hover:text-terracotta"
              >
                Conhecer a historia
              </Link>
            </div>
          </div>
        </section>

        <section id="depoimentos" className="section">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="section-title">Depoimentos</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {[
                "Aprendi a interpretar com muito mais clareza e seguranca.",
                "O metodo me deu base e me ajudou a organizar as leituras.",
                "Conteudo direto, pratico e profundo ao mesmo tempo.",
              ].map((quote) => (
                <article
                  key={quote}
                  className="rounded-3xl border border-ink/10 bg-paper p-6 shadow-soft"
                >
                  <p className="text-sm text-ink/70">"{quote}"</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="section">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="section-title">Artigos e reflexoes</h2>
                <p className="section-lead">
                  Este espaco foi criado para quem deseja compreender o
                  esoterismo com profundidade, clareza e senso critico. No blog
                  do Oraculista de Delfos, os artigos exploram simbolos,
                  praticas e reflexoes que ajudam a ampliar a consciencia e o
                  autoconhecimento. Os conteudos sao pensados para informar,
                  provocar boas perguntas e acompanhar diferentes momentos da
                  jornada pessoal. Leia com calma, explore os temas e permita
                  que o conhecimento se revele aos poucos.
                </p>
              </div>
              <Link
                href="/blog"
                className="self-start text-sm font-semibold text-wine hover:text-terracotta"
              >
                Ver todos os artigos
              </Link>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {blogPosts.map((post) => {
                const coverUrl =
                  posts.length > 0
                    ? getMediaUrl(post.cover) || getMediaUrl(post.image)
                    : null;
                return (
                  <article
                    key={post.slug}
                    className="rounded-3xl border border-ink/10 bg-paper p-6 shadow-soft"
                  >
                    {coverUrl ? (
                      <div className="mb-4 overflow-hidden rounded-2xl border border-ink/10">
                        <img
                          src={coverUrl}
                          alt={post.title}
                          className="h-36 w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    ) : null}
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-wine">
                      {post.tag}
                    </p>
                    <h3 className="mt-3 font-display text-xl">{post.title}</h3>
                    <p className="mt-2 text-sm text-ink/70">{post.summary}</p>
                    <Link
                      href={posts.length > 0 ? `/blog/${post.slug}` : "/blog"}
                      className="mt-4 inline-flex text-sm font-semibold text-wine hover:text-terracotta"
                    >
                      Ler artigo
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      
        <section id="contato" className="section">
          <div className="mx-auto max-w-6xl px-6">
            <div className="rounded-3xl border border-ink/10 bg-ink p-8 text-center text-sand">
              <h2 className="font-display text-3xl">
                Pronta para comecar?
              </h2>
              <p className="mt-3 text-sm text-sand/80">
                Escolha seu caminho e comece hoje com clareza e metodo.
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-3">
                <a
                  href="#cursos"
                  className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink hover:bg-sand"
                >
                  Ver cursos
                </a>
                <a
                  href="https://wa.me/5500000000000"
                  className="rounded-full border border-sand/40 px-6 py-3 text-sm font-semibold text-sand hover:border-gold hover:text-gold"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section></main>

    </div>
  );
}




