import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'; //DEV ONLY
import reducers from './reducers';

const middleware = composeWithDevTools(applyMiddleware()); //DEV ONLY

const store = createStore(reducers, middleware);

export default store;