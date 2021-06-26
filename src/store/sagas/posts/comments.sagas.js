import { put, call, takeLatest, delay } from 'redux-saga/effects';
import { getCommentsByPostAPI } from '../../../api/post.api';
import {
  getCommentsByPost,
  getCommentsByPostSuccess,
  getCommentsByPostError,
} from '../../actions/posts/comments.actions';

function* getCommentsSaga({ payload }) {
  yield delay(1000);
  try {
    const result = yield call(getCommentsByPostAPI, payload);
    yield put(getCommentsByPostSuccess(result));
  } catch (error) {
    yield put(getCommentsByPostError(error.message));
  }
}

export function* watchGetComments() {
  yield takeLatest(getCommentsByPost, getCommentsSaga);
}
