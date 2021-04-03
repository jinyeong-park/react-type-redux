import { useState } from 'react';
import { useSelector } from 'react-redux';   //Allows you to extract data from the Redux store state, using a selector function.
// import { useDispatch } from 'react-redux'; //# useDispatch : get access dispatch fn inside of component
// import { actionCreators } from '../state';
import { useActions } from '../hooks/useActions';


const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  // const dispatch = useDispatch();
  const { searchRepositories } = useActions();
  // const state =  useSelector((state) => state);
  // console.log(state);
  const { data, error, loading } = useSelector((state: any) => state.repositories);


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
    </div>
  )
};

export default RepositoriesList;