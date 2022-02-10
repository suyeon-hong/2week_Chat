import './Style.scss';
import { ChatInput, SubmitButton } from '@components/base';
import { useState } from 'react';

const ChatContainer = () => {
  const [inputValue, setInputValue] = useState('');
  const isNotEmpty = !!inputValue.length;
  const handleSubmit = () => {
    if (isNotEmpty) {
      console.log(inputValue, '가 전송됨');
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

export default ChatContainer;
