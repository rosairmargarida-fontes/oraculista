import Link from "next/link";
import { fetchPosts, getMediaUrl } from "@/lib/strapi";

export default async function BlogPage() {
  const posts = await fetchPosts(12);

  return (
    <div className="bg-sand text-ink">
      <header className="border-b border-ink/10 bg-sand/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-wine/70">
              Blog
            </p>
            <h1 className="font-display text-3xl text-ink md:text-4xl">
              Leituras para clareza real
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
        {posts.length === 0 ? (
          <div className="rounded-3xl border border-ink/10 bg-paper p-8">
            <p className="text-sm text-ink/70">
              Nenhum post publicado ainda. Assim que voce criar conteudo no
              Strapi, ele aparece aqui.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => {
              const coverUrl = getMediaUrl(post.cover) || getMediaUrl(post.image);
              return (
              <article
                key={post.id}
                className="rounded-3xl border border-ink/10 bg-paper p-6 shadow-soft"
              >
                {coverUrl ? (
                  <div className="mb-4 overflow-hidden rounded-2xl border border-ink/10">
                    <img
                      src={coverUrl}
                      alt={post.title}
                      className="h-44 w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ) : null}
                <p className="text-xs uppercase tracking-[0.25em] text-wine/70">
                  Blog
                </p>
                <h2 className="mt-3 font-display text-2xl text-ink">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-ink/70">
                  {post.summary || "Sem resumo ainda."}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-5 inline-flex text-sm font-semibold text-wine hover:text-terracotta"
                >
                  Ler artigo
                </Link>
              </article>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
}
