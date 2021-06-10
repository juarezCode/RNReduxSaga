import { createAction } from '@reduxjs/toolkit';

export const getUsers = createAction('[user] get users');

export const getUsersSuccess = createAction('[user] get users success');

export const getUsersError = createAction('[user] get users error');
