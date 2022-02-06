import { Component, OnInit } from '@angular/core';
import { GoalFormComponent } from '../goal-form/goal-form.component';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes :Quotes[] =[
    new Quotes(1,'love is great','eph',2),
    new Quotes(2,'Life is great','ephraim', 3)

  ]

  moreQuotes(anotherQuote:any){
    anotherQuote.id = this.quotes.length + 1
    this.quotes.push(anotherQuote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
