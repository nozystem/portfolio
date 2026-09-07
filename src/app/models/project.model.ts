export interface ProjectLink {
  label: string;
  url: string;
  /** Marca los enlaces que todavía no son públicos para no renderizarlos rotos. */
  pending?: boolean;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectSection {
  title: string;
  body: string[];
}

export interface Project {
  slug: string;
  name: string;
  role: string;
  company?: string;
  period: string;
  summary: string;
  /** Descripción larga usada en la ficha de detalle. */
  intro: string;
  stack: string[];
  tags: string[];
  featured: boolean;
  metrics: ProjectMetric[];
  sections: ProjectSection[];
  links: ProjectLink[];
  accent: string;
}
