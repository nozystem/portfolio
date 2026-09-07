import { Component } from '@angular/core';

import { PROFILE, SOCIAL_LINKS } from '../../data/profile.data';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  readonly profile = PROFILE;
  readonly year = new Date().getFullYear();

  /** Solo los enlaces cuya URL definitiva ya está configurada. */
  readonly socials = SOCIAL_LINKS.filter((link) => !link.pending);
}
