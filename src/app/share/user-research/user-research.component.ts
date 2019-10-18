import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/domain/user.model';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-user-research',
  templateUrl: './user-research.component.html',
  styleUrls: ['./user-research.component.scss']
})
export class UserResearchComponent implements OnInit {

  @Input() users: User[];
  /*
  users = [
    {
      Id: 1,
      FirstName: 'Zhenyu',
      LastName: 'SHEN',
    },
    {
      Id: 2,
      FirstName: 'Xiaoyuan',
      LastName: 'WANG',
    },
  ];*/

  @Input() label: string = 'User';
  userResearch: FormControl;
  users$: Observable<User[]>;

  constructor() { }

  ngOnInit() {
    this.userResearch = new FormControl();
    this.users$ = this.userResearch.valueChanges.pipe(
      startWith(''),
      map(value=>this.filter(value))
    );
  }

  private filter(str: string|User) {
    if (typeof str === 'string') {
      const reg = `^${str.toLowerCase()}.*$`;
    return this.users.filter(user=>(user.FirstName.toLowerCase().match(reg))
      ||user.LastName.toLowerCase().match(reg));
    } else if (typeof str === 'object') {

    }
  }

  displayUser(user: User) {
    return user ? `${user.FirstName}  ${user.LastName}`: "";
  }
}
