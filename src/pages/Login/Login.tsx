import { useInput } from '@hooks';
import './Style.scss';

const Login = () => {
  const { inputValue, onChangeInput, onSubmit } = useInput();

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
        <button className="loginBtn">대화하러 가기</button>
      </div>
    </form>
  );
};

export default Login;
