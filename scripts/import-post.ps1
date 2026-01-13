param(
  [Parameter(Mandatory = $true)]
  [string]$Path
)

$ErrorActionPreference = "Stop"

$strapiUrl = if ($env:STRAPI_URL) { $env:STRAPI_URL } else { "http://localhost:1337" }
$strapiToken = $env:STRAPI_TOKEN

if (-not $strapiToken) {
  Write-Error "Defina STRAPI_TOKEN no ambiente antes de executar."
}

if (-not (Test-Path $Path)) {
  Write-Error "Arquivo nao encontrado: $Path"
}

$json = Get-Content -Raw -Path $Path | ConvertFrom-Json

$payload = @{
  data = @{
    title = $json.title
    slug = $json.slug
    summary = $json.summary
    body = $json.body
    authorName = $json.authorName
    seoTitle = $json.seoTitle
    seoDescription = $json.seoDescription
  }
} | ConvertTo-Json -Depth 6

$headers = @{ Authorization = "Bearer $strapiToken" }

Invoke-RestMethod `
  -Method Post `
  -Uri "$strapiUrl/api/posts" `
  -Headers $headers `
  -Body $payload `
  -ContentType "application/json" | Out-Null

Write-Output "Post importado: $($json.title)"
