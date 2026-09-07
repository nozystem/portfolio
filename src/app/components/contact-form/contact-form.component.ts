import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { PROFILE } from '../../data/profile.data';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent {
  submitted = false;

  readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    subject: [''],
    message: ['', [Validators.required, Validators.minLength(20)]],
  });

  constructor(private readonly fb: FormBuilder) {}

  /** Muestra el error solo cuando el campo ya se ha tocado o se ha intentado enviar. */
  showError(field: string): boolean {
    const control = this.form.get(field);
    return !!control && control.invalid && (control.touched || this.submitted);
  }

  /**
   * Sin backend: se abre el cliente de correo con el mensaje ya redactado.
   * Si más adelante hay un endpoint, sustituye este método por la llamada HTTP.
   */
  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { name, email, subject, message } = this.form.getRawValue();
    const mailSubject = subject.trim() || `Contacto desde el portfolio — ${name}`;
    const body = `${message}\n\n—\n${name}\n${email}`;

    window.location.href =
      `mailto:${PROFILE.email}` +
      `?subject=${encodeURIComponent(mailSubject)}` +
      `&body=${encodeURIComponent(body)}`;
  }
}
