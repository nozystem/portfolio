import { Component, Input } from '@angular/core';

/** Iconos SVG en línea: evita cargar una librería de iconos entera. */
@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() name = '';
  @Input() size = 20;
}
