import { Profile, Buttons } from '@components/base';
import { IMessageData } from '@models/MessageData';

import './Style.scss';
import Modal from '../../base/Modal/Modal';
import useModal from '@components/hooks/useModal';

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
  const { isShowing, toggle } = useModal(false);

  const { content, chatId, date } = message;
  const { userId, username } = message.user;
  return (
    <div className="messageBox" key={message.chatId}>
      <div className="message">
        <Profile userId={userId} />
        <div className="content">
          <p className="nameDate">
            {username} {date.toString()}
          </p>
          <p className="content">{content}</p>
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
