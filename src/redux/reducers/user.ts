import { Action, ActionType } from '../actions/userActions';

export interface UserState {
  username: string;
  userId: null | string;
}

const initialState = {
  username: '',
  userId: null,
};

export const userReducer = (
  state = initialState,
  { type, payload }: Action
): UserState => {
  switch (type) {
    case ActionType.LOGIN_USER: {
      return {
        ...state,
        ...payload,
        userId: Math.floor(Math.random() * 100).toString(),
      };
    }
    default: {
      return state;
    }
  }
};
