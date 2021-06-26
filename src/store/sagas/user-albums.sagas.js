import { call, delay, put, takeLatest } from 'redux-saga/effects';
import { getAlbumsByUserAPI } from '../../api/user.api';
import {
  getAlbumsByUser,
  getAlbumsByUserError,
  getAlbumsByUserSuccess,
} from '../actions/user-albums.actions';

function* getAlbumsByUserSaga({ payload }) {
  yield delay(1000);
  try {
    const albums = yield call(() => getAlbumsByUserAPI(payload));
    yield put(getAlbumsByUserSuccess(albums));
  } catch (error) {
    yield put(getAlbumsByUserError(error.message));
  }
}

export function* watchGetUserAlbums() {
  yield takeLatest(getAlbumsByUser, getAlbumsByUserSaga);
}
