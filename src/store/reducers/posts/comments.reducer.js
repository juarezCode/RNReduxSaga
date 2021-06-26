import { createReducer } from '@reduxjs/toolkit';
import {
  getCommentsByPost,
  getCommentsByPostSuccess,
  getCommentsByPostError,
} from '../../actions/posts/comments.actions';

export const userCommentsKey = 'comments';

const initialState = {
  loading: false,
  loaded: false,
  comments: [],
  error: null,
};

export const userCommentsReducer = createReducer(initialState, builder => {
  return builder
    .addCase(getCommentsByPost, state => {
      state.loading = true;
      state.comments = [];
    })
    .addCase(getCommentsByPostSuccess, (state, { payload }) => {
      state.loading = false;
      state.loaded = true;
      state.comments = payload;
    })
    .addCase(getCommentsByPostError, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
});
