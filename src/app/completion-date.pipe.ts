import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'completionDate'
})
export class CompletionDatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
