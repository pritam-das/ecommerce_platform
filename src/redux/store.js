//THIS CONFIG CAN ALSO BE FOUND IN THE REACT DOCUMENTATION
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import rootReducer from './root-reducer';

const middlewares = [logger];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;