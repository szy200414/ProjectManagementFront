import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {

  @Input() project;
  @Output() editProject = new EventEmitter();
  @Output() deleteProject = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onEditProjectClick(event) {
    this.editProject.emit();
    event.stopPropagation();
  }

  onDeleteClick(event) {
    this.deleteProject.emit();
    event.stopPropagation();
  }

}
