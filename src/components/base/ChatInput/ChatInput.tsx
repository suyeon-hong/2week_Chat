import './Style.scss';
import React from 'react';
import { useTypedDispatch, useTypedSelector } from '@hooks';
import { setReply } from '@redux/actions/chatActions';
import { InputEventType, KeyCodeType } from '@types/EventTypes';

interface ChatInputProps {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  onSubmit: () => void;
}

const ChatInput = ({ setInputValue, inputValue, onSubmit }: ChatInputProps) => {
  const { reply } = useTypedSelector(({ chat }) => chat);
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
    if (isPressShift && keyCode === KeyCodeType.Enter) {
      setInputValue((prev) => prev + '\n');
    }
  };

  return (
    <div className={'ChatInput-wrapper'}>
      {reply && (
        <div className={'reply-container'}>
          <h5>
            '{reply.user.username}' <span className={'to-text'}>에게 답장</span>
          </h5>
          <p className={'reply-content'}>{reply.content}</p>
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
