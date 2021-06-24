import { createAction } from '@reduxjs/toolkit';

export const getAlbumsByUser = createAction('[albums] get albums');

export const getAlbumsByUserSuccess = createAction(
  '[albums] get albums success',
);

export const getAlbumsByUserError = createAction('[albums] get albums error');
