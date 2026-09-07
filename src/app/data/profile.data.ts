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
  headline: 'Front-end con Angular e Ionic',
  tagline:
    'Cuatro años construyendo interfaces web y apps móviles híbridas con Ionic y Angular, ' +
    'desde el requisito hasta la publicación en tiendas.',
  location: 'Viladecans, Barcelona',
  email: 'nozystem@gmail.com',
  phone: '679 745 706',
  availability: 'Remoto o presencial — a negociar',
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
    'revisiones de tienda, los dispositivos de gama baja que no perdonan— es la que más me ha ' +
    'enseñado sobre rendimiento real.',
  'Compagino el trabajo con el CFGS de Desarrollo de Aplicaciones Multiplataforma. Me interesa ' +
    'el detalle de la interfaz, la accesibilidad y escribir código que se lea con facilidad.',
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    title: 'Lenguajes',
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SCSS'],
  },
  {
    title: 'Frameworks',
    items: ['Angular', 'Ionic', 'Cordova', 'RxJS'],
  },
  {
    title: 'Herramientas',
    items: ['Git', 'REST APIs', 'Angular CLI', 'Android Studio', 'Xcode'],
  },
  {
    title: 'Prácticas',
    items: [
      'Diseño responsive',
      'Accesibilidad',
      'Revisión de código',
      'Publicación en tiendas',
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: 'Lanaccess',
    role: 'Desarrollador Frontend',
    period: 'Julio 2022 — Actualidad',
    current: true,
    bullets: [
      'Desarrollo de vistas y lógica de cliente en Ionic y Angular para aplicaciones móviles en producción.',
      'Integración con APIs REST y gestión del estado local de la aplicación.',
      'Traducción de maquetas de diseño a interfaces responsivas y accesibles.',
      'Revisiones de código, refactorizaciones y mejoras de rendimiento.',
      'Participación en el lanzamiento de lanMobile en Google Play y App Store.',
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
    url: 'https://github.com/',
    icon: 'github',
    pending: true,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/',
    icon: 'linkedin',
    pending: true,
  },
  {
    label: 'Email',
    url: 'mailto:nozystem@gmail.com',
    icon: 'mail',
  },
];
