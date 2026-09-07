import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';
import { ProjectDetailComponent } from '../project-detail/project-detail.component';
import { ProjectsComponent } from './projects.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: ':slug', component: ProjectDetailComponent },
];

@NgModule({
  declarations: [ProjectsComponent, ProjectDetailComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class ProjectsModule {}
