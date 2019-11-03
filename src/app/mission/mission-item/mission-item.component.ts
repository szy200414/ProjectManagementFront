import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mission-item',
  templateUrl: './mission-item.component.html',
  styleUrls: ['./mission-item.component.scss']
})
export class MissionItemComponent implements OnInit {

  @Input() mission;
  reminder: number;

  constructor() { }

  ngOnInit() {
    this.reminder = 0;
  }

  onClick() {
    console.log(this.mission);
  }
}
