import { useEffect } from 'react';
import { useState } from 'react';
// import PropTypes from 'prop-types';
import { FaSistrix } from 'react-icons/fa';
// import {getFilmsByName} from '../../services/api';
import s from './Searchbar.module.css';

function Searchbar({onSubmit}) {
  const [query, setQuery] = useState('');

  const handleChangeInput = event => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    if(query.trim()){

      onSubmit(query);
      setQuery('');
    }

  };
  useEffect(()=>{


  },[query])

  return (
    <header className={s.searchbar}>
      <form className={s.searchForm} onSubmit={handleSubmitForm}>
        <FaSistrix
          style={{
            fill: 'black',
            cursor: 'pointer',
            padding: '2px',
            width: '30px',
          }}
          onClick={handleSubmitForm}
        />

        <input
          className={s.searchForm__input}
          value={query}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search film by name"
          onChange={handleChangeInput}
        />
      </form>
    </header>
  );
}

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };

export default Searchbar;
