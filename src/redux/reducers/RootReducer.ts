import { combineReducers } from 'redux';
import { userReducer } from '../reducers/user';
import { chatReducer } from '../reducers/chat';

// @NOTE: reducer를 하나로 합치는 역할
const RootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
});

export type RootReducerType = ReturnType<typeof RootReducer>;
export default RootReducer;
