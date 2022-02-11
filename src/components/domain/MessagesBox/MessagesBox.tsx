import { Profile, Buttons } from '@components/base';
import { IMessageData } from '@$types/MessageData';
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
  return (
    <div className="messageBox" key={message.chatId}>
      <div className="message">
        <Profile userId={message.userId} />
        <div className="content">
          <p className="nameDate">
            {message.userName} {message.date}
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
