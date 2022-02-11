import { Action, ActionType } from '../actions/chatTypes';
import { UserData } from '@types';

export interface ChatState {
  chatList: UserData[];
  reply: UserData | null;
}

const initialState: ChatState = {
  chatList: [],
  reply: null,
};

export const chatReducer = (
  state = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case ActionType.ADD_CHAT: {
      return { ...state };
    }
    case ActionType.DELETE_CHAT: {
      return state;
    }
    case ActionType.SET_REPLY_MODE: {
      return state;
    }
    default:
      return state;
  }
};
