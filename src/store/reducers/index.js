import { combineReducers } from '@reduxjs/toolkit';
import { userKey, userReducer } from './users.reducer';
import { userDetailKey, userDetailReducer } from './user-detail.reducer';
import { userAlbumsKey, userAlbumsReducer } from './user-albums.reducer';
import { userPhotosKey, userPhotosReducer } from './user-photos.reducer';
import { postsKey, postsReducer } from './posts';
import { rickAndMortyKey, rickAndMortyReducer } from './rick-and-morty';

export const rootReducer = combineReducers({
  [userKey]: userReducer,
  [userAlbumsKey]: userAlbumsReducer,
  [userPhotosKey]: userPhotosReducer,
  [userDetailKey]: userDetailReducer,
  [postsKey]: postsReducer,
  [rickAndMortyKey]: rickAndMortyReducer,
});
