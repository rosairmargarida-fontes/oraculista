export default function TermosDeUsoPage() {
  return (
    <div className="bg-sand text-ink">
      <header className="border-b border-ink/10 bg-sand/90">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-wine/70">
              Termos
            </p>
            <h1 className="font-display text-3xl text-ink md:text-4xl">
              Termos de uso
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
            Ao acessar o site www.oraculistadedelfos.com.br, você concorda com
            os termos e condições descritos abaixo. Caso não concorde,
            recomendamos que não utilize nossos serviços ou conteúdos.
          </p>
          <p>
            O Oraculista de Delfos é uma plataforma educacional e cultural
            dedicada ao estudo das práticas esotéricas como linguagens
            simbólicas voltadas ao autoconhecimento. Todo o conteúdo
            disponibilizado tem caráter informativo, formativo e reflexivo, não
            substituindo aconselhamento médico, psicológico, jurídico ou
            profissional de qualquer natureza.
          </p>
          <p>
            Os cursos, textos, materiais didáticos e produtos apresentados no
            site são protegidos por direitos autorais e não podem ser
            reproduzidos, distribuídos ou comercializados sem autorização
            prévia. O uso indevido do conteúdo poderá resultar em medidas legais
            cabíveis.
          </p>
          <p>
            O site pode conter links para plataformas externas e lojas
            afiliadas. O Oraculista de Delfos não se responsabiliza por
            políticas, práticas ou conteúdos de sites de terceiros.
          </p>
          <p>
            Reservamo-nos o direito de alterar, atualizar ou remover conteúdos,
            produtos e termos a qualquer momento, visando a melhoria contínua
            da experiência do usuário.
          </p>
          <p className="font-semibold text-ink">Aviso Importante</p>
          <p>
            O Oraculista de Delfos não realiza atendimentos, consultas ou
            previsões pessoais. Todo o conteúdo é voltado exclusivamente ao
            estudo simbólico, ao autoconhecimento e ao desenvolvimento da
            consciência.
          </p>
        </div>
      </main>
    </div>
  );
}
