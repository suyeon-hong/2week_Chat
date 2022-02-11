import { useInput, useTypedDispatch } from '@hooks';
import './Style.scss';
import { loginUser } from '@redux/actions/userTypes';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { inputValue, onChangeInput, onSubmit } = useInput();
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const handleClick = () => {
    dispatch(loginUser({ username: inputValue }));
    navigate('/chat');
  };
  return (
    <form className="loginForm" onSubmit={onSubmit}>
      <div className="formInner">
        <p>이름을 입력해주세요</p>
        <input
          className="loginInput"
          type="text"
          value={inputValue}
          placeholder="15자 이하로 입력해주세요"
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
