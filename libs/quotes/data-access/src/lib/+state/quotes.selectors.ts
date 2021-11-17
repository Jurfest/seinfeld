import { createFeatureSelector, createSelector } from '@ngrx/store';
import { QUOTES_FEATURE_KEY, State, quotesAdapter } from './quotes.reducer';

// Lookup the 'Quotes' feature state managed by NgRx
export const getQuotesState = createFeatureSelector<State>(QUOTES_FEATURE_KEY);

const { selectAll, selectEntities } = quotesAdapter.getSelectors();

export const getQuotesLoaded = createSelector(
  getQuotesState,
  (state: State) => state.loaded
);

export const getQuotesError = createSelector(
  getQuotesState,
  (state: State) => state.error
);

export const getAllQuotes = createSelector(getQuotesState, (state: State) =>
  selectAll(state)
);

export const getQuotesEntities = createSelector(
  getQuotesState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getQuotesState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getQuotesEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
