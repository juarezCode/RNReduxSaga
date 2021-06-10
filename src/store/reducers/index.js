import { combineReducers } from '@reduxjs/toolkit';
import { userReducer, userKey } from './user.reducer';
import { userDetailReducer, userDetailKey } from './user-detail.reducer';
import { userPostsKey, userPostsReducer } from './user.posts.reducer';

export const rootReducer = combineReducers({
  [userKey]: userReducer,
  [userDetailKey]: userDetailReducer,
  [userPostsKey]: userPostsReducer,
});
