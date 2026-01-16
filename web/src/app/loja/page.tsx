const products = [
  {
    name: "Livro Didatico de Taro",
    description:
      "Fundamentos organizados para estudo diario, com estrutura clara, exemplos praticos e consulta rapida.",
    image: "/oraculista-logo.jpg",
    cta: "Quero garantir meu exemplar agora",
  },
  {
    name: "Cartas de Taro para Colorir",
    description:
      "Aprofunde a conexao com os simbolos, treine memoria visual e transforme o estudo em ritual criativo.",
    image: "/capaoraculistadelfos.jpg",
    cta: "Quero meu kit para colorir hoje",
  },
  {
    name: "Curso Modulo 1 - O Chamado do Louco",
    description:
      "Comece pelo essencial com uma trilha guiada, didatica e progressiva para construir base solida.",
    image: "/logooraculista.png",
    cta: "Quero iniciar minha jornada agora",
  },
  {
    name: "Curso Modulo 2 - Os Arcanos Menores",
    description:
      "Leitura do cotidiano, trabalho e relacoes com clareza. Expanda sua interpretacao com metodo.",
    image: "/logomagenta.png",
    cta: "Quero avancar para o Modulo 2",
  },
  {
    name: "Produtos Esotericos Selecionados",
    description:
      "Curadoria de itens simbolicos com criterio e afinidade. Escolhas conscientes e alinhadas ao estudo.",
    image: "/oraculista-logo.png",
    cta: "Quero ver os itens recomendados",
  },
  {
    name: "Produtos Personalizados",
    description:
      "Camisetas, canecas e posters para levar os simbolos ao dia a dia com identidade e significado.",
    image: "/ORACULISTADEDELFOS.png",
    cta: "Quero escolher meu favorito agora",
  },
];

export default function LojaPage() {
  return (
    <div className="bg-sand text-ink">
      <header className="border-b border-ink/10 bg-sand/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-wine/70">
              Loja
            </p>
            <h1 className="font-display text-3xl text-ink md:text-4xl">
              Produtos e recomendacoes
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
