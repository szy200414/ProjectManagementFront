import { Component, OnInit, forwardRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NG_VALIDATORS } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RegisterComponent),
      multi: true,  
    },
    UserService,
  ]
})
export class RegisterComponent implements OnInit {

  formAccountInfo: FormGroup;
  formPersonInfo: FormGroup;
  selectedAvatar;

  items:any = [];

  constructor(private fb: FormBuilder, private userSvc: UserService) { 
  }

  ngOnInit() {
    this.selectedAvatar = 0;
    const nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    nums.map(d => this.items.push({ 
      avatar:`avatars:svg-${d}`,
      selected: false,
    }));

    this.formAccountInfo = this.fb.group({
      email: ['', Validators.email],
      password: [],
      confirmpwd: [],
    });

    this.formPersonInfo = this.fb.group({
      firstName: [],
      lastName: [],
      tel: [],
    })
  }

  changeAvatar(i) {
    this.items[this.selectedAvatar].selected = false;
    this.selectedAvatar = i;
    this.items[i].selected = true;
  }

  submitRegister() {
    this.userSvc.createUser(this.formPersonInfo.value.firstName,
      this.formPersonInfo.value.lastName,
      this.formAccountInfo.value.email,
      this.formAccountInfo.value.password,
      `avatars:svg-${this.selectedAvatar}`,
      this.formPersonInfo.value.tel)
        .subscribe(result=>console.log(result['Data']));
        
  }
}
