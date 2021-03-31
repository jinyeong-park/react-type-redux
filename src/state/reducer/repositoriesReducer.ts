interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

interface Action {
  type: string;
  payload?: any;    // ? : maynot, may have, if have it, the type is any
}

const reducer = (
  state: RepositoriesState,
  action: Action)
: RepositoriesState => {
  // use switch statement for different cases
  switch (action.type) {
    case 'search_repositories':
      return { loading: true, error: null, data: [] };
    // receive success
    case 'search_repositories_success':
      return { loading: false, error: null, data: action.payload };
    // if error case
    case 'search_repositories_error':
      // no longer loading, error contains error message, reset empty array to data
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }

};

export default reducer;