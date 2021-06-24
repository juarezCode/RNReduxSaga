import { createReducer } from '@reduxjs/toolkit';
import {
  getPostByUser,
  getPostByUserError,
  getPostByUserSuccess,
} from '../actions/user-posts.actions';

export const userPostsKey = 'posts';

const initialState = {
  loading: false,
  loaded: false,
  posts: [],
  error: null,
};

export const userPostsReducer = createReducer(initialState, builder => {
  return builder
    .addCase(getPostByUser, state => {
      state.loading = true;
      state.posts = [];
    })
    .addCase(getPostByUserSuccess, (state, { payload }) => {
      state.loading = false;
      state.posts = payload;
    })
    .addCase(getPostByUserError, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
});
