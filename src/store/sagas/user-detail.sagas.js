import { delay, call, put, takeLatest } from '@redux-saga/core/effects';
import { getUserAPI } from '../../api/user.api';
import {
  getUserDetail,
  getUserDetailError,
  getUserDetailSuccess,
} from '../actions/user-detail.actions';

function* getUserSaga({ payload }) {
  yield delay(1000);
  try {
    const result = yield call(() => getUserAPI(payload));
    yield put(getUserDetailSuccess(result));
    // yield fork(getPostByUserSaga, result.id);
  } catch (error) {
    yield put(getUserDetailError(error.message));
  }
}

export function* watchGetUserDetail() {
  yield takeLatest(getUserDetail, getUserSaga);
}
