import { createAction } from '@reduxjs/toolkit';

export const getPhotosByAlbum = createAction('[photos] get photos');

export const getPhotosByAlbumSuccess = createAction(
  '[photos] get photos success',
);

export const getPhotosByAlbumError = createAction('[photos] get photos error');
