import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsOfFilm } from '../../../services/api';
import s from './ReviewsPage.module.css';

function ReviewsPage() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviewsOfFilm(movieId)
      .then(resp => setReviews(resp.results))
      .catch(console.error);
  }, [movieId]);

  if (!reviews.length) {
    return (
      <div className={s.notFound}>
        Sorry, we haven't any reviews about this films yet.
      </div>
    );
  }

  return (
    <ul className={s.list}>
      {reviews.map(({ author, content, created_at, id }) => (
        <li key={id}>
          <div className={s.parent}>
            <div className={s.wrapper}>
              <span className={s.author}>Author: {author}</span>
              <span>{new Date(created_at).toLocaleDateString()}</span>
            </div>
            <p>{content}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ReviewsPage;
