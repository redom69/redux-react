import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

import * as reducers from './reducers'

export default configureStore({
    reducer: reducers
}, applyMiddleware(thunk));