import { all, fork } from 'redux-saga/effects';
import postsSagas from './posts';
import rickAndMortySaga from './rick-and-morty';
import { watchGetUserAlbums } from './user-albums.sagas';
import { watchGetUserDetail } from './user-detail.sagas';
import { watchGetPhotos } from './user-photos.saga';
import { watchGetUsers } from './users.sagas';

export default function* rootSaga() {
  yield all([
    fork(watchGetUsers),
    fork(watchGetUserDetail),
    fork(watchGetUserAlbums),
    fork(watchGetPhotos),
    fork(postsSagas),
    fork(rickAndMortySaga),
  ]);
}

// all([
//  watchGetUsers()
// ])
