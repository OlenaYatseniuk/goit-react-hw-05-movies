import React from 'react';
// import PropTypes from 'prop-types'
import Container from 'components/Container';
import Section from '../../components/Section';
import Searchbar from 'components/Searchbar';
import {getFilmsByName} from '../../services/api';
import { useState } from 'react';
import MovieGallery from 'MovieGallery';

function MoviesPage(props) {
  const [films, setfilms] = useState([]);
  const handleSubmit = (query) =>{
    console.log(query)
    getFilmsByName(query)
    .then(resp => setfilms(resp.results)).catch(console.error)
  }

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
