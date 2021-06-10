import { createSelector } from 'reselect';
import { userDetailKey } from '../reducers/user-detail.reducer';

const userDetailState = state => state[userDetailKey];

export const selectUser = createSelector(userDetailState, state => state.user);

export const selectUserDetailLoading = createSelector(
  userDetailState,
  state => state.loading,
);

export const selectUserDetailError = createSelector(
  userDetailState,
  state => state.error,
);
