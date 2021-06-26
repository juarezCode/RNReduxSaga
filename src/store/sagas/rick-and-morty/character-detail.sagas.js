import { call, delay, put, takeLatest, select } from 'redux-saga/effects';
import { getCharacterDetailAPI } from '../../../api/rick-and-morty.api';
import {
  getCharacterDetail,
  getCharacterDetailSuccess,
  getCharacterDetailError,
} from '../../actions/rick-and-morty/character-detail.actions';
import { selectUser } from '../../selectors/user-detail.selectors';

function* getCharacterDetailSaga({ payload }) {
  yield delay(1000);
  const user = yield select(selectUser); // select part of store
  if (user) console.log('user from store in saga', user.name);
  try {
    const result = yield call(getCharacterDetailAPI, payload);
    yield put(getCharacterDetailSuccess(result));
  } catch (error) {
    yield put(getCharacterDetailError(error.message));
  }
}

export function* watchCharacterDetail() {
  yield takeLatest(getCharacterDetail, getCharacterDetailSaga);
}
