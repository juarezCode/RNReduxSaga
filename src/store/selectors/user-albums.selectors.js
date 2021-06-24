import { createSelector } from '@reduxjs/toolkit';
import { userAlbumsKey } from '../reducers/user-albums.reducer';

export const userAlbumsState = state => state[userAlbumsKey];

export const selectAlbums = createSelector(
  userAlbumsState,
  state => state.albums,
);

export const selectAlbumsLoading = createSelector(
  userAlbumsState,
  state => state.loading,
);

export const selectAlbumsError = createSelector(
  userAlbumsState,
  state => state.error,
);
