import { call, put, takeLatest } from '@redux-saga/core/effects';
import { getPostByUserAPI } from '../../../api/post.api';

import {
  getPostByUser,
  getPostByUserError,
  getPostByUserSuccess,
} from '../../actions/posts/posts.actions';

function* getPostByUserSaga({ payload }) {
  try {
    const posts = yield call(() => getPostByUserAPI(payload));
    yield put(getPostByUserSuccess(posts));
  } catch (error) {
    yield put(getPostByUserError(error.message));
  }
}

export function* watchGetPosts() {
  yield takeLatest(getPostByUser, getPostByUserSaga);
}
