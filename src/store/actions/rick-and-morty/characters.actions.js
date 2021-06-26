import { createAction } from '@reduxjs/toolkit';

export const getCharacters = createAction('[Characters] Get Characters');

export const getCharactersSuccess = createAction(
  '[Characters] Get Characters Success',
);

export const getCharactersError = createAction(
  '[Characters] Get Characters Error',
);
