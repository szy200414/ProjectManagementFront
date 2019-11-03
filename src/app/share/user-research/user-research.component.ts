import { Component, OnInit, Input, forwardRef } from '@angular/core';
import { User } from 'src/app/domain/user.model';
import { FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-user-research',
  templateUrl: './user-research.component.html',
  styleUrls: ['./user-research.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>UserResearchComponent),
      multi: true
    }
  ]
})
export class UserResearchComponent implements OnInit, ControlValueAccessor {
  
  @Input() users: User[];

  @Input() label: string = 'User';
  userResearch: FormControl;
  users$: Observable<User[]>;

  private propagateChange = (_:any) => {};

  constructor() { }

  ngOnInit() {
    this.userResearch = new FormControl();
    this.users$ = this.userResearch.valueChanges.pipe(
      startWith(''),
      map(value=>this.filter(value)),
    );
  }

  
  writeValue(obj: any): void {
    const userSelected = this.users.find(user => user.Id === obj );
    this.userResearch.patchValue(userSelected);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  private filter(str: string|User) {
    if (typeof str === 'string') {
      const reg = `^${str.toLowerCase()}.*$`;
    return this.users.filter(user=>(user.FirstName.toLowerCase().match(reg))
      ||user.LastName.toLowerCase().match(reg)
      ||(user.FirstName+' '+user.LastName).toLowerCase().match(reg)
      ||(user.LastName+' '+user.FirstName).toLowerCase().match(reg));
    }
  }

  displayUser(user: User) {
    return user ? `${user.FirstName}  ${user.LastName}`: "";
  }

  onSelect(user: any){
    if (user) {
      this.propagateChange(this.userResearch.value.Id);
    }
  }
}
