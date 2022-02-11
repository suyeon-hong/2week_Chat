import { useEffect, MutableRefObject } from 'react';

const useScrollToBottom = <T>(
  ref: MutableRefObject<null | HTMLDivElement>,
  data: T
) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [data]);
};

export default useScrollToBottom;
