import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToArray'
})
export class NumberToArrayPipe implements PipeTransform {

  transform(totalCount: number, pageSize: number) {
    let pagesNum = Math.ceil(totalCount / pageSize);
    let result = new Array(pagesNum);
    for (let i = 0; i < pagesNum; i++) {
      result[i] = i + 1;
    }
    return result;
    //return result.map((c, i, []) => c[i] = i + 1 );
  }

}
