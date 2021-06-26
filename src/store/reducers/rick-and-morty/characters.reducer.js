import { createReducer } from '@reduxjs/toolkit';
import {
  getCharacters,
  getCharactersError,
  getCharactersSuccess,
} from '../../actions/rick-and-morty/characters.actions';

export const charactersKey = 'characters';

const initialState = {
  loading: false,
  loaded: false,
  characters: [],
  error: null,
};

export const charactersReducer = createReducer(initialState, builder => {
  return builder
    .addCase(getCharacters, state => {
      state.loading = true;
      state.characters = [];
    })
    .addCase(getCharactersSuccess, (state, { payload }) => {
      state.loading = false;
      state.loaded = true;
      state.characters = payload;
    })
    .addCase(getCharactersError, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
});
