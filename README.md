# StarBucks-IA

Projeto estático de landing page responsiva inspirado no visual da Starbucks, com troca de imagem/tema via JavaScript.

## Estrutura

- `index.html` — estrutura da página
- `styles.css` — estilos responsivos e visual
- `scripts.js` — lógica de troca de imagem e seleção de botões
- `img/` — assets do projeto

## Como executar localmente

1. Abra a pasta do projeto no navegador diretamente, ou
2. Rode um servidor local em uma pasta da raiz:

```bash
python -m http.server 8000
```

Acesse: http://127.0.0.1:8000

## Observações de segurança

- O site é estático e não possui backend.
- Foi removido o uso de `onclick` inline no HTML.
- Foi adicionado um `Content-Security-Policy` controlando fontes de script, estilo, imagem e conectividade.
- Preferir manter os scripts externos em domínios confiáveis e revisar atualizações periódicas.

## Deploy

O projeto pode ser publicado em qualquer host estático, como Netlify, Vercel ou GitHub Pages.
