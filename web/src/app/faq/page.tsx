const faqs = [
  {
    question: "Como acessar os cursos?",
    answer:
      "Apos a confirmacao do pagamento, voce recebe o acesso por email com todas as instrucoes.",
  },
  {
    question: "Posso comecar do zero?",
    answer:
      "Sim. Os cursos foram pensados para quem esta iniciando ou deseja reorganizar o estudo.",
  },
  {
    question: "Os cursos tem certificado?",
    answer:
      "Quando aplicavel, o certificado e disponibilizado ao final do curso.",
  },
  {
    question: "Consigo estudar no meu ritmo?",
    answer:
      "Sim. O acesso e online e voce pode avancar conforme sua disponibilidade.",
  },
  {
    question: "Preciso ter dom?",
    answer:
      "Nao. O estudo e estruturado e acessivel, com foco em metodo e pratica.",
  },
  {
    question: "Serve para iniciantes?",
    answer:
      "Sim. Ha caminhos pensados para quem esta comecando do zero.",
  },
  {
    question: "Pode usar mais de uma pessoa?",
    answer:
      "O acesso e individual. Em caso de compartilhamento, consulte os termos de uso.",
  },
  {
    question: "Posso profissionalizar depois?",
    answer:
      "Sim. A base e solida e permite evoluir para leituras com seguranca.",
  },
  {
    question: "E se eu me arrepender?",
    answer:
      "Consulte as condicoes de compra e reembolso da plataforma onde adquiriu o curso.",
  },
];

export default function FaqPage() {
  return (
    <div className="bg-sand text-ink">
      <header className="border-b border-ink/10 bg-sand/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-wine/70">
              FAQ
            </p>
            <h1 className="font-display text-3xl text-ink md:text-4xl">
              Perguntas frequentes
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
        <div className="grid gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-3xl border border-ink/10 bg-paper p-5 shadow-soft"
            >
              <p className="font-semibold text-ink">{faq.question}</p>
              <p className="mt-2 text-sm text-ink/70">{faq.answer}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
