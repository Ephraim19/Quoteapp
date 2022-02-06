import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completionDate'
})
export class CompletionDatePipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date()
    let date:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(date - value)
    var dateDifferenceSeconds = dateDifference*0.001; 
    var dateCounter = dateDifferenceSeconds/86400;
    if (dateCounter >= 1 && value > date){
      return dateCounter;
    }else{
      return 0;
    }
  }

}
