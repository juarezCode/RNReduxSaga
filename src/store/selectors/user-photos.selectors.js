import { createSelector } from '@reduxjs/toolkit';
import { userPhotosKey } from '../reducers/user-photos.reducer';

export const selectPhotosState = state => state[userPhotosKey];

export const selectPhotos = createSelector(
  userPhotosState,
  state => state.photos,
);

export const selectPhotosLoading = createSelector(
  userPhotosState,
  state => state.loading,
);

export const selectPhotosError = createSelector(
  userPhotosState,
  state => state.error,
);
