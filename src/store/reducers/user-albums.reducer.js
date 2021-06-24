import { createReducer } from '@reduxjs/toolkit';
import {
  getAlbumsByUser,
  getAlbumsByUserSuccess,
  getAlbumsByUserError,
} from '../actions/user-albums.actions';

export const userAlbumsKey = 'albums';

const initialState = {
  loading: false,
  loaded: false,
  albums: [],
  error: null,
};

export const userAlbumsReducer = createReducer(initialState, builder => {
  return builder
    .addCase(getAlbumsByUser, state => {
      state.loading = true;
      state.albums = [];
    })
    .addCase(getAlbumsByUserSuccess, (state, { payload }) => {
      state.loading = false;
      state.albums = payload;
    })
    .addCase(getAlbumsByUserError, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
});
