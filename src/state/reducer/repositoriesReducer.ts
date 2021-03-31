interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const reducer = (state: RepositoriesState, action: any) => {
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