# Portfolio — Sergio Rubio Sigler

Portfolio personal hecho con Angular 15 y SCSS.

**[portfolio-4abg.vercel.app](https://portfolio-4abg.vercel.app)**

## Desarrollo

Necesita Node 18 (`nvm use 18.20.8`).

```bash
npm install
npm start        # http://localhost:4200
npm run build    # genera dist/portfolio
```

## Editar el contenido

Todo el texto del sitio está en dos archivos:

- `src/app/data/profile.data.ts` — datos personales, experiencia, habilidades
- `src/app/data/projects.data.ts` — proyectos (ahora vacío; hay una plantilla comentada dentro)

El CV está en `src/assets/cv/`.

## Despliegue

Cada push a `main` despliega solo en Vercel. La configuración está en `vercel.json`.
