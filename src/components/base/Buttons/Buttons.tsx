import { Button } from '@components/base';
import './Style.scss';

interface HandleProps {
  handleDeleteModal(e: React.MouseEvent<HTMLButtonElement>): void;
  handleReply: any;
}

const Buttons = ({ handleDeleteModal, handleReply }: HandleProps) => {
  const handleClick = () => {
    handleReply();
  };
  return (
    <div className="button-wrapper">
      <Button size={'btnSize75'} onClick={handleDeleteModal}>
        delete
      </Button>
      <Button size={'btnSize75'} onClick={handleClick}>
        reply
      </Button>
    </div>
  );
};

export default Buttons;
