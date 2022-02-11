import './Style.scss';
import { ChatInput, SubmitButton } from '@components/base';
import { useState } from 'react';
import { useTypedDispatch, useTypedSelector } from '@hooks';
import { addChat } from '@redux/actions/chatActions';

const ChatInputContainer = () => {
  const [inputValue, setInputValue] = useState('');
  const { chat, user } = useTypedSelector((state) => state);
  const dispatch = useTypedDispatch();
  const isNotEmpty = !!inputValue.length;

  const handleSubmit = () => {
    if (isNotEmpty) {
      dispatch(addChat(inputValue, user));
      setInputValue('');
    }
  };

  return (
    <form
      className={'ChatContainer-wrapper'}
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <ChatInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSubmit={handleSubmit}
      />
      <SubmitButton active={isNotEmpty} onSubmit={handleSubmit} />
    </form>
  );
};

export default ChatInputContainer;
