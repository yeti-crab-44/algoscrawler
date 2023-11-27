import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers/index'; // Import your root reducer

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
