import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { QuotesEffects } from './+state/quotes.effects';
import * as fromQuotes from './+state/quotes.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(fromQuotes.QUOTES_FEATURE_KEY, fromQuotes.reducer),
    EffectsModule.forFeature([QuotesEffects]),
  ],
})
export class QuotesDataAccessModule {}
