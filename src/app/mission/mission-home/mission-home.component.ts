import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mission-home',
  templateUrl: './mission-home.component.html',
  styleUrls: ['./mission-home.component.scss']
})
export class MissionHomeComponent implements OnInit {

  projectId: string;

  constructor(private activateRoute: ActivatedRoute) {
    activateRoute.params.subscribe(params=>{
      this.projectId = params.projectId;
    });
  }

  ngOnInit() {
    
  }

  onClick() {
    console.log(this.projectId);
  }
}
