import React from 'react';
import './Style.scss';

import { MessagesBox, ChatContainer } from '@components/domain';

// @NOTE: dummy data
const messages = [
  {
    chatId: '123',
    userId: '1',
    userName: '12',
    profileImage: '123',
    content: '123',
    date: '123',
  },
];

const Chats = () => {
  function handleReply() {
    console.log('handleReply');
  }

  return (
    <div className="homeWrapper">
      <div className="messagesContainer">
        {React.Children.toArray(
          messages.map((message) => (
            <MessagesBox
              key={message.chatId}
              message={message}
              handleReply={handleReply}
            />
          ))
        )}
      </div>
      <div className="inputBoxContainer">
        <ChatContainer />
      </div>
    </div>
  );
};

export default Chats;
