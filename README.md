# Portfolio — Sergio Rubio Sigler

Portfolio personal construido con Angular 15, sin frameworks de CSS: los estilos
son SCSS propio sobre un sistema de variables CSS con tema claro y oscuro.

## Requisitos

Angular 15 necesita Node `^14.20`, `^16.13` o `^18.10`. Este proyecto se ha
desarrollado y probado con **Node 18.20.8**.

```bash
nvm use 18.20.8
npm install
```

## Comandos

| Comando         | Qué hace                                          |
| --------------- | ------------------------------------------------- |
| `npm start`     | Servidor de desarrollo en http://localhost:4200   |
| `npm run build` | Build de producción en `dist/portfolio`           |
| `npm test`      | Tests unitarios con Karma                         |

## Estructura

```
src/app/
├── components/      Header, Footer, ProjectCard, ContactForm, Icon
├── pages/           Home, About, Projects, ProjectDetail, Contact, NotFound
├── data/            Contenido del sitio (perfil y proyectos)
├── models/          Interfaces TypeScript
├── services/        ThemeService (claro/oscuro), SeoService (title y meta)
└── shared/          SharedModule con las piezas reutilizables
```

Cada página vive en su propio módulo con carga diferida, así que la primera
visita solo descarga la home.

## Cómo actualizar el contenido

Todo el texto del sitio está en dos archivos, separado de las plantillas:

- **[`src/app/data/profile.data.ts`](src/app/data/profile.data.ts)** — datos
  personales, biografía, habilidades, experiencia, formación, idiomas y redes.
- **[`src/app/data/projects.data.ts`](src/app/data/projects.data.ts)** —
  proyectos. El campo `slug` genera la ruta `/projects/:slug`.

### Enlaces pendientes

Los enlaces sin URL definitiva llevan `pending: true` y **no se renderizan**, para
que no aparezcan rotos. Cuando tengas la URL real, ponla y quita el flag:

```ts
// Antes
{ label: 'GitHub', url: 'https://github.com/', icon: 'github', pending: true },

// Después
{ label: 'GitHub', url: 'https://github.com/tu-usuario', icon: 'github' },
```

Ahora mismo están pendientes: **GitHub**, **LinkedIn**, los enlaces a **Google
Play** y **App Store** de lanMobile, y el repositorio de este portfolio.

También conviene rellenar las métricas reales de lanMobile (descargas,
valoración) en el array `metrics` de ese proyecto.

### CV

El PDF vive en `src/assets/cv/CV_Sergio_Rubio.pdf`. Sustituye el archivo
manteniendo el nombre, o cambia `cvPath` y `cvFileName` en `profile.data.ts`.

## Despliegue

El build genera un sitio estático en `dist/portfolio`.

**Vercel / Netlify** — build command `npm run build`, output directory
`dist/portfolio`. Al ser una SPA, hay que redirigir todas las rutas a
`index.html`:

```
# netlify.toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**GitHub Pages** — el sitio se sirve bajo un subdirectorio, así que hay que
ajustar la base href:

```bash
npm run build -- --base-href /nombre-del-repo/
```
