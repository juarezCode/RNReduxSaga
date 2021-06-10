import { createSelector } from 'reselect';
import { userPostsKey } from '../reducers/user.posts.reducer';

const userPostsState = state => state[userPostsKey];

export const selectPosts = createSelector(
  userPostsState,
  state => state.results,
);

export const selectPostsLoading = createSelector(
  userPostsState,
  state => state.loading,
);

export const selectPostsError = createSelector(
  userPostsState,
  state => state.error,
);
