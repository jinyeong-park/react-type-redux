import { ActionType } from '../action-types';
import { Action } from '../actions';

interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// // move to actions.ts
// // interface Action {
// //   type: string;
// //   payload?: any;    // ? : maynot, may have, if have it, the type is any
// // }

// // separate each action interface as below
// interface SearchRepositoriesAction {
//   type: ActionType.SEARCH_REPOSITORIES;
// }

// interface SearchRepositoriesSuccessAction {
//   type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
//   payload: string[]
// }

// interface SearchRepositoriesErrorAction {
//   type: ActionType.SEARCH_REPOSITORIES_ERROR;
//   payload: string
// }

// move to actions.ts
// type Action =
//   | SearchRepositoriesAction
//   | SearchRepositoriesSuccessAction
//   | SearchRepositoriesErrorAction

// move to action-types.ts
// enum ActionType {
//   SEARCH_REPOSITORIES = 'search_repositories',
//   SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
//   SEARCH_REPOSITORIES_ERROR = 'search_repositories_error'
// }

// add initial state
const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {

  // use switch statement for different cases
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    // receive success
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    // if error case
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      // no longer loading, error contains error message, reset empty array to data
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }

};

export default reducer;