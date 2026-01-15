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
          <div className="absolute inset-0 bg-glow opacity-60"></div>
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-wine/80">
                Taro com metodo, sem confusao
              </p>
              <h1 className="font-display text-4xl leading-tight text-ink md:text-5xl">
                Aprenda Taro de forma estruturada, pratica e progressiva -
                comecando pelo essencial.
              </h1>
              <p className="text-base text-ink/80 md:text-lg">
                Um curso modular que transforma o Taro em ferramenta real de
                autoconhecimento, clareza e tomada de decisao, sem misticismo
                raso ou dependencia de "dom".
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/modulos"
                  className="rounded-full bg-wine px-6 py-3 text-sm font-semibold text-sand shadow-soft hover:bg-terracotta"
                >
                  Comecar minha jornada
                </a>
                <a
                  href="/blog"
                  className="rounded-full border border-ink/30 px-6 py-3 text-sm font-semibold text-ink hover:border-wine hover:text-wine"
                >
                  Ler o blog
                </a>
              </div>
              <div className="flex flex-wrap gap-3 text-xs font-semibold text-ink/70">
                <span className="rounded-full border border-ink/20 bg-paper px-3 py-1">
                  Pagamento seguro (Hotmart)
                </span>
              </div>
            </div>
            <div className="rounded-[32px] border border-ink/15 bg-paper p-8 shadow-card">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/70">
                Modulo 1
              </p>
              <h2 className="font-display text-3xl text-ink">O Chamado do Louco</h2>
              <p className="mt-3 text-sm text-ink/70">
                O Chamado do Louco e o curso base para compreender o Tarot como
                uma linguagem simbolica da experiencia humana.
              </p>
              <p className="mt-3 text-sm text-ink/70">
                Voce aprende os 22 Arcanos Maiores em sua ordem simbolica,
                reconhece arquetipos, ciclos e momentos de virada, e passa a
                identificar fases da vida com clareza e consciencia.
              </p>
              <p className="mt-3 text-sm text-ink/70">
                E uma base solida de Tarot, que capacita o aluno a compreender
                profundamente os Arcanos Maiores, sua sequencia logica e sua
                relacao com o comportamento humano e os ciclos da vida.
              </p>

              <div className="mt-6 rounded-2xl border border-ink/10 bg-sand p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-ink/60">
                  Preco especial
                </p>
                <p className="mt-2 text-3xl font-semibold text-wine">R$ 95</p>
                <a
                  href="#cursos"
                  className="mt-4 inline-flex rounded-full bg-ink px-5 py-2 text-sm font-semibold text-sand hover:bg-wine"
                >
                  Ver Detalhes do curso
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
                  Módulos Disponíveis
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
                href="/modulos"
                className="self-start rounded-full border border-sand/40 px-5 py-2 text-sm font-semibold text-sand hover:border-gold hover:text-gold"
              >
                Conhecer o Curso Completo
              </a>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "O Chamado do Louco",
                  price: "R$ 95",
                  body: "Apresenta os 22 Arcanos Maiores como uma jornada simbolica do desenvolvimento humano, integrando significado das cartas, ordem tradicional e aplicacao na vida pratica.",
                },
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

        <section id="produtos" className="section">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="section-title">Loja e produtos</h2>
                <p className="section-lead">
                  Nossa linha de produtos foi criada para quem gosta de levar
                  simbolos, ideias e boas perguntas para o cotidiano. Camisetas,
                  canecas e posters traduzem o universo do Oraculista de Delfos
                  em pecas simples, bonitas e cheias de significado. Sao objetos
                  para usar, presentear ou deixar por perto, como pequenos
                  lembretes visuais de reflexao, identidade e conexao. Escolha o
                  que conversa com voce e deixe o simbolo fazer parte da sua
                  rotina.
                </p>
              </div>
              <a
                href="/loja"
                className="self-start text-sm font-semibold text-wine hover:text-terracotta"
              >
                Conheça todos os produtos
              </a>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-4">
              {[
                {
                  title: "Cartas de Tarot para colorir",
                  body: [
                    "Estudo pratico e intuitivo",
                    "Memorizacao dos simbolos",
                    "Foco e presenca",
                    "Apoio aos cursos",
                  ],
                },
                {
                  title: "Livro Didatico de Tarot",
                  body: [
                    "Fundamentos bem organizados",
                    "Consulta rapida",
                    "Revisoes objetivas",
                    "Apoio aos cursos",
                  ],
                },
                {
                  title: "Produtos Esotericos",
                  body: [
                    "Curadoria criteriosa",
                    "Significado acima de modas",
                    "Indicacoes conscientes",
                    "Compra segura",
                  ],
                },
                {
                  title: "Produtos Personalizados",
                  body: [
                    "Simbolos no cotidiano",
                    "Design com significado",
                    "Pecas para identidade",
                    "Expressao autentica",
                  ],
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-ink/10 bg-paper p-6 shadow-soft"
                >
                  <h3 className="font-display text-lg">{item.title}</h3>
                  {Array.isArray(item.body) ? (
                    <ul className="mt-2 space-y-1 text-sm text-ink/70">
                      {item.body.map((line) => (
                        <li key={line} className="flex items-start gap-2">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gold"></span>
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="mt-2 text-sm text-ink/70">{item.body}</p>
                  )}
                  <a
                    href="#"
                    className="mt-4 inline-flex text-sm font-semibold text-wine hover:text-terracotta"
                  >
                    Ver produto
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="blog" className="section">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-4">
              <div>
                <h2 className="section-title">Blog e conteudos</h2>
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
      </main>

      <footer className="border-t border-ink/10 bg-ink text-sand">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sand/70">
              Servicos
            </p>
            <ul className="mt-3 space-y-2 text-sm text-sand/80">
              <li>Livros</li>
              <li>Cursos</li>
              <li>Produtos</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sand/70">
              Redes sociais
            </p>
            <ul className="mt-3 space-y-2 text-sm text-sand/80">
              <li>Instagram</li>
              <li>Pinterest</li>
              <li>Facebook</li>
              <li>YouTube</li>
              <li>TikTok</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sand/70">
              Paginas
            </p>
            <ul className="mt-3 space-y-2 text-sm text-sand/80">
              <li>Politicas</li>
              <li>Termos de uso</li>
              <li>Contato</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sand/70">
              Contato
            </p>
            <ul className="mt-3 space-y-2 text-sm text-sand/80">
              <li>email@oraculistadedelfos.com.br</li>
              <li>WhatsApp: (00) 00000-0000</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-sand/20 py-6 text-center text-xs text-sand/70">
          (c) 2025 Oraculista de Delfos. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}










