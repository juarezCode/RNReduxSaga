import { createAction } from '@reduxjs/toolkit';

export const getCharacterDetail = createAction(
  '[Character] Get Character Detail',
);

export const getCharacterDetailSuccess = createAction(
  '[Character] Get Character Detail Success',
);

export const getCharacterDetailError = createAction(
  '[Character] Get Character Detail Error',
);
