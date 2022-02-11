import ReactDOM from 'react-dom';
import { MouseEvent, useState } from 'react';
import './Style.scss';
import { IMessageData } from '@models/MessageData';

const mokData = [
  {
    chatId: '1',
    userId: '1',
    userName: '김땡땡',
    profileImage: '',
    content: '타입스크립트로 메신저 만들기',
    date: new Date(),
  },
  {
    chatId: '2',
    userId: '2',
    userName: '김땡땡',
    profileImage: '',
    content: '타입스크립트로 메신저 만들기',
    date: new Date(),
  },
  {
    chatId: '3',
    userId: '3',
    userName: '김땡땡',
    profileImage: '',
    content: '타입스크립트로 메신저 만들기',
    date: new Date(),
  },
];

const $portal = document.querySelector('#modal-root');

interface ModalProps {
  chatId: string;
  content: string;
  isShowing: boolean;
  close(event: MouseEvent): void;
}

const Modal = ({ chatId, content, isShowing, close }: ModalProps) => {
  const [data, setData] = useState<IMessageData[]>(mokData);

  let userContent = content;
  if (userContent.length > 10) {
    userContent = userContent.substring(0, 11) + '...';
  }

  const onRemove = (event: MouseEvent) => {
    setData((data) => data.filter((data) => data.chatId !== chatId));
    console.log(`remove chatId : ${chatId}`);
    close(event);
  };

  return isShowing && $portal
    ? ReactDOM.createPortal(
        <div className="modalContainer" onClick={close}>
          <div className="modalBox">
            <h1>'{userContent}' 메시지를 삭제하시겠습니까?</h1>
            <button className="deleteBtn" onClick={onRemove}>
              삭제
            </button>
          </div>
        </div>,
        $portal
      )
    : null;
};

export default Modal;
