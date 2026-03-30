# MEDIA Cart — sito web

Tipografia e cartoleria digitale, Milano Bicocca ([mediacart.it](https://mediacart.it)).

Stack: [Astro](https://astro.build/) (output statico), CSS, componenti Astro.

## Sviluppo

```bash
npm install
npm run dev
```

Apri `http://localhost:4321`.

## Build e anteprima produzione

```bash
npm run build
npm run preview
```

Il sitemap viene generato in **`dist/sitemap-index.xml`** solo dopo `build` (non in `dev`).

## Pubblicazione su GitHub

```bash
git init
git add .
git commit -m "Initial commit: sito MEDIA Cart"
git branch -M main
git remote add origin https://github.com/mirkodgzconsulting/mediacart-sito.git
git push -u origin main
```

Se il repo remoto non e vuoto, allinea prima con `git pull origin main --allow-unrelated-histories` (solo se necessario).

## Deploy consigliato

- **Netlify / Vercel / Cloudflare Pages**: comando build `npm run build`, cartella di output **`dist`**.
- In repo e incluso **`netlify.toml`** (build, cache asset statici).
- Dopo il deploy: invia **`https://mediacart.it/sitemap-index.xml`** in Google Search Console.

## PageSpeed (note)

- Font **self-hosted** (`@fontsource-variable/*`) per ridurre catene di richieste esterne.
- Immagine hero carousel: `fetchpriority="high"` sulla prima slide (LCP).
- In produzione abilita compressione **Brotli/Gzip** sul hosting (di solito gia attiva).
