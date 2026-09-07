import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IconComponent } from '../components/icon/icon.component';
import { ProjectCardComponent } from '../components/project-card/project-card.component';

/** Piezas que necesita más de una página cargada de forma diferida. */
@NgModule({
  declarations: [IconComponent, ProjectCardComponent],
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    RouterModule,
    IconComponent,
    ProjectCardComponent,
  ],
})
export class SharedModule {}
