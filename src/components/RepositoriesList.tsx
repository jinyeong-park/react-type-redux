import { useState } from 'react';
// import { useSelector } from 'react-redux';   //Allows you to extract data from the Redux store state, using a selector function.
import { useTypedSelector } from '../hooks/useTypedSelector';
// import { useDispatch } from 'react-redux'; //# useDispatch : get access dispatch fn inside of component
// import { actionCreators } from '../state';
import { useActions } from '../hooks/useActions';


const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  // const dispatch = useDispatch();
  const { searchRepositories } = useActions();
  // const state =  useSelector((state) => state);
  // console.log(state);
  const { data, error, loading } = useTypedSelector((state) => state.repositories);


  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    // connect it with action creator in state-> index.ts
    // dispatch(actionCreators.searchRepositories(term));
    searchRepositories(term);

  }

  return (
    <div>
      {/* submission event handler-onSubmit */}
      <form onSubmit={onSubmit}>
        <input value={term} onChange={e => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {/* if error is defined(not null), then show error*/}
      {error && <h3>{error}</h3>}
      {/* if loading is true, show Loading text */}
      {loading && <h3>Loading...</h3>}
      {/* if there is no error, loading then show data */}
      {!error && !loading &&
        data.map((name) => <div key={name}>{name}</div>)
      }
    </div>
  )
};

export default RepositoriesList;