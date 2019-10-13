import { Directive, Input, forwardRef, Attribute } from '@angular/core';
import { Validator, NG_VALIDATORS, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: forwardRef(()=>EqualValidatorDirective),
    multi: true, 
  }]
})
export class EqualValidatorDirective implements Validator {

  constructor(@Attribute('validateEqual') public validateEqual: string) { }

  validate(c: AbstractControl): {[key:string]: any}  {
    let first = c.value;
    let second = c.root.get(this.validateEqual);
    if ( second && first !== second.value) {
      return { validateEqual: false }
    }
    return null;
  }

}
