import {
  EducationItem,
  ExperienceItem,
  LanguageItem,
  SkillGroup,
  SocialLink,
} from '../models/profile.model';

/**
 * Datos personales del portfolio.
 * Edita este archivo para actualizar el contenido del sitio.
 */
export const PROFILE = {
  name: 'Sergio Rubio Sigler',
  role: 'Desarrollador Front-end',
  headline: 'Front-end con Angular, TypeScript e Ionic',
  tagline:
    'Cuatro años construyendo interfaces web y apps móviles híbridas con Angular e Ionic, ' +
    'desde el requisito hasta la publicación en tiendas.',
  location: 'Viladecans, Barcelona',
  email: 'nozystem@gmail.com',
  phone: '679 745 706',
  availability: '100% remoto',
  // Ruta del CV en assets. Sustituye el PDF por la versión que quieras publicar.
  cvPath: 'assets/cv/CV_Sergio_Rubio.pdf',
  cvFileName: 'CV_Sergio_Rubio.pdf',
};

export const ABOUT_PARAGRAPHS: string[] = [
  'Soy desarrollador front-end en Lanaccess, donde trabajo en aplicaciones móviles híbridas ' +
    'construidas con Ionic y Angular. Mi día a día pasa por convertir maquetas en interfaces ' +
    'accesibles y responsivas, integrar APIs REST y mantener el código en un estado que el ' +
    'equipo pueda seguir manteniendo dentro de seis meses.',
  'He acompañado un producto móvil por todo su ciclo de vida: requisitos, diseño, desarrollo, ' +
    'pruebas y publicación en Google Play y App Store. Esa parte final —el empaquetado, las ' +
    'revisiones de tienda, las incidencias en App Store Connect, los dispositivos de gama baja ' +
    'que no perdonan— es la que más me ha enseñado sobre cómo se sostiene una app de verdad.',
  'Últimamente trabajo con Angular 16-19, aprovechando standalone components y signals. ' +
    'También salgo del front cuando hace falta: he implementado permisos y declarado Protocol ' +
    'Buffers en Node.js, y estoy desarrollando un CRUD en Rust.',
  'Me formé en el CFGS de Desarrollo de Aplicaciones Multiplataforma mientras trabajaba. Me ' +
    'interesa el detalle de la interfaz, la accesibilidad y escribir código que se lea con ' +
    'facilidad seis meses después.',
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Lenguajes',
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS'],
  },
  {
    title: 'Frameworks',
    items: ['Angular 16-19', 'Signals', 'Standalone', 'Ionic', 'RxJS', 'Cordova'],
  },
  {
    title: 'Herramientas',
    items: ['Git', 'REST APIs', 'Angular CLI', 'Android Studio', 'Xcode', 'CI/CD'],
  },
  {
    title: 'Prácticas',
    items: [
      'Diseño responsive',
      'Accesibilidad',
      'Revisión de código',
      'Publicación en tiendas',
      'Testing unitario',
      'Scrum',
    ],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'Protocol Buffers', 'Rust'],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Lanaccess',
    role: 'Desarrollador Frontend',
    period: 'Julio 2022 — Actualidad · L\'Hospitalet de Llobregat',
    current: true,
    bullets: [
      'Desarrollo de vistas y lógica de cliente en Angular 16-19 e Ionic para aplicaciones móviles en producción.',
      'Integración con APIs REST y gestión del estado local de la aplicación con RxJS.',
      'Traducción de maquetas de diseño a interfaces responsivas y accesibles en Android e iOS.',
      'Optimización del rendimiento en dispositivos de gama baja.',
      'Empaquetado con Cordova y publicación en Google Play y App Store.',
      'Resolución de incidencias en App Store Connect: App Clips y problemas de build-linking.',
      'Decisiones de infraestructura de build: migración de Macs Intel y compatibilidad con nuevas versiones de Xcode.',
      'Colaboración puntual en backend: permisos y Protocol Buffers en Node.js, y un CRUD en Rust.',
      'Revisiones de código, refactorizaciones y planificación ágil (Scrum).',
    ],
  },
  {
    company: 'Mediamarkt Splau',
    role: 'Vendedor / Prácticas',
    period: 'Noviembre 2021 — Mayo 2022',
    current: false,
    bullets: [
      'Atención y asesoramiento técnico a clientes en producto tecnológico.',
      'Diagnóstico y reparación de dispositivos electrónicos.',
      'Gestión de inventario en tienda.',
    ],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    title: 'CFGS Desarrollo de Aplicaciones Multiplataforma',
    school: 'Instituto Calamot, Gavà',
    period: 'Sept 2022 — Mayo 2024',
  },
  {
    title: 'CFGM Sistemas Microinformáticos y Redes',
    school: 'Instituto Torre Roja, Viladecans',
    period: 'Sept 2020 — Junio 2022',
  },
  {
    title: 'ESO',
    school: 'Instituto Teide, Viladecans',
    period: 'Sept 2015 — Junio 2020',
  },
];

export const LANGUAGES: LanguageItem[] = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Catalán', level: 'Nativo' },
  { name: 'Inglés', level: 'Avanzado' },
];

/**
 * Enlaces sociales. Los marcados con `pending: true` no se renderizan:
 * pon la URL real y quita el flag para publicarlos.
 */
export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'GitHub',
    url: 'https://github.com/nozystem',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/sergio-rubio-9928861b8/',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    url: 'mailto:nozystem@gmail.com',
    icon: 'mail',
  },
];
