import { useState } from 'react';

const useInput = () => {
  const [inputValue, setInputValue] = useState('');

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInputValue('');
  };

  return {
    inputValue,
    onChangeInput,
    onSubmit,
  };
};

export default useInput;
