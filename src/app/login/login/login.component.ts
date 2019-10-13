import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  cookieExpire = 1;

  constructor(private fb: FormBuilder, private userSvc: UserService, 
    private cookie: CookieService, 
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [],
      password: [],
    })
  }

  login() {
    //console.log(this.loginForm);
    this.userSvc.login(this.loginForm.value.email, this.loginForm.value.password)
      .subscribe(result=>{
        //console.log(result['Data']);
        if (result['Code']===200) {
          this.cookie.set('token',result['Data'], new Date(Date.now().valueOf()+this.cookieExpire*60*60*1000));
          this.router.navigateByUrl('project');//mayby a main page instead
        }
        else {
          console.log(result['Code']);
          this.router.navigateByUrl('login');
        }      
      })
  }

}
