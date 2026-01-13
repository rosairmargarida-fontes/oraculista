$ErrorActionPreference = "Stop"

$strapiUrl = if ($env:STRAPI_URL) { $env:STRAPI_URL } else { "http://localhost:1337" }
$strapiToken = $env:STRAPI_TOKEN

if (-not $strapiToken) {
  Write-Error "Defina STRAPI_TOKEN no ambiente antes de executar."
}

$headers = @{ Authorization = "Bearer $strapiToken" }
$posts = @(
  @{
    title = "O que o tarot revela quando a gente se escuta"
    slug = "o-que-o-tarot-revela"
    summary = "Um convite leve para ouvir os sinais internos e transformar a duvida em direcao."
    body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non urna non ipsum luctus pretium. Donec vitae urna vitae lacus bibendum maximus. Proin sed mi sit amet leo volutpat posuere. Aliquam erat volutpat. Vestibulum at arcu vel leo posuere commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
  }
  @{
    title = "Perguntas que abrem o jogo: clareza sem adivinhacao"
    slug = "perguntas-que-abrem-o-jogo"
    summary = "Como formular perguntas mais conscientes e obter leituras mais uteis."
    body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod metus at eros blandit, vitae dignissim velit pellentesque. Sed fermentum feugiat sem, vitae venenatis justo. Nulla facilisi. Integer egestas purus nec justo convallis, non sodales mauris feugiat. Suspendisse potenti."
  }
  @{
    title = "Tarot no cotidiano: pequenas decisoes, grandes mudancas"
    slug = "tarot-no-cotidiano"
    summary = "Aplicar o simbolismo nas escolhas de todo dia torna a leitura mais pratica."
    body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet posuere elit. Vestibulum sed justo vitae lorem rhoncus pulvinar. Curabitur ut interdum neque. Maecenas at neque nec risus tempor consequat. Donec tempor, lorem at tincidunt aliquet, nibh arcu porttitor mauris, sit amet laoreet tortor turpis eget metus."
  }
)

foreach ($post in $posts) {
  $payload = @{ data = $post } | ConvertTo-Json -Depth 5
  Invoke-RestMethod `
    -Method Post `
    -Uri "$strapiUrl/api/posts" `
    -Headers $headers `
    -Body $payload `
    -ContentType "application/json" | Out-Null
}

Write-Output "Posts criados."
