import { combineReducers } from 'redux';
// import all reducers here
import algosReducer from './algosReducer';

const reducers = combineReducers({
  // if we had other reducers, they would go here
  algos: algosReducer,
});

export default reducers;
