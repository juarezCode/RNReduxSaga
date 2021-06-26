import { takeLatest, call, put, delay } from 'redux-saga/effects';
import { getCharactersAPI } from '../../../api/rick-and-morty.api';
import {
  getCharacters,
  getCharactersError,
  getCharactersSuccess,
} from '../../actions/rick-and-morty/characters.actions';

function* getCharactersSaga() {
  yield delay(1000);
  try {
    const result = yield call(getCharactersAPI);
    yield put(getCharactersSuccess(result));
  } catch (error) {
    yield put(getCharactersError(error.message));
  }
}

export function* watchCharacters() {
  yield takeLatest(getCharacters, getCharactersSaga);
}
