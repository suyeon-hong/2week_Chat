import ReactDOM from 'react-dom';
import { useState } from 'react';
import './Style.scss';

const $portal = document.querySelector('#modal-root');

interface ModalProps {
  userId: number;
}

const Modal = ({ userId }: ModalProps) => {
  const [isShowing, setIsShowing] = useState<boolean>(true);
  // let content = data.filter(el => el.userId === userId);
  let content = '타입스크립트로 메신저 만들기';

  if (content.length > 10) {
    content = content.substring(0, 11) + '...';
  }

  const onRemove = (): void => {
    console.log(userId);
  };

  const close = (): void => {
    setIsShowing(!isShowing);
  };

  return isShowing && $portal
    ? ReactDOM.createPortal(
        <div className="modalBg">
          <div className="modalBox">
            <h1>'{content}' 메시지를 삭제하시겠습니까?</h1>
            <button onClick={onRemove}>삭제</button>
            <button onClick={close}>취소</button>
          </div>
        </div>,
        $portal
      )
    : null;
};

export default Modal;
