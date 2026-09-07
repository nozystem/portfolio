import { Component, OnInit } from '@angular/core';

import { PROFILE, SOCIAL_LINKS } from '../../data/profile.data';
import { SeoService } from '../../services/seo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  readonly profile = PROFILE;
  /** El email tiene su propia tarjeta arriba: aquí solo van los perfiles. */
  readonly socials = SOCIAL_LINKS.filter(
    (link) => !link.pending && link.icon !== 'mail'
  );

  copied = false;

  constructor(private readonly seo: SeoService) {}

  ngOnInit(): void {
    this.seo.update(
      'Contacto',
      `Escríbeme a ${PROFILE.email} o usa el formulario de contacto.`
    );
  }

  async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.profile.email);
      this.copied = true;
      setTimeout(() => (this.copied = false), 2000);
    } catch {
      // El portapapeles puede estar bloqueado: el email sigue visible en pantalla.
    }
  }
}
