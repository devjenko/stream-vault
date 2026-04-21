import type { Movie } from '../types/movie'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

export async function searchMovies(query: string): Promise<Movie[]> {

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}`,{
      headers: {
    'Authorization': `Bearer ${API_KEY}`
  }}

  )

  const data = await res.json()

  console.log(data)

  if (!data.results) return []

  return data.results 
}

export async function fetchMovieTrailer (movieId:number): Promise<string | null> {

  const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`
      }
    })

    const data = await res.json()

    const trailer = data.results?.find((v: { site: string; type: string; key: string }) => v.site === 'YouTube' && v.type === 'Trailer')

    return trailer?.key ?? null
  

}

