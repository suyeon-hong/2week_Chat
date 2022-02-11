import './Style.scss';
import React, { KeyboardEvent } from 'react';
import { useTypedDispatch, useTypedSelector } from '@hooks';
import { setReply } from '@redux/actions/chatActions';
import { InputEventType, KeyCodeType } from '@models/EventTypes';

interface ChatInputProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
}

const ChatInput = ({ setInputValue, inputValue, onSubmit }: ChatInputProps) => {
  const { replyMessage } = useTypedSelector(({ chat }) => chat);
  const dispatch = useTypedDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { inputType } = e.nativeEvent as InputEvent;
    if (inputType === InputEventType.insertLineBreak) {
      return;
    }
    setInputValue(e.target.value);
  };
  const handleClick = () => {
    dispatch(setReply(null));
  };
  const handleKeyPress = (e: KeyboardEvent) => {
    const isPressShift = e.shiftKey;
    const keyCode = e.code;

    if (
      !isPressShift &&
      (keyCode === KeyCodeType.NumpadEnter || keyCode === KeyCodeType.Enter)
    ) {
      onSubmit();
      return;
    }
    if (isPressShift && keyCode === KeyCodeType.Enter) {
      setInputValue((prev) => prev + '\n');
    }
  };

  return (
    <div className={'ChatInput-wrapper'}>
      {replyMessage && (
        <div className={'reply-container'}>
          <h5>
            '{replyMessage.user.username}'{' '}
            <span className={'to-text'}>에게 답장</span>
          </h5>
          <p className={'reply-content'}>{replyMessage.content}</p>
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
  );
};

export default ChatInput;
