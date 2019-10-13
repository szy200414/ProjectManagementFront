import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sidenav = new EventEmitter();
  @Output() changeTheme = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  openSidebar() {
    this.sidenav.emit();
  }

  onThemeChange(checked) {
    this.changeTheme.emit(checked);
  }
}
