const products = [
  {
    name: "Baralho de Tarot Classico",
    description:
      "Cartas resistentes, leitura confortavel e arte simbolica tradicional.",
    image: "/baralho.png",
    cta: "Comprar agora",
  },
  {
    name: "Velas Ritualisticas",
    description:
      "Velas tematicas para intencoes, focos e rituais pessoais.",
    image: "/velas.png",
    cta: "Comprar agora",
  },
  {
    name: "Livro de Simbolismo Esoterico",
    description:
      "Referencia visual e conceitual para aprofundar estudos e leituras.",
    image: "/livros.png",
    cta: "Comprar agora",
  },
  {
    name: "Kit de Cristais",
    description:
      "Selecao equilibrada para praticas de alinhamento e meditacao.",
    image: "/cristais.png",
    cta: "Comprar agora",
  },
  {
    name: "Incensos Naturais",
    description:
      "Aromas suaves para criar atmosfera e concentracao.",
    image: "/incenso.png",
    cta: "Comprar agora",
  },
  {
    name: "Caderno de Estudos Esotericos",
    description:
      "Espaco organizado para anotacoes, tiragens e reflexoes.",
    image: "/Cadernos.png",
    cta: "Comprar agora",
  },
];

export default function LojaPage() {
  return (
    <div className="bg-sand text-ink">
      <header className="border-b border-ink/10 bg-sand/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-wine/70">
              Indicacoes
            </p>
            <h1 className="font-display text-3xl text-ink md:text-4xl">
              Produtos indicados de lojas parceiras
            </h1>
            <p className="mt-2 text-sm text-ink/70">
              Curadoria com links afiliados, atualizada regularmente.
            </p>
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
          {products.map((product) => (
            <article
              key={product.name}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-paper shadow-soft"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex h-full flex-col p-6">
                <h2 className="font-display text-xl text-ink">
                  {product.name}
                </h2>
                <p className="mt-2 text-sm text-ink/70">
                  {product.description}
                </p>
                <a
                  href="#"
                  className="mt-auto inline-flex text-sm font-semibold text-wine hover:text-terracotta"
                >
                  {product.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
