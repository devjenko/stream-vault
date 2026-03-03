import ListBox from './ListBox'
import WatchedBox from './WatchedBox'
import type { Movie } from '../types/movie'
import { useState } from 'react'

const Main = ({ movies }: { movies: Movie[] }) => {
  const [openWatchedBox, setOpenWatchedBox] = useState(false)
  const [selectedMovieCard, setSelectedMovieCard] = useState<Movie | null>(null)
  return (
    <main className="main">
      <ListBox
        setSelectedMovieCard={setSelectedMovieCard}
        setOpenWatchedBox={setOpenWatchedBox}
        movies={movies}
      />
      <WatchedBox
        selectedMovieCard={selectedMovieCard}
        openWatchedBox={openWatchedBox}
      />
    </main>
  )
}

export default Main
