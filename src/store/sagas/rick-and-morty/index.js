import { all } from 'redux-saga/effects';
import { watchCharacterDetail } from './character-detail.sagas';
import { watchCharacters } from './characters.sagas';

export default function* rickAndMortySaga() {
  yield all([watchCharacters(), watchCharacterDetail()]);
}
