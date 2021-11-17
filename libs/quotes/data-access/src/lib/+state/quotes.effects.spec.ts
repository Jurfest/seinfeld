import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';
import { Observable } from 'rxjs';

import * as QuotesActions from './quotes.actions';
import { QuotesEffects } from './quotes.effects';

describe('QuotesEffects', () => {
  let actions: Observable<Action>;
  let effects: QuotesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        QuotesEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(QuotesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: QuotesActions.init() });

      const expected = hot('-a-|', {
        a: QuotesActions.loadQuotesSuccess({ quotes: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
