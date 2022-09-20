import { Suspense } from 'react';
import Container from 'components/Container';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { getFilmsByID, getGenresName } from '../../services/api';
import { useEffect, useState } from 'react';
import s from './MovieDetails.module.css';

import { POSTER_IMG_URL } from '../../services/api';

const getActiveClassName = ({ isActive }) => {
  return isActive ? `${s.link} ${s.active}` : s.link;
};

function MovieDetails(props) {
  const location = useLocation();
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

  return (
    <main>
      <Container>
        <Link to={location.state?.from ?? '/'} className={s.linkBack}>
          &#8592; Back
        </Link>
        <div className={s.wrapper}>
          <div className={s.inner}>
            <img
              className={s.poster}
              width="300"
              src={`${POSTER_IMG_URL}${poster_path}`}
              alt={title}
            />
          </div>
          <div>
            <h1 className={s.title}>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p className={s.text}>
              <span className={s.info}>User Score:</span>{' '}
              {(vote_average * 10).toFixed(2)}%
            </p>
            <p className={s.text}>
              <span className={s.info}> Overview: </span>
              {overview}
            </p>
            <p className={s.text}>
              <span className={s.info}>Genres: </span>
              {getGenresName(genres)}
            </p>
          </div>
        </div>
        <div className={s.box}>
          <h2 className={s.additional}>Additional information</h2>
          <ul className={s.linkList}>
            <li className={s.linkItem}>
              <NavLink
                className={getActiveClassName}
                to="cast"
                state={location.state?.from ? location.state : null}
              >
                Cast
              </NavLink>
            </li>
            <li className={s.linkItem}>
              <NavLink
                className={getActiveClassName}
                to="reviews"
                state={location.state?.from ? location.state : null}
              >
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

export default MovieDetails;
