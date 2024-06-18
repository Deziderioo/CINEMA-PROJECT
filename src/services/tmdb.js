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

export const getUpcomingMovies = async () => {
  try {
    const response = await tmdb.get('/movie/upcoming', {
      params: {
        language: 'en-US',
        page: 1,
      },
    });

    return response.data.results.map(movie => ({
      ...movie,
      poster_url: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : null
    }));
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    throw error;
  }
};

export const getMovieVideos = async (movieId) => {
  try {
    const response = await tmdb.get(`/movie/${movieId}/videos`);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching movie videos:', error);
    throw error;
  }
};
