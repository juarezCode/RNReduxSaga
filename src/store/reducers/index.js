import { combineReducers } from '@reduxjs/toolkit';
import { userKey, userReducer } from './users.reducer';
import { userDetailKey, userDetailReducer } from './user-detail.reducer';
import { userPostsKey, userPostsReducer } from './user-posts.reducer';
import { userAlbumsKey, userAlbumsReducer } from './user-albums.reducer';
import { userPhotosKey, userPhotosReducer } from './user-photos.reducer';

export const rootReducer = combineReducers({
  [userKey]: userReducer,
  [userDetailKey]: userDetailReducer,
  [userPostsKey]: userPostsReducer,
  [userAlbumsKey]: userAlbumsReducer,
  [userPhotosKey]: userPhotosReducer,
});
