import { IMessageData } from '@$types/MessageData';
import { Profile, Buttons } from '@components/base';
import { getFormattedDate } from '@utils/functions';
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
    <div className="messageBox">
      <div className="messageInner">
        <Profile userId={message.userId} />
        <div className="content">
          <p className="nameDate">
            <strong>{message.userName}</strong>
            <span className="date"> {getFormattedDate(message.date)}</span>
          </p>
          <p className="message">{message.content}</p>
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
