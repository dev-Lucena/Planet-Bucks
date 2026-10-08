# Revisão de Segurança

## Revisão realizada

Foi feita uma checagem de riscos comuns em sites estáticos:

- remoção de `onclick` inline
- aplicação de `Content-Security-Policy`
- revisão de `scripts.js` para evitar uso de `innerHTML`
- ausência de `eval`, `document.write`, ou manipulação dinâmica perigosa

## Riscos observados

- O projeto não possui backend, então não há banco de dados nem autenticação.
- Há dependência de recursos externos (Google Fonts e Botpress), o que exige revisão periódica da origem e da política de CSP.
- O site não coleta dados do usuário diretamente, reduzindo risco de vazamento de dados sensíveis.

## Recomendações

1. Manter os scripts externos em domínios confiáveis.
2. Revalidar o CSP após qualquer nova integração externa.
3. Restringir acesso de arquivos e manter a estrutura do projeto simples.
4. Fazer deploy com HTTPS obrigatório.
5. Usar cabeçalhos de segurança no hosting, sempre que suportado.
