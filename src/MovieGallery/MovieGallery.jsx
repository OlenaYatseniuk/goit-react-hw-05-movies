import PropTypes from 'prop-types';
import s from './MovieGallery.module.css';
import MovieItem from './MovieItem';

function MovieGallery({ items }) {
  return (
    <ul className={s.gallery}>
      {items.map(({ id, title, poster_path }) => (
        <MovieItem
          key={id}
          link = {id}
          title={title}
          poster_path={poster_path}
        />
      ))}
    </ul>
  );
}

MovieGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,

    })
  ),
};

export default MovieGallery;
