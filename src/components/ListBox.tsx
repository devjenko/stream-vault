import { useState, type SetStateAction } from 'react'
import ToggleButton from './ToggleButton'
import MovieCard from './MovieCard'
import type { movie } from '../types/movie'

interface ListBoxProps {
  movies: movie[]
  setOpenWatchedBox: React.Dispatch<SetStateAction<boolean>>
  setSelectedMovieCard: React.Dispatch<SetStateAction<string>>
}

const ListBox = ({
  movies,
  setOpenWatchedBox,
  setSelectedMovieCard,
}: ListBoxProps) => {
  const [isOpen1, setIsOpen1] = useState(true)
  return (
    <div className="box no-scrollbar">
      {' '}
      <ToggleButton isOpen={isOpen1} setIsOpen={setIsOpen1} />
      {isOpen1 && (
        <ul className="list no-scrollbar">
          {movies.map((movie) => (
            <MovieCard
              setOpenWatchedBox={setOpenWatchedBox}
              setSelectedMovieCard={setSelectedMovieCard}
              movie={movie}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default ListBox
