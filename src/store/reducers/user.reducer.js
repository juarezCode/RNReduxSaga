import { createReducer } from '@reduxjs/toolkit';
import {
  getUsers,
  getUsersError,
  getUsersSuccess,
} from '../actions/user.actions';

export const userKey = 'user';

const initialState = {
  loading: false,
  loaded: false,
  results: [],
  error: null,
};

export const userReducer = createReducer(initialState, builder => {
  return builder
    .addCase(getUsers, state => {
      state.loading = true;
      state.results = [];
    })
    .addCase(getUsersSuccess, (state, { payload }) => {
      state.loading = false;
      state.results = payload;
    })
    .addCase(getUsersError, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
});
