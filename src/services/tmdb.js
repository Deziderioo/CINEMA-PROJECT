// src/services/tmdb.js
import axios from 'axios';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500'; // Base URL para as imagens

const tmdb = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getPopularMovies = async () => {
  try {
    const response = await tmdb.get('/movie/popular');
    return response.data.results.map(movie => ({
      ...movie,
      poster_url: `${IMAGE_BASE_URL}${movie.poster_path}`
    }));
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};
