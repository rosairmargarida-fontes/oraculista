export default function ContatoPage() {
  return (
    <div className="bg-sand text-ink">
      <header className="border-b border-ink/10 bg-sand/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-wine/70">
              Contato
            </p>
            <h1 className="font-display text-3xl text-ink md:text-4xl">
              Fale com o Oraculista de Delfos
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

      <main className="mx-auto max-w-4xl px-6 py-12">
        <div className="space-y-5 text-sm text-ink/80">
          <p>
            Para duvidas, parcerias ou informacoes sobre cursos e produtos,
            fale conosco pelos canais abaixo.
          </p>
          <div className="rounded-3xl border border-ink/10 bg-paper p-6 shadow-soft">
            <p className="text-sm text-ink/80">
              Email: contato@oraculistadedelfos.com.br
            </p>
            <p className="mt-2 text-sm text-ink/80">
              WhatsApp: (00) 00000-0000
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
