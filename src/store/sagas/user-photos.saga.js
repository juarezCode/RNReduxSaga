import { delay, call, takeLatest, put } from 'redux-saga/effects';
import { getPhotosByAlbumAPI } from '../../api/user.api';
import {
  getPhotosByAlbum,
  getPhotosByAlbumError,
  getPhotosByAlbumSuccess,
} from '../actions/user-photos.actions';

function* getPhotosSaga({ payload }) {
  try {
    yield delay(1000);
    const result = yield call(getPhotosByAlbumAPI, payload);
    yield put(getPhotosByAlbumSuccess(result));
  } catch (error) {
    yield put(getPhotosByAlbumError('Ups, Ha ocurrido un error'));
  }
}

export function* watchGetPhotos() {
  yield takeLatest(getPhotosByAlbum, getPhotosSaga);
}
