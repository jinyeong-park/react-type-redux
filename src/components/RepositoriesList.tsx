import { useState } from 'react';
import { useDispatch } from 'react-redux';
// useDispatch : get access dispatch fn inside of component
import { actionCreators } from '../state';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    // connect it with action creator in state-> index.ts
    dispatch(actionCreators.searchRepositories(term));

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