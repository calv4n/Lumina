# Lumina

Website for Lumina, a web studio for Swiss small businesses. Built with Next.js App Router and exported as static files.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` type-checks the app and writes the static export to `out/`.

The homepage is assembled in `app/page.tsx`. German copy lives in `content/home.ts`. Colors are CSS variables in `app/globals.css`: dark is the default, and `[data-theme="light"]` switches to the light Lumina tokens. The header control stores that choice locally.

Placeholder copy is still marked in the page. Impressum, Datenschutz, the founder portrait and bio, client logos and a few confirmations need real content before go-live.
