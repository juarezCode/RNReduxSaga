import { createAction } from '@reduxjs/toolkit';

export const getCommentsByPost = createAction('[comments] get comments');

export const getCommentsByPostSuccess = createAction(
  '[comments] get comments success',
);

export const getCommentsByPostError = createAction(
  '[comments] get comments error',
);
