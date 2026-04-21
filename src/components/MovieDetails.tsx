import type { Movie } from '../types/movie'

interface MovieDetailsProps {
  selectedMovieCard: Movie
  trailerKey:string | null
}

const MovieDetails = ({
  selectedMovieCard,
  trailerKey,
}: MovieDetailsProps) => {

  
  return (
    <>
      <p className="text-xl mt-6! px-4! pt-2!">
        {selectedMovieCard.overview}
      </p>

      <div className="text-xl text-green-400 mt-6! px-4! ">

       

     {trailerKey ? (
      <div className="pt-2!" >  <iframe className="w-full h-80"
    src={`https://www.youtube.com/embed/${trailerKey}`}
    allowFullScreen
  /></div>

) : <a 
          target="_blank"
          href={`https://www.youtube.com/results?search_query=${selectedMovieCard.title} Trailer`}
        >
          Search for Trailer on YouTube
        </a> }


      </div>
    </>
  )
}

export default MovieDetails
