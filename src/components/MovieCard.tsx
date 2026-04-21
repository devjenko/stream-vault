import type { Movie, SelectedMovie } from '../types/movie'
import type { StateSetter } from '../types/state'

interface MovieCardProps {
  setOpenWatchedBox: StateSetter<boolean>
  setSelectedMovieCard: StateSetter<SelectedMovie>
  movie: Movie
}

const MovieCard = ({
  setOpenWatchedBox,
  setSelectedMovieCard,
  movie,
}: MovieCardProps) => {


  const handleClick = () => {
    setOpenWatchedBox(true)
    setSelectedMovieCard(movie)
    
  }



  return (
    <li className="cursor-pointer" onClick={handleClick}>
      <img
        className="rounded-sm"
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : '/icon/stream-vault-icon.png' }
        alt={`${movie.title} poster`}
        width={100}
        height={100}
      />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span className="text-[1.1rem]">&#9733;</span>
          <span>{movie.release_date}</span>
        </p>
      </div>
    </li>
  )
}

export default MovieCard
