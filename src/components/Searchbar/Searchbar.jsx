import { useState } from 'react';
import { FaSistrix } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
import s from './Searchbar.module.css';

function Searchbar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') ?? '');

  const handleChangeInput = event => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleSubmitForm = event => {
    event.preventDefault();
    if (query.trim()) {
      setSearchParams({ query });
    }
  };

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

export default Searchbar;
