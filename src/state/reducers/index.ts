// combine all the reducers and create redux store
import { combineReducers } from 'redux';
import repositoriesReducer from './repositoriesReducer';

// state inside of redux store: object has - key: repositories and value: repositoriesReducer
const reducers = combineReducers({
  repositories: repositoriesReducer,
})

export default reducers;

export type RootState = ReturnType<typeof reducers>;