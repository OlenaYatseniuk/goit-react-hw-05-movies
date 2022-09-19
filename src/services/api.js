import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'a4a0d478f5a66be1befa7af60710d15f';
export const POSTER_IMG_URL = 'https://image.tmdb.org/t/p/w500';


export const getTrendingFilms = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.error('Something went wrong' + error);
  }
};

export const getFilmsByName = async filmName => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&query=${filmName}`
    );
    return data;
  } catch (error) {
    console.error('Something went wrong' + error);
  }
};

export const getFilmsByID = async filmId => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}/movie/${filmId}?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.error('Something went wrong' + error);
  }
};

export const getGenres = async () => {
  try {
    const { data } = await axios.get(
      `${BASE_URL}genre/movie/list?api_key=${API_KEY}`
    );
    return data;
  } catch (error) {
    console.error('Something went wrong' + error);
  }
};

export const getGenresName = genres => {
  if (!genres) {
    return '';
  }
  let genresNames = genres.map(({ name }) => name);
  return genresNames.join(', ');
};

export const getCastOfFilm = async filmId => {
  try {
    const { data } = await axios.get(`${BASE_URL}movie/${filmId}/credits?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    console.error('Something went wrong' + error);
  }
};

export const getReviewsOfFilm = async (filmId)=>{
  try {
    const { data } = await axios.get(`${BASE_URL}movie/${filmId}/reviews?api_key=${API_KEY}`);
    return data;
  } catch (error) {
    console.error('Something went wrong' + error);
  }
}
