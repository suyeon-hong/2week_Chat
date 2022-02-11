import { Button } from '@components/base';
import './Style.scss';

interface HandleProps {
  handleDeleteModal(e: React.MouseEvent<HTMLButtonElement>): void;
  handleReply: any;
  handleKeyDown: () => void;
}

const Buttons = ({
  handleDeleteModal,
  handleReply,
  handleKeyDown,
}: HandleProps) => {
  const handleClick = () => {
    handleReply();
  };
  return (
    <div className="button-wrapper">
      <Button
        size={'btnSize75'}
        onKeyDown={handleKeyDown}
        onClick={handleDeleteModal}>
        delete
      </Button>
      <Button size={'btnSize75'} onClick={handleClick}>
        reply
      </Button>
    </div>
  );
};

export default Buttons;
