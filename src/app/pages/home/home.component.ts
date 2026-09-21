import { Component, OnInit } from '@angular/core';

import {
  ABOUT_PARAGRAPHS,
  PROFILE,
  SKILL_GROUPS,
  SOCIAL_LINKS,
} from '../../data/profile.data';
import { PROJECTS } from '../../data/projects.data';
import { SeoService } from '../../services/seo.service';

interface Stat {
  value: string;
  label: string;
}

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
  readonly intro = ABOUT_PARAGRAPHS[0];

  readonly stats: Stat[] = [
    { value: '4+', label: 'Años en front-end' },
    { value: '2', label: 'Tiendas de apps' },
    { value: '100%', label: 'Remoto' },
  ];

  /** Se repite en la marquesina: mejor una lista corta y reconocible. */
  readonly marqueeItems = [
    'Angular',
    'TypeScript',
    'Ionic',
    'RxJS',
    'SCSS',
    'Signals',
    'Accesibilidad',
    'Node.js',
    'Rust',
    'Cordova',
    'Git',
  ];

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update(
      'Inicio',
      `${PROFILE.role} especializado en Angular e Ionic. Portfolio, experiencia y CV.`
    );
  }
}
