import ReactDOM from 'react-dom';
import { useState } from 'react';
import './Style.scss';
import { UserData } from '@types';

const mokData = [
  {
    userId: 1,
    userName: '김땡땡',
    content: '타입스크립트로 메신저 만들기',
    date: new Date(),
  },
  {
    userId: 2,
    userName: '김땡땡',
    content: '타입스크립트로 메신저 만들기',
    date: new Date(),
  },
  {
    userId: 3,
    userName: '김땡땡',
    content: '타입스크립트로 메신저 만들기',
    date: new Date(),
  },
];

const $portal = document.querySelector('#modal-root');

interface ModalProps {
  userId: number;
  content: string;
}

const Modal = ({ userId, content }: ModalProps) => {
  const [isShowing, setIsShowing] = useState<boolean>(true);
  const [data, setData] = useState<UserData[]>(mokData);

  let userContent = content;

  if (userContent.length > 10) {
    userContent = userContent.substring(0, 11) + '...';
  }

  const onRemove = (): void => {
    setData((data) => data.filter((data) => data.userId !== userId));
    setIsShowing(!isShowing);
  };

  const close = (): void => {
    setIsShowing(!isShowing);
  };

  return isShowing && $portal
    ? ReactDOM.createPortal(
        <div className="modalBg">
          <div className="modalBox">
            <h1>'{userContent}' 메시지를 삭제하시겠습니까?</h1>
            <button onClick={onRemove}>삭제</button>
            <button onClick={close}>취소</button>
          </div>
        </div>,
        $portal
      )
    : null;
};

export default Modal;
