import { Profile, Buttons, Modal } from '@components/base';
import useModal from '@components/hooks/useModal';
import { getFormattedDate } from '@utils/functions';
import { IMessageData } from '@$types/MessageData';
import './Style.scss';

interface MessagesBoxProps {
  message: IMessageData;
  handleReply(e: React.MouseEvent<HTMLButtonElement>): void;
}

const MessagesBox = ({ message, handleReply }: MessagesBoxProps) => {
  const { isShowing, toggle: close } = useModal(false);

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
