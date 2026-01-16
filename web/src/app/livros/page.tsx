const books = [
  {
    title: "Tarot: Fundamentos e Simbolos",
    description:
      "Guia pratico para compreender os Arcanos Maiores e aplicar o simbolismo no dia a dia.",
    image: "/oraculista-logo.jpg",
  },
  {
    title: "Numerologia e Autoconhecimento",
    description:
      "Leitura numerica com foco em ciclos pessoais, escolhas conscientes e clareza de caminho.",
    image: "/ORACULISTADEDELFOS.png",
  },
  {
    title: "Astrologia Essencial",
    description:
      "Introducao ao mapa astral com linguagem acessivel e aplicacao pratica.",
    image: "/logooraculista.png",
  },
];

export default function LivrosPage() {
  return (
    <div className="bg-sand text-ink">
      <header className="border-b border-ink/10 bg-sand/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-wine/70">
              Livros
            </p>
            <h1 className="font-display text-3xl text-ink md:text-4xl">
              Livros da autora
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

      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {books.map((book) => (
            <article
              key={book.title}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-paper shadow-soft"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex h-full flex-col p-6">
                <h2 className="font-display text-xl text-ink">{book.title}</h2>
                <p className="mt-2 text-sm text-ink/70">
                  {book.description}
                </p>
                <a
                  href="#"
                  className="mt-auto inline-flex text-sm font-semibold text-wine hover:text-terracotta"
                >
                  Comprar agora
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
