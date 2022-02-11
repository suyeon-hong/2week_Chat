import { Profile, Buttons } from '@components/base';
import { IMessageData } from '@models/MessageData';

import './Style.scss';

interface MessagesBoxProps {
  message: IMessageData;
  handleDeleteModal(e: React.MouseEvent<HTMLButtonElement>): void;
  handleReply(e: React.MouseEvent<HTMLButtonElement>): void;
}

const MessagesBox = ({
  message,
  handleDeleteModal,
  handleReply,
}: MessagesBoxProps) => {
  const { userId, username } = message.user;
  return (
    <div className="messageBox" key={message.chatId}>
      <div className="message">
        <Profile userId={userId} />
        <div className="content">
          <p className="nameDate">
            {username} {message.date}
          </p>
          <p className="content">{message.content}</p>
        </div>
      </div>
      <Buttons
        handleDeleteModal={handleDeleteModal}
        handleReply={handleReply}
      />
    </div>
  );
};

export default MessagesBox;
