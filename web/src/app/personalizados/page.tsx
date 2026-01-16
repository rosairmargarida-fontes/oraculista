const products = [
  {
    name: "Caderno Personalizado",
    description:
      "Caderno tematico para anotacoes de estudos, tiragens e reflexoes.",
    image: "/oraculista-logo.jpg",
  },
  {
    name: "Poster Simbolico",
    description:
      "Arte decorativa para trazer simbolos e inspiracao ao seu espaco.",
    image: "/capaoraculistadelfos.jpg",
  },
  {
    name: "Camiseta Tematica",
    description:
      "Estampa exclusiva com identidade simbolica do Oraculista de Delfos.",
    image: "/ORACULISTADEDELFOS.png",
  },
  {
    name: "Caneca Ritual",
    description:
      "Para criar momentos de pausa e conexao com pequenos rituais diários.",
    image: "/logooraculista.png",
  },
  {
    name: "Bone Personalizado",
    description:
      "Acessorio com simbolos discretos para expressar identidade e estilo.",
    image: "/oraculista-logo.png",
  },
];

export default function PersonalizadosPage() {
  return (
    <div className="bg-sand text-ink">
      <header className="border-b border-ink/10 bg-sand/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-wine/70">
              Personalizados
            </p>
            <h1 className="font-display text-3xl text-ink md:text-4xl">
              Produtos personalizados
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
