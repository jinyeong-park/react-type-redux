// combine all the reducers and create redux store
import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
  repositories: repositoriesReducer,
})

export default reducers;

export type RootState = ReturnType<typeof reducers>;