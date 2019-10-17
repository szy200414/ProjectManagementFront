import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mission-header',
  templateUrl: './mission-header.component.html',
  styleUrls: ['./mission-header.component.scss']
})
export class MissionHeaderComponent implements OnInit {

  @Input() header: string;
  @Output() newMission = new EventEmitter();
  @Output() editList = new EventEmitter();
  @Output() moveAll = new EventEmitter();
  @Output() deleteList = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onNewMissionClick() {
    this.newMission.emit();
  }

  onEditMissionClick() {
    this.editList.emit();
  }

  onMoveAllClick() {
    this.moveAll.emit();
  }

  onDeleteClick() {
    this.deleteList.emit();
  }
}
