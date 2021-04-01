interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

// interface Action {
//   type: string;
//   payload?: any;    // ? : maynot, may have, if have it, the type is any
// }
// separate each action interface
interface SearchRepositoriesAction {
  type: 'search_repositories';
}

interface SearchRepositoriesSuccessAction {
  type: 'search_repositories_success';
  payload: string[]
}

interface SearchRepositoriesErrorAction {
  type: 'search_repositories_error';
  payload: string
}

type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction

enum ActionType {
  SEARCH_REPOSITORIES = 'search_repositories',
  SEARCH_REPOSITORIES_SUCCESS = 'search_repositories_success',
  SEARCH_REPOSITORIES_ERROR = 'search_repositories_error'
}

const reducer = (
  state: RepositoriesState,
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