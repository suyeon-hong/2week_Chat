import { Action, ActionType } from '../actions/chatActions';
import { IMessageData } from '@models/MessageData';

export interface ChatState {
  chatList: IMessageData[];
  replyMessage: IMessageData | null;
}

const initialState: ChatState = {
  chatList: [
    {
      chatId: '1',
      profileImage: '121',
      content: '환영합니다.',
      date: new Date(),
      user: {
        userId: '3',
        username: '김예림',
      },
      replyId: null,
    },
    {
      chatId: '2',
      profileImage: '113',
      content: '반갑니다.',
      date: new Date(),
      user: {
        userId: '4',
        username: '고병표',
      },
      replyId: null,
    },
    {
      chatId: '3',
      profileImage: '555',
      content: '안녕하세요.',
      date: new Date(),
      user: {
        userId: '5',
        username: '김지영',
      },
      replyId: null,
    },
    {
      chatId: '4',
      profileImage: '2',
      content: '.',
      date: new Date(),
      user: {
        userId: '6',
        username: '유제호',
      },
      replyId: null,
    },
    {
      chatId: '5',
      profileImage: '40',
      content: 'Hello',
      date: new Date(),
      user: {
        userId: '22',
        username: '홍수연',
      },
      replyId: null,
    },
  ],
  replyMessage: null,
};

let chatId = 6;

export const chatReducer = (
  state = initialState,
  { type, payload }: Action
): ChatState => {
  switch (type) {
    case ActionType.ADD_CHAT: {
      const { replyMessage, chatList } = state;
      const { content, user } = payload as {
        content: string;
        user: { userId: string; username: string };
      };

      const replyId = replyMessage?.chatId ? replyMessage?.chatId : null;

      const nextMessage: IMessageData = {
        content,
        user,
        date: new Date(),
        chatId: (chatId++).toString(),
        profileImage: undefined,
        replyId,
      };

      return {
        ...state,
        chatList: [...chatList, nextMessage],
        replyMessage: null,
      };
    }
    case ActionType.DELETE_CHAT: {
      const nextChatList = state.chatList.filter(
        (message) => message.chatId !== payload
      );
      return { ...state, chatList: nextChatList };
    }
    case ActionType.SET_REPLY_MODE: {
      return { ...state, replyMessage: payload as IMessageData };
    }
    default:
      return state;
  }
};
