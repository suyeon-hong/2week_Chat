import './Style.scss';
import React, { useState } from 'react';
import { InputEventType, KeyCodeType } from '@$types/EventTypes';

const dummy = {
  userId: 1,
  userName: '과제를',
  content:
    '이렇게 성의 없게 내면 과제를 하고 싶은 마음이 들겠습니까? 입장을 바꿔서 생각해보세요',
  date: new Date(),
};

interface ChatInputProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
}

const ChatInput = ({ setInputValue, inputValue, onSubmit }: ChatInputProps) => {
  const { userId, userName, content } = dummy;
  const [replyMode, setReplyMode] = useState(true);
  // 이상 redux로 대체할 상태값들

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { inputType } = e.nativeEvent as InputEvent;
    if (inputType === InputEventType.insertLineBreak) {
      return;
    }
    setInputValue(e.target.value);
  };
  const handleClick = () => {
    setReplyMode(false);
  };
  const handleKeyPress = (e: any) => {
    const isPressShift = e.shiftKey;
    const keyCode = e.code;

    if (
      !isPressShift &&
      (keyCode === KeyCodeType.NumpadEnter || keyCode === KeyCodeType.Enter)
    ) {
      onSubmit();
      return;
    }
    if (keyCode === KeyCodeType.ESC) {
      setReplyMode(false);
      return;
    }
    if (isPressShift && keyCode === KeyCodeType.Enter) {
      setInputValue((prev) => prev + '\n');
    }
  };

  return (
    <>
      <div className={'ChatInput-wrapper'}>
        {replyMode && (
          <div className={'reply-container'}>
            <h5>
              '{userName}' <span className={'to-text'}>에게 답장</span>
            </h5>
            <p className={'reply-content'}>{content}</p>
            <div className="close-button" onClick={handleClick}>
              x
            </div>
          </div>
        )}
        <textarea
          name="chat-input"
          id="chat-input"
          value={inputValue}
          onKeyPress={handleKeyPress}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default ChatInput;
