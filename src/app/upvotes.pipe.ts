import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upvotes'
})
export class UpvotesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
