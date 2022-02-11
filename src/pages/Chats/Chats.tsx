import React from 'react';
import './Style.scss';

import { MessagesBox, ChatInputContainer } from '@components/domain';
import { RootReducerType } from '@redux/reducers/RootReducer';
import { useSelector } from 'react-redux';
import { ChatState } from '@redux/reducers/chat';

const Chats = () => {
  const { chatList } = useSelector<RootReducerType>(
    ({ chat }) => chat
  ) as ChatState;

  function handleDeleteModal() {
    console.log('handleDeleteModal');
  }
  function handleReply() {
    console.log('handleReply');
  }

  return (
    <div className="homeWrapper">
      <div className="messagesContainer">
        {React.Children.toArray(
          chatList.map((message) => (
            <MessagesBox
              key={message.chatId}
              message={message}
              handleDeleteModal={handleDeleteModal}
              handleReply={handleReply}
            />
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
