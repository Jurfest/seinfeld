import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { map } from 'rxjs/operators';

import * as QuotesActions from './quotes.actions';
import { QuotesService } from '../quotes.service';

@Injectable()
export class QuotesEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(QuotesActions.init),
      fetch({
        run: (action) => {
          return this.quotesService
            .getAll()
            .pipe(map((quotes) => QuotesActions.loadQuotesSuccess({ quotes })));
        },
        onError: (action, error) => {
          console.error('Error', error);
          return QuotesActions.loadQuotesFailure({ error });
        },
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private quotesService: QuotesService
  ) {}
}
