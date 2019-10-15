import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ProjectService } from '../../services/project.service';
import { MatDialog } from '@angular/material/dialog';
import { NewProjectComponent } from '../new-project/new-project.component';
import { UserService } from 'src/app/services/user.service';

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
    private dialog: MatDialog) { }

  ngOnInit() {
    this.projSvc.getAllProject().subscribe(result=>{
      if (result['Code']===200) {
        this.projects = result['Data'];
      }
    });
  }

  accessProject(project) {
    console.log(project);
  }

  openNewProjectDialog() {
    console.log("New Project");
    /*
    this.userSvc.getAllUsers().subscribe(m=>{
      if (m['Code']===200) {
        this.users = m['Data'];
      }
    })*/
    const dialogRef = this.dialog.open(NewProjectComponent, { data: {
      title: "Add a Project",
      users: this.users,
    }});
    /*
    dialogRef.afterClosed().subscribe(result => {
      this.projectService.createSubject(result.value.name, result.value.desc,
        result.value.teacher, result.value.category).subscribe(m=>{
          if (m['Code']===200) {
            this.listSubject = m['Data'];
            this.dataSource = new MatTableDataSource(this.listSubject);
          }
        });
    });*/
  }
}
