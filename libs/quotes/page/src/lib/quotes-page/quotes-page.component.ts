import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { QuotesActions } from '@seinfeld/quotes/data-access';

@Component({
  selector: 'seinfeld-quotes-page',
  templateUrl: './quotes-page.component.html',
  styleUrls: ['./quotes-page.component.scss'],
})
export class QuotesPageComponent implements OnInit {

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(QuotesActions.init());
  }
}
