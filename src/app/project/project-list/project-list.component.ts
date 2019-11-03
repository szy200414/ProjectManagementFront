import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { MatDialog } from '@angular/material/dialog';
import { NewProjectComponent } from '../new-project/new-project.component';
import { UserService } from 'src/app/services/user.service';
import { ValidationDialogComponent } from 'src/app/share/validation-dialog/validation-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  providers: [ ProjectService, UserService ]
})
export class ProjectListComponent implements OnInit {

  projects = [];
  users = [];
  constructor(
    private projSvc: ProjectService,
    private userSvc: UserService,
    private dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
    this.projSvc.getAllProject().subscribe(result=>{
      if (result['Code']===200) {
        this.projects = result['Data'];
      }
    });
    this.userSvc.getAllUsers().subscribe(m=>{
      if (m['Code']===200) {
        this.users = m['Data'];
      }
    });
  }

  openNewProjectDialog() {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: {
      title: "Add a Project",
      users: this.users,
    }});
    
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.projSvc.createProject(result.value.name, result.value.desc,
          result.value.beginDate, result.value.endDate, result.value.coverImage='assets/img/covers/3.jpg', result.value.ownerId).subscribe(m=>{
            if (m['Code']===200) {
              this.projects = m['Data'];
            }
          });
      }      
    });
  }

  editProjectClick(project) {
    const dialogRef = this.dialog.open(NewProjectComponent, { data: {
      title: "Add a Project",
      users: this.users,
      project: project,
    }});
    dialogRef.afterClosed().subscribe(result => {
      this.projSvc.editProject(result.value.id, result.value.name, result.value.desc,
        result.value.beginDate, result.value.endDate, result.value.coverImage='assets/img/covers/3.jpg', 
        result.value.ownerId, result.value.state, result.value.scoreTot).subscribe(m=>{
          if (m['Code']===200) {
            this.projects = m['Data'];
          }
        });
    });
  }

  deleteProjectClick(project) {
    const dialogRef = this.dialog.open(ValidationDialogComponent, { data: {
      title: 'Remove',
      content: 'Do you want to remove this project ?',
    }});
    dialogRef.afterClosed().subscribe(result=>{
      if (result) {
        this.projSvc.removeProject(project.Id).subscribe(m=>{
          if (m['Code']===200) {
            this.projects = m['Data'];
          }
        });
      }
    });
  }

  accessMissionList(project) {
    //console.log(project.Id);
    this.router.navigate(['/project', project.Id]);
  }
}
