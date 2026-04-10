import type { Movie } from '../types/movie'

export const getAverageImdbRating = (watched: Movie[]) =>
  watched.length > 0
    ? (
        watched.reduce(
          (sum, movie) => sum + (parseFloat(movie.imdbRating ?? '0') || 0),
          0
        ) / watched.length
      ).toFixed(1)
    : '0.0'

export const getAverageUserRating = (watched: Movie[]) =>
  watched.length > 0
    ? (
        watched.reduce((sum, movie) => sum + (movie.rating ?? 0), 0) /
        watched.length
      ).toFixed(1)
    : '0.0'
