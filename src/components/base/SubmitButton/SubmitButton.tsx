import './Style.scss';

interface SubmitButtonProps {
  active: boolean;
  onSubmit: () => void;
}

const SubmitButton = ({ active, onSubmit }: SubmitButtonProps) => {
  return (
    <button
      className={`SubmitButton-wrapper ${active ? 'active' : ''}`}
      onClick={onSubmit}>
      전송
    </button>
  );
};

export default SubmitButton;
