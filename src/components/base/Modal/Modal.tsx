import ReactDOM from 'react-dom';
import { MouseEvent } from 'react';
import './Style.scss';
import { useTypedDispatch } from '@hooks';
import { removeChat } from '@redux/actions/chatActions';

const $portal = document.querySelector('#modal-root');

interface ModalProps {
  chatId: string;
  content: string;
  isShowing: boolean;
  close(event: MouseEvent): void;
}

const Modal = ({ chatId, content, isShowing, close }: ModalProps) => {
  const dispatch = useTypedDispatch();
  let userContent = content;
  if (userContent.length > 10) {
    userContent = userContent.substring(0, 11) + '...';
  }

  const onRemove = (event: MouseEvent) => {
    dispatch(removeChat(chatId));
    close(event);
  };

  return isShowing && $portal
    ? ReactDOM.createPortal(
        <div className="modalContainer" onClick={close}>
          <div className="modalBox">
            <h1>'{userContent}' 메시지를 삭제하시겠습니까?</h1>
            <div className="buttonWrapper">
              <button className="deleteBtn" onClick={onRemove}>
                삭제
              </button>
              <button onClick={close}>취소</button>
            </div>
          </div>
        </div>,
        $portal
      )
    : null;
};

export default Modal;
