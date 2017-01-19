import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstLetterLowerCase'
})
export class FirstLetterLowerCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value !== null && value !== undefined) {
      let stringValue: string = value;
      let firstLetter: string = value[0];
      let result = firstLetter.toLowerCase();
      result += stringValue.substring(1, stringValue.length - 1);
      return result;
    }
  }

}
