import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upvotes'
})
export class UpvotesPipe implements PipeTransform {


  transform(value: any): number {
    return value += 1
  }

}
