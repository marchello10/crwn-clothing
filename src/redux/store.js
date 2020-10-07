import { createStore, applyMiddleware } from 'redux';
//logger catches the action and moves it along
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];

//applyMiddleware(...midlewares) spreads in all the methods of logger
const store = createStore(rootReducer, applyMiddleware(...middlewares))

export default store;