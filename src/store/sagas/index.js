import { all } from 'redux-saga/effects';
import { watchGetUserDetail } from './user-detail.sagas';
import { watchGetPhotos } from './user-photos.saga';
import { watchGetUsers } from './users.sagas';

export default function* rootSaga() {
  yield all([watchGetUsers(), watchGetUserDetail(), watchGetPhotos()]);
}
