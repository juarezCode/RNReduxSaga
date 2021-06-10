import { createReducer } from '@reduxjs/toolkit';
import {
  getUserDetail,
  getUserDetailSuccess,
  getUserDetailError,
} from '../actions/user-detail.actions';

export const userDetailKey = 'userDetail';

const initialState = {
  loading: false,
  loaded: false,
  user: null,
  error: null,
};

export const userDetailReducer = createReducer(initialState, builder => {
  return builder
    .addCase(getUserDetail, state => {
      state.loading = true;
      state.user = null;
    })
    .addCase(getUserDetailSuccess, (state, { payload }) => {
      state.loading = false;
      state.user = payload;
    })
    .addCase(getUserDetailError, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
});
