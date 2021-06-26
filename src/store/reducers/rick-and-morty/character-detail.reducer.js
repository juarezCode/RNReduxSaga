import { createReducer } from '@reduxjs/toolkit';
import {
  getCharacterDetail,
  getCharacterDetailError,
  getCharacterDetailSuccess,
} from '../../actions/rick-and-morty/character-detail.actions';

export const characterDetailKey = 'detail';

const initialState = {
  loading: false,
  loaded: false,
  character: null,
  error: null,
};

export const characterDetailReducer = createReducer(initialState, builder => {
  return builder
    .addCase(getCharacterDetail, state => {
      state.loading = true;
      state.character = null;
    })
    .addCase(getCharacterDetailSuccess, (state, { payload }) => {
      state.loading = false;
      state.loaded = true;
      state.character = payload;
    })
    .addCase(getCharacterDetailError, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
});
