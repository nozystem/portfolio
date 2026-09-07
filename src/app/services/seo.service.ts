import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

import { PROFILE } from '../data/profile.data';

@Injectable({ providedIn: 'root' })
export class SeoService {
  constructor(private readonly title: Title, private readonly meta: Meta) {}

  update(pageTitle: string, description: string): void {
    const fullTitle = `${pageTitle} · ${PROFILE.name}`;
    this.title.setTitle(fullTitle);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: fullTitle });
    this.meta.updateTag({ property: 'og:description', content: description });
  }
}
