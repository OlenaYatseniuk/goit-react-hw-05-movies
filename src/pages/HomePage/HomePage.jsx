import React, { useState, useEffect } from 'react'
import Container from 'components/Container'
import Section from '../../components/Section';
import {getTrendingFilms} from '../../services/api';
import MovieGallery from 'MovieGallery';



function HomePage(props) {
  const [trendingFilms, setTrendingFilms] = useState([]);

  useEffect(() =>{

      getTrendingFilms()
      .then(({results})=> setTrendingFilms(results))
      .catch(console.error)
  }, [])

  return (
    <main>
        <Section title='Trending movies'>
        <Container>
          <MovieGallery items={trendingFilms}/>
        </Container>
        </Section>

    </main>
  )
}



export default HomePage

