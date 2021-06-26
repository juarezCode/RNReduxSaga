import { all } from 'redux-saga/effects';
import postsSaga from './posts';
import rickAndMortySaga from './rick-and-morty';
import { watchGetUserAlbums } from './user-albums.sagas';
import { watchGetUserDetail } from './user-detail.sagas';
import { watchGetPhotos } from './user-photos.saga';
import { watchGetUsers } from './users.sagas';

export default function* rootSaga() {
  yield all([
    watchGetUsers(),
    watchGetUserDetail(),
    watchGetUserAlbums(),
    watchGetPhotos(),
    postsSaga(),
    rickAndMortySaga(),
  ]);
}
