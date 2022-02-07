import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appManyVotes]'
})
export class ManyVotesDirective {  
  constructor(private manyUpVotes:ElementRef) {
    
    this.manyUpVotes.nativeElement.style.color = "red"
   }


}
