import { Component, OnInit } from '@angular/core';

import { PROFILE, SKILL_GROUPS, SOCIAL_LINKS } from '../../data/profile.data';
import { PROJECTS } from '../../data/projects.data';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  readonly profile = PROFILE;
  readonly skillGroups = SKILL_GROUPS;
  readonly socials = SOCIAL_LINKS.filter((link) => !link.pending);
  readonly featured = PROJECTS.filter((project) => project.featured);

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update(
      'Inicio',
      `${PROFILE.role} especializado en Angular e Ionic. Portfolio, experiencia y CV.`
    );
  }
}
