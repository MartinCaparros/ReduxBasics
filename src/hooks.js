import { useSelector as useSelectorRedux } from 'react-redux';

export const useSelector = key => useSelectorRedux(state => state[key]);
