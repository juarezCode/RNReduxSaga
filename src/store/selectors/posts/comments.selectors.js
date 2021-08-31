import { createSelector } from '@reduxjs/toolkit';
import { selectPostsState } from '.';
import { userCommentsKey } from '../../reducers/posts/comments.reducer';

export const selectCommentsState = createSelector(
  selectPostsState,
  state => state[userCommentsKey],
);

export const selectComments = createSelector(
  userCommentsState,
  state => state.comments,
);

export const selectCommentsLoading = createSelector(
  userCommentsState,
  state => state.loading,
);

export const selectCommentsError = createSelector(
  userCommentsState,
  state => state.error,
);
