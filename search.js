import { BASE_URL, APIKEY } from './config.js';

const searchMovie = (movieName = 'star+wars') => fetch(`${BASE_URL}search/movie?api_key=${APIKEY}&query=${movieName}`)
  .then((res) => res.json())
  .catch((err) => alert(err));

const getSimilarMovies = (movieId = '438631') => fetch(`${BASE_URL}movie/${movieId}/similar?api_key=${APIKEY}`)
  .then((res) => res.json())
  .catch((err) => alert(err));

export { searchMovie, getSimilarMovies };
