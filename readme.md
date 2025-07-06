# React CI Demo 🚀

Proyecto base con React + Vite + ESLint + Vitest + GitHub Actions.

## Scripts

- `npm run dev` → inicia el server local
- `npm run test` → ejecuta los tests
- `npm run lint` → analiza el código con ESLint

## CI

Cada push a `main` dispara el workflow en `.github/workflows/ci.yml`:
- Instala dependencias
- Corre los tests
- Lint del código