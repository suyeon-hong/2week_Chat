import { UserData } from '@types';

export enum ActionType {
  ADD_CHAT = 'ADD_CHAT',
  DELETE_CHAT = 'DELETE_CHAT',
  SET_REPLY_MODE = 'SET_REPLY_MODE',
}

export const addChat = (chatContent: string) => {
  return { type: ActionType.ADD_CHAT, payload: chatContent };
};

export const removeChat = (chatId: Pick<UserData, 'chatId'>) => {
  return { type: ActionType.ADD_CHAT, payload: chatId };
};

export const setReply = (targetChat: UserData) => {
  return { type: ActionType.ADD_CHAT, payload: targetChat };
};

export type Action = ReturnType<
  typeof addChat | typeof removeChat | typeof setReply
>;
