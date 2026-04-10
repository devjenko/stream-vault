import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import type { Movie } from './types/movie'
import Main from './components/Main'
import SearchInput from './components/SearchInput'
import SearchResults from './components/SearchResults'

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([])

  return (
    <>
      <Navbar>
        <SearchInput placeholder="Search movies..." setMovies={setMovies} />
      <SearchResults results={movies.length} />
      </Navbar>
      <Main movies={movies} />
    </>
  )
}
