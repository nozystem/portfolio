import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { PROJECTS, findProject } from '../../data/projects.data';
import { Project } from '../../models/project.model';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  project?: Project;
  next?: Project;

  private sub?: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly seo: SeoService
  ) {}

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe((params) => {
      const project = findProject(params.get('slug') ?? '');

      if (!project) {
        this.router.navigate(['/projects']);
        return;
      }

      this.project = project;
      this.next = this.nextProject(project);
      this.seo.update(project.name, project.summary);
      window.scrollTo({ top: 0 });
    });
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }

  /** Enlaces ya publicados; los pendientes no se renderizan. */
  get publicLinks() {
    return this.project?.links.filter((link) => !link.pending) ?? [];
  }

  private nextProject(current: Project): Project | undefined {
    if (PROJECTS.length < 2) {
      return undefined;
    }
    const index = PROJECTS.findIndex((p) => p.slug === current.slug);
    return PROJECTS[(index + 1) % PROJECTS.length];
  }
}
