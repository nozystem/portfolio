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

Ahora mismo están pendientes: **GitHub** y **LinkedIn**.

### Proyectos

El array `PROJECTS` está vacío a propósito. Mientras lo esté, la home oculta la
sección de destacados y `/projects` muestra un estado vacío que lleva a
contacto. La plantilla comentada al principio del archivo tiene la estructura
lista para copiar.

### CV

El PDF vive en `src/assets/cv/CV_Sergio_Rubio.pdf`. Sustituye el archivo
manteniendo el nombre, o cambia `cvPath` y `cvFileName` en `profile.data.ts`.

## Despliegue en Vercel

El proyecto ya viene configurado: [`vercel.json`](vercel.json) define el build, el
rewrite de SPA y las cabeceras de caché, y `package.json` fija Node 18 en
`engines` (Angular 15 no compila en Node 20+, así que este campo es obligatorio).

### Primer despliegue

1. Sube el repositorio a GitHub.
2. En [vercel.com/new](https://vercel.com/new), importa ese repositorio.
3. Vercel lee `vercel.json`, así que **no cambies nada** en la pantalla de
   configuración. Debe quedar así:
   - Framework Preset: `Other`
   - Build Command: `npm run build`
   - Output Directory: `dist/portfolio`
4. Pulsa **Deploy**.

A partir de ahí, cada `git push` a la rama principal despliega automáticamente, y
cada pull request genera su propia URL de vista previa.

### Por qué el rewrite es necesario

Es una SPA: solo existe `index.html`. Sin la regla de `rewrites`, entrar
directamente en `/about` daría 404, porque no hay ningún archivo en esa ruta.
El rewrite hace que cualquier URL sirva `index.html` y sea Angular quien
resuelva la ruta en el cliente.

### Dominio propio

En el panel del proyecto, **Settings → Domains**. Vercel da un subdominio
`.vercel.app` gratis; si añades uno propio, gestiona el certificado HTTPS solo.

## Otras plataformas

**Netlify** — build `npm run build`, publish `dist/portfolio`, y el mismo
rewrite en un `netlify.toml`:

```toml
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**GitHub Pages** — se sirve bajo un subdirectorio, así que hay que ajustar la
base href:

```bash
npm run build -- --base-href /nombre-del-repo/
```
