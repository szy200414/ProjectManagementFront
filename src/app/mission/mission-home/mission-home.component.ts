import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/services/project.service';
import { MissionList } from 'src/app/domain/mission-list.model';

@Component({
  selector: 'app-mission-home',
  templateUrl: './mission-home.component.html',
  styleUrls: ['./mission-home.component.scss'],
  providers: [ ProjectService ]
})
export class MissionHomeComponent implements OnInit {

  projectId: string;
  missionList: MissionList;

  constructor(private activateRoute: ActivatedRoute, private projSvc: ProjectService) {
    activateRoute.params.subscribe(params=>{
      this.projectId = params.projectId;
    });
  }

  ngOnInit() {    
    this.projSvc.getMissionListByProjectId(this.projectId)
      .subscribe(m=>{
        if (m['Code']===200) {
          this.missionList = m['Data'];
        }
      })
  }

  onClick() {
    console.log(this.missionList);
  }
}
