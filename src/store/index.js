import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: middleware,
  devTools: true,
});

sagaMiddleware.run(rootSaga);

export default store;
