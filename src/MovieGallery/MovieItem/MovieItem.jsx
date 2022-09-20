import PropTypes from 'prop-types';
import s from './MovieItem.module.css';
import { POSTER_IMG_URL } from '../../services/api';
import { Link, useLocation } from 'react-router-dom';
import noImage from '../../assets/images/notFound.jpg';

function ImageGalleryItem({ id, title, poster_path }) {
  const location = useLocation();
  return (
    <li className={s.gallery__item}>
      <Link className={s.link} to={`/movies/${id}`} state={{from: location}}>
        <div className={s.gallery__itemWrapper}>
          <img
            className={s.gallery__image}
            src={poster_path ?`${POSTER_IMG_URL}/${poster_path}`: noImage}
            alt={title}
          />
          <p className={s.title}>{title}</p>
        </div>
      </Link>
    </li>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string,
  poster_path: PropTypes.string,
};

export default ImageGalleryItem;
