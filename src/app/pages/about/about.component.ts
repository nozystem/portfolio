import { Component, OnInit } from '@angular/core';

import {
  ABOUT_PARAGRAPHS,
  EDUCATION,
  EXPERIENCE,
  LANGUAGES,
  PROFILE,
  SKILL_GROUPS,
} from '../../data/profile.data';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  readonly profile = PROFILE;
  readonly paragraphs = ABOUT_PARAGRAPHS;
  readonly skillGroups = SKILL_GROUPS;
  readonly experience = EXPERIENCE;
  readonly education = EDUCATION;
  readonly languages = LANGUAGES;

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update(
      'Sobre mí',
      'Perfil, experiencia profesional, formación y habilidades técnicas.'
    );
  }
}
