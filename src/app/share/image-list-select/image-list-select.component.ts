import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-list-select',
  templateUrl: './image-list-select.component.html',
  styleUrls: ['./image-list-select.component.scss']
})
export class ImageListSelectComponent implements OnInit {

  @Input() cols = 6;
  @Input() rowHeight = '60px';
  @Input() items:any = [];
  @Input() itemWidth = '50px';

  @Output() selected = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit() {
  }

  onChange(i) {
    this.selected.emit(i);
  }

}
