import { all, fork } from 'redux-saga/effects';
import { watchGetComments } from './comments.sagas';
import { watchGetPosts } from './posts.sagas';

export default function* postsSagas() {
  yield all([fork(watchGetPosts), fork(watchGetComments)]);
}
