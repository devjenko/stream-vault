import { useState } from 'react'
import ToggleButton from './ToggleButton'
import MovieCard from './MovieCard'
import type { Movie, SelectedMovie } from '../types/movie'
import type { StateSetter } from '../types/state'

interface ListBoxProps {
  movies: Movie[]
  setOpenWatchedBox: StateSetter<boolean>
  setSelectedMovieCard: StateSetter<SelectedMovie>
}

const ListBox = ({
  movies,
  setOpenWatchedBox,
  setSelectedMovieCard,
}: ListBoxProps) => {
  const [isOpen1, setIsOpen1] = useState(true)
  return (
    <div className="box no-scrollbar">
      <ToggleButton isOpen={isOpen1} setIsOpen={setIsOpen1} />
      {isOpen1 && (
        <ul className="list list-movies no-scrollbar">
          {movies.map((movie) => (
            <MovieCard
              setOpenWatchedBox={setOpenWatchedBox}
              setSelectedMovieCard={setSelectedMovieCard}
              movie={movie}
              key={movie.imdbID}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListBox
