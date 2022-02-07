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
      0,
      0,
      new Date(2022, 1, 6)
    ),
    new Quotes(
      2,
      'The way to get started is to quit talking and begin doing',
      'Walt Disney',
      'ephraim',
      0,
      0,
      new Date(2022, 1, 10)
    ),
    new Quotes(
      3,
      'Spread love everywhere you go. Let no one ever come to you without leaving happier',
      'Mother Theresa',
      'Liz',
      0,
      0,
      new Date(2021, 12, 25)
    ),
    new Quotes(
      4,
      'The future belongs to those who believe in the beauty of their dreams.',
      'Eleanor Roosevelt',
      'Ebenezer',
      0,
      0,
      new Date(2022, 1, 3)
    ),
    new Quotes(
      5,
      'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
      'Benjamin Franklin',
      'Leon',
      0,
      0,
      new Date(2022, 1, 5)
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
