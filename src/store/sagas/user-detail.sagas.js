import { delay, call, put, takeLatest, fork } from '@redux-saga/core/effects';
import {
  getAlbumsByUserAPI,
  getPostByUserAPI,
  getUserAPI,
} from '../../api/user.api';
import {
  getAlbumsByUser,
  getAlbumsByUserError,
  getAlbumsByUserSuccess,
} from '../actions/user-albums.actions';
import {
  getUserDetail,
  getUserDetailError,
  getUserDetailSuccess,
} from '../actions/user-detail.actions';
import {
  getPostByUser,
  getPostByUserError,
  getPostByUserSuccess,
} from '../actions/user-posts.actions';

function* getUserSaga({ payload }) {
  try {
    const result = yield call(() => getUserAPI(payload));
    yield put(getUserDetailSuccess(result));
    yield fork(getPostByUserSaga, result.id);
  } catch (error) {
    yield put(getUserDetailError(error.message));
  }
}

function* getPostByUserSaga(payload) {
  yield put(getPostByUser());
  try {
    const posts = yield call(() => getPostByUserAPI(payload));
    yield put(getPostByUserSuccess(posts));
  } catch (error) {
    yield put(getPostByUserError(error.message));
  }
}

function* getAlbumsByUserSaga({ payload }) {
  try {
    const albums = yield call(() => getAlbumsByUserAPI(payload));
    yield put(getAlbumsByUserSuccess(albums));
  } catch (error) {
    yield put(getAlbumsByUserError(error.message));
  }
}

export function* watchGetUserDetail() {
  yield takeLatest(getUserDetail, getUserSaga);
  yield takeLatest(getAlbumsByUser, getAlbumsByUserSaga);
}
