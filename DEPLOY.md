# Guia de Deploy - StarBucks-IA

Este projeto é um site estático, então o deploy é simples.

## Opção 1 — Netlify

1. Acesse https://app.netlify.com/
2. Importe a pasta do projeto.
3. Use a pasta raiz como diretório de publicação.
4. Não é necessário build command.

### Configuração recomendada

- Publish directory: `.`
- Build command: vazio

## Opção 2 — Vercel (passo a passo exato)

1. Acesse https://vercel.com e faça login.
2. Clique em `Add New Project`.
3. Selecione o repositório GitHub que contém este projeto.
4. Na tela de importação, confirme que a pasta raiz do projeto é a raiz do repositório.
5. Em `Framework Preset`, selecione `Other`.
6. Deixe `Build Command` vazio.
7. Deixe `Output Directory` vazio.
8. Clique em `Deploy`.
9. Aguarde o término da publicação.
10. Após o deploy, Vercel irá fornecer uma URL pública do projeto.

### Importante

- Este projeto é estático, então não há `npm install`, `npm run build` ou backend.
- O Vercel deve servir diretamente a raiz com os arquivos HTML, CSS e JS.

## Opção 3 — GitHub Pages

1. Faça push do projeto para um repositório GitHub.
2. Ative Pages no repositório.
3. Use a branch principal como fonte.

## Checklist antes do deploy

- Testar o site em desktop, tablet e mobile
- Validar que todas as imagens carregam
- Confirmar que o CSS e o JavaScript não apresentam erros
- Revisar CSP e headers de segurança
- Verificar se a página não expõe dados sensíveis
