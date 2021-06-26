import { createSelector } from '@reduxjs/toolkit';
import { selectPostsState } from '.';
import { userPostsKey } from '../../reducers/posts/posts.reducer';

export const userPostsState = createSelector(
  selectPostsState,
  state => state[userPostsKey],
);

export const selectPosts = createSelector(userPostsState, state => state.posts);

export const selectPostsLoading = createSelector(
  userPostsState,
  state => state.loading,
);

export const selectPostsError = createSelector(
  userPostsState,
  state => state.error,
);
