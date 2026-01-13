import Link from "next/link";
import { fetchPostBySlug, fetchPostSlugs, getMediaUrl } from "@/lib/strapi";
import { marked } from "marked";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await fetchPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return (
      <div className="bg-sand text-ink">
        <main className="mx-auto max-w-4xl px-6 py-16">
          <h1 className="font-display text-3xl">Post nao encontrado</h1>
          <p className="mt-3 text-sm text-ink/70">
            Verifique o link ou volte para o blog.
          </p>
          <Link
            href="/blog"
            className="mt-6 inline-flex text-sm font-semibold text-wine hover:text-terracotta"
          >
            Voltar ao blog
          </Link>
        </main>
      </div>
    );
  }

  const coverUrl = getMediaUrl(post.cover) || getMediaUrl(post.image);

  marked.use({ gfm: true, breaks: true });
  const markdownBody = post.body
    ? post.body
        .replace(/\\r\\n/g, "\n")
        .replace(/\\n/g, "\n")
        .replace(/\\t/g, "\t")
        .replace(/\r\n/g, "\n")
    : post.summary || "";
  const htmlBody = marked.parse(markdownBody);

  return (
    <div className="bg-sand text-ink">
      <main className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/blog"
          className="text-xs uppercase tracking-[0.3em] text-wine/70"
        >
          Blog
        </Link>
        <h1 className="mt-4 font-display text-4xl">{post.title}</h1>
        <p className="mt-2 text-sm text-ink/60">
          {post.authorName ? `Por ${post.authorName}` : "Oraculista de Delfos"}
        </p>
        {coverUrl ? (
          <div className="mt-8 overflow-hidden rounded-3xl border border-ink/10">
            <img
              src={coverUrl}
              alt={post.title}
              className="h-64 w-full object-cover md:h-80"
              loading="lazy"
            />
          </div>
        ) : null}
        <article
          className="blog-content mt-10"
          dangerouslySetInnerHTML={{ __html: htmlBody }}
        />
      </main>
    </div>
  );
}
