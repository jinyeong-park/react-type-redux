// hook to give us to access all action creators inside of the component
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';


export const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreators, dispatch);
  // => return { searchRepositories: dispatch(searchRepositories)}
}