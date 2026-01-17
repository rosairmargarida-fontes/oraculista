export default function PoliticasPage() {
  return (
    <div className="bg-sand text-ink">
      <header className="border-b border-ink/10 bg-sand/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-wine/70">
              Politicas
            </p>
            <h1 className="font-display text-3xl text-ink md:text-4xl">
              Politica de Privacidade
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
            O Oraculista de Delfos respeita a sua privacidade e esta
            comprometido com a protecao dos dados pessoais coletados por meio
            deste site, em conformidade com a legislacao vigente, incluindo a
            Lei Geral de Protecao de Dados (LGPD).
          </p>
          <p>
            As informacoes fornecidas pelos usuarios, como nome e e-mail, sao
            utilizadas exclusivamente para fins de comunicacao, envio de
            conteudos, acesso a materiais educativos, informacoes sobre cursos e
            produtos relacionados ao universo esoterico e simbolico. Nao
            vendemos, alugamos ou compartilhamos dados pessoais com terceiros,
            exceto quando necessario para o funcionamento de plataformas
            parceiras, como servicos de hospedagem, pagamento ou distribuicao de
            cursos.
          </p>
          <p>
            O usuario pode, a qualquer momento, solicitar a atualizacao,
            correcao ou exclusao de seus dados, bem como retirar seu
            consentimento para comunicacoes futuras. Ao navegar neste site, voce
            concorda com os termos desta Politica de Privacidade.
          </p>
        </div>
      </main>
    </div>
  );
}
