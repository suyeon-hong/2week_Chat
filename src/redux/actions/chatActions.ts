import { IMessageData } from '@models/MessageData';

export enum ActionType {
  ADD_CHAT = 'ADD_CHAT',
  DELETE_CHAT = 'DELETE_CHAT',
  SET_REPLY_MODE = 'SET_REPLY_MODE',
}

export const addChat = (
  content: string,
  user: { userId: string; username: string }
) => {
  return { type: ActionType.ADD_CHAT, payload: { content, user } };
};

export const removeChat = (chatId: string) => {
  return { type: ActionType.ADD_CHAT, payload: chatId };
};

export const setReply = (targetChat: IMessageData) => {
  return { type: ActionType.ADD_CHAT, payload: targetChat };
};

export type ActionAddChat = ReturnType<typeof addChat>;
export type ActionRemoveChat = ReturnType<typeof removeChat>;
export type ActionSetReply = ReturnType<typeof setReply>;

export type Action = ActionAddChat | ActionRemoveChat | ActionSetReply;
