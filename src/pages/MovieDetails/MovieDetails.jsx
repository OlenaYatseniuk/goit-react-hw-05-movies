import { Suspense } from 'react';
// import PropTypes from 'prop-types'
import Container from 'components/Container';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getFilmsByID, getGenresName } from '../../services/api';
import { useEffect, useState } from 'react';
import s from './MovieDetails.module.css';

import { POSTER_IMG_URL } from '../../services/api';

const getActiveClassName = ({ isActive }) => {
  return isActive ? `${s.link} ${s.active}` : s.link;
};

function MovieDetails(props) {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  useEffect(() => {
    getFilmsByID(movieId).then(resp => {
      setFilm(resp);
      console.log(resp);
    });
  }, [movieId]);
  if (!film) {
    return;
  }
  const { poster_path, title, overview, genres, release_date, vote_average } =
    film;
  // console.log(film);
  console.log(genres);

  return (
    <main>
      <Container>
        <div className={s.wrapper}>
          <div className={s.inner}>
            <img className={s.poster}
            width="300"
            src={`${POSTER_IMG_URL}${poster_path}`}
            alt={title}
          />
          </div>
          <div>
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p>
              <span>User Score: {(vote_average * 10).toFixed(2)}%</span>{' '}
            </p>
            <p>
              Overview:
              <span> {overview}</span>
            </p>
            <pt>
              <span>Genres: {getGenresName(genres)}</span>
            </pt>
          </div>
        </div>
        <div>
          <h2>Additional information</h2>
          <ul className={s.linkList}>
            <li className={s.linkItem}>
              <NavLink className={getActiveClassName} to="cast">
                Cast
              </NavLink>
            </li>
            <li className={s.linkItem}>
              <NavLink className={getActiveClassName} to="reviews">
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
}

// MovieInfo.propTypes = {

// }

export default MovieDetails;
