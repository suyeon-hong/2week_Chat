import { combineReducers } from 'redux';

// @NOTE: reducer를 하나로 합치는 역할
const RootReducer = combineReducers({});

export type RootReducerType = ReturnType<typeof RootReducer>;
export default RootReducer;
