import Link from "next/link";
import { fetchPosts, getMediaUrl } from "@/lib/strapi";

const fallbackPosts = [
  {
    tag: "Autoconhecimento",
    title: "Como fazer perguntas certas no tarot",
    summary: "Evite o sim ou não e abra espaço para clareza real.",
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
    summary: "Descubra sinais de mudança e como se preparar.",
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
      <header className="sticky top-0 z-30 border-b border-ink/10 bg-sand/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 bg-paper font-display text-xl">
              O
            </span>
            <div>
              <p className="font-display text-lg">Oraculista de Delfos</p>
              <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
                Tarô, cursos e loja
              </p>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-semibold md:flex">
            <a href="#cursos" className="hover:text-wine">
              Cursos
            </a>
            <a href="#produtos" className="hover:text-wine">
              Produtos
            </a>
            <a href="/loja" className="hover:text-wine">
              Loja
            </a>
            <a href="#blog" className="hover:text-wine">
              Blog
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-glow opacity-60"></div>
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-wine/80">
                Tarô com método, sem confusão
              </p>
              <h1 className="font-display text-4xl leading-tight text-ink md:text-5xl">
                Aprenda Tarô de forma estruturada, prática e progressiva —
                começando pelo essencial.
              </h1>
              <p className="text-base text-ink/80 md:text-lg">
                Um curso modular que transforma o Tarô em ferramenta real de
                autoconhecimento, clareza e tomada de decisão, sem misticismo
                raso ou dependência de "dom".
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="/curso"
                  className="rounded-full bg-wine px-6 py-3 text-sm font-semibold text-sand shadow-soft hover:bg-terracotta"
                >
                  Começar minha jornada
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
                Módulo 1
              </p>
              <h2 className="font-display text-3xl text-ink">
                O Chamado do Louco
              </h2>
              <p className="mt-3 text-sm text-ink/70">
                Os 22 Arcanos Maiores e as grandes lições da vida. Descubra em
                qual fase você está e qual aprendizado esse momento pede.
              </p>
              <div className="mt-6 rounded-2xl border border-ink/10 bg-sand p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-ink/60">
                  Preço especial
                </p>
                <p className="mt-2 text-3xl font-semibold text-wine">R$ 67</p>
                <a
                  href="#cursos"
                  className="mt-4 inline-flex rounded-full bg-ink px-5 py-2 text-sm font-semibold text-sand hover:bg-wine"
                >
                  Ver landing do curso
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="cursos" className="section bg-ink text-sand">
          <div className="mx-auto max-w-6xl px-6">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="space-y-3">
                <h2 className="font-display text-3xl md:text-4xl">
                  Cursos modulares na Hotmart
                </h2>
                <p className="text-sand/80">
                  Cada módulo tem sua landing page aqui e leva direto para a
                  página de vendas na Hotmart.
                </p>
              </div>
              <a
                href="/curso"
                className="rounded-full border border-sand/40 px-5 py-2 text-sm font-semibold text-sand hover:border-gold hover:text-gold"
              >
                Ver a landing completa
              </a>
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "O Chamado do Louco",
                  price: "R$ 67",
                  body: "Grandes lições da vida e como reconhecer seus ciclos.",
                },
                {
                  title: "A Vida em Movimento",
                  price: "R$ 127",
                  body: "Arcanos menores e leituras práticas do dia a dia.",
                },
                {
                  title: "As Quatro Forças",
                  price: "R$ 197",
                  body: "Fogo, água, ar e terra para organizar a interpretação.",
                },
              ].map((course) => (
                <div
                  key={course.title}
                  className="rounded-3xl border border-sand/20 bg-sand/5 p-6"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">
                    Módulo
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
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="section-title">Loja e produtos</h2>
                <p className="section-lead">
                  Livros, cartas para colorir, afiliados e print on demand com
                  links diretos para compra.
                </p>
              </div>
              <a
                href="/loja"
                className="text-sm font-semibold text-wine hover:text-terracotta"
              >
                Ver a loja completa
              </a>
            </div>
            <div className="mt-8 grid gap-6 md:grid-cols-4">
              {[
                {
                  title: "Livro didático",
                  body: "PDF na Hotmart e impresso/Kindle via Amazon KDP.",
                },
                {
                  title: "Tarot para colorir",
                  body: "PDF na Hotmart e versões física/Kindle na Amazon KDP.",
                },
                {
                  title: "Produtos afiliados",
                  body: "Velas, baralhos e itens esotéricos com link direto.",
                },
                {
                  title: "Print on demand",
                  body: "Camisetas e itens personalizados com envio pela plataforma.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="rounded-3xl border border-ink/10 bg-paper p-6 shadow-soft"
                >
                  <h3 className="font-display text-lg">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{item.body}</p>
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
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="section-title">Blog e conteúdos</h2>
                <p className="section-lead">
                  Textos diretos para apoiar decisões e construir autoridade.
                </p>
              </div>
              <Link
                href="/blog"
                className="text-sm font-semibold text-wine hover:text-terracotta"
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

      <footer className="border-t border-ink/10 bg-sand">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-4">
          <div className="space-y-3 md:col-span-2">
            <p className="font-display text-xl">Oraculista de Delfos</p>
            <p className="text-sm text-ink/70">
              Tarot, cursos e produtos com acolhimento, método e respeito.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/60">
              Produtos
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Cursos</li>
              <li>Livros</li>
              <li>Afiliados</li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-ink/60">
              Conteúdo
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>Blog</li>
              <li>Newsletter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-ink/10 py-6 text-center text-xs text-ink/60">
          (c) 2025 Oraculista de Delfos. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
