import type { Movie } from '../types/movie'

const MovieCardInfo = ({ selectedMovieCard }: { selectedMovieCard: Movie }) => {
  return (
    <div className="flex gap-6 border-b border-white/5">
      <img
        className="rounded-none object-cover"
        width={140}
        height={140}
        src={
          selectedMovieCard.Poster !== 'N/A'
            ? selectedMovieCard.Poster
            : '/icon/stream-vault-icon.png'
        }
        alt={selectedMovieCard.Title}
      />
      <div className="flex flex-col justify-center gap-3 w-full">
        <h1 className="text-[2rem] font-semibold leading-tight -tracking-wide text-white">
          {selectedMovieCard.Title}
        </h1>

        <p className="text-[1.3rem] text-text-muted">
          {selectedMovieCard.Year}
        </p>

        {selectedMovieCard.Actors && (
          <p className="text-[1.2rem] leading-snug text-text-dim">
            {selectedMovieCard.Actors}
          </p>
        )}
        {selectedMovieCard.imdbRating && (
          <span className="flex items-center gap-2 text-[1.2rem] text-accent-light">
            <span className="text-[1.1rem]">&#9733;</span>
            {selectedMovieCard.imdbRating} IMDb
          </span>
        )}
      </div>
    </div>
  )
}

export default MovieCardInfo
