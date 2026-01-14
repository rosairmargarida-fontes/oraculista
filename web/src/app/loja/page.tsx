const productGroups = [
  {
    title: "Cursos Modulares",
    description:
      "Os cursos do Oraculista de Delfos foram organizados em modulos independentes para tornar o aprendizado mais acessivel, flexivel e alinhado as necessidades de cada pessoa.",
    items: [
      "Modulo 1 - O Chamado do Louco",
      "Modulo 2 - A Vida em Movimento",
      "Modulo 3 - As Quatro Forcas",
    ],
  },
  {
    title: "Livros didaticos",
    description:
      "Livro didatico como apoio aos cursos, com fundamentos e consulta rapida. Disponivel em PDF e versao fisica.",
    items: ["Livro didatico", "Caderno de exercicios", "Guia rapido"],
  },
  {
    title: "Tarot para colorir",
    description:
      "Colorir aprofunda o estudo e a conexao com os simbolos. Ideal para quem aprende pela experiencia visual.",
    items: ["Arcanos Maiores", "Arcanos Menores", "Colecao completa"],
  },
  {
    title: "Produtos EsotÃ©ricos",
    description:
      "Curadoria de itens esotericos com criterio e afinidade simbolica. Compras em lojas parceiras, com apoio ao projeto.",
    items: ["Velas ritualisticas", "Baralhos especiais", "Cristais"],
  },
  {
    title: "Produtos Personalizados",
    description:
      "Camisetas, canecas e posters com motivos simbolicos para o dia a dia. Uma forma simples de expressar identidade e significado.",
    items: ["Camisetas", "Canecas", "Cadernos"],
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
        <div className="grid gap-6 md:grid-cols-2">
          {productGroups.map((group) => (
            <section
              key={group.title}
              className="rounded-3xl border border-ink/10 bg-paper p-6 shadow-soft"
            >
              <h2 className="font-display text-2xl text-ink">{group.title}</h2>
              <p className="mt-2 text-sm text-ink/70">{group.description}</p>
              <ul className="mt-4 space-y-2 text-sm text-ink/70">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="mt-5 inline-flex text-sm font-semibold text-wine hover:text-terracotta"
              >
                Ver links disponiveis
              </a>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}


