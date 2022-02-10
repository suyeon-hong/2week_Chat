import { MouseEvent, useState } from 'react';

const useModal = (initShow: boolean) => {
  const [isShowing, setIsShowing] = useState<boolean>(initShow);

  const toggle = (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (target.nodeName === 'BUTTON') {
      setIsShowing(!isShowing);
    } else if (target.closest('.modalBox')) {
      return;
    }
    setIsShowing(!isShowing);
  };

  return { isShowing, toggle };
};

useModal.defaultProps = {
  initShow: false,
};

export default useModal;
