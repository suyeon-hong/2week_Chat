import { useDispatch } from 'react-redux';
import type { AppDispatch } from '@redux/stores';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
