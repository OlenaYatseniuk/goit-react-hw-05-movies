import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastOfFilm, POSTER_IMG_URL } from '../../../services/api';
import s from './CastPage.module.css';

function CastPage() {
  const { movieId } = useParams();
  console.log(movieId);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    getCastOfFilm(movieId)
      .then(resp =>
        setCast(resp.cast)
      )
      .catch(console.error);
  }, [ movieId]);

  if (!cast.length) {
    return <div className={s.notFount}>Sorry, there are no info about cast</div>;
  }

  return (
    <ul className={s.list}>
      {cast.map(({ profile_path, name, character, id }) => (
        <li key={id} className={s.item}>
          <div>
            <img className={s.photo} src={`${POSTER_IMG_URL}/${profile_path}`} alt={name} />
            <h2>{name || 'No info'}</h2>
            <p>Character: {character || 'No info'}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CastPage;
