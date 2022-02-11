import { createStore } from 'redux';
import { RootReducer } from '@redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(RootReducer, composeWithDevTools());

export type AppDispatch = typeof store.dispatch;
export default store;
