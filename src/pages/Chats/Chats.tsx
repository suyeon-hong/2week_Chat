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
    content: `배고프다 
      커피커피 호로로 졸려 라랄라라라라랄 말이 엄청 길어지면 어떻게 될까? 배고프다 귀찮아 졸려 라랄라라라라랄 말이 엄청 길어지면 어떻게 될까?`,
    date: new Date(),
  },
  {
    chatId: '123',
    userId: '1',
    userName: '12',
    profileImage: '123',
    content: `배고프다 
      커피커피 호로로 졸려 라랄라라라라랄 말이 엄청 길어지면 어떻게 될까? 배고프다 귀찮아 졸려 라랄라라라라랄 말이 엄청 길어지면 어떻게 될까?`,
    date: new Date(),
  },
  {
    chatId: '123',
    userId: '1',
    userName: '12',
    profileImage: '123',
    content: `배고프다 
      커피커피 호로로 졸려 라랄라라라라랄 말이 엄청 길어지면 어떻게 될까? 배고프다 귀찮아 졸려 라랄라라라라랄 말이 엄청 길어지면 어떻게 될까?`,
    date: new Date(),
  },
  {
    chatId: '123',
    userId: '1',
    userName: '12',
    profileImage: '123',
    content: `배고프다 
      커피커피 호로로 졸려 라랄라라라라랄 말이 엄청 길어지면 어떻게 될까? 배고프다 귀찮아 졸려 라랄라라라라랄 말이 엄청 길어지면 어떻게 될까?`,
    date: new Date(),
  },
  {
    chatId: '123',
    userId: '1',
    userName: '12',
    profileImage: '123',
    content: `배고프다 
      커피커피 호로로 졸려 라랄라라라라랄 말이 엄청 길어지면 어떻게 될까? 배고프다 귀찮아 졸려 라랄라라라라랄 말이 엄청 길어지면 어떻게 될까?`,
    date: new Date(),
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
