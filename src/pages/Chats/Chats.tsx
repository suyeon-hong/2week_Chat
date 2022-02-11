import React, { useRef } from 'react';
import './Style.scss';

import { MessagesBox, ChatInputContainer } from '@components/domain';
import { RootReducerType } from '@redux/reducers/RootReducer';
import { useSelector } from 'react-redux';
import { ChatState } from '@redux/reducers/chat';
import { IMessageData } from '@models/MessageData';
import { useScrollToBottom } from '@hooks';

const Chats = () => {
  const { chatList } = useSelector<RootReducerType>(
    ({ chat }) => chat
  ) as ChatState;

  const messagesRef = useRef<null | HTMLDivElement>(null);
  useScrollToBottom(messagesRef, chatList);

  return (
    <div className="homeWrapper">
      <div className="messagesContainer" ref={messagesRef}>
        {React.Children.toArray(
          chatList
            .sort(
              (a: IMessageData, b: IMessageData): number =>
                +new Date(a.date) - +new Date(b.date)
            )
            .map((message) => (
              <MessagesBox key={message.chatId} message={message} />
            ))
        )}
      </div>
      <div className="inputBoxContainer">
        <ChatInputContainer />
      </div>
    </div>
  );
};

export default Chats;
