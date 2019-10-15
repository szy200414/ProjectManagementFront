import { NgModule } from '@angular/core';
import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import { ShareModule } from '../share/share.module';
import { ProjectItemComponent } from './project-item/project-item.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ValidationDialogComponent } from '../share/validation-dialog/validation-dialog.component';


@NgModule({
  declarations: [ProjectListComponent, ProjectItemComponent, NewProjectComponent],
  imports: [
    ShareModule,
    ProjectRoutingModule,
  ],
  entryComponents: [
    NewProjectComponent,
    ValidationDialogComponent,
  ],
})
export class ProjectModule { }
