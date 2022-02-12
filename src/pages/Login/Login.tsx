import { useInput, useTypedDispatch } from '@hooks';
import { loginUser } from '@redux/actions/userActions';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Style.scss';

const Login = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { inputValue, onChangeInput, onSubmit } = useInput();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const handleClick = () => {
    const checkInputValid = document.querySelector('input:valid');

    if (checkInputValid) {
      dispatch(loginUser({ username: inputValue }));
      navigate('/chat');
    }
  };
  return (
    <form className="loginForm" onSubmit={onSubmit}>
      <div className="formInner">
        <p>이름을 입력해주세요</p>
        <input
          ref={inputRef}
          className="loginInput"
          type="text"
          value={inputValue}
          placeholder="15자 이하로 입력해주세요"
          minLength={2}
          maxLength={15}
          required
          onChange={onChangeInput}
        />
        <button className="loginBtn" onClick={handleClick}>
          대화하러 가기
        </button>
      </div>
    </form>
  );
};

export default Login;
