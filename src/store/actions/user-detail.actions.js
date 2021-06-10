import { createAction } from '@reduxjs/toolkit';

export const getUserDetail = createAction('[user detail] get users');

export const getUserDetailSuccess = createAction(
  '[user detail] get user success',
);

export const getUserDetailError = createAction('[user detail] get user error');
