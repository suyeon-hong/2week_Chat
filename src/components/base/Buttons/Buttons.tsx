import { Button } from '@components/base';
import './Style.scss';

interface HandleProps {
  handleDeleteModal(e: React.MouseEvent<HTMLButtonElement>): void;
  handleReply(e: React.MouseEvent<HTMLButtonElement>): void;
}

const Buttons = ({ handleDeleteModal, handleReply }: HandleProps) => {
  return (
    <div className="button-wrapper">
      <Button size={'btnSize75'} onClick={handleDeleteModal}>
        delete
      </Button>
      <Button size={'btnSize75'} onClick={handleReply}>
        reply
      </Button>
    </div>
  );
};

export default Buttons;
