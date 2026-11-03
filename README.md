# Demais Flores & Decor

Site institucional responsivo da Demais Flores & Decor, em Balneário Camboriú. Adaptado de `lezkwq/demofloricultura`, preservando React, TypeScript, TanStack Start, Vite, Tailwind, a vitrine com contato por WhatsApp, o montador de mensagem, avaliações, localização e contato fixo para celular.

## Desenvolvimento

Node.js 22.12+ e pnpm (ou npm).

```sh
pnpm install
pnpm dev
pnpm build
pnpm test
pnpm exec tsc --noEmit
```

Também é possível usar `npm install`, `npm run dev`, `npm run build` e `npm test`.

## Personalização

- Página e conteúdo: `src/routes/index.tsx`.
- Estilo e responsividade: `src/styles.css`.
- Metadados globais e favicon: `src/routes/__root.tsx`.
- Imagens binárias: `src/assets/`. PNG como fallback e WebP para carregamento otimizado.
- WhatsApp: **(47) 99162-7940**, conferido no print do Instagram fornecido.
- Telefone: **(47) 2033-0520**, informado no briefing do Google Maps.
- Endereço: Av. Marginal Leste, 2120, Centro, Balneário Camboriú, SC.
- Horários: segunda a sexta, 9h às 18h; sábado, 9h às 16h, conforme print do perfil fornecido.

## Imagens e identidade

A correção mais recente do usuário prevalece sobre o arquivo de prompt: **manter as mesmas fotografias fornecidas**, com limpeza de elementos sobrepostos, melhoria de nitidez e compressão. Não usar novas cenas conceituais. Os três primeiros experimentos de recriação foram descartados e não fazem parte deste repositório.

As 20 fotos individuais fornecidas passaram pela ferramenta de edição de imagens. Foram removidas interfaces, legendas e elementos sobrepostos. A fachada teve carros e textos removidos, com preenchimento localizado. A logo original foi preservada e reduzida para a marca e o favicon. Os prints de perfil e texto servem como fontes de informação, sem reutilização visual na página.

A edição generativa reconstrói as áreas cobertas e pode produzir pequenas diferenças locais. Os produtos, o enquadramento e o ambiente das referências orientaram a preservação. Os arquivos não representam fotografias novas de outros espaços.

Paleta: verde profundo, creme e tons naturais; acento laranja da logo. Tipografia: Fraunces e Figtree. Escolhida a composição editorial com fotografia original vertical e título amplo ao lado, para preservar o enquadramento real. A alternativa de uma cena horizontal gerada foi descartada conforme a correção do usuário. A página respeita preferência por movimento reduzido.

Avaliações são trechos das avaliações reais enviadas pelo usuário; nota e quantidade refletem o briefing, sem atualização automática. Itens e valores são consultados com a equipe, sem promessas de estoque, prazo ou serviço de entrega.

## Git

Destino exclusivo: https://github.com/lezkwq/demaisfloresedecor

O repositório base não é remoto deste checkout e não recebe commits nem pushes.

## Verificação

Build de produção, teste de roteamento e TypeScript. Conferência visual em desktop e celular, menu móvel, imagens, links e preenchimento da mensagem de WhatsApp. Nenhuma mensagem é enviada durante os testes.
