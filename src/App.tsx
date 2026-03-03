import { useState } from 'react'
import './index.css'
import Navbar from './components/Navbar'
import type { Movie } from './types/movie'
import Main from './components/Main'

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([])

  return (
    <>
      <Navbar movies={movies} setMovies={setMovies} />
      <Main movies={movies} />
    </>
  )
}
