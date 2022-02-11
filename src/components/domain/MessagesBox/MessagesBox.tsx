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
  return (
    <div className="list" key={message.chatId}>
      <div>
        <Profile userId={message.userId} />
        <div>
          <div>
            {message.userName} {message.date}
          </div>
          <div>{message.content}</div>
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
