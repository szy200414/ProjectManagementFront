import { Component, OnInit, Input } from '@angular/core';
import { Mission } from 'src/app/domain/mission.model';
import { isBefore, } from 'date-fns';
import { differenceInDays } from 'date-fns/esm';

@Component({
  selector: 'app-mission-item',
  templateUrl: './mission-item.component.html',
  styleUrls: ['./mission-item.component.scss']
})
export class MissionItemComponent implements OnInit {

  @Input() mission: Mission;
  reminder: number;

  constructor() { }

  ngOnInit() {
    this.reminder = 0;
    const dueDate = this.mission.DueDate;
    if (isBefore(dueDate, Date.now())) {
      this.reminder = 2;
    } else if (differenceInDays(dueDate, Date.now()) < 2) {
      this.reminder = 1;
    }
  }

  onClick() {
    //console.log(this.mission);
    console.log(this.reminder);
  }
}
