import { Project } from '../models/project.model';

/**
 * Proyectos del portfolio.
 * Añade uno nuevo copiando la estructura: el slug alimenta la ruta /projects/:slug.
 */
export const PROJECTS: Project[] = [
  {
    slug: 'lanmobile',
    name: 'lanMobile',
    role: 'Desarrollador Frontend',
    company: 'Lanaccess',
    period: '2022 — Actualidad',
    summary:
      'Aplicación móvil híbrida publicada en Google Play y App Store, construida con Ionic y Angular sobre Cordova.',
    intro:
      'lanMobile es la aplicación móvil de Lanaccess. Trabajo en la capa de cliente: las vistas, ' +
      'la navegación, el consumo de la API y el comportamiento de la interfaz en dispositivos reales. ' +
      'Es el proyecto en el que he visto un producto completo, desde la maqueta inicial hasta las ' +
      'revisiones de las tiendas y las actualizaciones posteriores.',
    stack: ['Ionic', 'Angular', 'TypeScript', 'Cordova', 'SCSS', 'REST'],
    tags: ['Móvil', 'Producción'],
    featured: true,
    metrics: [
      { label: 'Plataformas', value: 'Android e iOS' },
      { label: 'Estado', value: 'En producción' },
      { label: 'Rol', value: 'Front-end' },
    ],
    sections: [
      {
        title: 'El problema',
        body: [
          'La aplicación tenía que funcionar con una sola base de código en Android e iOS, incluyendo ' +
            'dispositivos de gama baja con poca memoria disponible, y mantener una experiencia ' +
            'consistente entre ambas plataformas.',
          'A la vez, el equipo necesitaba poder iterar rápido: publicar cambios de interfaz sin ' +
            'reescribir la lógica dos veces.',
        ],
      },
      {
        title: 'Mi trabajo',
        body: [
          'Desarrollo de las vistas y la lógica de cliente en Ionic y Angular, siguiendo las maquetas ' +
            'del equipo de diseño y adaptándolas a los patrones nativos de cada plataforma.',
          'Integración con las APIs REST del backend, gestión de los estados de carga y error, y ' +
            'manejo del estado local de la aplicación.',
          'Empaquetado con Cordova y acompañamiento del proceso de publicación en Google Play y App Store.',
          'Revisiones de código y refactorizaciones sobre componentes que habían acumulado ' +
            'responsabilidades de más.',
        ],
      },
      {
        title: 'Retos técnicos',
        body: [
          'Rendimiento en dispositivos de gama baja: reducir el trabajo en el hilo principal y evitar ' +
            'renderizados innecesarios en las listas largas.',
          'Diferencias de comportamiento entre WebViews de Android e iOS, especialmente en scroll, ' +
            'teclado y gestión de gestos.',
          'Coordinación entre el ciclo de release de la aplicación y el de la API.',
        ],
      },
      {
        title: 'Resultado',
        body: [
          'La aplicación está publicada y en uso en ambas tiendas, con un ciclo de actualizaciones ' +
            'sostenido y una reducción de errores críticos tras el lanzamiento.',
        ],
      },
    ],
    links: [
      { label: 'Google Play', url: '#', pending: true },
      { label: 'App Store', url: '#', pending: true },
    ],
    accent: '#6366f1',
  },
  {
    slug: 'portfolio-angular',
    name: 'Portfolio personal',
    role: 'Diseño y desarrollo',
    period: '2026',
    summary:
      'Este mismo sitio: una SPA en Angular con enrutado, lazy loading y estilos propios en SCSS, sin frameworks de CSS.',
    intro:
      'Un portfolio construido desde cero para tener un sitio donde enseñar en qué trabajo. ' +
      'Sirve también como ejercicio de arquitectura: rutas con carga diferida, datos separados de ' +
      'la vista y un sistema de estilos propio basado en variables CSS.',
    stack: ['Angular', 'TypeScript', 'SCSS', 'RxJS'],
    tags: ['Web', 'Personal'],
    featured: true,
    metrics: [
      { label: 'Framework', value: 'Angular 15' },
      { label: 'Estilos', value: 'SCSS propio' },
      { label: 'Dependencias UI', value: 'Ninguna' },
    ],
    sections: [
      {
        title: 'Decisiones',
        body: [
          'Sin Tailwind ni Bootstrap: el sitio es pequeño y un sistema de variables CSS con unos ' +
            'pocos componentes de estilo cubre todo lo necesario sin añadir peso ni un paso extra de build.',
          'El contenido vive en archivos de datos tipados, separado de las plantillas, para poder ' +
            'actualizar la información sin tocar la vista.',
          'Cada página se carga de forma diferida, de modo que la primera visita solo descarga la home.',
        ],
      },
      {
        title: 'Detalles de interfaz',
        body: [
          'Tema claro y oscuro que respeta la preferencia del sistema y recuerda la elección manual.',
          'Navegación accesible por teclado, con foco visible y menú móvil que se puede cerrar con Escape.',
          'Animaciones sujetas a `prefers-reduced-motion`.',
        ],
      },
    ],
    links: [{ label: 'Código en GitHub', url: '#', pending: true }],
    accent: '#0ea5e9',
  },
];

export function findProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
