import { createStore } from 'redux';
import { RootReducer } from '@redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(RootReducer, composeWithDevTools());

export default store;
