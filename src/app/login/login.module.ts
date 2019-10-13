import { NgModule } from '@angular/core';
import { ShareModule } from '../share/share.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EqualValidatorDirective } from '../directive/validators/equal-validator.directive';
import { CookieService } from 'ngx-cookie-service';



@NgModule({
  declarations: [LoginComponent, RegisterComponent,EqualValidatorDirective],
  imports: [
    ShareModule,
    LoginRoutingModule, 
  ],
  providers: [ CookieService ]
})
export class LoginModule { }
