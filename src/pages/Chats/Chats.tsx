import React from 'react';
import { MessagesBox, ChatContainer } from '@components/domain';
import { IMessageData } from '@$types/MessageData';
import './Style.scss';

// @NOTE: dummy data
const messages = [
  {
    chatId: '123',
    userId: '1',
    userName: '12',
    profileImage: '123',
    content: '123',
    date: '2021-05-04 23:22:22',
  },
  {
    chatId: '123',
    userId: '1',
    userName: '22',
    profileImage: '123',
    content: '123',
    date: '2021-05-01 23:22:22',
  },
];

const Chats = () => {
  function handleDeleteModal() {
    console.log('handleDeleteModal');
  }
  function handleReply() {
    console.log('handleReply');
  }
  messages.sort(
    (a: IMessageData, b: IMessageData): number =>
      +new Date(a.date) - +new Date(b.date)
  );

  return (
    <div className="homeWrapper">
      <div className="messagesContainer">
        {React.Children.toArray(
          messages.map((message) => (
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
        <ChatContainer />
      </div>
    </div>
  );
};

export default Chats;
