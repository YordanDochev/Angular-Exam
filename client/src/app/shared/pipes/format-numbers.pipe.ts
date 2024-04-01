import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumbers',
})
export class FormatNumbersPipe implements PipeTransform {
  transform(data: number): unknown {
    let numberString: string = data.toString();

    numberString = numberString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return numberString;
  }
}
