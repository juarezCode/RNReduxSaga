import { createAction } from '@reduxjs/toolkit';

export const getPostByUser = createAction('[user posts] get posts');

export const getPostByUserSuccess = createAction(
  '[user posts] get posts success',
);

export const getPostByUserError = createAction('[user posts] get posts error');
