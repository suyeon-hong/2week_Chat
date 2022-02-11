import { ReactElement } from 'react';
import './Style.scss';

type size = 'btnSize75' | 'btnSize100';

interface Props {
  size: size;
  children: string;
  onClick(e: React.MouseEvent<HTMLButtonElement>): void;
  onKeyDown?: () => void;
}

const Button = ({
  size,
  children,
  onClick,
  onKeyDown,
}: Props): ReactElement => {
  return (
    <>
      <button
        className={`message-button ${size}`}
        onKeyDown={onKeyDown}
        onClick={onClick}>
        {children}
      </button>
    </>
  );
};

export default Button;
