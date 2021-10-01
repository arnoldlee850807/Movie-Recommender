import { BASE_URL, APIKEY } from './config.js';
import fetch from 'node-fetch';

/**
 * Retrieve movie from TMDB using entered name
 * @param  {String} movieName The entered movie name
 * @return {Movie}      The movie object retrieved from TMDP API
 */
const searchMovie = (movieName = 'star+wars') => fetch(`${BASE_URL}search/movie?api_key=${APIKEY}&query=${movieName}`)
  .then((res) => res.json())
  .catch((err) => alert(err));

/**
 * Retrieve array of movie recommendations from TMDB using entered movie ID
 * @param  {String} movieId The entered movie ID
 * @return {Array}      The array of movie objects retrieved from TMDP API
 */
  const getSimilarMovies = (movieId = '438631') => fetch(`${BASE_URL}movie/${movieId}/similar?api_key=${APIKEY}`)
  .then((res) => res.json())
  .catch((err) => alert(err));

export { searchMovie, getSimilarMovies };
