import { createReducer } from '@reduxjs/toolkit';
import {
  getPostByUser,
  getPostByUserError,
  getPostByUserSuccess,
} from '../actions/user-posts.actions';

export const userPostsKey = 'userPosts';

const initialState = {
  loading: false,
  loaded: false,
  results: [],
  error: null,
};

export const userPostsReducer = createReducer(initialState, builder => {
  return builder
    .addCase(getPostByUser, state => {
      state.loading = true;
      state.results = [];
    })
    .addCase(getPostByUserSuccess, (state, { payload }) => {
      state.loading = false;
      state.results = payload;
    })
    .addCase(getPostByUserError, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
});
