import { takeLatest, put, call, delay } from 'redux-saga/effects';
import { getUsersAPI } from '../../api/user.api';
import {
  getUsers,
  getUsersError,
  getUsersSuccess,
} from '../actions/user.actions';

function* getUsersSaga() {
  try {
    yield delay(1000);
    const result = yield call(() => getUsersAPI());
    yield put(getUsersSuccess(result));
  } catch (error) {
    yield put(getUsersError(error));
  }
}

export function* watchGetUsers() {
  yield takeLatest(getUsers, getUsersSaga);
}
