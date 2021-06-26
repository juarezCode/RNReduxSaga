import { createSelector } from '@reduxjs/toolkit';
import { selectRickAndMortyState } from '.';
import { characterDetailKey } from '../../reducers/rick-and-morty/character-detail.reducer';

const characterDetailState = createSelector(
  selectRickAndMortyState,
  state => state[characterDetailKey],
);

export const selectCharacterDetail = createSelector(
  characterDetailState,
  state => state.character,
);

export const selectCharacterDetailLoading = createSelector(
  characterDetailState,
  state => state.loading,
);

export const selectCharacterDetailError = createSelector(
  characterDetailState,
  state => state.error,
);
