import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import { rootSaga, watcherSaga } from './weatherSaga';
import { composeWithDevTools } from 'redux-devtools-extension';
import weatherReducer from './weatherReducer';

const sagaMiddleware = createSagaMiddleware();


/* ---------------- Redux Thunk ---------------- */
// const store = createStore(weatherReducer, composeWithDevTools(applyMiddleware(thunk)));


/* ---------------- Redux Saga ---------------- */
const store = createStore(weatherReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);


export default store;