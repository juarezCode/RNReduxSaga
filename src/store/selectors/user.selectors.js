import { createSelector } from 'reselect';
import { userKey } from '../reducers/user.reducer';

const userState = state => state[userKey];

export const selectUsers = createSelector(userState, state => state.results);

export const selectUserLoading = createSelector(
  userState,
  state => state.loading,
);

export const selectUserLoaded = createSelector(
  userState,
  state => state.loaded,
);

export const selectUserError = createSelector(userState, state => state.error);
