import { Component, OnInit } from '@angular/core';

import { PROJECTS } from '../../data/projects.data';
import { Project } from '../../models/project.model';
import { SeoService } from '../../services/seo.service';

const ALL = 'Todos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  readonly filters: string[] = [
    ALL,
    ...new Set(PROJECTS.flatMap((project) => project.tags)),
  ];

  activeFilter = ALL;
  visible: Project[] = PROJECTS;

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update(
      'Proyectos',
      'Casos de estudio de aplicaciones móviles y web construidas con Angular e Ionic.'
    );
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
    this.visible =
      filter === ALL
        ? PROJECTS
        : PROJECTS.filter((project) => project.tags.includes(filter));
  }

  trackBySlug(_index: number, project: Project): string {
    return project.slug;
  }
}
