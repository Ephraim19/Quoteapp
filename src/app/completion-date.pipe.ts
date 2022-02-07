import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completionDate',
})
export class CompletionDatePipe implements PipeTransform {
  transform(value: any): number {
    let today: Date = new Date();
    let date: any = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );

    var difference = date.getTime() - value.getTime();
    var days = difference / (1000 * 3600 * 24);
    //var dateDifferenceSeconds = dateDifference * 0.001;
    //var dateCounter = dateDifferenceSeconds / 86400;
    if (days > 0) {
      return days;
    } else {
      return 0;
    }
  }
}
