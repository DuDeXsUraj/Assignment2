// Example Redux setup file (store.js)

// store.js

import { createStore, combineReducers } from 'redux';
import rootReducer from './reducer';



const store = createStore(rootReducer);

export default store;

