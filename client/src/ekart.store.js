import { createStore, applyMiddleware } from 'redux';

import Logger from 'redux-logger';
import Thunk from 'redux-thunk';
import Promise from 'redux-promise-middleware';


import reducers from './reducres';

let middleware = applyMiddleware(Promise(), Thunk, Logger);

export default createStore(reducers, middleware);