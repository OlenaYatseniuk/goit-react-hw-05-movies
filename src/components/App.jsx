import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomePage = lazy(()=> import('../pages/HomePage'));
const MoviesPage = lazy(()=> import('../pages/MoviesPage'));
const MovieDetails = lazy(()=> import('../pages/MovieDetails/MovieDetails'));
const CastPage = lazy(()=> import('../pages/MovieDetails/CastPage/'));
const ReviewsPage = lazy(()=> import('../pages/MovieDetails/ReviewsPage'));

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
      <ToastContainer autoClose={2000}/>
    </>
  );
};
