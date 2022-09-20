import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastOfFilm, POSTER_IMG_URL } from '../../../services/api';
import noImage from '../../../assets/images/notFound.jpg';
import s from './CastPage.module.css';

function CastPage() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCastOfFilm(movieId)
      .then(resp => setCast(resp.cast))
      .catch(console.error);
  }, [movieId]);

  if (!cast.length) {
    return (
      <div className={s.notFound}>Sorry, there are no info about cast</div>
    );
  }

  return (
    <ul className={s.list}>
      {cast.map(({ profile_path, name, character, id }) => (
        <li key={id} className={s.item}>
          <div>
            <img
              className={s.photo}
              src={profile_path ? `${POSTER_IMG_URL}/${profile_path}` : noImage}
              alt={name}
            />
            <h2 className={s.name}>{name || 'No info'}</h2>
            <p>
              <span className={s.character}>Character:</span>{' '}
              {character || 'No info'}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CastPage;
