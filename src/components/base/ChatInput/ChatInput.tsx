import './Style.scss';

const dummy = {
  userId: 1,
  userName: '과제를',
  content: '이따위로 ㅋㅋ',
  date: new Date(),
};

const ChatInput = () => {
  const { userId, userName, content } = dummy;
  return (
    <>
      <div className={'ChatInput-wrapper'}>
        {userId && (
          <div className={'reply-container'}>
            <h5>
              '{userName}' <span className={'to-text'}>에게 답장</span>
            </h5>
            <p className={'reply-content'}>{content}</p>
          </div>
        )}
        <textarea name="chat-input" id="chat-input" />
      </div>
    </>
  );
};

export default ChatInput;
