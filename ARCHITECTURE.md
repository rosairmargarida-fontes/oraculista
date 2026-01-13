# Arquitetura - Oraculista (MVP)

## Objetivo
Construir um site com blog forte (SEO e conversao) para um negocio de tarot,
com admin proprio, checkout externo (seguranca), agendamento via WhatsApp e
integracao com cursos Hotmart. MVP em 3 semanas.

## Premissas
- Hospedagem no VPS (Hostinger) com Docker/Portainer/proxy reverso.
- Checkout externo para pagamentos (Hotmart/Printful/checkout do parceiro).
- Conteudo gerenciado em CMS auto-hospedado.
- Publico: mulheres 25-45 anos, renda ~2 SM, linguagem acessivel.
- Tom: sem misticismo exagerado, foco em autoconhecimento pratico.
- Dominio: oraculistadedelfos.com.br

## Stack recomendada
- Frontend: Next.js + Tailwind CSS
- CMS: Strapi (auto-hospedado)
- Banco: Postgres
- Infra: Docker Compose (ou Swarm), reverse proxy (ja existente)

## Integracoes
- Cursos: Hotmart (links/embeds para paginas de compra).
- Agendamento: WhatsApp (link direto e CTA fixo).
- Merch: Printful (vitrine no site + checkout externo).

## Sitemap do MVP
- / (Home)
- /blog
- /blog/[slug]
- /cursos
- /produtos
- /sobre
- /contato (WhatsApp)

## Conteudos do CMS (Strapi)
- Post
  - titulo, slug, resumo, corpo, categoria, tags, capa, autor, data, SEO
- Categoria
  - nome, slug, descricao
- Pagina
  - titulo, slug, blocos (hero, texto, CTA), SEO
- Banner
  - titulo, subtitulo, imagem, CTA, ordem
- Depoimento
  - nome, texto, destaque, ordem
- Configuracao global
  - whatsapp, email, instagram, aviso de topo, rodape

## Fluxo de conversao (MVP)
Blog -> CTA Módulo 1 (Hotmart) -> venda curso
Blog -> Produtos (livros/merch) -> checkout externo
Blog -> WhatsApp -> atendimento

## Direcao visual
- Estilo: mistico sobrio, elegante, simbolico e acessivel.
- Paleta: areia (#F3E9DA), vinho (#7D2A3A), terracota (#C46A4A),
  grafite (#2C2A28), dourado fosco (#C8A56A).
- Tipografia: Fraunces (titulos) + Manrope (texto).
- Layout: blocos alternados, cards de modulos, destaque para Módulo 1.

## Roadmap (3 semanas)
Semana 1
- Setup VPS (containers, banco, Strapi)
- Modelos de conteudo e seed inicial
- Blog funcional (listagem + post)

Semana 2
- Frontend completo (Home, Blog, Cursos, Produtos, Sobre, Contato)
- SEO basico (meta, open graph, sitemap)

Semana 3
- Integracoes (Hotmart, WhatsApp, vitrine Printful)
- Ajustes finais, performance, testes manuais

## Riscos e mitigacoes
- SEO fraco: priorizar blog, metatags e boas praticas.
- Conteudo insuficiente: publicar 8-10 posts iniciais.
- Dependencia de checkout externo: garantir CTAs claros e rastreio basico.
