import type { Movie } from '../types/movie'

const MovieCardInfo = ({ selectedMovieCard }: { selectedMovieCard: Movie }) => {

 
  
   const selectedMoviePosterPath = `https://image.tmdb.org/t/p/w500/${selectedMovieCard.poster_path}`

  return (
    <div className="flex gap-6 border-b border-white/5">
      <img
        className="rounded-none object-cover"
        width={140}
        height={140}
        src={
           !selectedMoviePosterPath ? '/icon/stream-vault-icon.png'
            : selectedMoviePosterPath
        }
        alt={selectedMovieCard.title}
      />
      <div className="flex flex-col justify-center gap-3 w-full">
        <h1 className="text-[2rem] font-semibold leading-tight -tracking-wide text-white">
          {selectedMovieCard.title}
        </h1>

        <p className="text-[1.3rem] text-text-muted">
          {selectedMovieCard.release_date}
        </p>

       
          <p className="text-[1.2rem] leading-snug text-text-dim">
            {selectedMovieCard.vote_count} ratings
          </p>

          
       
        {selectedMovieCard.vote_average && (
          <span className="flex items-center gap-2 text-[1.2rem] text-accent-light">
            <span className="text-[1.1rem]">&#9733;</span>
            {selectedMovieCard.vote_average} avg
          </span>
        )}


      

      </div>
    </div>
  )
}

export default MovieCardInfo
