import type { Movie } from '../types/movie'

const API_KEY = 'e59a8a89'

export async function searchMovies(query: string): Promise<Movie[]> {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
  )

  const data = await res.json()

  if (data.Response === 'False') return []

  return data.Search ?? []
}

export async function fetchMovieDetails(imdbID: string): Promise<Movie | null> {
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&i=${imdbID}`
  )

  const data = await res.json()

  if (data.Response === 'False') return null

  return data
}
