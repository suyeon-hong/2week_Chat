import './Style.scss';
import { Profile, Button, Modal } from '@components/base';
import { useModal } from '@hooks';

interface ReplyBoxProps {
  userName: string;
  receiveMessage: string;
  replyMessage: string;
}
const ReplyBox = ({
  userName,
  receiveMessage,
  replyMessage,
}: ReplyBoxProps) => {
  const { isShowing, toggle } = useModal(false);

  let receiveCon = receiveMessage;
  if (receiveCon.length > 10) {
    receiveCon = receiveCon.substring(0, 11) + '...';
  }

  return (
    <div className="replyBoxWrapper">
      <Profile userId={userName} profileImage="https://unsplash.it/100" />
      <div className="messageBox">
        <div>
          <h1>{userName}에게 답장</h1>
          <p className="otherMessage">'{receiveCon}'</p>
          <p className="myMessage">{replyMessage}</p>
        </div>
      </div>
      <Button size="btnSize100" onClick={toggle}>
        Delete
      </Button>
      <Modal
        chatId={userName}
        content={replyMessage}
        isShowing={isShowing}
        close={toggle}
      />
    </div>
  );
};

export default ReplyBox;
