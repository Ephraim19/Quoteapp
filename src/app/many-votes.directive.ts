import { Directive, ElementRef } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Directive({
  selector: '[appManyVotes]'
})
export class ManyVotesDirective {

  constructor(private manyUpVotes:ElementRef) {
   }

  private backgrounColor(action:string){
    this.manyUpVotes.nativeElement.style.textDecoration=action;
  }
}
