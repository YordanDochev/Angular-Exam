import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'elapsedTimes'
})
export class ElapsedTimesPipe implements PipeTransform {

  transform(data: string): unknown {
    return moment(data).fromNow();
  }

}
