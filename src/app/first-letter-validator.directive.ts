import { Directive, OnChanges, Input, SimpleChanges } from '@angular/core';
import { Validator, Validators, AbstractControl, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

export function FirstLetterValidatorFn(val): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any} => {
    let name = control.value;
    if (!control.value) {
      return;
    }
    let no = val !== control.value[0];
    return  no ? { 'firstlettervalidator': { name }} : null;
  }
}

@Directive({
  selector: '[FirstLetterValidator]',
  providers: [ {provide: NG_VALIDATORS, useExisting: FirstLetterValidatorDirective, multi: true }]
})
export class FirstLetterValidatorDirective implements Validator, OnChanges {

  @Input() FirstLetterValidator: string;
  private valFn = Validators.nullValidator;

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    const change = changes['FirstLetterValidator'];
    if (change) {
      const val = change.currentValue;
      this.valFn = FirstLetterValidatorFn(val);
    } else {
      this.valFn = Validators.nullValidator;
    }
  }

  validate(control: AbstractControl): { [key: string]: any } {
    return this.valFn(control);
  }

}
