import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
  providers: [ ProjectService ]
})
export class ProjectListComponent implements OnInit {

  projects = [];
  constructor(private projSvc: ProjectService) { }

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
}
