import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { ManyVotesDirective } from './many-votes.directive';
import { CompletionDatePipe } from './completion-date.pipe';
import { UpvotesPipe } from './upvotes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuoteDetailsComponent,
    GoalFormComponent,
    QuoteFormComponent,
    ManyVotesDirective,
    CompletionDatePipe,
    UpvotesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
