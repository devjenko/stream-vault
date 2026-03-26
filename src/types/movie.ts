export type Movie = {
  imdbID: string
  Title: string
  Year: string
  Poster: string
  Type: string
  imdbRating?: string
  Actors?: string
  Runtime?: string
  rating?: number
}

export type SelectedMovie = Movie | null
