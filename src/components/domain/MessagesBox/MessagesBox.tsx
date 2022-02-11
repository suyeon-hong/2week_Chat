import { Profile, Buttons } from '@components/base';
import { IMessageData } from '@models/MessageData';

import './Style.scss';
import Modal from '../../base/Modal/Modal';
import useModal from '@components/hooks/useModal';
import { useTypedDispatch } from '@hooks';
import { setReply } from '@redux/actions/chatActions';

interface MessagesBoxProps {
  message: IMessageData;
}

const MessagesBox = ({ message }: MessagesBoxProps) => {
  const { isShowing, toggle } = useModal(false);
  const dispatch = useTypedDispatch();
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
        handleDeleteModal={toggle}
        handleReply={() => dispatch(setReply(message))}
      />
      <Modal
        content={content}
        chatId={chatId}
        close={toggle}
        isShowing={isShowing}
      />
    </div>
  );
};

export default MessagesBox;
