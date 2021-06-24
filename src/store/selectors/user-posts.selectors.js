import { createSelector } from '@reduxjs/toolkit';
import { userPostsKey } from '../reducers/user-posts.reducer';

export const userPostsState = state => state[userPostsKey];

export const selectPosts = createSelector(userPostsState, state => state.posts);

export const selectPostsLoading = createSelector(
  userPostsState,
  state => state.loading,
);

export const selectPostsError = createSelector(
  userPostsState,
  state => state.error,
);
