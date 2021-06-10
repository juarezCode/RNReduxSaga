// Imports: Dependencies
import { all } from 'redux-saga/effects';
import { watchGetUserDetail } from './user-detail.sagas';
import { watchGetUsers } from './user.sagas';

// Redux Saga: Root Saga
export default function* rootSaga() {
  yield all([watchGetUsers(), watchGetUserDetail()]);
}
