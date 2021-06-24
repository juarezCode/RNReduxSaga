import { createReducer } from '@reduxjs/toolkit';
import {
  getPhotosByAlbum,
  getPhotosByAlbumError,
  getPhotosByAlbumSuccess,
} from '../actions/user-photos.actions';

export const userPhotosKey = 'photos';

const initialState = {
  loading: false,
  loaded: false,
  photos: [],
  error: null,
};

export const userPhotosReducer = createReducer(initialState, builder => {
  return builder
    .addCase(getPhotosByAlbum, state => {
      state.loading = true;
      state.photos = [];
    })
    .addCase(getPhotosByAlbumSuccess, (state, { payload }) => {
      state.loading = false;
      state.loaded = true;
      state.photos = payload;
    })
    .addCase(getPhotosByAlbumError, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
});
