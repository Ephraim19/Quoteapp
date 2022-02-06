import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completionDate'
})
export class CompletionDatePipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date()
    let date:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference =  value - date
    var dateDifferenceSeconds = dateDifference*0.001; 
    var dateCounter = dateDifferenceSeconds/86400;
    if (dateCounter >= 1 && value > date){
      return dateCounter -27;
    }else{
      return 0;
    }
  }

}
