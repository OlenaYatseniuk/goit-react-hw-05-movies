import React from 'react';
// import PropTypes from 'prop-types'
import Container from 'components/Container';
import Section from '../../components/Section';
import Searchbar from 'components/Searchbar';
import {getFilmsByName} from '../../services/api';
import { useState } from 'react';
import MovieGallery from 'MovieGallery';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

function MoviesPage(props) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [films, setfilms] = useState([]);
  const [query, setQuery] = useState(searchParams.get('query') ?? '');

  const handleSubmit = (query) =>{
    console.log(query)
    setQuery(query);
    setSearchParams(query !== '' ? { query } : {});
  }

  useEffect(()=>{
    if(query){
      getFilmsByName(query)
    .then(resp => {
      if(!resp.results.length){
        console.log(resp);
        setSearchParams('')
        // return <div> Sorry, the are no films by your search</div>
      }
      setfilms(resp.results)
    })
    .catch(console.error)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return (
    <main>
      <Section>
        <Container>
          <Searchbar onSubmit={handleSubmit}/>
          <MovieGallery items={films}/>
        </Container>
      </Section>
    </main>
  );
}

// Movies.propTypes = {

// }

export default MoviesPage;
