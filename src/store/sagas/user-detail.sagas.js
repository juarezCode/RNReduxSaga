import { delay, call, put, takeLatest } from '@redux-saga/core/effects';
import { getPostByUserAPI, getUserAPI } from '../../api/user.api';
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
    yield delay(1000);
    const result = yield call(() => getUserAPI(payload));
    // const posts = yield call(() => getPostByUserAPI(payload));
    // console.log('posts', posts);
    yield put(getUserDetailSuccess(result));
  } catch (error) {
    yield put(getUserDetailError(error));
  }
}

function* getPostByUserSaga({ payload }) {
  try {
    yield delay(1000);
    const posts = yield call(() => getPostByUserAPI(payload));
    console.log('posts', posts);
    yield put(getPostByUserSuccess(posts));
  } catch (error) {
    yield put(getPostByUserError(error));
  }
}

export function* watchGetUserDetail() {
  yield takeLatest(getUserDetail, getUserSaga);
  yield takeLatest(getPostByUser, getPostByUserSaga);
}
