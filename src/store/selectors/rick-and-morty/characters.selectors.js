import { createSelector } from '@reduxjs/toolkit';
import { selectRickAndMortyState } from '.';
import { charactersKey } from '../../reducers/rick-and-morty/characters.reducer';

const charactersState = createSelector(
  selectRickAndMortyState,
  state => state[charactersKey],
);

export const selectCharacters = createSelector(
  charactersState,
  state => state.characters,
);

export const selectCharactersLoading = createSelector(
  charactersState,
  state => state.loading,
);

export const selectCharactersError = createSelector(
  charactersState,
  state => state.error,
);
