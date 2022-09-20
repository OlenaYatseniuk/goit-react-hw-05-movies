import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import Container from 'components/Container';
import Section from '../../components/Section';
import Searchbar from 'components/Searchbar';
import { getFilmsByName } from '../../services/api';
import MovieGallery from 'MovieGallery';

import { toast } from 'react-toastify';

function MoviesPage(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [films, setfilms] = useState([]);
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (query) {
      getFilmsByName(query)
        .then(resp => {
          if (resp.results.length === 0) {
            console.log(resp);
            setSearchParams({});
            toast.error(
              'Sorry, the are no films by your search. Please try to search another movie'
            );
          }
          setfilms(resp.results);
        })
        .catch((error)=>toast.error(`${error.message}`));
    }
  }, [query, setSearchParams]);

  return (
    <main>
      <Section>
        <Container>
          <Searchbar />
          {films.length ? (
            <MovieGallery items={films} />
          ) : (
            <div>There are no films </div>
          )}
        </Container>
      </Section>
    </main>
  );
}

export default MoviesPage;
