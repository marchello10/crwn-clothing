import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';

//logger catches the action and moves it along
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

//applyMiddleware(...midlewares) spreads in all the methods of logger
export const store = createStore(rootReducer, applyMiddleware(...middlewares))

export const persistor = persistStore(store);

export default {store, persistor};