import { Profile, Buttons, Modal } from '@components/base';
import useModal from '@components/hooks/useModal';
import { IMessageData } from '@$types/MessageData';

import './Style.scss';

interface MessagesBoxProps {
  message: IMessageData;
  handleReply(e: React.MouseEvent<HTMLButtonElement>): void;
}

const MessagesBox = ({ message, handleReply }: MessagesBoxProps) => {
  const { isShowing, toggle: close } = useModal(false);

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
      <Buttons handleDeleteModal={close} handleReply={handleReply} />
      <Modal
        chatId={message.chatId}
        content={message.content}
        isShowing={isShowing}
        close={close}
      />
    </div>
  );
};

export default MessagesBox;
