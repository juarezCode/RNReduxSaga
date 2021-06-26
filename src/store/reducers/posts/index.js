import { combineReducers } from 'redux';
import { userCommentsKey, userCommentsReducer } from './comments.reducer';
import { userPostsKey, userPostsReducer } from './posts.reducer';

export const postsKey = 'posts';

export const postsReducer = combineReducers({
  [userPostsKey]: userPostsReducer,
  [userCommentsKey]: userCommentsReducer,
});
