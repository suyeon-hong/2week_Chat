import '@styles/index.scss';
import { Modal } from '@components/base';

function App() {
  const num = 1;
  return (
    <>
      <Modal userId={num} />
    </>
  );
}

export default App;
