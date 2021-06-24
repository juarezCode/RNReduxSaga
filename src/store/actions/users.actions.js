import { createAction } from '@reduxjs/toolkit';

export const getUsers = createAction('[users] get users');

export const getUsersSuccess = createAction('[users] get users success');

export const getUsersError = createAction('[users] get users error');
