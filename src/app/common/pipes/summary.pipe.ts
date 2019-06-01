import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, args?: any): any {
    // console.log(value);
    if (!value) {
      return null;
    }
    const limitVal = args ? args : 100;
    // console.log(value.substr(0, limitVal));
    return value.substr(0, limitVal) + '...';
  }

}
