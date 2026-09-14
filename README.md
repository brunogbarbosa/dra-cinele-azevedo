# Dra. Cinele Azevedo

Site editorial em Next.js, React e TypeScript para a Dra. Cinele Azevedo, biomédica especializada em Harmonização Facial Full Face no Rio de Janeiro.

## Vercel

Importe este repositório na Vercel com o preset **Next.js**. A raiz do repositório já contém toda a configuração necessária.

- Instalação: `npm ci`
- Build: `npm run build`
- Variáveis de ambiente: nenhuma obrigatória

O endereço de produção informado pela Vercel é usado automaticamente nos metadados. Para domínio próprio, preencha `seo.url` em `data/site.ts`.

## Desenvolvimento

Use Node.js 20.9 ou superior:

```bash
npm ci
npm run dev
```

## Conteúdo e identidade

Os dados confirmados estão centralizados em `data/site.ts`: nome, CRBM, WhatsApp, Instagram, cidade, imagens e registros de resultados. A direção visual usa preto, marfim e dourado-champagne, inspirada no perfil público e nos materiais fornecidos.

O site inclui hero responsivo com área segura para retrato e texto, apresentação profissional, experiência de atendimento, sete comparativos reais, galeria ampliável, controle de antes e depois, contato via WhatsApp, favicon próprio e imagem social. As animações respeitam `prefers-reduced-motion`.

As fotografias são os arquivos originais fornecidos para este projeto. Não são usadas imagens geradas da profissional ou de pacientes.
