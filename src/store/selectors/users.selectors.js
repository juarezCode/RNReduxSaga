import { createSelector } from '@reduxjs/toolkit';
import { userKey } from '../reducers/users.reducer';

const userState = state => state[userKey];

export const selectUsers = createSelector(userState, state => state.results);

export const selectUsersLoading = createSelector(
  userState,
  state => state.loading,
);

export const selectUsersLoaded = createSelector(
  userState,
  state => state.loaded,
);

export const selectUsersError = createSelector(userState, state => state.error);
