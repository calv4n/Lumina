# Lumina

A bilingual agency website built with Next.js, React and TypeScript. The site is statically exported and does not require a backend.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000. Run `npm run build` to type-check and create the static export in `out/`.

The page is assembled in `app/page.tsx`. Each section lives in `components/`, and `app/globals.css` contains the responsive styles. German and English copy is kept together within each section. The selected language is remembered locally in the browser. The contact link in `components/Contact.tsx` currently uses the portfolio email address and can be updated there.
