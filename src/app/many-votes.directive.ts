import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appManyVotes]'
})
export class ManyVotesDirective {

  constructor(private manyUpVotes:ElementRef) {
    this.manyUpVotes.nativeElement.style.backgroundColor='red';
   }

  // private backgrounColor(action:string){
    //this.manyUpVotes.nativeElement.style.textDecoration=action;

  //}



}
