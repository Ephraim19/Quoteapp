import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css'],
})
export class QuotesComponent implements OnInit {
  quotes: Quotes[] = [
    new Quotes(
      1,
      'The greatest glory in living lies not in never falling, but in rising every time we fall',
      'Nelson Mandela',
      'Ephraim',
      2,
      0,
      new Date(2022, 1, 1)
    ),
    new Quotes(
      2,
      'The way to get started is to quit talking and begin doing',
      'Walt Disney',
      'ephraim',
      3,
      1,
      new Date(2022, 2, 5)
    ),
  ];

  moreQuotes(anotherQuote: any) {
    anotherQuote.id = this.quotes.length + 1;
    this.quotes.push(anotherQuote);
  }

  i: any;
  deleteQuotes(isComplete: Boolean, index: number) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  voteMore(upVotes: boolean, index: number) {
    if(upVotes){
     let myArray = this.quotes[index]
     myArray.upvotes += 1
    }    
  }

  voteLess(downVotes: boolean, index: number) {
    if(downVotes){
     let myArray = this.quotes[index]
     myArray.downvotes += 1
    }    
  }
  constructor() {}

  ngOnInit(): void {}
}
