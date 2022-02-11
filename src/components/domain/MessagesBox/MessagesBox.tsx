import { Profile, Buttons } from '@components/base';

import './Style.scss';
import { Modal } from '@components/base';
import { useTypedDispatch, useTypedSelector, useModal } from '@hooks';
import { setReply } from '@redux/actions/chatActions';
import { IMessageData } from '@models/MessageData';
import { getFormattedDate } from '@utils/functions';

interface MessagesBoxProps {
  message: IMessageData;
}

const MessagesBox = ({ message }: MessagesBoxProps) => {
  const { isShowing, toggle } = useModal(false);
  const { username: loginUsername } = useTypedSelector((state) => state.user);
  const dispatch = useTypedDispatch();
  const { content, chatId, date } = message;
  const { userId, username } = message.user;
  return (
    <div className="messageBox" key={message.chatId}>
      <div className="messageInner">
        <Profile userId={userId} />
        <div className="content">
          {replyMessage && (
            <>
              <h1>{replyMessage.user.username}에게 답장</h1>
              <p className="otherMessage">'{replyMessage.content}'</p>
            </>
          )}
          <p className="nameDate">
            <strong>
              {username === loginUsername ? `*${username}` : `${username}`}
            </strong>
            <span className="date"> {getFormattedDate(date)}</span>
          </p>
          <p className="message">{content}</p>
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
