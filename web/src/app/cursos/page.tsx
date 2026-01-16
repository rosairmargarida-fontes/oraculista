const courses = [
  {
    name: "Curso de Tarot",
    description:
      "Fundamentos do Tarot com metodo, leitura simbolica e pratica guiada para interpretar com clareza.",
    image: "/capaoraculistadelfos.jpg",
  },
  {
    name: "Curso de Numerologia",
    description:
      "Compreenda ciclos, arquetipos e padroes numericos para autoconhecimento e tomadas de decisao.",
    image: "/oraculista-logo.jpg",
  },
  {
    name: "Curso de Mapa Astral",
    description:
      "Leitura do mapa natal com foco em identidade, potencialidades e caminhos de evolucao.",
    image: "/logooraculista.png",
  },
];

export default function CursosPage() {
  return (
    <div className="bg-sand text-ink">
      <header className="border-b border-ink/10 bg-sand/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-wine/70">
              Cursos
            </p>
            <h1 className="font-display text-3xl text-ink md:text-4xl">
              Todos os cursos disponiveis
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
          {courses.map((course) => (
            <article
              key={course.name}
              className="flex h-full flex-col overflow-hidden rounded-3xl border border-ink/10 bg-paper shadow-soft"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={course.image}
                  alt={course.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex h-full flex-col p-6">
                <h2 className="font-display text-xl text-ink">{course.name}</h2>
                <p className="mt-2 text-sm text-ink/70">
                  {course.description}
                </p>
                <a
                  href="/modulos"
                  className="mt-auto inline-flex text-sm font-semibold text-wine hover:text-terracotta"
                >
                  Ver detalhes do curso
                </a>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
