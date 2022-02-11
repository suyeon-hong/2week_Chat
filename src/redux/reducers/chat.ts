import { Action, ActionType } from '../actions/chatActions';
import { IMessageData } from '@models/MessageData';

export interface ChatState {
  chatList: IMessageData[];
  reply: IMessageData | null;
}

const initialState: ChatState = {
  chatList: [
    {
      chatId: '1',
      profileImage: '123',
      content: '1',
      date: '123',
      user: {
        userId: 'sdf',
        username: 'str',
      },
    },
    {
      chatId: '2',
      profileImage: '123',
      content: '123',
      date: '123',
      user: {
        userId: 'sdf',
        username: 'str',
      },
    },
    {
      chatId: '3',
      profileImage: '123',
      content: '123',
      date: '123',
      user: {
        userId: 'sdf',
        username: 'str',
      },
    },
  ],
  reply: null,
};

let chatId = 4;

export const chatReducer = (
  state = initialState,
  { type, payload }: Action
): ChatState => {
  switch (type) {
    case ActionType.ADD_CHAT: {
      const { content, user } = payload as {
        content: string;
        user: { userId: string; username: string };
      };
      const nextMessage: IMessageData = {
        content,
        user,
        date: new Date(),
        chatId: (chatId++).toString(),
        profileImage: undefined,
      };
      console.log(state.chatList);
      return { ...state, chatList: [...state.chatList, nextMessage] };
    }
    case ActionType.DELETE_CHAT: {
      const nextChatList = state.chatList.filter(
        (message) => message.chatId !== payload
      );

      return { ...state, ...nextChatList };
    }
    case ActionType.SET_REPLY_MODE: {
      return { ...state, reply: payload as IMessageData };
    }
    default:
      return state;
  }
};
