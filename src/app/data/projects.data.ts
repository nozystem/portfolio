import { Project } from '../models/project.model';

/**
 * Proyectos del portfolio.
 *
 * Todavía vacío. Para añadir uno, copia esta plantilla dentro del array:
 *
 * {
 *   slug: 'mi-proyecto',            // genera la ruta /projects/mi-proyecto
 *   name: 'Mi proyecto',
 *   role: 'Desarrollador Frontend',
 *   company: 'Empresa',             // opcional
 *   period: '2026',
 *   summary: 'Una frase para la tarjeta del listado.',
 *   intro: 'Párrafo de apertura de la ficha de detalle.',
 *   stack: ['Angular', 'TypeScript'],
 *   tags: ['Web'],                  // alimentan los filtros del listado
 *   featured: true,                 // lo saca también en la home
 *   metrics: [{ label: 'Estado', value: 'En producción' }],
 *   sections: [{ title: 'El problema', body: ['...'] }],
 *   links: [{ label: 'Repositorio', url: 'https://...' }],
 *   accent: '#6366f1',              // color de la tarjeta y la ficha
 * }
 */
export const PROJECTS: Project[] = [];

export function findProject(slug: string): Project | undefined {
  return PROJECTS.find((project) => project.slug === slug);
}
