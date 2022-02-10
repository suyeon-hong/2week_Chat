import ReactDOM from 'react-dom';
import { useState } from 'react';
import './Style.scss';

const $portal = document.querySelector('#modal-root');

const Modal = () => {
  const [isShowing, setIsShowing] = useState(true);
  let content = '타입스크립트로 메신저 만들기';

  if (content.length > 10) {
    content = content.substring(0, 11) + '...';
  }

  return isShowing && $portal
    ? ReactDOM.createPortal(
        <div className="modalBg">
          <div className="modal">
            <h1>'{content}' 메시지를 삭제하시겠습니까?</h1>
            <button>삭제</button>
            <button>취소</button>
          </div>
        </div>,
        $portal
      )
    : null;
};

export default Modal;
