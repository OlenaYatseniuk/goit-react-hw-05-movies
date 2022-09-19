import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import HomePage from '../pages/HomePage';
import MoviesPage from '../pages/MoviesPage';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import CastPage from 'pages/MovieDetails/CastPage';
import ReviewsPage from 'pages/MovieDetails/ReviewsPage';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />}></Route>
          <Route path="movies" element={<MoviesPage />}></Route>
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path='cast' element={<CastPage/>}/>
            <Route path='reviews' element={<ReviewsPage/>}/>
          </Route>
          <Route path="*" element={<div>Not fond</div>} />
        </Route>
      </Routes>
    </>
  );
};
