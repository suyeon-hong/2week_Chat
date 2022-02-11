import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { RootReducerType } from '@redux/reducers/RootReducer';

const useTypedSelector: TypedUseSelectorHook<RootReducerType> = useSelector;

export default useTypedSelector;
