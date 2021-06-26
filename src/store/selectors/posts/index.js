import { postsKey } from '../../reducers/posts';

export const selectPostsState = state => state[postsKey];
