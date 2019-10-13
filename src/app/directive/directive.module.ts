import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EqualValidatorDirective } from './validators/equal-validator.directive';



@NgModule({
  declarations: [EqualValidatorDirective],
  imports: [
    CommonModule
  ]
})
export class DirectiveModule { }
