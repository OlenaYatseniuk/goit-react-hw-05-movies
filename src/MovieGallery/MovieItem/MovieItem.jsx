import PropTypes from 'prop-types';
import s from './MovieItem.module.css';
import { POSTER_IMG_URL } from '../../services/api';
import { Link } from 'react-router-dom';

function ImageGalleryItem({ link, title, poster_path }) {
  return (
    <li className={s.gallery__item}>
      <Link className={s.link} to={`/movies/${link}`}>
        <div className={s.gallery__itemWrapper}>
          <img
            className={s.gallery__image}
            src={`${POSTER_IMG_URL}/${poster_path}`}
            alt={title}
          />
          <p>{title}</p>
        </div>
      </Link>
    </li>
  );
}

ImageGalleryItem.propTypes = {
  link: PropTypes.number.isRequired,
  title: PropTypes.string,
  poster_path: PropTypes.string,
};

export default ImageGalleryItem;
